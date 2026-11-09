import { visit } from 'unist-util-visit';

/**
 * Converts relative links between notes (e.g. `01-fundamentos-de-teste.md#13-...`)
 * into site routes (e.g. `/ctfl-content/01-fundamentos-de-teste/#13-...`).
 * Assim os mesmos arquivos funcionam no GitHub e no site.
 */
export default function remarkNoteLinks({ base = '' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    visit(tree, 'link', (node) => {
      const match = /^(?:\.\/)?([\w-]+)\.md(#.*)?$/.exec(node.url);
      if (!match) return;
      const [, slug, hash = ''] = match;
      const path = slug === 'index' || slug === 'README' ? '/' : `/${slug}/`;
      node.url = `${prefix}${path}${hash}`;
    });
  };
}
