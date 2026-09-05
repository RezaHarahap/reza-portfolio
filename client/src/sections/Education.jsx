import SectionHeader from '../components/SectionHeader.jsx';
import { usePreferences } from '../hooks/usePreferences.jsx';

export default function Education() {
  const { language, t } = usePreferences();
  const id = language === 'id';

  return (
    <section id="education" className="section">
      <SectionHeader index="06 /" title={t.sections.education} />
      <div className="education">
        <div>
          <span className="eyebrow">{id ? 'September 2022 – Juli 2026' : 'September 2022 – July 2026'}</span>
          <h3>{id ? 'Sarjana Komputer — Sistem Informasi' : 'Bachelor of Computer Science — Information Systems'}</h3>
          <p className="muted">STT Terpadu Nurul Fikri</p>
          <p>
            {id
              ? 'Menempuh pendidikan Sistem Informasi dengan fokus yang berkembang dari Enterprise Systems, Machine Learning, hingga Web Development, sehingga membentuk pemahaman lintas bidang antara sistem bisnis, data, AI, dan pengembangan aplikasi.'
              : 'Studied Information Systems with interests spanning Enterprise Systems, Machine Learning, and Web Development, building cross-domain understanding across business systems, data, AI, and application development.'}
          </p>
          <div className="education-numbers education-single-metric">
            <strong>3.79 / 4.00</strong>
            <span>GPA</span>
          </div>
        </div>

        <div>
          <span className="eyebrow">{id ? 'Tugas Akhir' : 'Final Project'}</span>
          <p className="lead small">
            Rancang Bangun Modul Monitoring Pemilahan Sampah Berbasis Laravel untuk Peningkatan
            Keandalan Pelaporan Pengelolaan Sampah di STT Terpadu Nurul Fikri.
          </p>
        </div>
      </div>
    </section>
  );
}
