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
        index="07 /"
        title={t.sections.projects}
        description={
          isIndonesian
            ? 'Kumpulan proyek unggulan yang menunjukkan penerapan AI & Machine Learning Engineering, Data Science & Analytics, dan Full-Stack Development untuk menyelesaikan permasalahan nyata.'
            : 'Selected projects demonstrating practical applications of AI & Machine Learning Engineering, Data Science & Analytics, and Full-Stack Development to real-world problems.'
        }
      />

      {error ? (
        <div className="state">
          {isIndonesian
            ? 'Data project tidak dapat dimuat.'
            : 'Unable to load project data.'}

          <button onClick={loadProjects}>
            {t.common.retry}
          </button>
        </div>
      ) : loading ? (
        <div className="project-grid project-showcase-grid">
          {[1, 2, 3].map((item) => (
            <div className="skeleton" key={item} />
          ))}
        </div>
      ) : items.length ? (
        <div className="project-grid project-showcase-grid">
          {items.map((project) => {
            const meta = categoryMeta[project.category];

            return (
              <ProjectCard
                key={project.id}
                project={project}
                showcase
                categoryPath={meta?.path}
                categoryLinkLabel={
                  meta
                    ? isIndonesian
                      ? meta.idLabel
                      : meta.enLabel
                    : ''
                }
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-panel">
          {t.common.empty}
        </div>
      )}
    </section>
  );
}