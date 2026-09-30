import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const machXLaunchDate = new Date('2027-07-01T00:00:00');
const nextLaunchDate = new Date('2027-06-17T00:00:00');

function getTimeRemaining(targetDate) {
  const total = targetDate.getTime() - Date.now();

  if (total <= 0) {
    return null;
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function Hero() {
  const [machXTime, setMachXTime] = useState(() => getTimeRemaining(machXLaunchDate));
  const [nextLaunchTime, setNextLaunchTime] = useState(() => getTimeRemaining(nextLaunchDate));

  useEffect(() => {
    const updateCountdowns = () => {
      setMachXTime(getTimeRemaining(machXLaunchDate));
      setNextLaunchTime(getTimeRemaining(nextLaunchDate));
    };

    const timerId = window.setInterval(updateCountdowns, 1000);

    return () => window.clearInterval(timerId);
  }, []);

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

          <div className="hero-countdown" aria-label="Countdown to our Mach-X launch on 1 July 2027">
            <p className="hero-countdown-label">MACH-X Next Launch T-Minus:</p>
            {machXTime ? (
              <div className="countdown-grid">
                <div className="countdown-item">
                  <span className="countdown-value">{String(machXTime.days).padStart(2, '0')}</span>
                  <span className="countdown-unit">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(machXTime.hours).padStart(2, '0')}</span>
                  <span className="countdown-unit">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(machXTime.minutes).padStart(2, '0')}</span>
                  <span className="countdown-unit">Minutes</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(machXTime.seconds).padStart(2, '0')}</span>
                  <span className="countdown-unit">Seconds</span>
                </div>
              </div>
            ) : (
              <p className="countdown-live">Launch day is here — see you on 1 July 2027.</p>
            )}
          </div>

          <div className="hero-countdown" aria-label="Countdown to our next launch on 17 June 2027">
            <p className="hero-countdown-label">NRC Next Launch T-Minus:</p>
            {nextLaunchTime ? (
              <div className="countdown-grid">
                <div className="countdown-item">
                  <span className="countdown-value">{String(nextLaunchTime.days).padStart(2, '0')}</span>
                  <span className="countdown-unit">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(nextLaunchTime.hours).padStart(2, '0')}</span>
                  <span className="countdown-unit">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(nextLaunchTime.minutes).padStart(2, '0')}</span>
                  <span className="countdown-unit">Minutes</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-value">{String(nextLaunchTime.seconds).padStart(2, '0')}</span>
                  <span className="countdown-unit">Seconds</span>
                </div>
              </div>
            ) : (
              <p className="countdown-live">Launch day is here — see you on 17 June 2027.</p>
            )}
          </div>

          <div className="hero-cta">
            <Link to="/missions" className="cta-button primary">View Our Missions</Link>
            <a href="#contact" className="cta-button secondary">Get Involved</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/rocket.png" alt="Unity Rise" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;