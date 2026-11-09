import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Notes live in notes/ (not src/content/docs) so they stay browsable directly
// on GitHub. notes/index.md is the site home page.
export const collections = {
  docs: defineCollection({
    loader: glob({
      base: './notes',
      pattern: '**/*.md',
      generateId: ({ entry }) => entry.replace(/\.md$/, ''),
    }),
    schema: docsSchema(),
  }),
};
