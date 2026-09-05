import { certifications } from '../data/certifications.js';

const published = () => certifications.filter((item) => item.status === 'published');
const sortItems = (items) => [...items].sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

export const certificationService = {
  featured: async () => sortItems(published().filter((item) => item.featured)),
  all: async () => sortItems(published()),
  byCategory: async (category) => sortItems(published().filter((item) => item.category === category)),
};
