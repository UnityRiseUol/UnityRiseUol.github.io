function About() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ borderBottom: "2px solid var(--accent)", display: "inline-block", paddingBottom: "10px", marginBottom: "30px" }}>
        About The Team
      </h2>
      
      <div style={{ background: "var(--bg-card)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          Unity Rise is a multidisciplinary team of engineering students dedicated to designing, building, and launching high-powered rockets.
        </p>
        <p style={{ color: "var(--text-muted)" }}>
          Founded in 2026, our mission is to provide hands-on aerospace experience to university students and compete in national rocketry challenges. We specialize in custom avionics, composite airframes, and propulsion analysis.
        </p>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h3>Meet the Leads</h3>
        <p style={{ color: "var(--text-muted)", marginTop: "10px" }}>
          (Team photos and bios coming soon)
        </p>
      </div>
    </div>
  );
}

export default About;