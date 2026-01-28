import { Link } from "react-router-dom";
import { useState } from "react";

// Helper Component for the Zoom Effect
// This handles the hover animation so we don't have to copy-paste code 6 times
const GalleryImage = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      style={{ 
        height: "300px", 
        borderRadius: "10px", 
        overflow: "hidden", 
        position: "relative",
        cursor: "pointer" 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        src={src} 
        alt={alt} 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover", 
          transition: "transform 0.4s ease", // Smooth animation
          transform: hovered ? "scale(1.1)" : "scale(1.0)" // The Zoom Effect
        }} 
      />
      
      {/* Optional: Dark gradient on hover to make it feel premium */}
      <div style={{
        position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)", 
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s"
      }} />
    </div>
  );
};

function Home() {
  return (
    <div>
      
      {/* 1. HERO SECTION */}
      <div style={{ 
        textAlign: "center", 
        padding: "160px 20px", 
        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/hero_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderBottom: "none"
      }}>
        <h1 style={{ 
          fontSize: "clamp(3rem, 8vw, 5rem)", 
          marginBottom: "20px",
          background: "linear-gradient(90deg, #fff, #94a3b8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          UNITY RISE ROCKETRY
        </h1>
        <p style={{ 
          color: "var(--text-muted)", 
          fontSize: "1.3rem", 
          maxWidth: "700px", 
          margin: "0 auto 40px auto" 
        }}>
          University of Liverpool's Main Student Rocketry Team - Affiliated with LASER (Liverpool Association for Space Engineering and Research).
        </p>
        
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/projects" className="btn" style={{ background: "var(--accent)", color: "#0f172a", border: "none" }}>
            VIEW OUR PROJECTS
          </Link>
          <a href="https://laseruol.space/" target="_blank" rel="noreferrer" className="btn">
            VISIT LASER
          </a>
        </div>
      </div>

      {/* 2. AFFILIATIONS & COMPETITIONS */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>OUR MISSION</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "40px" }}>
          Unity Rise is a student-led engineering team dedicated to pushing the boundaries of collegiate rocketry. 
          From custom avionics to supersonic airframes, we provide hands-on aerospace experience.
        </p>
        
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {/* CARD 1: LASER */}
          <div style={{ flex: "1 1 300px", background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--accent)", borderRadius: "10px", padding: "30px 20px" }}>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--accent)", letterSpacing: "1px" }}>AFFILIATED WITH</p>
            <img src="/laser_logo.png" alt="LASER Logo" style={{ height: "80px", width: "auto", margin: "15px auto", display: "block" }} />
            <h3 style={{ margin: "10px 0", fontSize: "1.5rem" }}>LASER</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "20px" }}>Liverpool Association for Space Engineering Research</p>
            <a href="https://laseruol.space/" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "underline", fontWeight: "bold" }}>laseruol.space ↗</a>
          </div>

          {/* CARD 2: UKSEDS NRC */}
          <div style={{ flex: "1 1 300px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", padding: "30px 20px" }}>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#fbbf24", letterSpacing: "1px" }}>COMPETING IN</p>
            <img src="/nrc_logo.png" alt="UKSEDS Logo" style={{ height: "80px", width: "auto", margin: "15px auto", display: "block" }} />
            <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>NATIONAL ROCKETRY CHAMPIONSHIP</h3>
            <a href="https://ukseds.org/ignition/competitions/national-rocketry-championship/" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "underline", fontWeight: "bold", fontSize: "0.9rem" }}>View Competition ↗</a>
          </div>
        </div>
      </div>

      {/* 3. MEDIA GALLERY (UPDATED TO 2x3 GRID) */}
      <div style={{ background: "#0f172a", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ borderBottom: "2px solid var(--accent)", display: "inline-block", paddingBottom: "10px", marginBottom: "40px" }}>
            GALLERY
          </h2>
          
          <div style={{ 
            display: "grid", 
            // This forces 3 columns on large screens. On mobiles, it will auto-wrap.
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "20px" 
          }}>
            {/* ROW 1 */}
            <GalleryImage src="/gallery1.jpg" alt="Launch Day Prep" />
            <GalleryImage src="/gallery2.jpg" alt="Avionics Bay" />
            <GalleryImage src="/gallery3.jpg" alt="Liftoff" />
            
            {/* ROW 2 (I duplicated the images for now - replace these filenames when you have new photos!) */}
            <GalleryImage src="/gallery4.jpg" alt="Recovery System" />
            <GalleryImage src="/gallery5.jpg" alt="Team Photo" />
            <GalleryImage src="/gallery6.jpg" alt="Engine Test" />
          </div>
        </div>
      </div>

      {/* 4. VIDEO SECTION */}
      <div style={{ maxWidth: "1000px", margin: "60px auto", padding: "0 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "30px", textTransform: "uppercase" }}>WATCH THE TEAM HERE</h2>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", marginBottom: "100px" }}>
          <iframe src="https://www.youtube.com/embed/alMkTgpcnv4" title="Team Video" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} allowFullScreen />
        </div>
        
        <h2 style={{ marginBottom: "30px" }}>LAUNCH FOOTAGE</h2>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", marginBottom: "80px" }}>
          <iframe src="https://www.youtube.com/embed/IXtbekUnKpA" title="Rocket Launch Video" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} allowFullScreen />
        </div>
      </div>

      {/* 5. CONNECT FOOTER */}
      <div style={{ background: "var(--bg-card)", padding: "60px 20px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <h2 style={{ marginBottom: "10px" }}>JOIN THE MISSION</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "40px" }}>Follow our progress or view our open-source flight code.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          
          {/* INSTAGRAM LINK (NOW FIRST) */}
          <a href="https://www.instagram.com/uol.unity.rise/?hl=en-gb" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "20px 40px", borderRadius: "10px", color: "white" }}>
              <h3 style={{ margin: 0 }}>INSTAGRAM</h3>
            </div>
          </a>

          {/* GITHUB LINK (NOW SECOND) */}
          <a href="https://github.com/UnityRiseUol" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "20px 40px", borderRadius: "10px", color: "white" }}>
              <h3 style={{ margin: 0 }}>GITHUB</h3>
            </div>
          </a>
          
        </div>
      </div>

    </div>
  );
}

export default Home;