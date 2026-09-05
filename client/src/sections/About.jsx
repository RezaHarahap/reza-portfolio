import SectionHeader from '../components/SectionHeader.jsx';
import { usePreferences } from '../hooks/usePreferences.jsx';

export default function About() {
  const { language, t } = usePreferences();
  const id = language === 'id';

  return (
    <section id="about" className="section">
      <SectionHeader index="02 /" title={t.sections.about} />

      <div className="two-col about-layout">
        <div className="about-copy">
          <p className="muted">
            {id
              ? 'Saya adalah lulusan Sistem Informasi yang tertarik pada bagaimana data, AI, dan software dapat digunakan untuk menyelesaikan masalah nyata. Saya menikmati proses memahami permasalahan, mengolah data, membangun solusi, lalu mengubahnya menjadi sesuatu yang dapat digunakan secara praktis.'
              : 'I am an Information Systems graduate interested in how data, AI, and software can be used to solve real-world problems. I enjoy understanding problems, processing data, building solutions, and turning them into something practical and useful.'}
          </p>

          <p className="muted">
            {id
              ? 'Pengalaman saya mencakup machine learning, data analytics, pengembangan aplikasi web, quality assurance, serta koordinasi dalam berbagai proyek dan organisasi. Dari pengalaman tersebut, saya terbiasa bekerja secara terstruktur, mempelajari teknologi baru dengan cepat, dan berkolaborasi dalam tim lintas bidang.'
              : 'My experience includes machine learning, data analytics, web application development, quality assurance, and coordination across various projects and organizations. These experiences have trained me to work in a structured way, learn new technologies quickly, and collaborate across teams.'}
          </p>

          <p className="muted">
            {id
              ? 'Saya terus mengembangkan kemampuan teknis dan problem solving untuk membangun solusi yang relevan, terukur, dan memberikan dampak nyata.'
              : 'I continue developing my technical and problem-solving capabilities to build relevant, measurable, and impactful solutions.'}
          </p>
        </div>

        <div className="about-side">
          <div className="about-block">
            <span className="eyebrow">
              {id ? 'Fokus Karier' : 'Career Focus'}
            </span>

            <div className="focus-list">
              <span>Data Science & Analytics</span>
              <span>AI & Machine Learning Engineering</span>
              <span>Full-Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}