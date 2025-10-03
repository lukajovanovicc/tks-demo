import { Story } from './types';

export function groupByFullSlug(stories: Story[]) {
  const filtered = stories.filter(
    (s) =>
      !['home', 'config'].includes(s.name.toLowerCase()) &&
      !s.full_slug.startsWith('content/')
  );

  const map: Record<string, Story & { children: Story[] }> = {};
  filtered.forEach((story) => {
    map[story.full_slug.replace(/\/$/, '')] = { ...story, children: [] };
  });

  const tree: (Story & { children: Story[] })[] = [];

  filtered.forEach((story) => {
    const slug = story.full_slug.replace(/\/$/, '');
    const parentPath = slug.includes('/')
      ? slug.substring(0, slug.lastIndexOf('/'))
      : null;

    if (parentPath && map[parentPath]) {
      map[parentPath].children.push(map[slug]);
      map[parentPath].children.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
      );
    } else {
      tree.push(map[slug]);
      tree.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
      );
    }
  });

  return tree;
}
