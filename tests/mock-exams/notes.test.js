// Review links: each learning objective points to the note that covers it.
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  CHAPTERS,
  NOTES,
  chapterLink,
  noteOf,
} from "../../src/scripts/mock-exams.js";

// Paths from the repository root (vitest runs there); jsdom replaces the URL global.
const noteFile = (slug) => join(process.cwd(), "notes", `${slug}.md`);

// Prefix matching between LO codes and notes.
describe("noteOf", () => {
  it("prefers the most specific prefix", () => {
    expect(noteOf({ lo: "FL-1.4.1" })[1]).toBe(
      "01-fundamentos-de-teste/04-processo-de-teste",
    );
    expect(noteOf({ lo: "FL-1.4.3" })[1]).toBe(
      "01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis",
    );
  });

  it("does not match a prefix that is only a string prefix", () => {
    // "2.1" must not catch "2.11.1", only "2.1.x".
    expect(noteOf({ lo: "FL-2.11.1" })).toBeNull();
  });

  it("matches the whole chapter 6 with a one-level prefix", () => {
    expect(noteOf({ lo: "FL-6.2.1" })[1]).toBe(
      "06-ferramentas-de-teste/01-ferramentas-e-automacao",
    );
  });

  it("returns null without an LO", () => {
    expect(noteOf({})).toBeNull();
  });
});

// The maps must point to notes that exist, or the links break after a rename.
describe("NOTES and CHAPTERS", () => {
  it.each(NOTES.map(([prefix, slug]) => [prefix, slug]))(
    "note for %s exists: %s",
    (_, slug) => {
      expect(existsSync(noteFile(slug))).toBe(true);
    },
  );

  it.each(Object.entries(CHAPTERS).map(([n, c]) => [n, c.slug]))(
    "first note of chapter %s exists: %s",
    (_, slug) => {
      expect(existsSync(noteFile(slug))).toBe(true);
    },
  );
});

// Link HTML shown under each explanation.
describe("chapterLink", () => {
  it("links to the note with the base path", () => {
    expect(chapterLink({ lo: "FL-4.2.2" }, "/ctfl-content/")).toBe(
      '<a href="/ctfl-content/04-analise-e-modelagem-de-teste/03-analise-de-valor-limite/">Revisar: Análise de valor limite</a>',
    );
  });

  it("falls back to the chapter when no note matches", () => {
    expect(chapterLink({ lo: "FL-3.9.9" }, "/")).toBe(
      '<a href="/03-teste-estatico/01-nocoes-basicas-de-teste-estatico/">Revisar cap. 3: Teste Estático</a>',
    );
  });

  it("returns an empty string for an unknown chapter", () => {
    expect(chapterLink({ lo: "FL-9.1.1" }, "/")).toBe("");
    expect(chapterLink({}, "/")).toBe("");
  });
});
