import { useParams, Link } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams(); // Grabs "pulsar" from the URL

  // Ideally this data lives in a separate file, but we'll keep it here for simplicity
  const projects = {
    "banana-split": { 
      name: "BANANA SPLIT", 
      year: "2024",
      status: "COMPLETED", 
      rank: "8th Place Overall",
      award: "🏆 Best Airframe Award",
      desc: "Our debut competition rocket featuring a custom composite layup and modular payload bay. Designed to validate our manufacturing processes.",
      imgRocket: "https://via.placeholder.com/300x500?text=Banana+Split+Launch", 
      imgAvionics: "https://via.placeholder.com/300x500?text=Avionics+Stack"
    },
    "pulsar": { 
      name: "PULSAR", 
      year: "2025",
      status: "COMPLETED", 
      rank: "6th Place Overall",
      award: "🏆 Best Novel Recovery Method",
      desc: "High-altitude vehicle demonstrating a new reefing parachute system for controlled descent. This rocket pushed our altitude record by 20%.",
      imgRocket: "/pulsar_rocket.png", 
      imgAvionics: "/pulsar_avionics.png"
    },
    "pl-26": { 
      name: "PL-26", 
      year: "2026",
      status: "IN PROGRESS", 
      rank: "Targeting Top 3",
      award: "Current Flagship",
      desc: "Next-gen supersonic vehicle designed for maximum apogee with active stabilization control using adjustable canards.",
      imgRocket: "https://via.placeholder.com/300x500?text=PL-26+CAD+Model", 
      imgAvionics: "https://via.placeholder.com/300x500?text=Flight+Computer+V3"
    }
  };

  const project = projects[id];

  if (!project) return <div style={{color: "white", padding: "50px"}}>Project not found</div>;

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <Link to="/projects" style={{ color: "var(--accent)", textDecoration: "none", marginBottom: "20px", display: "inline-block" }}>
        ← BACK TO FLEET
      </Link>
      
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>{project.name}</h1>
      <div style={{ color: "#fbbf24", fontSize: "1.2rem", marginBottom: "30px" }}>{project.award}</div>

      <div style={{ background: "var(--bg-card)", padding: "30px", borderRadius: "15px", marginBottom: "40px" }}>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>{project.desc}</p>
        <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
             <span style={{ background: "rgba(255,255,255,0.1)", padding: "5px 10px", borderRadius: "5px" }}>Rank: {project.rank}</span>
             <span style={{ background: "rgba(255,255,255,0.1)", padding: "5px 10px", borderRadius: "5px" }}>Year: {project.year}</span>
        </div>
      </div>

      {/* DETAILED IMAGES SECTION */}
      <h3 style={{ borderBottom: "1px solid #333", paddingBottom: "10px", marginBottom: "20px" }}>TECHNICAL SYSTEMS</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", height: "500px" }}>
        {/* Rocket Image */}
        <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden" }}>
           <img src={project.imgRocket} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
           <span style={{ position: "absolute", bottom: "10px", left: "10px", background: "rgba(0,0,0,0.8)", padding: "5px 10px", borderRadius: "5px" }}>VEHICLE</span>
        </div>
        {/* Avionics Image */}
        <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden" }}>
           <img src={project.imgAvionics} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
           <span style={{ position: "absolute", bottom: "10px", left: "10px", background: "rgba(0,0,0,0.8)", padding: "5px 10px", borderRadius: "5px" }}>AVIONICS</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;