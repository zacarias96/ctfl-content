import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// As notas ficam em notes/ (e não em src/content/docs) para continuarem
// navegáveis direto no GitHub. O README.md da pasta vira a página inicial.
export const collections = {
  docs: defineCollection({
    loader: glob({
      base: './notes',
      pattern: '**/*.md',
      generateId: ({ entry }) => {
        const id = entry.replace(/\.md$/, '');
        return id === 'README' ? 'index' : id;
      },
    }),
    schema: docsSchema(),
  }),
};
