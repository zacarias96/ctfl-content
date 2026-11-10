// localStorage persistence: the page must keep working when storage fails.
import { describe, expect, it, vi } from 'vitest';
import { LEGACY_STORE_KEY, STORE_KEY, loadStore, saveStore } from '../../src/scripts/mock-exams.js';

// Reading the saved progress.
describe('loadStore', () => {
  it('returns the saved object', () => {
    localStorage.setItem(STORE_KEY, JSON.stringify({ history: [{ score: 30 }] }));
    expect(loadStore()).toEqual({ history: [{ score: 30 }] });
  });

  it('returns an empty object when nothing was saved', () => {
    expect(loadStore()).toEqual({});
  });

  it('returns an empty object when the saved value is not valid JSON', () => {
    localStorage.setItem(STORE_KEY, '{broken');
    expect(loadStore()).toEqual({});
  });

  it('returns an empty object when storage throws (private mode, blocked cookies)', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(loadStore()).toEqual({});
  });
});

// Migration from the key used before the files were renamed.
describe('loadStore legacy key', () => {
  it('moves the old key to the new one', () => {
    localStorage.setItem(LEGACY_STORE_KEY, JSON.stringify({ history: [{ score: 20 }] }));
    expect(loadStore()).toEqual({ history: [{ score: 20 }] });
    expect(localStorage.getItem(LEGACY_STORE_KEY)).toBeNull();
    expect(JSON.parse(localStorage.getItem(STORE_KEY))).toEqual({ history: [{ score: 20 }] });
  });

  it('keeps the new key when both exist and drops the old one', () => {
    localStorage.setItem(STORE_KEY, JSON.stringify({ history: [{ score: 35 }] }));
    localStorage.setItem(LEGACY_STORE_KEY, JSON.stringify({ history: [{ score: 10 }] }));
    expect(loadStore()).toEqual({ history: [{ score: 35 }] });
    expect(localStorage.getItem(LEGACY_STORE_KEY)).toBeNull();
  });
});

// Writing the progress.
describe('saveStore', () => {
  it('writes JSON under the store key', () => {
    saveStore({ session: null, history: [] });
    expect(JSON.parse(localStorage.getItem(STORE_KEY))).toEqual({ session: null, history: [] });
  });

  it('does not throw when storage is full or blocked', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    expect(() => saveStore({ a: 1 })).not.toThrow();
  });
});
