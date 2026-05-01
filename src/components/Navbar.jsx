import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css"; // <--- Import the CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
        <img
          src={isDark ? "/ur_logo.png" : "/ur_logo_black.png"}
          alt="Unity Rise Logo"
          className="logo-img"
        />
        <span className="logo-text">UNITY RISE</span>
      </Link>

      {/* Right side container for buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px", marginLeft: "auto" }}>
        {/* Theme Toggle Slider - Desktop Only */}
        <button
          className="theme-toggle-slider"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className="slider-track">
            <div className={`slider-thumb ${isDark ? "dark" : "light"}`}>
              {isDark ? (
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </div>
          </div>
        </button>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar" style={{ transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }}></span>
          <span className="bar" style={{ opacity: isOpen ? 0 : 1 }}></span>
          <span className="bar" style={{ transform: isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}></span>
        </button>
      </div>

      {/* Navigation Links */}
      {/* We add the class "open" if isOpen is true */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/about" className="nav-link" onClick={closeMenu}>ABOUT</Link>
        <Link to="/projects" className="nav-link" onClick={closeMenu}>PROJECTS</Link>
        <Link to="/blog" className="nav-link" onClick={closeMenu}>BLOG</Link>
        <Link to="/outreach" className="nav-link" onClick={closeMenu}>OUTREACH</Link>
        <Link to="/sponsorships" className="nav-link" onClick={closeMenu}>SPONSORSHIPS</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>CONTACT US</Link>

        {/* Theme Toggle Slider - Mobile Only (at bottom of menu) */}
        <button
          className="theme-toggle-slider-mobile"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className="slider-track">
            <div className={`slider-thumb ${isDark ? "dark" : "light"}`}>
              {isDark ? (
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </div>
          </div>
        </button>
      </div>
      
    </nav>
  );
}

export default Navbar;