import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Outreach from '../components/Outreach';
import HomeGallery from '../components/HomeGallery';
import About from '../components/About';
import VideoSection from '../components/VideoSection';
import NewsSection from '../components/NewsSection';
import Modal from '../components/Modal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowModal(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <main>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="news-modal-content">
          <img src="/news-article-page.png" alt="University of Liverpool News" className="news-modal-image" />
          <div className="news-modal-text">
            <h3>In the Spotlight</h3>
            <p>Our recent win at the UKSEDS NRC competition has been featured on the University of Liverpool News!</p>
            <a href="https://www.liverpool.ac.uk/engineering/news/stories/title,1565769,en.php" target="_blank" rel="noopener noreferrer" className="cta-button primary">
              Read More
            </a>
          </div>
        </div>
      </Modal>

      <Hero />
      <NewsSection />
      <About />
      <HomeGallery />
      <VideoSection />
      <Outreach />
    </main>
  );
};

export default HomePage;