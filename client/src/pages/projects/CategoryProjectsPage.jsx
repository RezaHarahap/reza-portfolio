import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo.jsx';
import ProjectCard from '../../components/ProjectCard.jsx';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../sections/Footer.jsx';
import { projectService } from '../../services/projectService.js';
import { usePreferences } from '../../hooks/usePreferences.jsx';
export default function CategoryProjectsPage({category,title}){const [items,setItems]=useState([]);const [loading,setLoading]=useState(true);const [error,setError]=useState('');const {language,t}=usePreferences();const id=language==='id';const load=()=>{setLoading(true);setError('');projectService.byCategory(category).then(setItems).catch((e)=>setError(e.message)).finally(()=>setLoading(false))};useEffect(()=>{load()},[category]);return <><Navbar/><main className="subpage"><Seo title={`${title} Projects | Muhammad Reza Pahlevi Harahap`} description={`${title} portfolio projects by Muhammad Reza Pahlevi Harahap.`}/><Link className="back" to="/">← {t.common.home}</Link><span className="eyebrow">{t.sections.projects.toUpperCase()}</span><h1>{title}</h1><p className="sub-intro">{id?`Kumpulan proyek terpilih pada bidang ${title}.`:`Selected projects and experiments in ${title}.`}</p>{error?<div className="state">{id?'Data tidak dapat dimuat.':'Unable to load data.'} <button onClick={load}>{t.common.retry}</button></div>:loading?<div className="project-grid">{[1,2,3].map((x)=><div className="skeleton" key={x}/>)}</div>:items.length?<div className="project-grid">{items.map((x)=><ProjectCard project={x} key={x.id}/>)}</div>:<div className="empty-panel">{t.common.empty}</div>}</main><Footer/></>}
