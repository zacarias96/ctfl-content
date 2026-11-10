// Exam mode: 40 timed questions, graded only at the end.
import { describe, expect, it, vi } from 'vitest';
import { EXAM } from '../../src/scripts/mock-exams.js';
import { choose, click, readStore, setForm, setup, text } from './helpers.js';

const startExam = (values = {}) => {
  const root = setup();
  setForm(root, values);
  click(root, '[data-act="start-exam"]');
  return root;
};

// Answers question by question: `pick(i)` returns the keys for question i (or null to skip).
function answerExam(root, pick) {
  for (let i = 0; i < 40; i++) {
    const keys = pick(i);
    if (keys) choose(root, ...keys);
    const next = root.querySelector('[data-act="next"]');
    if (!next.disabled) next.click();
  }
}

const right = (i) => (i === 4 ? ['a', 'e'] : ['a']);

// Timer, navigation and flags during the exam.
describe('exam flow', () => {
  it('starts with 60 minutes, or 75 with extended time', () => {
    vi.useFakeTimers();
    expect(text(startExam().querySelector('[data-timer]'))).toBe('60:00');
    document.body.innerHTML = '';
    expect(text(startExam({ extended: true }).querySelector('[data-timer]'))).toBe('75:00');
  });

  it('hides the LO and K-level of each question', () => {
    const root = startExam();
    expect(root.querySelector('.sim-badge-k')).toBeNull();
  });

  it('jumps to a question from the palette and keeps the flag', () => {
    const root = startExam();
    click(root, '[data-goto="9"]');
    expect(text(root.querySelector('.sim-badge'))).toBe('Questão 10 de 40');
    click(root, '[data-act="flag"]');
    expect(root.querySelector('[data-goto="9"]').classList.contains('is-flagged')).toBe(true);
    expect(readStore().session.flags['A:10']).toBe(true);
  });

  it('counts answered questions in the bar', () => {
    const root = startExam();
    choose(root, 'b');
    expect(text(root.querySelector('.sim-bar'))).toContain('1/40 respondidas');
  });

  it('asks before finishing with blank questions', () => {
    const root = startExam();
    window.confirm.mockReturnValue(false);
    click(root, '[data-act="finish"]');
    expect(window.confirm).toHaveBeenCalledWith(expect.stringContaining('40 questão(ões) em branco'));
    expect(root.querySelector('.sim-score')).toBeNull();
  });
});

// Grading at the end.
describe('exam results', () => {
  it(`passes with ${EXAM.passMark} right answers`, () => {
    const root = startExam();
    answerExam(root, (i) => (i < EXAM.passMark ? right(i) : ['b']));
    click(root, '[data-act="finish"]');
    expect(text(root.querySelector('.sim-score-big'))).toBe(`${EXAM.passMark}/40`);
    expect(text(root.querySelector('.sim-score'))).toContain('Aprovado');
  });

  it(`fails with ${EXAM.passMark - 1} right answers`, () => {
    const root = startExam();
    answerExam(root, (i) => (i < EXAM.passMark - 1 ? right(i) : null));
    click(root, '[data-act="finish"]');
    expect(text(root.querySelector('.sim-score'))).toContain('Reprovado');
    expect(text(root.querySelector('.sim-score'))).toContain('15 em branco');
  });

  it('needs both keys right on "select TWO" questions', () => {
    const root = startExam();
    answerExam(root, (i) => (i === 4 ? ['a', 'b'] : ['a']));
    click(root, '[data-act="finish"]');
    expect(text(root.querySelector('.sim-score-big'))).toBe('39/40');
  });

  it('filters the review to wrong and blank questions', () => {
    const root = startExam();
    answerExam(root, (i) => (i < 30 ? right(i) : null));
    click(root, '[data-act="finish"]');
    const bad = root.querySelector('input[name="filter"][value="bad"]');
    bad.checked = true;
    bad.dispatchEvent(new Event('change'));
    const visible = [...root.querySelectorAll('.sim-review-item')].filter((li) => !li.hidden);
    expect(visible).toHaveLength(10);
  });

  it('finishes by itself when the time runs out', () => {
    vi.useFakeTimers();
    const root = startExam();
    choose(root, 'a');
    vi.advanceTimersByTime(EXAM.minutes * 60_000);
    expect(text(root.querySelector('.sim-score'))).toContain('tempo esgotado');
  });

  it('saves the attempt with its answers to the history', () => {
    const root = startExam({ exam: 'B' });
    answerExam(root, (i) => (i === 0 ? ['a'] : null));
    click(root, '[data-act="finish"]');
    const [entry] = readStore().history;
    expect(entry).toMatchObject({ kind: 'exam', examId: 'B', score: 1, total: 40, minutes: 60, timeUp: false });
    expect(entry.answers['B:1']).toEqual(['a']);
    expect(entry.order).toHaveLength(40);
  });

  it('keeps only the last 30 attempts', () => {
    const old = Array.from({ length: 30 }, (_, i) => ({ date: i, title: 'Simulado A', score: 1, total: 40, time: 1 }));
    const root = setup({ history: old });
    click(root, '[data-act="start-exam"]');
    click(root, '[data-act="finish"]');
    const { history } = readStore();
    expect(history).toHaveLength(30);
    expect(history[0].date).toBe(1);
    expect(history.at(-1).kind).toBe('exam');
  });
});
