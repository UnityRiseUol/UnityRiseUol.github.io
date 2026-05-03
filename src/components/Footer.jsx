import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Unity Rise</h3>
            <p>Engineering the future of aerospace at the University of Liverpool</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-icon">f</a>
              <a href="#" aria-label="Twitter" className="social-icon">𝕏</a>
              <a href="#" aria-label="Instagram" className="social-icon">📷</a>
              <a href="#" aria-label="LinkedIn" className="social-icon">in</a>
              <a href="#" aria-label="YouTube" className="social-icon">▶</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#sponsorships">Sponsorships</a></li>
              <li><a href="#outreach">Outreach</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><a href="#">Join Our Team</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Host a Workshop</a></li>
              <li><a href="#">Sponsor Us</a></li>
              <li><a href="#">Attend an Event</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <p className="contact-info">
              <strong>Email:</strong><br/>
              <a href="mailto:unityriseuol@gmail.com">unityriseuol@gmail.com</a>
            </p>
            <p className="contact-info">
              <strong>Location:</strong><br/>
              Department of Electrical Engineering and Electronics<br/>
              University of Liverpool<br/>
              9 Brownlow Hill <br/>
              Liverpool, UK <br/>
              L69 3GJ
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Unity Rise - University of Liverpool Rocket Team. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

