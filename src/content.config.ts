import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Notes live in notes/ (not src/content/docs) so they stay browsable directly
// on GitHub. The folder's README.md becomes the home page.
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
