import './About.css'

function About() {
  return (
    <section className="about">
      <div className="section-container">
        <h2 className="section-title">About Unity Rise</h2>

        <div className="about-content">
          <div className="about-item">
            <div className="about-icon">🚀</div>
            <h3>Who We Are</h3>
            <p>
              Unity Rise is the official high-powered rocket team at the University of Liverpool.
              We're a team of passionate engineers and space enthusiasts dedicated to pushing the
              boundaries of aerospace technology through design, innovation, and competition.
            </p>
          </div>

          <div className="about-item">
            <div className="about-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To design and build high-performance rockets that compete at the national and
              international level, while fostering a community of engineers committed to
              excellence, innovation, and the future of aerospace.
            </p>
          </div>

          <div className="about-item">
            <div className="about-icon">⚙️</div>
            <h3>What We Do</h3>
            <p>
              We design custom rockets, engineer advanced avionics systems, test propulsion
              components, and compete in prestigious competitions including IREC and ROCKETRY.uk.
              Our multidisciplinary team works across structures, avionics, propulsion, and recovery.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15</div>
            <div className="stat-label">Active Rockets</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Competitions</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10km+</div>
            <div className="stat-label">Max Altitude</div>
          </div>
        </div>

        <div className="gallery-section">
          <h3 className="gallery-title">Gallery</h3>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="gallery-item">
                <img src={`/gallery${num}.jpg`} alt={`Gallery image ${num}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

