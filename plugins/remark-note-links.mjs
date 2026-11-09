import path from 'node:path';
import { visit } from 'unist-util-visit';

/**
 * Converts relative links between notes into site routes, so the same files
 * work on GitHub and on the site. Examples (from
 * notes/07-revisao-para-a-prova/01-temas-recorrentes-e-estrategia.md):
 *
 *   ../01-fundamentos-de-teste/03-principios-de-teste.md#ausencia
 *     -> /ctfl-content/01-fundamentos-de-teste/03-principios-de-teste/#ausencia
 *   ../index.md -> /ctfl-content/
 */
export default function remarkNoteLinks({ base = '', notesDir = 'notes' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const root = path.resolve(notesDir);

  return (tree, file) => {
    if (!file.path) return;
    const fromDir = path.dirname(path.resolve(file.path));

    visit(tree, 'link', (node) => {
      const match = /^([^:#?]+)\.md(#.*)?$/.exec(node.url);
      if (!match) return;
      const [, target, hash = ''] = match;
      const rel = path
        .relative(root, path.resolve(fromDir, target))
        .split(path.sep)
        .join('/');
      if (rel.startsWith('..')) return;
      const slug = rel.replace(/(^|\/)(index|README)$/, '');
      node.url = `${prefix}/${slug ? `${slug}/` : ''}${hash}`;
    });
  };
}
