import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    height: "var(--nav-height)",
    background: "rgba(15, 23, 42, 0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const linkStyle = {
    color: "var(--text-main)",
    textDecoration: "none",
    fontFamily: "'Orbitron', sans-serif",
    marginLeft: "30px",
    fontSize: "0.9rem",
    transition: "color 0.2s"
  };

  // Flexbox container for Logo + Text
  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none", // Removes underline from the text
    gap: "15px"             // Space between Logo and Text
  };

  const logoImgStyle = {
    height: "50px",
    width: "auto",
  };

  // "NASA Style" Font settings
  const logoTextStyle = {
    fontFamily: "'Orbitron', sans-serif", // The Sci-Fi font
    fontWeight: "700",                    // Bold
    fontSize: "1.5rem",
    color: "#ffffff",                     // Pure white text
    letterSpacing: "2px",                 // Spaced out like the NASA worm
    textTransform: "uppercase"            // Force CAPS
  };

  return (
    <nav style={navStyle}>
      
      {/* Logo Section */}
      <Link to="/" style={logoContainerStyle}>
        <img src="/ur_logo.png" alt="Unity Rise Logo" style={logoImgStyle} />
        <span style={logoTextStyle}>UNITY RISE</span>
      </Link>

      {/* NAVIGATION LINKS */}
      <div>
        <Link to="/about" style={linkStyle}>ABOUT</Link>
        <Link to="/projects" style={linkStyle}>PROJECTS</Link>
        {/* NEW SPONSORSHIPS LINK */}
        <Link to="/sponsorships" style={linkStyle}>SPONSORS</Link>
        <Link to="/contact" style={linkStyle}>CONTACT US</Link>
      </div>
    </nav>
  );
}

export default Navbar;