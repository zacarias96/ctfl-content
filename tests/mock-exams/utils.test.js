// Pure helpers: escaping, formatting, comparison and shuffling.
import { describe, expect, it } from "vitest";
import {
  chapterOf,
  esc,
  fmtTime,
  fmtUsed,
  inline,
  sameSet,
  shuffle,
} from "../../src/scripts/mock-exams.js";

// HTML escaping, used for every text that goes into innerHTML.
describe("esc", () => {
  it("escapes the five HTML special characters", () => {
    expect(esc(`<a href="x">'&'</a>`)).toBe(
      "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;",
    );
  });

  it("converts non-strings to text", () => {
    expect(esc(42)).toBe("42");
    expect(esc(null)).toBe("null");
  });

  it("returns an empty string unchanged", () => {
    expect(esc("")).toBe("");
  });
});

// **bold** markup inside question text.
describe("inline", () => {
  it("turns **text** into <strong>", () => {
    expect(inline("a **NÃO** b")).toBe("a <strong>NÃO</strong> b");
  });

  it("escapes HTML before applying bold", () => {
    expect(inline("**<b>**")).toBe("<strong>&lt;b&gt;</strong>");
  });

  it("leaves a lone pair of asterisks alone", () => {
    expect(inline("2 ** 3")).toBe("2 ** 3");
  });
});

// Timer text in mm:ss.
describe("fmtTime", () => {
  it("formats minutes and seconds with two digits", () => {
    expect(fmtTime(65_000)).toBe("01:05");
  });

  it("lets minutes go past 60 for extended time", () => {
    expect(fmtTime(75 * 60_000)).toBe("75:00");
  });

  it("rounds to the nearest second", () => {
    expect(fmtTime(1_499)).toBe("00:01");
    expect(fmtTime(1_500)).toBe("00:02");
  });

  it("never shows negative time", () => {
    expect(fmtTime(-5_000)).toBe("00:00");
  });
});

// Time used, with overtime shown apart.
describe("fmtUsed", () => {
  it("shows only the time used when there is no overtime", () => {
    expect(fmtUsed({ time: 30 * 60_000, limit: 60 * 60_000, over: 0 })).toBe(
      "30:00",
    );
  });

  it("shows the limit plus the overtime", () => {
    expect(
      fmtUsed({
        time: 72 * 60_000,
        limit: 60 * 60_000,
        over: 12 * 60_000 + 34_000,
      }),
    ).toBe("60:00 + 12:34");
  });

  it("treats a missing overtime as none (older history entries)", () => {
    expect(fmtUsed({ time: 2_400_000 })).toBe("40:00");
  });
});

// Answer comparison, order-independent (for "select TWO" questions).
describe("sameSet", () => {
  it("matches the same keys in any order", () => {
    expect(sameSet(["e", "a"], ["a", "e"])).toBe(true);
  });

  it("fails when one key is missing or extra", () => {
    expect(sameSet(["a"], ["a", "e"])).toBe(false);
    expect(sameSet(["a", "b", "e"], ["a", "e"])).toBe(false);
  });

  it("treats undefined as no answer", () => {
    expect(sameSet(undefined, ["a"])).toBe(false);
    expect(sameSet(undefined, undefined)).toBe(true);
  });
});

// Shuffle used by the "Embaralhar" option.
describe("shuffle", () => {
  it("keeps every item and does not change the original array", () => {
    const items = [1, 2, 3, 4, 5, 6];
    const out = shuffle(items);
    expect(out).not.toBe(items);
    expect(items).toEqual([1, 2, 3, 4, 5, 6]);
    expect([...out].sort()).toEqual(items);
  });

  it("handles empty and single-item arrays", () => {
    expect(shuffle([])).toEqual([]);
    expect(shuffle(["x"])).toEqual(["x"]);
  });
});

// Chapter number from the learning objective code.
describe("chapterOf", () => {
  it("reads the chapter from FL-x.y.z", () => {
    expect(chapterOf({ lo: "FL-4.2.1" })).toBe(4);
  });

  it("returns 0 when there is no LO", () => {
    expect(chapterOf({})).toBe(0);
    expect(chapterOf({ lo: "" })).toBe(0);
  });
});
