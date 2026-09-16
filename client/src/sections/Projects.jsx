import { useEffect, useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projectService } from '../services/projectService.js';
import { usePreferences } from '../hooks/usePreferences.jsx';

const categoryMeta = {
  ai_ml: {
    path: '/projects/ai-machine-learning',
    idLabel: 'Lihat semua project AI & ML',
    enLabel: 'View all AI & ML projects',
  },

  data_science: {
    path: '/projects/data-science-analytics',
    idLabel: 'Lihat semua project Data Science',
    enLabel: 'View all Data Science projects',
  },

  full_stack: {
    path: '/projects/full-stack',
    idLabel: 'Lihat semua project Full-Stack',
    enLabel: 'View all Full-Stack projects',
  },
};

export default function Projects() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { language, t } = usePreferences();

  const loadProjects = () => {
    setLoading(true);
    setError('');

    projectService
      .featured()
      .then(setItems)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const isIndonesian = language === 'id';

  return (
    <section id="projects" className="section">
      <SectionHeader
        index="06 /"
        title={t.sections.projects}
        description={
          isIndonesian
            ? 'Kumpulan proyek unggulan yang menunjukkan penerapan AI & Machine Learning Engineering, Data Science & Analytics, dan Full-Stack Development untuk menyelesaikan permasalahan nyata.'
            : 'Selected projects demonstrating practical applications of AI & Machine Learning Engineering, Data Science & Analytics, and Full-Stack Development to real-world problems.'
        }
      />

      {loading && <p className="muted">{t.common.loading}</p>}
      {error && (
        <div className="error-box">
          <p>{error}</p>
          <button type="button" className="btn secondary" onClick={loadProjects}>
            {t.common.retry}
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="projects-by-category">
          {Object.entries(categoryMeta).map(([category, meta]) => {
            const categoryItems = items.filter((item) => item.category === category);
            if (!categoryItems.length) return null;

            return (
              <section className="project-category" key={category}>
                <div className="project-grid">
                  {categoryItems.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
                <div className="category-actions">
                  <a className="btn secondary" href={meta.path}>
                    {isIndonesian ? meta.idLabel : meta.enLabel}
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      )}
    </section>
  );
}
