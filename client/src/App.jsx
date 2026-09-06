import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AIProjectsPage from './pages/projects/AIProjectsPage.jsx';
import DataProjectsPage from './pages/projects/DataProjectsPage.jsx';
import FullStackProjectsPage from './pages/projects/FullStackProjectsPage.jsx';
import AICertificationsPage from './pages/certifications/AICertificationsPage.jsx';
import DataCertificationsPage from './pages/certifications/DataCertificationsPage.jsx';
import FullStackCertificationsPage from './pages/certifications/FullStackCertificationsPage.jsx';
import ProfessionalCertificationsPage from './pages/certifications/ProfessionalCertificationsPage.jsx';
import AllCertificationsPage from './pages/certifications/AllCertificationsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/ai-machine-learning" element={<AIProjectsPage />} />
      <Route path="/projects/data-science-analytics" element={<DataProjectsPage />} />
      <Route path="/projects/full-stack" element={<FullStackProjectsPage />} />
      <Route path="/certifications/ai-machine-learning" element={<AICertificationsPage />} />
      <Route path="/certifications/data-science-analytics" element={<DataCertificationsPage />} />
      <Route path="/certifications/full-stack" element={<FullStackCertificationsPage />} />
      <Route path="/certifications/professional-credentials" element={<ProfessionalCertificationsPage />} />
      <Route path="/certifications/all" element={<AllCertificationsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
