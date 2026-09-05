import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo.jsx';
import CertificationCard from '../../components/CertificationCard.jsx';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../sections/Footer.jsx';
import { certificationService } from '../../services/certificationService.js';
import { usePreferences } from '../../hooks/usePreferences.jsx';

const filters = [
  ['all', 'All'],
  ['ai_ml', 'AI & ML'],
  ['data_science', 'Data & Analytics'],
  ['full_stack', 'Full-Stack'],
];

export default function AllCertificationsPage() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState('all');
  const { language, t } = usePreferences();
  const id = language === 'id';

  useEffect(() => { certificationService.all().then(setItems); }, []);
  const visible = useMemo(() => active === 'all' ? items : items.filter((item) => item.category === active), [items, active]);

  return <>
    <Navbar />
    <main className="subpage">
      <Seo title="Certifications | Muhammad Reza Pahlevi Harahap" description="AI, data, and full-stack certifications by Muhammad Reza Pahlevi Harahap." />
      <Link className="back" to="/">← {t.common.home}</Link>
      <span className="eyebrow">{t.sections.certifications.toUpperCase()}</span>
      <h1>{id ? 'Sertifikat Lainnya' : 'Other Certificates'}</h1>
      <p className="sub-intro">{id ? 'Koleksi sertifikasi lengkap yang mendukung kompetensi AI, data, dan full-stack.' : 'A complete collection of AI, data, and full-stack credentials.'}</p>

      <div className="cert-filter" role="group" aria-label="Certification filters">
        {filters.map(([value, label]) => <button key={value} className={active === value ? 'active' : ''} onClick={() => setActive(value)}>{label}</button>)}
      </div>

      <div className="cert-grid">{visible.map((item) => <CertificationCard key={item.id} item={item} />)}</div>
    </main>
    <Footer />
  </>;
}
