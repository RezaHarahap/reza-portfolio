import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../sections/Footer.jsx';
import { usePreferences } from '../hooks/usePreferences.jsx';
export default function NotFoundPage(){const {language}=usePreferences();const id=language==='id';return <><Navbar/><main className="not-found"><span className="eyebrow">404</span><h1>{id?'Halaman tidak ditemukan':'Page not found'}</h1><p className="muted">{id?'Halaman yang kamu cari tidak tersedia.':'The page you are looking for is not available.'}</p><Link className="button primary" to="/">← {id?'Kembali ke Home':'Back to Home'}</Link></main><Footer/></>}
