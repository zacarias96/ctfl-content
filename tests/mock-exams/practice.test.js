// Practice mode: one question at a time, with the optional timer.
import { describe, expect, it, vi } from 'vitest';
import { EXAM, PRACTICE_MS_PER_Q } from '../../src/scripts/mock-exams.js';
import { answerAllPractice, choose, click, readStore, setForm, setup, text } from './helpers.js';

const startPractice = (values = {}) => {
  const root = setup();
  setForm(root, values);
  click(root, '[data-act="start-practice"]');
  return root;
};

// Grading one question at a time.
describe('practice flow', () => {
  it('grades the answer and shows the explanation', () => {
    const root = startPractice();
    expect(root.querySelector('[data-act="check"]').disabled).toBe(true);
    choose(root, 'a');
    click(root, '[data-act="check"]');
    expect(text(root.querySelector('.sim-verdict'))).toBe('✓ Você acertou!');
    expect(root.querySelector('.sim-review-link a').getAttribute('href')).toMatch(/^\/base\/01-fundamentos-de-teste\//);
  });

  it('shows the right answer after a wrong one', () => {
    const root = startPractice();
    choose(root, 'b');
    click(root, '[data-act="check"]');
    expect(text(root.querySelector('.sim-verdict'))).toContain('A correta é a');
  });

  it('needs two options on "select TWO" questions', () => {
    const root = startPractice({ chapter: '1' });
    for (let i = 0; i < 4; i++) {
      choose(root, 'a');
      click(root, '[data-act="check"]');
      click(root, '[data-act="next"]');
    }
    choose(root, 'a');
    expect(root.querySelector('[data-act="check"]').disabled).toBe(true);
    choose(root, 'e');
    expect(root.querySelector('[data-act="check"]').disabled).toBe(false);
  });

  it('filters by chapter and includes extra questions when asked', () => {
    const root = startPractice({ chapter: '6', extra: true });
    expect(readStore().session.order).toEqual(['A:39', 'A:40', 'A:A2']);
    expect(text(root.querySelector('.sim-bar'))).toContain('questão 1 de 3');
  });

  it('ends with a summary and offers to redo the wrong ones', () => {
    const root = startPractice({ chapter: '6' });
    choose(root, 'a');
    click(root, '[data-act="check"]');
    click(root, '[data-act="next"]');
    choose(root, 'b');
    click(root, '[data-act="check"]');
    click(root, '[data-act="next"]');
    expect(text(root.querySelector('.sim-score-big'))).toBe('1/2');
    click(root, '[data-act="redo-wrong"]');
    expect(readStore().session.order).toEqual(['A:40']);
  });

  it('does not save untimed practice to the history', () => {
    const root = startPractice({ chapter: '6' });
    answerAllPractice(root);
    expect(readStore().history).toBeUndefined();
  });
});

// Timed practice: limit, countdown, time-up dialog and overtime.
describe('timed practice', () => {
  it('enables the extended-time option only when the timer is on', () => {
    const root = setup();
    const ext = root.querySelector('input[name="practiceExtended"]');
    expect(ext.disabled).toBe(true);
    setForm(root, { timed: true });
    expect(ext.disabled).toBe(false);
    setForm(root, { practiceExtended: true, timed: false });
    expect(ext.disabled).toBe(true);
    expect(ext.checked).toBe(false);
  });

  it('gives 1.5 minutes per question', () => {
    startPractice({ chapter: '3', timed: true });
    expect(readStore().session.limitMs).toBe(4 * PRACTICE_MS_PER_Q);
    expect(PRACTICE_MS_PER_Q).toBe(90_000);
  });

  it('adds 25% with extended time', () => {
    startPractice({ chapter: '6', timed: true, practiceExtended: true });
    expect(readStore().session.limitMs).toBe(2 * 90_000 * (1 + EXAM.extraPct / 100));
  });

  it('counts down in the top bar', () => {
    vi.useFakeTimers();
    const root = startPractice({ chapter: '6', timed: true });
    expect(text(root.querySelector('[data-timer]'))).toBe('03:00');
    vi.advanceTimersByTime(61_000);
    expect(text(root.querySelector('[data-timer]'))).toBe('01:59');
  });

  it('opens the dialog when the time runs out', () => {
    vi.useFakeTimers();
    const root = startPractice({ chapter: '6', timed: true });
    vi.advanceTimersByTime(180_000);
    const dialog = root.querySelector('.sim-dialog');
    expect(dialog.open).toBe(true);
    expect(text(dialog)).toContain('respondeu 0 de 2');
  });

  it('keeps counting overtime apart after "continue"', () => {
    vi.useFakeTimers();
    const root = startPractice({ chapter: '6', timed: true });
    vi.advanceTimersByTime(180_000);
    click(root, '[data-act="overtime"]');
    vi.advanceTimersByTime(65_000);
    expect(text(root.querySelector('[data-timer]'))).toBe('00:00');
    expect(text(root.querySelector('[data-over]'))).toBe('+ 01:05');
    expect(root.querySelector('.sim-dialog')).toBeNull();
  });

  it('saves the overtime apart in the summary and the history', () => {
    vi.useFakeTimers();
    const root = startPractice({ chapter: '6', timed: true });
    vi.advanceTimersByTime(180_000);
    click(root, '[data-act="overtime"]');
    vi.advanceTimersByTime(30_000);
    answerAllPractice(root);
    expect(text(root.querySelector('.sim-score'))).toContain('tempo 03:00 + 00:30');
    const [entry] = readStore().history;
    expect(entry).toMatchObject({ kind: 'practice', score: 2, total: 2, limit: 180_000, over: 30_000 });
  });

  it('counts unanswered questions as blank after "stop"', () => {
    vi.useFakeTimers();
    const root = startPractice({ chapter: '6', timed: true });
    choose(root, 'a');
    click(root, '[data-act="check"]');
    click(root, '[data-act="next"]');
    choose(root, 'a'); // selected but never graded
    vi.advanceTimersByTime(180_000);
    click(root, '[data-act="stop"]');
    expect(text(root.querySelector('.sim-score'))).toContain('1 não respondidas');
    expect(text(root.querySelector('.sim-score'))).toContain('encerrado no fim do tempo');
    const [entry] = readStore().history;
    expect(entry).toMatchObject({ score: 1, over: 0, timeUp: true });
    expect(Object.keys(entry.answers)).toEqual(['A:39']);
  });

  it('asks again when a session is resumed after the deadline', () => {
    vi.useFakeTimers();
    startPractice({ chapter: '6', timed: true });
    vi.advanceTimersByTime(10_000);
    document.body.innerHTML = '';
    vi.advanceTimersByTime(200_000);
    const root = setup();
    click(root, '[data-act="resume"]');
    expect(root.querySelector('.sim-dialog').open).toBe(true);
  });

  it('ignores answer shortcuts while the dialog is open', () => {
    vi.useFakeTimers();
    const root = startPractice({ chapter: '6', timed: true });
    vi.advanceTimersByTime(180_000);
    // In a browser the target is the focused element; the event bubbles to document.
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', bubbles: true }));
    expect(root.querySelector('.sim-options input[value="a"]').checked).toBe(false);
  });
});
