// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkNoteLinks from './plugins/remark-note-links.mjs';

const base = '/ctfl-content';

export default defineConfig({
  site: 'https://zacarias96.github.io',
  base,
  markdown: {
    processor: unified({ remarkPlugins: [[remarkNoteLinks, { base }]] }),
  },
  integrations: [
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
        {
          label: 'Capítulos',
          items: [
            '00-introducao',
            '01-fundamentos-de-teste',
            '02-testes-no-ciclo-de-vida',
            '03-teste-estatico',
            '04-analise-e-modelagem-de-teste',
            '05-gerenciamento-das-atividades-de-teste',
            '06-ferramentas-de-teste',
          ],
        },
        {
          label: 'Revisão',
          items: ['07-dicas-de-prova', '08-glossario', { label: 'Simulados', link: '/simulados/' }],
        },
      ],
    }),
  ],
});
