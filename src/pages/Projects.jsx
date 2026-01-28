import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    { 
      id: "banana-split", 
      name: "BANANA SPLIT", 
      status: "COMPLETED // 2023-24", 
      rank: "8th Place Overall",
      img: "/banana_split.jpg" 
    },
    { 
      id: "pulsar",
      name: "PULSAR", 
      status: "COMPLETED // 2024-25", 
      rank: "6th Place Overall",
      img: "/pulsar_launch_day.png" 
    },
    { 
      id: "pl-26",
      name: "PL-26", 
      status: "IN PROGRESS // 2025-26", 
      rank: "Targeting Top 3",
      img: "/PL26_CAD.png" 
    }
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ borderBottom: "2px solid var(--accent)", display: "inline-block", paddingBottom: "10px", marginBottom: "40px" }}>
        Mission Log
      </h2>

      {/* Grid Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        {projects.map((p) => (
          <Link to={`/projects/${p.id}`} key={p.id} style={{ textDecoration: "none" }}>
            <div style={{
              background: "var(--bg-card)",
              borderRadius: "15px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(56, 189, 248, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              {/* Image Section */}
              <div style={{ height: "220px", overflow: "hidden", flexShrink: 0 }}>
                <img 
                  src={p.img} 
                  alt={p.name} 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    objectPosition: "center",
                    transform: "scale(1.02)" 
                  }} 
                />
              </div>

              {/* Content Section */}
              <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: "bold", textTransform: "uppercase" }}>
                   {p.status}
                </div>
                <h3 style={{ color: "white", fontSize: "1.4rem", margin: "5px 0" }}>{p.name}</h3>
                <div style={{ color: "#fbbf24", fontSize: "1rem", fontWeight: "bold" }}>
                  {p.rank}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;