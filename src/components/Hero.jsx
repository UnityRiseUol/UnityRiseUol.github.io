import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Unity Rise</h1>
          <p className="hero-subtitle">The University of Liverpool's Premier Rocket Team</p>
          <p className="hero-description">
            Engineering the future of aerospace. We design, build, and launch high-powered model rockets
            and compete at national and international competitions.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button primary">View Our Projects</a>
            <a href="#contact" className="cta-button secondary">Get Involved</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/rocket.png" alt="Unity Rise" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero

