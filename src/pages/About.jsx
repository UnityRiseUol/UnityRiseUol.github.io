import { Link } from "react-router-dom";

function About() {
  // UPDATED TEAM LIST
  const teamMembers = [
    { name: "Inga Panko", role: "Team / Aerodynamics Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Thiruwaran Kalvin", role: "Vice Team / Ground Station & Payload Lead", degree: "Computer Science", year: "2nd Year" },
    { name: "Juny Suh", role: "Propulsion / Simulations Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Hildah Namulondo", role: "CAD Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Leah Shibin", role: "CAD / Materials and Manufacturing", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "A'isha Ayyub", role: "Aerodynamics", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Franciszek Boczar", role: "Recovery Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Sanjo Peeter Silijan", role: "Recovery", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Joseph Wood", role: "Electronics / Avionics Lead", degree: "Avionic Systems", year: "3rd Year" },
    { name: "Adam Smart", role: "Electronics / Programming", degree: "Computer Science", year: "2nd Year" },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ borderBottom: "2px solid var(--accent)", display: "inline-block", paddingBottom: "10px", marginBottom: "30px" }}>
        About The Team
      </h2>
      
      {/* Description Box */}
      <div style={{ background: "var(--bg-card)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", marginBottom: "40px" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          Unity Rise is a multidisciplinary team of engineering students dedicated to designing, building, and launching model rockets.
        </p>
        <p style={{ color: "var(--text-muted)" }}>
          Founded in 2023, as a project team within LASER, our mission is to provide hands-on experience to university students and compete in the UKSEDS National Rocketry Championship. We design and build rockets from the ground up, focusing on innovation and performance, building our own avionics and airframes from scratch.
        </p>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h3 style={{ marginBottom: "20px" }}>Meet the Team</h3>
        
        {/* TEAM IMAGE */}
        <div style={{ marginBottom: "40px", borderRadius: "15px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
          <img 
            src="/team.jpg" 
            alt="The Unity Rise Team" 
            // Added slight scale to help hide minor borders, but cropping the file is best!
            style={{ width: "100%", display: "block", objectFit: "cover", transform: "scale(1.01)" }} 
          />
        </div>

        {/* TEAM TABLE */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.05)", borderBottom: "2px solid var(--accent)" }}>
                <th style={{ padding: "15px", color: "white" }}>Name</th>
                <th style={{ padding: "15px", color: "white" }}>Role</th>
                <th style={{ padding: "15px", color: "white" }}>Degree Program</th>
                <th style={{ padding: "15px", color: "white" }}>Year</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={index} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <td style={{ padding: "15px", color: "var(--text-muted)" }}>{member.name}</td>
                  <td style={{ padding: "15px", color: "#fbbf24", fontWeight: "bold" }}>{member.role}</td>
                  <td style={{ padding: "15px", color: "var(--text-muted)" }}>{member.degree}</td>
                  <td style={{ padding: "15px", color: "var(--text-muted)" }}>{member.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default About;