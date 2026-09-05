import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import CertificationCard from '../components/CertificationCard.jsx';
import { certificationService } from '../services/certificationService.js';
import { usePreferences } from '../hooks/usePreferences.jsx';

const categoryLinks = [
  {
    index: '01',
    name: 'AI & Machine Learning',
    cta_id: 'Sertifikat AI & ML Lainnya',
    cta_en: 'More AI & ML Certificates',
    url: '/certifications/ai-machine-learning',
  },
  {
    index: '02',
    name: 'Data Science & Analytics',
    cta_id: 'Sertifikat Data & Analitik Lainnya',
    cta_en: 'More Data & Analytics Certificates',
    url: '/certifications/data-science-analytics',
  },
  {
    index: '03',
    name: 'Full-Stack Development',
    cta_id: 'Sertifikat Full-Stack Lainnya',
    cta_en: 'More Full-Stack Certificates',
    url: '/certifications/full-stack',
  },
];

export default function Certifications() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { language, t } = usePreferences();
  const id = language === 'id';

  const load = () => {
    setLoading(true);
    setError('');

    certificationService
      .featured()
      .then(setFeatured)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="certifications" className="section">
      <SectionHeader
        index="08 /"
        title={t.sections.certifications}
        description={
          id
            ? 'Sertifikasi terpilih yang mendukung fokus utama saya di AI & Machine Learning, Data Science & Analytics, dan Full-Stack Development.'
            : 'Selected credentials supporting my core focus in AI & Machine Learning, Data Science & Analytics, and Full-Stack Development.'
        }
      />

      {error ? (
        <div className="state">
          {id ? 'Data tidak dapat dimuat.' : 'Unable to load data.'}{' '}
          <button onClick={load}>{t.common.retry}</button>
        </div>
      ) : loading ? (
        <div className="cert-grid">
          {[1, 2, 3, 4, 5, 6].map((x) => (
            <div className="skeleton cert-skeleton" key={x} />
          ))}
        </div>
      ) : (
        <>
          <div className="cert-subhead">
            <div>
              <span className="eyebrow">
                FEATURED CERTIFICATIONS
              </span>

              <h3>
                {id ? 'Sertifikat Utama' : 'Featured Credentials'}
              </h3>
            </div>

            <span className="cert-count">
              06 SELECTED
            </span>
          </div>

          <div className="cert-grid">
            {featured.map((item) => (
              <CertificationCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

          {/* CERTIFICATION CATEGORY NAVIGATION */}
          <div
            className="cert-category-nav"
            aria-label="Certification categories"
          >
            {categoryLinks.map((item) => (
              <Link
                className="cert-category-card"
                key={item.url}
                to={item.url}
              >
                <div className="cert-category-topline">
                  <span className="cert-category-index">
                    {item.index}
                  </span>

                  <span
                    className="cert-category-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <strong>
                  {item.name}
                </strong>

                <span className="cert-category-cta">
                  {id ? item.cta_id : item.cta_en}
                  <span aria-hidden="true"> →</span>
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}