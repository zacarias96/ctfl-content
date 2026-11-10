// Shared fixtures for the mock exam tests: a small, predictable data set and
// helpers to mount the app and drive it like a user would.
import { mount, STORE_KEY } from "../../src/scripts/mock-exams.js";

// LOs spread over the six chapters in the official proportion (8, 6, 4, 11, 9, 2).
const CHAPTER_SIZES = [8, 6, 4, 11, 9, 2];

function makeQuestion(id, chapter, n) {
  return {
    id: String(id),
    lo: `FL-${chapter}.1.${n}`,
    k: "K2",
    stem: [{ p: `Pergunta ${id}` }],
    options: ["a", "b", "c", "d"].map((key) => ({ key, text: `Opção ${key}` })),
    answer: ["a"],
    explanation: ["a) Correta. Motivo.", "b) Incorreta. Motivo."],
  };
}

function makeExam(examId, withExtra) {
  const questions = [];
  let id = 1;
  CHAPTER_SIZES.forEach((size, i) => {
    for (let n = 1; n <= size; n++)
      questions.push(makeQuestion(id++, i + 1, n));
  });
  // Question 5 asks for TWO options.
  questions[4] = {
    ...questions[4],
    options: [...questions[4].options, { key: "e", text: "Opção e" }],
    answer: ["a", "e"],
  };
  const extra = withExtra
    ? [
        { ...makeQuestion("A1", 1, 1), id: "A1" },
        { ...makeQuestion("A2", 6, 1), id: "A2" },
      ]
    : [];
  return {
    id: examId,
    title: `Simulado ${examId}`,
    version: "test",
    questions,
    extra,
  };
}

export const data = { exams: [makeExam("A", true), makeExam("B", false)] };

export function setup(store) {
  if (store) localStorage.setItem(STORE_KEY, JSON.stringify(store));
  const root = document.createElement("div");
  root.id = "mock-exam-app";
  document.body.append(root);
  mount(root, data, { base: "/base/" });
  return root;
}

export const readStore = () =>
  JSON.parse(localStorage.getItem(STORE_KEY) || "{}");

export const click = (root, selector) => {
  const el = root.querySelector(selector);
  if (!el) throw new Error(`element not found: ${selector}`);
  el.click();
  return el;
};

// Selects options in the question on screen, the same way a click would.
export function choose(root, ...keys) {
  for (const key of keys) {
    const input = root.querySelector(`.sim-options input[value="${key}"]`);
    input.checked = true;
    input.dispatchEvent(new Event("change"));
  }
}

export function setForm(root, values) {
  const form = root.querySelector("form");
  for (const [name, value] of Object.entries(values)) {
    const field = form.elements[name];
    if (field instanceof RadioNodeList) field.value = value;
    else if (field.type === "checkbox") {
      if (field.checked !== value) field.click();
    } else field.value = value;
  }
}

// Answers every practice question with the given key and grades it.
export function answerAllPractice(root, key = "a") {
  while (root.querySelector('[data-act="check"]')) {
    const multi =
      root.querySelectorAll('.sim-options input[type="checkbox"]').length > 0;
    // "Select TWO" questions need two keys: the right pair for "a", a wrong pair otherwise.
    choose(root, ...(multi ? (key === "a" ? ["a", "e"] : ["b", "c"]) : [key]));
    click(root, '[data-act="check"]');
    click(root, '[data-act="next"]');
  }
}

export const text = (el) => el.textContent.replace(/\s+/g, " ").trim();
