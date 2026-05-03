import './About.css'
import { FaRocket, FaAward, FaCogs } from 'react-icons/fa'

function About() {
  return (
    <section className="about">
      <div className="section-container">
        <h2 className="section-title">About Unity Rise</h2>

        <div className="about-content">
          <div className="about-item">
            <div className="about-icon"><FaRocket /></div>
            <h3>Who We Are</h3>
            <p>
              Unity Rise is the official rocketry society at the University of Liverpool.
              We're a group of students interested in building and launching rockets, and we compete
              in competitions like the UKSEDS National Rocketry Championship. Founded through LASER
              (Liverpool Association for Space Engineering & Research), we work on designing and building
              rockets to develop practical engineering skills.
            </p>
          </div>

          <div className="about-item">
            <div className="about-icon"><FaAward /></div>
            <h3>Our Mission</h3>
            <p>
              Our aim is to learn through hands-on projects: designing and building rockets to
              meet typical competition targets (around 2500ft). While safety and practicality
              remain priorities, we design custom airframes and develop in-house avionics systems
              tailored to each project - giving members real experience in system design,
              integration and testing. We compete every year in the National Rocketry
              Championship (NRC) and focus on providing members with practical experience
              and a supportive environment for learning.
            </p>
          </div>

          <div className="about-item">
            <div className="about-icon"><FaCogs /></div>
            <h3>What We Do</h3>
            <p>
              We build student-scale rockets that combine custom-built airframes with in-house
              avionics for flight data, tracking and telemetry. Projects span structures,
              propulsion, avionics and recovery, and are student-led with an emphasis on safe
              testing, iterative design and preparing vehicles for the National Rocketry
              Championship. Members gain practical skills through design,
              prototyping, ground testing and launch days.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2</div>
            <div className="stat-label">Successful Launches</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6th</div>
            <div className="stat-label">Highest Finish</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2500 ft</div>
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

