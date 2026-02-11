import { Link } from "react-router-dom";

function Outreach() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ borderBottom: "2px solid var(--accent)", display: "inline-block", paddingBottom: "10px", marginBottom: "40px" }}>
        Outreach
      </h2>

      <div style={{ marginBottom: "60px" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>INSPIRING THE NEXT GENERATION</h3>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-muted)", marginBottom: "30px" }}>
          At Unity Rise and LASER, our mission extends beyond the competition. We are dedicated to engaging with our local community 
          and inspiring students to pursue careers in Science, Technology, Engineering, and Mathematics (STEM).
        </p>
        <div style={{ 
          background: "var(--bg-card)", 
          padding: "30px", 
          borderRadius: "15px", 
          border: "1px solid rgba(255,255,255,0.05)" 
        }}>
          <h4 style={{ color: "white", fontSize: "1.5rem", marginBottom: "15px" }}>School Visits & Workshops</h4>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
            Our team plans to regularly visits schools, Scout groups and Girl Guide groups in the Liverpool area to conduct workshops on amateur rocketry, engineering and space exploration. This includes time to look at real working parts, circuit boards and previous launch rockets, as well as age appropriate activites to aimed to be fun , educational and inspiring for students.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        <div style={{ background: "rgba(56, 189, 248, 0.05)", border: "1px solid var(--accent)", borderRadius: "10px", padding: "30px" }}>
          <h3 style={{ marginBottom: "15px" }}>Request a Visit</h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
            Interested in having Unity Rise visit your school or event? We'd love to hear from you.
          </p>
          <Link to="/contact" className="btn">CONTACT US</Link>
        </div>
        
        <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "30px" }}>
          <h3 style={{ marginBottom: "15px" }}>Resources</h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
            Access our open-source educational materials and rocketry guides for beginners.
          </p>
          <span className="btn" style={{ borderColor: "rgba(255,255,255,0.5)", color: "rgba(255,255,255,0.5)", cursor: "default" }}>COMING SOON</span>
        </div>
      </div>
    </div>
  );
}

export default Outreach;