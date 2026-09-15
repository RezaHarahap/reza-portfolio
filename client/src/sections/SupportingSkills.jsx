import SectionHeader from '../components/SectionHeader.jsx';
import { usePreferences } from '../hooks/usePreferences.jsx';

export default function SupportingSkills() {
  const { language } = usePreferences();
  const id = language === 'id';
  const skills = ['Front-End Development','Back-End Development','REST API Development','Database Integration','Authentication & Authorization','Responsive Web Development','Web Testing'];
  const tools = 'HTML · CSS · JavaScript · React · Node.js · Python · PHP · Laravel · SQL · MySQL · Git · GitHub';

  return (
    <section id="supporting-skills" className="section">
      <SectionHeader
        index="03 /"
        title={id ? 'Keahlian Pendukung' : 'Supporting Skills'}
        description={id
          ? 'Kemampuan software dan backend development sebagai pendukung dalam membangun, mengintegrasikan, dan mengimplementasikan solusi Data & AI.'
          : 'Software and backend development capabilities that support building, integrating, and implementing Data & AI solutions.'}
      />
      <div className="expertise-grid">
        <article className="expertise-item">
          <span className="section-index">03</span>
          <h3>Software & Backend Development</h3>
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <p className="muted"><strong>Tools:</strong> {tools}</p>
        </article>
      </div>
    </section>
  );
}
