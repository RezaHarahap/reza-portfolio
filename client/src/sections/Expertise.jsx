import SectionHeader from '../components/SectionHeader.jsx';
import { usePreferences } from '../hooks/usePreferences.jsx';

const data = [
  {
    n: '01',
    title: 'AI & Machine Learning Engineering',
    skills: ['Machine Learning','Deep Learning','Computer Vision','Generative AI','Model Evaluation','Transfer Learning','Model Deployment','MLOps'],
    tools: 'Python · TensorFlow · Keras · scikit-learn · Pandas · NumPy · MLflow',
  },
  {
    n: '02',
    title: 'Data Science & Analytics',
    skills: ['Data Cleaning & Validation','Exploratory Data Analysis','Data Visualization','Dashboard Development','Statistical Analysis','Predictive Modeling','Business Insight','Data Reporting'],
    tools: 'Python · SQL · Excel · Power BI · Tableau · Looker Studio · Pandas · NumPy',
  },
];

export default function Expertise() {
  const { language, t } = usePreferences();
  const id = language === 'id';
  return (
    <section id="expertise" className="section">
      <SectionHeader
        index="03 /"
        title={t.sections.expertise}
        description={id
          ? 'Fokus keahlian utama saya berada pada AI & Machine Learning serta Data Science & Analytics.'
          : 'My primary technical focus is AI & Machine Learning and Data Science & Analytics.'}
      />
      <div className="expertise-grid">
        {data.map(({ n, title, skills, tools }) => (
          <article className="expertise-item" key={title}>
            <span className="section-index">{n}</span>
            <h3>{title}</h3>
            <div className="skill-list">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <p className="muted"><strong>Tools:</strong> {tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
