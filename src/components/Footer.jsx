import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';

const CONTACT_EMAIL = 'unityriseuol@gmail.com';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    { name: 'Unity Rise on Instagram', url: 'https://instagram.com/uol.unity.rise', icon: <FaInstagram /> },
    { name: 'LASER on Instagram', url: 'https://www.instagram.com/laser_uol/', icon: <FaInstagram /> },
    { name: 'Unity Rise on TikTok', url: 'https://tiktok.com/@unity.rise', icon: <FaTiktok /> },
    { name: 'Unity Rise on LinkedIn', url: 'https://www.linkedin.com/company/unity-rise/home/', icon: <FaLinkedin /> },
    { name: 'LASER on LinkedIn', url: 'https://www.linkedin.com/company/laser-liverpool/home/', icon: <FaLinkedin /> },
    { name: 'Unity Rise on YouTube', url: 'https://youtube.com/@unityriseuol?si=-dAl0cNml46-dW6S', icon: <FaYoutube /> },
  ];

  const quickLinks = [
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Missions', to: '/missions' },
    { name: 'Blog', to: '/blog' },
    { name: 'Sponsorships', to: '/sponsorships' },
    { name: 'Outreach', to: '/#outreach' },
    { name: 'Contact', to: '/#contact' },
  ];

  const getInvolved = [
    { name: 'Join Our Team', href: `mailto:${CONTACT_EMAIL}?subject=Joining%20Unity%20Rise` },
    { name: 'Volunteer', href: `mailto:${CONTACT_EMAIL}?subject=Volunteering%20with%20Unity%20Rise` },
    { name: 'Host a Workshop', href: `mailto:${CONTACT_EMAIL}?subject=Hosting%20a%20Workshop` },
    { name: 'Sponsor Us', to: '/sponsorships' },
    { name: 'Attend an Event', to: '/#outreach' },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Unity Rise</h3>
            <p>Engineering the future of aerospace at the University of Liverpool</p>
            <div className="social-links">
              {socialMedia.map((social) => (
                <a key={social.name} href={social.url} aria-label={social.name} className="social-icon" target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}><Link to={link.to}>{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              {getInvolved.map((link) => (
                <li key={link.name}>
                  {link.to
                    ? <Link to={link.to}>{link.name}</Link>
                    : <a href={link.href}>{link.name}</a>}
                </li>
              ))}
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
  );
}

export default Footer;