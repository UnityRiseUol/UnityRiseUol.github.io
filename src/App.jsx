import { Routes, Route } from 'react-router-dom';
import useScrollToHash from './hooks/useScrollToHash';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import MissionsPage from './pages/MissionsPage';
import BlogPage from './pages/BlogPage';
import SponsorshipsPage from './pages/SponsorshipsPage';

function App() {
  useScrollToHash();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/sponsorships" element={<SponsorshipsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;