import { useEffect, useState } from 'react'
import './Hero.css'

const launchDate = new Date('2026-06-17T00:00:00')

function getTimeRemaining() {
  const total = launchDate.getTime() - Date.now()

  if (total <= 0) {
    return null
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((total / (1000 * 60)) % 60)
  const seconds = Math.floor((total / 1000) % 60)

  return { days, hours, minutes, seconds }
}

function Hero() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining)

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimeRemaining(getTimeRemaining())
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [])

  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Unity Rise</h1>
          <p className="hero-subtitle">The University of Liverpool's Rocket Team</p>
          <p className="hero-description">
            We design, build, and launch model rockets as part of the UKSEDS National Rocketry Championship,
            and Mach-X Rocketry Championship in the coming year.
          </p>
          <div className="hero-countdown" aria-label="Countdown to our next launch on 17 June 2026">
            <p className="hero-countdown-label">Next launch</p>
            {timeRemaining ? (
              <div className="countdown-grid" role="timer" aria-live="polite">
                <div className="countdown-item">
                  <span className="countdown-value">{String(timeRemaining.days).padStart(2, '0')}</span>
                  <span className="countdown-unit">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(timeRemaining.hours).padStart(2, '0')}</span>
                  <span className="countdown-unit">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(timeRemaining.minutes).padStart(2, '0')}</span>
                  <span className="countdown-unit">Minutes</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(timeRemaining.seconds).padStart(2, '0')}</span>
                  <span className="countdown-unit">Seconds</span>
                </div>
              </div>
            ) : (
              <p className="countdown-live">Launch day is here — see you on 17 June 2026.</p>
            )}
          </div>
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

