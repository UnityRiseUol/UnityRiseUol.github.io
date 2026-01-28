import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      
      {/* 1. HERO SECTION */}
      <div style={{ 
        textAlign: "center", 
        padding: "100px 20px", 
        background: "linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
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
          Designing, building, and launching high-powered rockets at the University of Liverpool.
        </p>
        
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/projects" className="btn" style={{ background: "var(--accent)", color: "#0f172a", border: "none" }}>
            VIEW OUR FLEET
          </Link>
          <a href="https://laseruol.space/" target="_blank" rel="noreferrer" className="btn">
            VISIT LASER
          </a>
        </div>
      </div>

      {/* 2. AFFILIATIONS & COMPETITIONS */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>ENGINEERING THE FUTURE</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "40px" }}>
          Unity Rise is a student-led engineering team dedicated to pushing the boundaries of collegiate rocketry. 
          From custom avionics to supersonic airframes, we provide hands-on aerospace experience.
        </p>
        
        {/* CARDS CONTAINER */}
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          
          {/* CARD 1: LASER */}
          <div style={{ 
            flex: "1 1 300px", 
            background: "rgba(56, 189, 248, 0.05)", 
            border: "1px solid var(--accent)", 
            borderRadius: "10px", 
            padding: "30px 20px"
          }}>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--accent)", letterSpacing: "1px" }}>
              AFFILIATED WITH
            </p>

            <img 
              src="/laser_logo.png" 
              alt="LASER Logo" 
              style={{ height: "80px", width: "auto", margin: "15px auto", display: "block" }} 
            />

            <h3 style={{ margin: "10px 0", fontSize: "1.5rem" }}>LASER</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "20px" }}>
              Liverpool Association for Space Engineering Research
            </p>
            <a href="https://laseruol.space/" target="_blank" rel="noreferrer" style={{ 
              color: "white", textDecoration: "underline", fontWeight: "bold" 
            }}>
              laseruol.space ↗
            </a>
          </div>

          {/* CARD 2: UKSEDS NRC */}
          <div style={{ 
            flex: "1 1 300px", 
            background: "rgba(255, 255, 255, 0.05)", 
            border: "1px solid rgba(255,255,255,0.2)", 
            borderRadius: "10px", 
            padding: "30px 20px"
          }}>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#fbbf24", letterSpacing: "1px" }}>
              COMPETING IN
            </p>
            
            <img 
              src="/nrc_logo.png" 
              alt="UKSEDS Logo" 
              style={{ height: "80px", width: "auto", margin: "15px auto", display: "block" }} 
            />
            
            <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>NATIONAL ROCKETRY CHAMPIONSHIP</h3>
            
            <a href="https://ukseds.org/ignition/competitions/national-rocketry-championship/" target="_blank" rel="noreferrer" style={{ 
              color: "white", textDecoration: "underline", fontWeight: "bold", fontSize: "0.9rem"
            }}>
              View Competition ↗
            </a>
          </div>

        </div>
      </div>

      {/* 3. MEDIA GALLERY */}
      <div style={{ background: "#0f172a", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ borderBottom: "2px solid var(--accent)", display: "inline-block", paddingBottom: "10px", marginBottom: "40px" }}>
            FROM THE LAUNCHPAD
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            <div style={{ height: "300px", borderRadius: "10px", overflow: "hidden" }}>
              <img src="/launch1.jpg" alt="Launch Day" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ height: "300px", borderRadius: "10px", overflow: "hidden" }}>
              <img src="/rocket_detail.jpg" alt="Avionics" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ height: "300px", borderRadius: "10px", overflow: "hidden" }}>
               <img src="/launch2.jpg" alt="Liftoff" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>

      {/* 4. VIDEO SECTION */}
      <div style={{ maxWidth: "1000px", margin: "60px auto", padding: "0 20px", textAlign: "center" }}>

        {/* VIDEO 2: TEAM (New Addition) */}
        <h2 style={{ marginBottom: "30px", textTransform: "uppercase" }}>WATCH THE TEAM HERE</h2>
        <div style={{ 
          position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", 
          borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          marginBottom: "100px"
        }}>
          <iframe 
            src="https://www.youtube.com/embed/alMkTgpcnv4" 
            title="Team Video"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            allowFullScreen 
          />
        </div>
        
        {/* VIDEO 1: LAUNCH (Converted Short) */}
        <h2 style={{ marginBottom: "30px" }}>LAUNCH FOOTAGE</h2>
        <div style={{ 
          position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", 
          borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          marginBottom: "80px" // Adds spacing between the two videos
        }}>
          <iframe 
            src="https://www.youtube.com/embed/IXtbekUnKpA" 
            title="Rocket Launch Video"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            allowFullScreen 
          />
        </div>


      </div>

      {/* 5. CONNECT FOOTER */}
      <div style={{ background: "var(--bg-card)", padding: "60px 20px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <h2 style={{ marginBottom: "10px" }}>JOIN THE MISSION</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "40px" }}>Follow our progress or view our open-source flight code.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          <a href="https://github.com/UnityRiseUol" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "20px 40px", borderRadius: "10px", color: "white" }}>
              <h3 style={{ margin: 0 }}>GITHUB</h3>
            </div>
          </a>
          <a href="https://www.instagram.com/uol.unity.rise/?hl=en-gb" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "20px 40px", borderRadius: "10px", color: "white" }}>
              <h3 style={{ margin: 0 }}>INSTAGRAM</h3>
            </div>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Home;