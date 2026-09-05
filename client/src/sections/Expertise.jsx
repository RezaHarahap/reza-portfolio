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
  {
    n: '03',
    title: 'Full-Stack Development',
    skills: ['Front-End Development','Back-End Development','REST API Development','Database Integration','Authentication & Authorization','Responsive Web Development','Web Testing'],
    tools: 'HTML · CSS · JavaScript · React · Node.js · Python · PHP · Laravel · SQL · MySQL · Git · GitHub',
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
          ? 'Saya mengembangkan kemampuan teknis pada tiga bidang utama yang saling berkaitan: AI & Machine Learning, Data Science & Analytics, serta Full-Stack Development.'
          : 'I develop technical capabilities across three connected areas: AI & Machine Learning, Data Science & Analytics, and Full-Stack Development.'}
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
