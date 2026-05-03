import { useEffect, useRef, useState } from 'react'
import './Outreach.css'

function Outreach() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const modalRef = useRef(null)
  const nameInputRef = useRef(null)

  const initiatives = [
    {
      title: 'Workshops within LASER',
      description: 'Hands-on rocketry and avionics workshops run through LASER for university students and new members - covering safety, build techniques and subsystem integration.',
      icon: '🔧'
    },
    {
      title: 'School Visits',
      description: 'Interactive STEM sessions delivered at local schools to introduce pupils to rocketry basics and engineering careers.',
      icon: '🏫'
    },
    {
      title: 'Scout & Youth Group Sessions',
      description: 'Hands-on activities and demonstrations for scout groups and youth organisations to inspire interest in STEM and space.',
      icon: '🧭'
    }
  ]

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsContactOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = 'hidden'
      window.setTimeout(() => nameInputRef.current?.focus(), 0)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isContactOpen])

  function openContactModal() {
    setIsContactOpen(true)
  }

  function closeContactModal() {
    setIsContactOpen(false)
    setFormStatus('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    setFormStatus('Thanks! This form is ready for EmailJS integration.')
    event.currentTarget.reset()
    nameInputRef.current?.focus()
  }

  return (
    <section className="outreach" id="outreach">
      <div className="section-container">
        <h2 className="section-title">Community Outreach</h2>

        <p className="section-description">
          We're passionate about inspiring the next generation of engineers and space enthusiasts.
          Through our outreach programs, we engage with schools, universities, and communities
          to promote STEM education and aerospace innovation.
        </p>

        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiative-card">
              <div className="initiative-icon">{initiative.icon}</div>
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="affiliations-section">
          <h3 className="affiliations-title">Affiliations & Competitions</h3>
          <div className="affiliations-grid">
            <div className="affiliation-card">
              <img src="/laser_logo.png" alt="LASER Logo" className="affiliation-logo" />
              <h4>LASER - Liverpool Association for Space Engineering & Research</h4>
              <p>
                Unity Rise began as a project team within LASER, the student-led society in the
                School of Engineering at the University of Liverpool. LASER provides an
                interdisciplinary community of students passionate about space engineering —
                offering technical mentorship, workshop access, and the collaborative network we
                rely on to design and build competition rockets. Through LASER we run training
                sessions, workshops, and recruit students from across engineering disciplines to
                work on avionics, structures, propulsion and ground systems.
              </p>
              <a href="https://laseruol.space/" target="_blank" rel="noreferrer" className="affiliation-link">Visit LASER ↗</a>
            </div>

            <div className="affiliation-card">
              <img src="/nrc_logo.png" alt="National Rocketry Championship Logo" className="affiliation-logo" />
              <h4>UKSEDS National Rocketry Championship (NRC)</h4>
              <p>
                We compete in the UKSEDS National Rocketry Championship, the premier national
                collegiate rocketry competition in the UK. The NRC challenges teams on overall
                vehicle performance, safety, innovation and documentation — giving our members
                invaluable experience in systems engineering, testing, and high-pressure
                mission execution. Participation in the NRC helps our team benchmark against
                other university groups and pushes our engineering standards higher each year.
              </p>
              <a href="https://ukseds.org/ignition/competitions/national-rocketry-championship/" target="_blank" rel="noreferrer" className="affiliation-link">View Competition ↗</a>
            </div>

            <div className="affiliation-card">
              <img src="/mach_logo.avif" alt="Mach-X Competition" className="affiliation-logo" />
              <h4>Mach‑X - EXO Events</h4>
              <p>
                Mach‑X is a high‑speed rocketry competition organised by EXO Events. Our team
                plans to enter the Mach‑X challenge to test high‑speed flight profiles, payload
                integration, and performance optimisation. Check the official event page for
                rules, dates, and entry information.
              </p>
              <a href="https://www.exo.events/mach-x" target="_blank" rel="noreferrer" className="affiliation-link">View Competition ↗</a>
            </div>
          </div>
        </div>

        <div className="engagement-section">
          <div className="engagement-container">
            <div className="engagement-text">
              <h3>Get Involved With Us</h3>
              <p>
                Whether you're a student, educator, or enthusiast, there are many ways to get involved:
              </p>
              <ul className="involvement-list">
                <li>Join our team as a member or volunteer</li>
                <li>Host us for a workshop at your school</li>
                <li>Request a campus tour or presentation</li>
                <li>Partner with us on STEM initiatives</li>
                <li>Attend our public launch events</li>
                <li>Follow our journey on social media</li>
              </ul>

                  <button type="button" className="contact-button" onClick={openContactModal}>
                    Contact Us
                  </button>
            </div>
          </div>
        </div>

            {isContactOpen && (
              <div className="contact-modal-overlay" onClick={closeContactModal}>
                <div
                  className="contact-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="contactModalTitle"
                  aria-describedby="contactModalDescription"
                  onClick={(event) => event.stopPropagation()}
                  ref={modalRef}
                  tabIndex={-1}
                >
                  <button type="button" className="contact-modal-close" onClick={closeContactModal} aria-label="Close contact form">
                    ×
                  </button>

                  <p className="contact-modal-eyebrow">Get in touch</p>
                  <h3 id="contactModalTitle">Contact Unity Rise</h3>
                  <p id="contactModalDescription" className="contact-modal-description">
                    Send us a message and we&apos;ll follow up. The form is frontend-only for now and
                    can be wired to EmailJS later without changing the layout.
                  </p>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form-grid">
                      <label className="contact-field">
                        <span>Name</span>
                        <input ref={nameInputRef} type="text" name="name" placeholder="Your name" required />
                      </label>

                      <label className="contact-field">
                        <span>Email</span>
                        <input type="email" name="email" placeholder="you@example.com" required />
                      </label>

                      <label className="contact-field contact-field-full">
                        <span>Subject</span>
                        <input type="text" name="subject" placeholder="How can we help?" required />
                      </label>

                      <label className="contact-field contact-field-full">
                        <span>Message</span>
                        <textarea name="message" rows="5" placeholder="Tell us a little about your enquiry" required />
                      </label>
                    </div>

                    {formStatus && <p className="contact-form-status" role="status">{formStatus}</p>}

                    <div className="contact-form-actions">
                      <button type="button" className="contact-secondary-button" onClick={closeContactModal}>
                        Cancel
                      </button>
                      <button type="submit" className="contact-submit-button">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
      </div>
    </section>
  )
}

export default Outreach

