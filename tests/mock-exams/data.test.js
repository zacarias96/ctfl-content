// Shape of src/data/mock-exams.json, the questions shown on the page.
import { describe, expect, it } from 'vitest';
import data from '../../src/data/mock-exams.json';
import { CHAPTERS, chapterOf, noteOf } from '../../src/scripts/mock-exams.js';

const BLOCK_KEYS = ['p', 'li', 'quote', 'pre', 'img', 'table'];
const isBlock = (b) => typeof b === 'string' || BLOCK_KEYS.some((k) => k in b);
const allQuestions = data.exams.flatMap((e) => [...e.questions, ...e.extra].map((q) => [`${e.id}:${q.id}`, q]));

// Exams A to D, each with 40 questions in the official chapter split.
describe('exams', () => {
  it('has sample exams A, B, C and D', () => {
    expect(data.exams.map((e) => e.id)).toEqual(['A', 'B', 'C', 'D']);
  });

  it.each(data.exams.map((e) => [e.id, e]))('exam %s has 40 questions split 8/6/4/11/9/2 by chapter', (_, exam) => {
    expect(exam.questions).toHaveLength(40);
    const perChapter = [1, 2, 3, 4, 5, 6].map((ch) => exam.questions.filter((q) => chapterOf(q) === ch).length);
    expect(perChapter).toEqual([8, 6, 4, 11, 9, 2]);
  });

  it('uses unique question ids inside each exam', () => {
    for (const e of data.exams) {
      const ids = [...e.questions, ...e.extra].map((q) => q.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('starts extra question ids with "A", which marks them as extra in the labels', () => {
    for (const e of data.exams) for (const q of e.extra) expect(q.id).toMatch(/^A\d+$/);
  });
});

// Every question must be answerable and linkable to a note.
describe.each(allQuestions)('question %s', (_, q) => {
  it('has a valid LO, K-level and chapter', () => {
    expect(q.lo).toMatch(/^FL-[1-6]\.\d+\.\d+$/);
    expect(q.k).toMatch(/^K[1-3]$/);
    expect(CHAPTERS[chapterOf(q)]).toBeDefined();
  });

  it('has a note for its LO', () => {
    expect(noteOf(q)).not.toBeNull();
  });

  it('has one or two answers, all among its options', () => {
    const keys = q.options.map((o) => o.key);
    expect([1, 2]).toContain(q.answer.length);
    for (const a of q.answer) expect(keys).toContain(a);
  });

  it('has stem and explanation in known block formats', () => {
    expect(q.stem.length).toBeGreaterThan(0);
    expect(q.stem.every(isBlock)).toBe(true);
    expect(q.explanation.every(isBlock)).toBe(true);
  });

  it('marks as "Correta" exactly the options in the answer key', () => {
    const verdicts = q.explanation
      .filter((line) => typeof line === 'string')
      .map((line) => /^([a-e])\) (Correta|Incorreta)\./.exec(line))
      .filter(Boolean);
    const correct = verdicts.filter((m) => m[2] === 'Correta').map((m) => m[1]);
    if (verdicts.length) expect(correct.sort()).toEqual([...q.answer].sort());
  });
});
