// Home screen history and the read-only review of past attempts.
import { describe, expect, it } from 'vitest';
import { choose, click, readStore, setup, text } from './helpers.js';

const order = Array.from({ length: 40 }, (_, i) => `A:${i + 1}`);

const examEntry = (over = {}) => ({
  kind: 'exam',
  date: Date.UTC(2026, 10, 10, 15, 30),
  title: 'Simulado A',
  score: 2,
  total: 40,
  time: 50 * 60_000,
  examId: 'A',
  order,
  answers: { 'A:1': ['a'], 'A:2': ['a'], 'A:3': ['b'] },
  flags: { 'A:3': true },
  minutes: 60,
  timeUp: false,
  ...over,
});

const practiceEntry = {
  kind: 'practice',
  date: Date.UTC(2026, 10, 10, 16, 0),
  title: 'Simulado A',
  score: 1,
  total: 2,
  time: 230_000,
  limit: 180_000,
  over: 50_000,
  examId: 'A',
  order: ['A:39', 'A:40'],
  answers: { 'A:39': ['a'] },
  flags: {},
  minutes: null,
  timeUp: false,
};

const rows = (root) => [...root.querySelectorAll('.sim-history tbody tr')];

// History table on the home screen.
describe('history table', () => {
  it('is hidden when there is no attempt', () => {
    expect(setup().querySelector('.sim-history')).toBeNull();
  });

  it('lists the newest attempt first', () => {
    const root = setup({ history: [examEntry({ score: 10 }), examEntry({ score: 30 })] });
    expect(rows(root).map((tr) => text(tr.querySelector('[data-label="Acertos"]')))).toEqual(['30/40', '10/40']);
  });

  it('shows pass or fail for exams', () => {
    const root = setup({ history: [examEntry({ score: 26 }), examEntry({ score: 25 })] });
    expect(rows(root).map((tr) => text(tr.querySelector('[data-label="Resultado"]')))).toEqual(['Reprovado', 'Aprovado']);
  });

  it('marks timed practice and shows its time with overtime', () => {
    const root = setup({ history: [practiceEntry] });
    const [tr] = rows(root);
    expect(text(tr.querySelector('[data-label="Simulado"]'))).toBe('Simulado A Treino');
    expect(text(tr.querySelector('[data-label="Tempo"]'))).toBe('03:00 + 00:50');
    expect(text(tr.querySelector('[data-label="Resultado"]'))).toBe('50%');
  });

  it('shows "Sem respostas" for attempts saved without answers', () => {
    const root = setup({ history: [{ date: 1, title: 'Simulado B', score: 27, total: 40, time: 2_400_000 }] });
    expect(rows(root)[0].querySelector('[data-hist]')).toBeNull();
    expect(text(rows(root)[0])).toContain('Sem respostas');
  });

  it('shows "Sem respostas" when a question no longer exists in the data', () => {
    const root = setup({ history: [examEntry({ order: [...order.slice(1), 'A:999'] })] });
    expect(rows(root)[0].querySelector('[data-hist]')).toBeNull();
  });

  it('shows 8 rows and the rest on demand', () => {
    const root = setup({ history: Array.from({ length: 10 }, () => examEntry()) });
    expect(rows(root).filter((tr) => !tr.hidden)).toHaveLength(8);
    click(root, '[data-act="history-all"]');
    expect(rows(root).filter((tr) => !tr.hidden)).toHaveLength(10);
    expect(root.querySelector('[data-act="history-all"]')).toBeNull();
  });
});

// Reopening the review of a past attempt.
describe('history review', () => {
  it('shows the answers, the right keys and the flags of an exam', () => {
    const root = setup({ history: [examEntry()] });
    click(root, '[data-hist="0"]');
    expect(text(root.querySelector('.sim-bar'))).toContain('Histórico · Simulado A');
    expect(text(root.querySelector('.sim-score-big'))).toBe('2/40');
    const items = root.querySelectorAll('.sim-review-item');
    expect(items).toHaveLength(40);
    expect(text(items[2].querySelector('.sim-review-ans'))).toBe('sua: b · correta: a');
    expect(items[2].dataset.flag).toBe('1');
    expect(text(items[3].querySelector('.sim-pill'))).toBe('○ Em branco');
  });

  it('shows the practice time split and "não respondida"', () => {
    const root = setup({ history: [practiceEntry] });
    click(root, '[data-hist="0"]');
    expect(text(root.querySelector('.sim-score'))).toContain('tempo 03:00 + 00:50 (tempo do treino + tempo extra)');
    expect(text(root.querySelectorAll('.sim-review-item')[1].querySelector('.sim-pill'))).toBe('○ Não respondida');
    expect(root.querySelector('input[name="filter"][value="flag"]')).toBeNull();
  });

  it('keeps the session in progress when going back', () => {
    const root = setup({ history: [examEntry()] });
    click(root, '[data-act="start-practice"]');
    choose(root, 'a');
    click(root, '[data-act="home"]');
    click(root, '[data-hist="0"]');
    click(root, '.sim-bar [data-act="home"]');
    expect(readStore().session.finished).toBe(false);
    expect(root.querySelector('[data-act="resume"]')).not.toBeNull();
  });

  it('asks before replacing a session in progress', () => {
    const root = setup({ history: [examEntry()] });
    click(root, '[data-act="start-practice"]');
    click(root, '[data-act="home"]');
    click(root, '[data-hist="0"]');
    window.confirm.mockReturnValue(false);
    click(root, '[data-act="again"]');
    expect(window.confirm).toHaveBeenCalled();
    expect(readStore().session.mode).toBe('practice');
  });

  it('restarts a timed practice with the same questions and limit', () => {
    const root = setup({ history: [practiceEntry] });
    click(root, '[data-hist="0"]');
    click(root, '[data-act="again"]');
    const { session } = readStore();
    expect(session).toMatchObject({ mode: 'practice', order: ['A:39', 'A:40'], limitMs: 180_000, timed: true });
  });
});
