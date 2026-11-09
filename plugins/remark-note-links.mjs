import { visit } from 'unist-util-visit';

/**
 * Converte links relativos entre notas (ex.: `01-fundamentos-de-teste.md#13-...`)
 * em rotas do site (ex.: `/ctfl-content/01-fundamentos-de-teste/#13-...`).
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
