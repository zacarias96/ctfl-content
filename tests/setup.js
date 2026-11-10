// Browser APIs that jsdom does not implement but the app calls.
import { afterEach, beforeEach, vi } from 'vitest';

if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};

if (typeof HTMLDialogElement !== 'undefined' && !HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function close() {
    this.open = false;
  };
}

beforeEach(() => {
  localStorage.clear();
  document.body.innerHTML = '';
  vi.spyOn(window, 'confirm').mockReturnValue(true);
  vi.spyOn(window, 'alert').mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
});
