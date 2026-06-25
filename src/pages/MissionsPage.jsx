import { useState } from 'react';
import './MissionsPage.css';

const timelineData = [
  {
    date: '2026-2027',
    title: 'Name TBC',
    competition: 'UKSEDS MACH-X',
    logo: '/mach_x_logo.png',
    images: [],
    highlights: null,
  },
  {
    date: '2025-2026',
    title: 'PL-26',
    competition: 'UKSEDS NRC',
    logo: '/nrc_logo.png',
    videoId: 'oFqZ_HMK2UE',
    images: ['/gallery7.jpg', '/gallery8.jpg', '/gallery9.jpg', '/gallery10.jpg', '/gallery11.jpg'],
    highlights: {
      preview: (
        <ul>
          <li><strong>1st Place Championship Trophy</strong> – Overall winners of the competition out of 300+ participants in the UK.</li>
          <li><strong>Best Rideshare Payload Award</strong> – Recognising the exceptional engineering and execution of our avionics system, ground station and rideshare experiment..</li>
          <li><strong>Best Public Engagement Award</strong> – Honoring our team's commitment to sharing the excitement of rocketry with the wider community.</li>
        </ul>
      ),
      full: (
        <div>
          <ul>
            <li><strong>1st Place Championship Trophy</strong> – Overall winners of the competition out of 300+ participants in the UK.</li>
            <li><strong>Best Rideshare Payload Award</strong> – Recognising the exceptional engineering and execution of our avionics system, ground station and rideshare experiment.</li>
            <li><strong>Best Public Engagement Award</strong> – Honoring our team's commitment to sharing the excitement of rocketry with the wider community.</li>
          </ul>
          <h4>Advanced Technical Highlights</h4>
          <ul>
            <li><strong>LIFTSv2 Avionics Suite:</strong> Powering the flight was our custom-designed, advanced 3-stack PCB avionics system, ensuring precision control and monitoring throughout the launch profile.</li>
            <li><strong>PLOTSv1 Ground Station:</strong> Features a completely custom PCB-designed ground station delivering real-time telemetry, giving the team live tracking and data feeds from the launch pad to touchdown.</li>
            <li><strong>VEGA Rideshare Experiment:</strong> Our integrated "physical AI" payload successfully demonstrated real-time, edge-computed computer vision to scan agricultural fields below and and dynamically classify crops as healthy or unhealthy.</li>
            <li><strong>Dual-Deployment Recovery:</strong> A robust, high-reliability* recovery system utilising a drogue ejection parachute charge at apogee, followed by an innovative, mechanical nose cone door deployment system to release the main chute.</li>
            <li><strong>GPS Tracking:</strong> Redundant onboard GPS recovery modules ensured precise, rapid localization and retrieval of the vehicle post-landing.</li>
          </ul>
        </div>
      )
    }
  },
  {
    date: '2024-2025',
    title: 'PULSAR',
    competition: 'UKSEDS NRC',
    logo: '/nrc_logo.png',
    videoId: 'alMkTgpcnv4',
    images: ['/gallery4.jpg', '/gallery5.jpg', '/gallery6.jpg'],
    highlights: {
      preview: (
        <ul>
          <li><strong>6th Place Overall</strong> – Outperforming over 50 teams from across the UK in a highly competitive field.</li>
          <li><strong>Most Novel Deployment Award</strong> – Recognising our unique, highly innovative mechanical recovery design judged as the most creative solution in the competition.</li>
        </ul>
      ),
      full: (
        <div>
          <ul>
            <li><strong>6th Place Overall</strong> – Outperforming over 50 teams from across the UK in a highly competitive field.</li>
            <li><strong>Most Novel Deployment Award</strong> – Recognising our unique, highly innovative mechanical recovery design judged as the most creative solution in the competition.</li>
          </ul>
          <h4>Advanced Technical Highlights</h4>
          <ul>
            <li><strong>LIFTSv1 Avionics Suite:</strong> Driven by our dedicated, first-generation custom avionics system, laying the foundational hardware and software groundwork for our team's flight computer lineage.</li>
            <li><strong>Fin Flutter Detection:</strong> Equipped with a dedicated onboard camera system specifically tasked with recording and monitoring aerodynamic fin flutter during high-velocity flight phases.</li>
            <li><strong>Novel Nose Cone Deployment:</strong> Featuring our custom, single-mechanism main parachute deployment system housed entirely within the nose cone, which secured the engineering award.</li>
            <li><strong>Custom 3D-Printed Components:</strong> Utilised advanced in-house manufacturing for structural optimization, featuring a custom 3D-printed electronics bay cradle and custom-fabricated fins.</li>
            <li><strong>Single-Stage Architecture:</strong> A highly streamlined, single-stage rocket design engineered for maximum structural efficiency and reliable performance from launch to recovery.</li>
          </ul>
        </div>
      )
    }
  },
  {
    date: '2024-2024',
    title: 'Banana Split',
    competition: 'UKSEDS NRC',
    logo: '/nrc_logo.png',
    images: ['/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg'],
    highlights: {
      preview: (
          <ul>
            <li><strong>8th Place Overall</strong> – Outperforming teams from across the UK in a highly competitive field.</li>
            <li><strong>Most Novel Deployment Award</strong> – Recognising our unique, highly innovative mechanical recovery design judged as the most creative solution in the competition.</li>
          </ul>
      ),
      full: (
          <div>
            <ul>
              <li><strong>8th Place Overall</strong> – Outperforming teams from across the UK in a highly competitive field.</li>
                <li><strong>Most Novel Deployment Award</strong> – Recognising our unique, highly innovative mechanical recovery design judged as the most creative solution in the competition.</li>
            </ul>
          </div>
      )
    }
  }
];

const MissionsPage = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [expandedHighlights, setExpandedHighlights] = useState({});

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, images: [], currentIndex: 0 });
  };

  const showNextImage = () => {
    setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }));
  };

  const showPrevImage = () => {
    setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length }));
  };

  const toggleHighlights = (index) => {
    setExpandedHighlights(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <main className="missions-container">
      <h1>Our Missions</h1>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h2 className="mission-title">{item.title}</h2>
              <div className="competition-container">
                <img src={item.logo} alt={`${item.competition} logo`} className="competition-logo" />
                <p className="competition-name">{item.competition}</p>
              </div>

              {item.videoId && (
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {item.title !== 'Name TBC' && (
                <>
                  {item.images.length > 0 ? (
                    <div className="image-gallery">
                      {item.images.map((src, i) => (
                        <img key={i} src={src} alt={`${item.title} - Image ${i + 1}`} className="gallery-image" onClick={() => openLightbox(item.images, i)} />
                      ))}
                    </div>
                  ) : (
                    <div className="image-gallery-placeholder">
                      <span>Image Gallery Coming Soon</span>
                    </div>
                  )}
                  
                  <div className="highlights-section">
                    <h3>Highlights</h3>
                    {typeof item.highlights === 'object' && item.highlights !== null && item.highlights.preview ? (
                      // Complex highlights with preview
                      <div className="highlights-content-complex">
                        {expandedHighlights[index] ? item.highlights.full : item.highlights.preview}
                        <button onClick={() => toggleHighlights(index)} className="read-more-btn">
                          {expandedHighlights[index] ? 'Read less...' : 'Read more...'}
                        </button>
                      </div>
                    ) : (
                      // Simple highlights
                      <div className="highlights-content-simple">
                        <p>{item.highlights}</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {lightbox.isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrevImage(); }}>&#10094;</button>
          <img src={lightbox.images[lightbox.currentIndex]} alt="Lightbox" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); showNextImage(); }}>&#10095;</button>
        </div>
      )}
    </main>
  );
};

export default MissionsPage;