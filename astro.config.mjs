// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import { unified } from '@astrojs/markdown-remark';
import remarkNoteLinks from './plugins/remark-note-links.mjs';

const base = '/ctfl-content';

// sidebar.json sets the order and labels of the sections (folders in notes/).
// Inside each folder, note order comes from the numeric file name prefix. The
// optional "links" field appends pages that are not notes (e.g. mock exams).
const { sections } = JSON.parse(readFileSync(new URL('./sidebar.json', import.meta.url), 'utf8'));

// Starlight autogenerate only sees src/content/docs, so each section lists its
// notes straight from the folder (alphabetical order = prefix order).
const notesOf = (dir) =>
  readdirSync(new URL(`./notes/${dir}/`, import.meta.url))
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => `${dir}/${f.replace(/\.md$/, '')}`);

export default defineConfig({
  site: 'https://zacarias96.github.io',
  base,
  markdown: {
    processor: unified({ remarkPlugins: [[remarkNoteLinks, { base, notesDir: 'notes' }]] }),
  },
  integrations: [
    mermaid({ autoTheme: true }),
    starlight({
      title: 'CTFL 4.0 - Notas de Estudo',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Português', lang: 'pt-BR' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/zacarias96/ctfl-content' },
      ],
      editLink: {
        baseUrl: 'https://github.com/zacarias96/ctfl-content/edit/main/',
      },
      sidebar: [
        { label: 'Início', link: '/' },
        ...sections.map(({ dir, label, links = [] }) => ({
          label,
          items: [...notesOf(dir), ...links],
        })),
      ],
    }),
  ],
});
