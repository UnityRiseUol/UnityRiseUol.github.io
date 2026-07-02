import { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: 'LIFTSv1',
      description: 'First-generation custom avionics system LIFTSv1 (LASER Integrated Flight Tracking System) for the PULSAR launch vehicle. Based on a Raspberry Pi Zero 2W, it integrates a suite of sensors to provide autonomous flight state detection, live telemetry and redundant data logging.',
      highlights: [
        'Autonomous Flight Logic',
        'Live Telemetry via NRF24L01',
        'Multi-Sensor Integration (IMU, GPS, Altimeter)',
        'Onboard Video & Data Logging',
        'Python-based with pigpio'
      ],
      status: 'PULSAR',
      images: ['/image-1.png', '/image-2.png', '/image-3.png', '/image-4.png'],
      techStack: {
        software: ['Python 3', 'Linux (Raspberry Pi OS)', 'Bash', 'pigpio', 'libcamera', 'Git'],
        hardware: ['Raspberry Pi Zero 2W', 'MIKROE-1836 (NRF24L01)', 'MPU6050 (IMU)', 'H3LIS331 (High-G Accel)', 'BMP390 (Altimeter)', 'Ultimate GPS Breakout']
      }
    },
    {
      name: 'LIFTSv2',
      description: 'A complete redesign of our LIFTSv1 flight computer for the PL-26 vehicle, built on an ESP32-S3 MCU. This advanced avionics suite features a real-time operating system (FreeRTOS) for robust, multi-core performance and introduces LoRa for long-range telemetry.',
      highlights: [
        'ESP32-S3 based Flight Computer',
        'FreeRTOS for Real-Time Task Management',
        'Long-Range LoRa Telemetry (868 MHz)',
        'Inertial Navigation System (INS) via Simulink',
        'VEGA Payload UART Integration',
        'Web-based UI'
      ],
      status: 'PL-26',
      images: ['/image-5.jpg', '/image-6.jpg'],
      techStack: {
        software: ['C++', 'PlatformIO', 'FreeRTOS', 'Simulink C++ Coder', 'Git'],
        hardware: ['ESP32-S3-Mini-1-N8', 'BNO085 (IMU)', 'ICM20948 (IMU)', 'BMP390 (Altimeter)', 'u-blox MAX-M10S (GNSS)', 'LoRa Module']
      }
    },
    {
      name: 'PLOTSv1',
      description: "Our first dedicated ground station PLOTSv1 (PULSAR's Live Operations and Telemetry System) for receiving, logging, and visualizing live flight data from the PL-26 launch vehicle. It features a custom PCB ground station and a low-latency software interface for real-time mission monitoring.",
      highlights: [
        'Custom dedicated PCB Ground Station',
        'Real-Time Data Pipeline (PySide6, PySerial)',
        'Live 2D/3D Telemetry Visualization (PyQtGraph)',
        'Offline Geospatial GPS Tracking (Leaflet.js)',
        'Interactive Qt-based GUI'
      ],
      status: 'PL-26',
      images: ['image-7.jpg', 'image-8.jpg', 'image-9.jpg', 'image-10.jpg'],
      techStack: {
        software: ['Python', 'C++', 'PySide6 (Qt)', 'PyQtGraph', 'Matplotlib', 'Leaflet.js', 'PySerial', 'Git', 'Linux (Raspberry Pi OS)'],
        hardware: ['KiCad', 'Raspberry Pi 5', 'Adafruit Feather RP2040 RFM95', 'UART']
      }
    },
    {
      name: 'PATv1',
      description: "Our first dedicated Postflight Analysis Tracker (PAT) for reviewing and analysing post-launch flight data from the PL-26's LIFTSv2 avionics. It provides synchronised playback of telemetry, video and geospatial data.",
      highlights: [
        'Dynamic 2D/3D Data Visualisation',
        'Synchronised Video & Telemetry Playback',
        'Offline Geospatial Tracking (Leaflet.js)',
        'Interactive Qt-based GUI (PySide6)',
        'Multi-threaded Architecture'
      ],
      status: 'PL-26',
      images: ['PAT_Sample_IMG.png'],
      techStack: {
        software: ['Python', 'PySide6 (Qt)', 'PyQtGraph', 'Matplotlib', 'Leaflet.js', 'OpenCV (cv2)', 'Git', 'Linux', 'Windows', 'MacOS'],
        hardware: ['Laptop']
      }
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const modalRef = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') {
        if (lightbox.isOpen) {
          closeLightbox();
        } else {
          closeModal();
        }
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightbox.isOpen]);

  function openProject(project) {
    setSelectedProject(project);
    setTimeout(() => modalRef.current?.focus?.(), 0);
  }

  function closeModal() {
    setSelectedProject(null);
  }

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

  const handleCardClick = (e, project) => {
    // If the click is on the image preview, don't open the modal
    if (e.target.closest('.project-image-preview')) {
      return;
    }
    openProject(project);
  };

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2 className="section-title">Our Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              role="button"
              tabIndex={0}
              onClick={(e) => handleCardClick(e, project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openProject(project);
              }}
              aria-label={`Open details for ${project.name}`}
            >
              <div className="project-card-content">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-status">{project.status}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
                {project.images.length > 0 && (
                  <div 
                    className="project-image-preview" 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent modal from opening
                      openLightbox(project.images, 0);
                    }}
                  >
                    {project.images.slice(0, 3).map((src, i) => (
                      <img key={i} src={src} alt={`${project.name} preview ${i + 1}`} />
                    ))}
                    {project.images.length > 3 && (
                      <div className="more-images-indicator">+{project.images.length - 3}</div>
                    )}
                  </div>
                )}
              </div>
              <div className="read-more-prompt">
                Read More...
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modalTitle"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
              ref={modalRef}
            >
              <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
              <h3 id="modalTitle">{selectedProject.name}</h3>
              <p className="modal-status">{selectedProject.status}</p>
              <p className="modal-description">{selectedProject.description}</p>
              
              <h4>Highlights</h4>
              <ul className="modal-highlights">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              {selectedProject.techStack && (
                <div className="tech-stack-section">
                  <h4>Tech Stack</h4>
                  <div className="tech-stack-grid">
                    <div>
                      <h5>Software</h5>
                      <ul>
                        {selectedProject.techStack.software.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h5>Hardware</h5>
                      <ul>
                        {selectedProject.techStack.hardware.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedProject.images.length > 0 && (
                <>
                  <h4>Gallery</h4>
                  <div className="modal-gallery-grid">
                    {selectedProject.images.map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt={`${selectedProject.name} gallery ${i + 1}`} 
                        onClick={() => openLightbox(selectedProject.images, i)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {lightbox.isOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrevImage(); }}>&#10094;</button>
            <img src={lightbox.images[lightbox.currentIndex]} alt="Lightbox" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); showNextImage(); }}>&#10095;</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;