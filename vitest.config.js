import { defineConfig } from 'vitest/config';

// Unit tests for the mock exam app (src/scripts/mock-exams.js).
// jsdom stands in for the browser so the screens can be rendered and clicked.
export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.js'],
    setupFiles: ['tests/setup.js'],
    restoreMocks: true,
  },
});
