import {
  ExternalLink,
  Github,
  Check,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { usePreferences } from '../hooks/usePreferences.jsx';

const categoryLabels = {
  ai_ml: 'AI & ML',
  data_science: 'Science & Analytics',
  full_stack: 'Full-Stack',
};

export default function ProjectCard({
  project,
  showcase = false,
  categoryPath = '',
  categoryLinkLabel = '',
}) {
  const { language, t } = usePreferences();

  const description =
    language === 'id'
      ? project.description_id
      : project.description_en;

  const categoryLabel =
    categoryLabels[project.category] ||
    project.category;

  return (
    <article
      className={`project-card ${
        showcase ? 'project-showcase' : ''
      }`}
    >
      {showcase ? (
        <div className="project-category-panel">
          <span className="project-category-mark">
            ◇
          </span>

          <span className="project-category-name">
            {categoryLabel}
          </span>
        </div>
      ) : project.thumbnail_url ? (
        <img
          className="project-image"
          src={project.thumbnail_url}
          alt={`${project.title} project`}
          loading="lazy"
          decoding="async"
        />
      ) : null}

      <div className="project-body">
        {(showcase || project.featured) && (
          <div className="row-between project-meta">
            {showcase && (
              <span className="eyebrow">
                {categoryLabel}
              </span>
            )}

            {project.featured && (
              <span className="mini-badge">
                {t.common.featured}
              </span>
            )}
          </div>
        )}

        <h3>{project.title}</h3>

        {project.subtitle && (
          <p className="muted project-subtitle">
            {project.subtitle}
          </p>
        )}

        {description && (
          <p className="project-description">
            {description}
          </p>
        )}

        {project.highlights?.length > 0 && (
          <ul className="project-highlights">
            {project.highlights
              .slice(0, 3)
              .map((highlight) => (
                <li key={highlight}>
                  <Check
                    size={15}
                    strokeWidth={2}
                  />

                  <span>{highlight}</span>
                </li>
              ))}
          </ul>
        )}

        {project.tech_stack?.length > 0 && (
          <div className="chips project-tech">
            {project.tech_stack
              .slice(0, 5)
              .map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
          </div>
        )}

        <div className="card-links project-actions">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />

              <span>{t.common.github}</span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          )}

          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} />

              <span>
                {project.slug === 'cat-ease'
                  ? language === 'id'
                    ? 'Project Demo'
                    : 'Project Demo'
                  : 'Live Demo'}
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>

      {showcase &&
        categoryPath &&
        categoryLinkLabel && (
          <Link
            className="project-category-link"
            to={categoryPath}
          >
            <span>
              {categoryLinkLabel}
            </span>

            <span
              className="project-category-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        )}
    </article>
  );
}