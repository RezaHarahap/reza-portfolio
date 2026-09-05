import { projects } from '../data/projects.js';

const published = () => projects.filter((item) => item.status === 'published');
const sortItems = (items) => [...items].sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

export const projectService = {
  featured: async () => sortItems(published().filter((item) => item.featured)),
  byCategory: async (category) => sortItems(published().filter((item) => item.category === category)),
  bySlug: async (slug) => published().find((item) => item.slug === slug) ?? null,
};
