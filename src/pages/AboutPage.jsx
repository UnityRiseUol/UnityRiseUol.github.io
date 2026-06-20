import { Link } from "react-router-dom";
import './AboutPage.css';

function AboutPage() {
  // 2025/2026 Team
  const teamMembers2526 = [
    { name: "Inga Panko", role: "Team / Aerodynamics Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Thiruwaran Kalvin", role: "Vice Team / Ground Station & Payload Lead", degree: "Computer Science", year: "2nd Year" },
    { name: "Juny Suh", role: "Propulsion / Simulations Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Karl King", role: "Chief Advisior ", degree: "Aerospace Engineering", year: "3rd Year" },
    { name: "Hildah Namulondo", role: "CAD Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Leah Shibin", role: "CAD / Materials and Manufacturing / Recovery", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "A'isha Ayyub", role: "Aerodynamics / Manufacturing / Testing ", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Sanjo Peeter Silijan", role: "Recovery Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Joseph Wood", role: "Electronics / Avionics Lead", degree: "Avionic Systems", year: "3rd Year" },
    { name: "Adam Smart", role: "Programming", degree: "Computer Science", year: "2nd Year" },
  ];

  const teamMembers2425 = [
    { name: "Karl King", role: "Team Lead ", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Eissa Hussain", role: "CAD Lead", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Matthew Barnes", role: "Manufacturing Lead / CAD", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Hildah Namulondo", role: "CAD", degree: "Aerospace Engineering", year: "1st Year" },
    { name: "Juny Suh", role: "Simulations Lead", degree: "Aerospace Engineering", year: "1st Year" },
    { name: "Leah Shibin", role: "Simulations / Testing", degree: "Aerospace Engineering", year: "1st Year" },
    { name: "Hugh Rawes", role: "Recovery", degree: "Aerospace Engineering", year: "2nd Year" },
    { name: "Joeseph Wood", role: "Avionics Lead", degree: "Avionic Systems", year: "2nd Year" },
    { name: "Thiruwaran Kalvin", role: "Programming Lead", degree: "Computer Science", year: "1st Year" },
    { name: "Adam Smart", role: "Programming", degree: "Computer Science", year: "1st Year" },
  ];

  const teamMembers2324 = [
    { name: "Natasha Cooper", role: "Founder / Team Lead", degree: "Mechanical Engineering", year: "3rd Year" },
    { name: "Karl King", role: "Vice Team Lead ", degree: "Aerospace Engineering", year: "1st Year" },
  ];

  return (
    <main className="about-page-container">
      <h2 className="about-page-title">
        About The Team
      </h2>
      
      <div className="about-page-description-box">
        <p>
          Unity Rise is a multidisciplinary team of STEM students (mainly engineering) dedicated to designing, building and launching model rockets.
        </p>
        <p>
          Founded in 2023, as a project team within LASER, our mission is to provide hands-on experience to university students and compete in the UKSEDS National Rocketry Championship. We design and build rockets from the ground up, focusing on innovation and performance, building our own avionics and airframes from scratch.
        </p>
        <p>
          Our aim is to learn through hands-on projects: designing and building rockets to
          meet typical competition targets (around 2500ft). While safety and practicality
          remain priorities, we design custom airframes and develop in-house avionics systems
          tailored to each project - giving members real experience in system design,
          integration and testing. We compete every year in the National Rocketry
          Championship (NRC) and focus on providing members with practical experience
          and a supportive environment for learning.
        </p>
        <p>
          We build student-scale rockets that combine custom-built airframes with in-house
          avionics for flight data, tracking and telemetry. Projects span structures,
          propulsion, avionics and recovery, and are student-led with an emphasis on safe
          testing, iterative design and preparing vehicles for the National Rocketry
          Championship. Members gain practical skills through design,
          prototyping, ground testing and launch days.
        </p>
      </div>

      {/* 2025/2026 Section */}
      <div className="team-section">
        <h3>Meet the Team 25/26</h3>
        
        <div className="team-image-container">
          <img 
            src="/team.jpg" 
            alt="The Unity Rise Team 25/26" 
            className="team-image"
          />
        </div>

        <div className="team-table-container">
          <table className="team-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Degree Program</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers2526.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td className="role-cell">{member.role}</td>
                  <td>{member.degree}</td>
                  <td>{member.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2024/2025 Section */}
      <div className="team-section">
        <h3>Meet the Team 24/25</h3>
        
        <div className="team-image-container">
          <img 
            src="/gallery4.jpg" 
            alt="The Unity Rise Team 24/25" 
            className="team-image"
          />
        </div>

        <div className="team-table-container">
          <table className="team-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Degree Program</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers2425.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td className="role-cell">{member.role}</td>
                  <td>{member.degree}</td>
                  <td>{member.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2023/2024 Section */}
      <div className="team-section">
        <h3>Meet the Team 23/24</h3>
        
        <div className="team-image-container">
          <img 
            src="/gallery1.jpg"
            alt="The Unity Rise Team 23/24" 
            className="team-image"
          />
        </div>

        <div className="team-table-container">
          <table className="team-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Degree Program</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers2324.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td className="role-cell">{member.role}</td>
                  <td>{member.degree}</td>
                  <td>{member.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;