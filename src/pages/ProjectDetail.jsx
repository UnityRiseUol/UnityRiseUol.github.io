import { useParams, Link } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  // Ideally this data lives in a separate file, but we'll keep it here for simplicity
  const projects = {
    "banana-split": { 
      name: "BANANA SPLIT", 
      year: "2024",
      status: "COMPLETED", 
      rank: "8th Place Overall",
      award: "🏆 Best Airframe Award",
      desc: "Our debut competition rocket with an apogee of 2120ft.",
    },
    "pulsar": { 
      name: "PULSAR", 
      year: "2025",
      status: "COMPLETED", 
      rank: "6th Place Overall",
      award: "🏆 Best Novel Recovery Method",
      desc: "Our second rocket, focusing on improved avionics with custom PCB and, more advanced structural design and a unique recovery system.",
    },
    "pl-26": { 
      name: "PL-26", 
      year: "2026",
      status: "IN PROGRESS", 
      rank: "Targeting Top 3",
      award: "Current Flagship",
      desc: "Our Next-gen rocket designed to improve on the lessons learned from our previous builds, aiming for a higher apogee with more complex engineering design.",
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

    </div>
  );
}

export default ProjectDetail;