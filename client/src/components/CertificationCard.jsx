import { ExternalLink, Award } from 'lucide-react';
import { usePreferences } from '../hooks/usePreferences.jsx';

const categoryLabels = {
  ai_ml: 'AI & Machine Learning',
  data_science: 'Data Science & Analytics',
  full_stack: 'Full-Stack Development',
};

export default function CertificationCard({ item }) {
  const { language } = usePreferences();
  const isIndonesian = language === 'id';

  const categoryLabel =
    categoryLabels[item.category] || 'Certification';

  return (
    <article className="cert-card">
      {/* CERTIFICATE PREVIEW */}
      {item.certificate_url ? (
        <a
          className="cert-visual"
          href={item.certificate_url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${
            isIndonesian ? 'Lihat sertifikat' : 'View certificate'
          } ${item.title}`}
        >
          {item.image_url ? (
            <img
              src={item.image_url}
              alt={`${item.title} certificate`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="cert-placeholder">
              <Award size={28} />
              <span>Certificate</span>
            </div>
          )}
        </a>
      ) : (
        <div className="cert-visual">
          {item.image_url ? (
            <img
              src={item.image_url}
              alt={`${item.title} certificate`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="cert-placeholder">
              <Award size={28} />
              <span>Certificate</span>
            </div>
          )}
        </div>
      )}

      {/* CERTIFICATE INFORMATION */}
      <div className="cert-body">
        <span className="eyebrow">
          ◇ {categoryLabel}
        </span>

        <h3>{item.title}</h3>

        <p className="cert-meta">
          {item.issuer}

          {item.year && (
            <>
              <span>•</span>
              {item.year}
            </>
          )}
        </p>

        {/* SKILLS */}
        {item.skills?.length > 0 && (
          <div className="chips cert-skills">
            {item.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        )}

        {/* SCORE */}
        {item.score && (
          <p className="cert-score">
            {isIndonesian ? 'Nilai Rata-rata' : 'Average Score'}{' '}
            <strong>{item.score}</strong>
          </p>
        )}

        {/* CREDENTIAL */}
        {item.credential_id && (
          <p className="credential-id">
            Credential ID: {item.credential_id}
          </p>
        )}

        {/* ACTIONS */}
        {(item.certificate_url || item.verification_url) && (
          <div className="cert-actions">
            {item.certificate_url && (
              <a
                className="inline-link"
                href={item.certificate_url}
                target="_blank"
                rel="noreferrer"
              >
                {isIndonesian
                  ? 'Lihat Sertifikat'
                  : 'View Certificate'}

                <ExternalLink size={15} />
              </a>
            )}

            {item.verification_url && (
              <a
                className="cert-verify"
                href={item.verification_url}
                target="_blank"
                rel="noreferrer"
              >
                {isIndonesian ? 'Verifikasi' : 'Verify'} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}