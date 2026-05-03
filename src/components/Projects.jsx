import { useState, useEffect, useRef } from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      name: 'Banana Split',
      description: 'Our flagship two-stage rocket designed for high altitude records and precision navigation.',
      highlights: ['Two-stage design', '5km+ altitude', 'GPS recovery'],
      status: '8th Place'
    },
    {
      name: 'Pulsar',
      description: 'Single-stage rocket focused on stability and reliability for consistent performance.',
      highlights: ['Single-stage', 'Hybrid propulsion', 'Parachute recovery'],
      status: '6th Place'
    },
    {
      name: 'PL-26',
      description: 'Advanced avionics platform with real-time telemetry and autonomous recovery systems.',
      highlights: ['Advanced telemetry', 'AI recovery', 'Real-time tracking'],
      status: 'Development'
    }
    ,
    {
      name: 'Mach-X',
      description: 'Student competition entry for the Mach-X high-speed rocketry challenge. See the official event page for rules and timeline.',
      highlights: ['High-speed flight', 'Payload integration', 'Performance-focused'],
      status: 'Upcoming',
      url: 'https://www.exo.events/mach-x'
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)
  const modalRef = useRef(null)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  function openProject(project) {
    setSelectedProject(project)
    // focus will remain fine; optional: move focus into modal
    setTimeout(() => modalRef.current?.focus?.(), 0)
  }

  function closeModal() {
    setSelectedProject(null)
  }

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
              onClick={() => openProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openProject(project)
              }}
              aria-label={`Open details for ${project.name}`}
            >
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
              {selectedProject.url && (
                <p className="modal-link">
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">Open competition page</a>
                </p>
              )}
              <h4>Highlights</h4>
              <ul className="modal-highlights">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

