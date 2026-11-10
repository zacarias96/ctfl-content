// HTML builders for question stems, explanations, badges and options.
import { describe, expect, it } from 'vitest';
import { metaBadges, optionsHtml, renderBlocks, renderExplLine } from '../../src/scripts/mock-exams.js';

const q = {
  lo: 'FL-4.2.1',
  k: 'K3',
  options: [
    { key: 'a', text: 'Um' },
    { key: 'b', text: 'Dois' },
    { key: 'c', text: 'Três' },
  ],
  answer: ['b'],
};

const toDom = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div;
};

// Stem and explanation blocks.
describe('renderBlocks', () => {
  it('renders paragraphs with bold markup', () => {
    expect(renderBlocks([{ p: 'Qual **NÃO** é?' }], '/img/')).toBe('<p>Qual <strong>NÃO</strong> é?</p>');
  });

  it('groups consecutive list items into one list', () => {
    const html = renderBlocks([{ li: 'i' }, { li: 'ii' }, { p: 'fim' }], '/');
    expect(html).toBe('<ul class="sim-list"><li>i</li><li>ii</li></ul><p>fim</p>');
  });

  it('closes a list that ends the content', () => {
    expect(renderBlocks([{ li: 'só' }], '/')).toBe('<ul class="sim-list"><li>só</li></ul>');
  });

  it('renders quotes, preformatted text and images', () => {
    const dom = toDom(
      renderBlocks([{ quote: ['l1', 'l2'] }, { pre: 'if (x < 1)' }, { img: 'q1.png', alt: 'Diagrama' }], '/base/mock-exams/')
    );
    expect(dom.querySelector('blockquote').innerHTML).toBe('l1<br>l2');
    expect(dom.querySelector('pre').textContent).toBe('if (x < 1)');
    expect(dom.querySelector('img').getAttribute('src')).toBe('/base/mock-exams/q1.png');
    expect(dom.querySelector('img').getAttribute('alt')).toBe('Diagrama');
  });

  it('renders tables with the first column as row headers', () => {
    const dom = toDom(renderBlocks([{ table: { head: ['Regra', 'R1'], rows: [['C1', 'V']] } }], '/'));
    expect([...dom.querySelectorAll('thead th')].map((th) => th.textContent)).toEqual(['Regra', 'R1']);
    expect(dom.querySelector('tbody th[scope="row"]').textContent).toBe('C1');
    expect(dom.querySelector('tbody td').textContent).toBe('V');
  });

  it('escapes HTML in content', () => {
    expect(renderBlocks([{ p: '<script>x</script>' }], '/')).toBe('<p>&lt;script&gt;x&lt;/script&gt;</p>');
  });

  it('returns an empty string for no blocks', () => {
    expect(renderBlocks([], '/')).toBe('');
  });
});

// Explanation lines with the Correta/Incorreta verdict.
describe('renderExplLine', () => {
  it('tags a correct option', () => {
    const p = toDom(renderExplLine('b) Correta. Porque sim.')).firstChild;
    expect(p.className).toBe('sim-expl-opt is-ok');
    expect(p.querySelector('.sim-tag').textContent).toBe('b) Correta');
    expect(p.textContent).toContain('Porque sim.');
  });

  it('tags an incorrect option', () => {
    expect(toDom(renderExplLine('a) Incorreta. Não.')).firstChild.className).toBe('sim-expl-opt is-bad');
  });

  it('renders any other line as a plain paragraph', () => {
    expect(renderExplLine('Comentário geral')).toBe('<p>Comentário geral</p>');
  });
});

// Badges above each question.
describe('metaBadges', () => {
  it('shows the label, LO and K-level', () => {
    const badges = [...toDom(metaBadges(q, 'Simulado A · 1')).querySelectorAll('.sim-badge')].map((b) => b.textContent);
    expect(badges).toEqual(['Simulado A · 1', 'FL-4.2.1', 'K3']);
  });

  it('warns when the question asks for two options', () => {
    expect(metaBadges({ ...q, answer: ['a', 'c'] }, 'x')).toContain('Selecione DUAS opções');
  });

  it('hides LO and K-level when they are not given (exam mode)', () => {
    expect(toDom(metaBadges({ ...q, lo: null, k: null }, 'Questão 1')).querySelectorAll('.sim-badge')).toHaveLength(1);
  });
});

// Answer options, before and after grading.
describe('optionsHtml', () => {
  it('uses radio buttons for single-answer questions', () => {
    const dom = toDom(optionsHtml(q, 'opt', [], false));
    expect(dom.querySelectorAll('input[type="radio"]')).toHaveLength(3);
    expect(dom.querySelector('fieldset').disabled).toBe(false);
  });

  it('uses checkboxes for "select TWO" questions', () => {
    const dom = toDom(optionsHtml({ ...q, answer: ['a', 'b'] }, 'opt', [], false));
    expect(dom.querySelectorAll('input[type="checkbox"]')).toHaveLength(3);
  });

  it('keeps the selection checked', () => {
    const dom = toDom(optionsHtml(q, 'opt', ['c'], false));
    expect(dom.querySelector('input[value="c"]').checked).toBe(true);
  });

  it('marks right, wrong and other options after grading', () => {
    const dom = toDom(optionsHtml(q, 'opt', ['a'], true));
    const cls = (key) => dom.querySelector(`input[value="${key}"]`).closest('label').className;
    expect(dom.querySelector('fieldset').disabled).toBe(true);
    expect(cls('a')).toContain('is-wrong');
    expect(cls('b')).toContain('is-correct');
    expect(cls('c')).toContain('is-dim');
  });
});
