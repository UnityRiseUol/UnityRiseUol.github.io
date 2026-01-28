import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ 
      background: "#020617", // Very dark blue (darker than main bg)
      borderTop: "1px solid rgba(255,255,255,0.05)", 
      padding: "60px 20px 20px", 
      color: "#94a3b8",
      marginTop: "auto" // Pushes to bottom if page is short
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
        
        {/* Column 1: Brand Info */}
        <div>
          <h3 style={{ color: "white", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>Unity Rise</h3>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
            University of Liverpool's Main Student Rocketry Team - Affiliated with LASER (Liverpool Association for Space Engineering and Research).
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 style={{ color: "white", marginBottom: "20px", textTransform: "uppercase" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><Link to="/" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="white"} onMouseOut={e=>e.target.style.color="inherit"}>Home</Link></li>
            <li><Link to="/projects" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="white"} onMouseOut={e=>e.target.style.color="inherit"}>Mission Log</Link></li>
            <li><a href="https://laseruol.space/" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="white"} onMouseOut={e=>e.target.style.color="inherit"}>LASER</a></li>
            <li><Link to="/contact" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="white"} onMouseOut={e=>e.target.style.color="inherit"}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Address */}
        <div>
          <h4 style={{ color: "white", marginBottom: "20px", textTransform: "uppercase" }}>Contact</h4>
          <p style={{ fontSize: "0.9rem", marginBottom: "15px" }}>
            <strong style={{ color: "white" }}>Email:</strong><br />
            unityriseuol@gmail.com {/* Replace with real email */}
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            <strong style={{ color: "white" }}>Address:</strong><br />
            Department of Electrical Engineering and Electronics<br />
            University of Liverpool<br />
            9 Brownlow Hill, Liverpool<br />
            L69 3GJ, UK
          </p>
        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "50px", paddingTop: "20px", fontSize: "0.8rem" }}>
        &copy; {new Date().getFullYear()} Unity Rise Rocketry. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;