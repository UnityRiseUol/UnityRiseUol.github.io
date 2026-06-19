import './InstagramSection.css';
import { FaInstagram } from 'react-icons/fa';

const InstagramSection = () => {
  const instagramUrl = "https://www.instagram.com/uol.unity.rise";

  // Placeholder images - you can replace these with actual post screenshots
  const placeholderImages = [
    '/gallery1.jpg',
    '/gallery4.jpg',
    '/gallery7.jpg',
  ];

  return (
    <section className="instagram-section">
      <div className="section-container">
        <h2 className="section-title">Follow Our Journey</h2>
        <p className="instagram-subtitle">
          Stay up-to-date with our latest projects, launches, and team activities on Instagram!
        </p>
        
        <div className="instagram-gallery-preview">
          {placeholderImages.map((src, index) => (
            <a key={index} href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={`Instagram preview ${index + 1}`} className="instagram-preview-image" />
            </a>
          ))}
        </div>

        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="instagram-follow-button">
          <FaInstagram /> Follow @uol.unity.rise
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;