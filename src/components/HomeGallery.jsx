import { useState } from 'react';
import './HomeGallery.css';

const galleryImages = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
  '/gallery7.jpg',
  '/gallery8.jpg',
  '/gallery9.jpg',
  '/gallery10.jpg',
  '/gallery11.jpg',
];

const HomeGallery = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, currentIndex: 0 });

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, currentIndex: 0 });
  };

  const showNextImage = () => {
    setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex + 1) % galleryImages.length }));
  };

  const showPrevImage = () => {
    setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex - 1 + galleryImages.length) % galleryImages.length }));
  };

  return (
    <section className="home-gallery-section" id="gallery">
      <div className="section-container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
              <img src={src} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {lightbox.isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrevImage(); }}>&#10094;</button>
          <img src={galleryImages[lightbox.currentIndex]} alt="Lightbox" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); showNextImage(); }}>&#10095;</button>
        </div>
      )}
    </section>
  );
};

export default HomeGallery;