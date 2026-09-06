import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { usePreferences } from '../hooks/usePreferences.jsx';
import { useSiteSettings } from '../hooks/useSiteSettings.js';

const fallbackCv = '/cv/muhammad-reza-pahlevi-harahap-cv.html?v=20260905';

export default function Hero() {
  const { language, t } = usePreferences();
  const settings = useSiteSettings();
  const cv = settings.cv_url || fallbackCv;
  const committeeLabel = language === 'id' ? 'Kepanitiaan' : 'Committee Roles';

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          {t.hero.availability} · {t.hero.location}
        </span>
        <h1>
          Muhammad Reza
          <br />
          Pahlevi Harahap
        </h1>
        <h2>{t.hero.eyebrow}</h2>
        <p className="hero-copy">{t.hero.intro}</p>

        <div className="hero-actions">
          <a className="button primary" href={cv} target="_blank" rel="noreferrer">
            {t.hero.cv}
            <Download size={17} />
          </a>
          <a className="icon-link" href={settings.linkedin_url} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a className="icon-link" href={settings.github_url} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a className="icon-link" href={`mailto:${settings.email}`} aria-label="Email">
            <Mail />
          </a>
        </div>
      </div>

      <div className="hero-aside">
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src="/images/profile-reza-medium.jpg"
            alt="Muhammad Reza Pahlevi Harahap"
          />
        </div>

        <div className="stats">
          <div>
            <strong>3.79</strong>
            <span>/ 4.00 GPA</span>
          </div>
          <div>
            <strong>30+</strong>
            <span>Certifications</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>{committeeLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
