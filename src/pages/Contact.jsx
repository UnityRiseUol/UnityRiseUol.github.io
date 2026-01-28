import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS IDS
    const serviceID = "service_oyv90hj";
    const templateID = "template_9z6fedv"; 
    const publicKey = "utb7VAii84AuYVYGm";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus("success");
          e.target.reset(); // Clear the form
      }, (error) => {
          console.log(error.text);
          setStatus("error");
      });
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "100px 20px" }}>
      <h2 style={{ borderBottom: "2px solid var(--accent)", display: "inline-block", paddingBottom: "10px", marginBottom: "40px" }}>
        Contact Us
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
        
        {/* Left Column: Info */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>Get in Touch</h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "20px", lineHeight: "1.6" }}>
            Interested in sponsorship, or learning more about the team? 
            Fill out the form or email us directly.
          </p>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "20px", borderRadius: "10px" }}>
            <strong>Direct Email:</strong><br />
            <span style={{ color: "var(--accent)" }}>unityriseuol@gmail.com</span>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div style={{ background: "var(--bg-card)", padding: "30px", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Name Input */}
            <div>
              <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem" }}>Name</label>
              <input 
                type="text" 
                name="user_name" // Must match EmailJS template variable
                required 
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #333", background: "#0f172a", color: "white" }}
              />
            </div>

            {/* Email Input */}
            <div>
              <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem" }}>Email</label>
              <input 
                type="email" 
                name="user_email" // Must match EmailJS template variable
                required 
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #333", background: "#0f172a", color: "white" }}
              />
            </div>

            {/* Message Input */}
            <div>
              <label style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem" }}>Message</label>
              <textarea 
                name="message" // Must match EmailJS template variable
                required 
                rows="5"
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #333", background: "#0f172a", color: "white", resize: "vertical" }}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status === "sending"}
              className="btn"
              style={{ 
                background: status === "sending" ? "grey" : "var(--accent)", 
                color: "#0f172a", 
                border: "none", 
                cursor: status === "sending" ? "not-allowed" : "pointer" 
              }}
            >
              {status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE"}
            </button>

            {/* Success/Error Messages */}
            {status === "success" && <p style={{ color: "#4ade80", marginTop: "10px" }}>Message received. Over and out.</p>}
            {status === "error" && <p style={{ color: "#f87171", marginTop: "10px" }}>Transmission failed. Please try again.</p>}

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;