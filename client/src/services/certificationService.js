import { certifications } from '../data/certifications.js';
import { aiExtraCertifications } from '../data/certifications-ai-extra.js';
import { aiExtraCertifications2 } from '../data/certifications-ai-extra-2.js';
import { dataExtraCertifications2 } from '../data/certifications-data-extra-2.js';
import { dataExtraCertifications3 } from '../data/certifications-data-extra-3.js';
import { fullStackExtraCertifications } from '../data/certifications-fullstack-extra.js';

const categoryOverrides = {
  '53XED77GVPRN': 'ai_ml',
  'office-professional-nf-computer': 'professional_credentials',
};

const merged = [...certifications, ...aiExtraCertifications, ...aiExtraCertifications2, ...dataExtraCertifications2, ...dataExtraCertifications3, ...fullStackExtraCertifications]
  .map((item) => ({
    ...item,
    category: categoryOverrides[item.credential_id] || categoryOverrides[item.id] || item.category,
  }))
  .filter((item, index, items) => {
    const key = item.credential_id || item.id;
    return items.findIndex((candidate) => (candidate.credential_id || candidate.id) === key) === index;
  });

const published = () => merged.filter((item) => item.status === 'published');
const sortItems = (items) => [...items].sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

export const certificationService = {
  featured: async () => sortItems(published().filter((item) => item.featured)),
  all: async () => sortItems(published()),
  byCategory: async (category) => sortItems(published().filter((item) => item.category === category)),
};
