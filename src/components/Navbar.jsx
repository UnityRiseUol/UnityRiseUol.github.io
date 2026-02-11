import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // <--- Import the CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      
      {/* Logo Section */}
      <Link to="/" className="logo-container" onClick={closeMenu}>
        <img src="/ur_logo.png" alt="Unity Rise Logo" className="logo-img" />
        <span className="logo-text">UNITY RISE</span>
      </Link>

      {/* Hamburger Icon (Visible only on Mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar" style={{ transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }}></span>
        <span className="bar" style={{ opacity: isOpen ? 0 : 1 }}></span>
        <span className="bar" style={{ transform: isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}></span>
      </button>

      {/* Navigation Links */}
      {/* We add the class "open" if isOpen is true */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/about" className="nav-link" onClick={closeMenu}>ABOUT</Link>
        <Link to="/projects" className="nav-link" onClick={closeMenu}>PROJECTS</Link>
        <Link to="/outreach" className="nav-link" onClick={closeMenu}>OUTREACH</Link>
        <Link to="/sponsorships" className="nav-link" onClick={closeMenu}>SPONSORS</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>CONTACT US</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;