import './AboutPage.css';

const teamSeasons = [
  {
    season: "26/27",
    competition: "MACH-X",
    image: null,
    members: [
      { name: "Joseph Wood", role: "Team Lead", degree: "PhD Electrical Engineering and Electronics", year: "1st Year" },
      { name: "Juny Suh", role: "Vice Team Lead", degree: "MEng Aerospace Engineering", year: "3rd Year" },
      { name: "Karl King", role: "Launch Vehicle Lead", degree: "MEng Aerospace Engineering", year: "4th Year" },
      { name: "Thiruwaran Kalvin", role: "Avionics Lead", degree: "BSc Computer Science With Artificial Intelligence", year: "3rd Year" },
      { name: "Ben Cooke", role: "CanSat Lead", degree: "BEng Computer Science & Electronic Engineering", year: "3rd Year" },
      { name: "Matteo Venuti", role: "Avionics Engineer", degree: "MEng Computer Science & Electronic Engineering", year: "4th Year" },
      { name: "Diptanshu Jain", role: "Avionics Engineer", degree: "BEng Mechatronics & Robotics", year: "3rd Year" },
      { name: "Matthew Barnes", role: "Aerospace Engineer", degree: "MEng Aerospace Engineering", year: "4th Year" },
      { name: "Inga Panko", role: "Aerospace Engineer", degree: "MEng Aerospace Engineering", year: "3rd Year" },
      { name: "Travis Totney", role: "Aerospace Engineer", degree: "BEng Aerospace Engineering", year: "3rd Year" },
      { name: "Leah Shibin", role: "Aerospace Engineer", degree: "BEng Aerospace Engineering", year: "3rd Year" },
      { name: "Muhammad Khan", role: "Aerospace Engineer", degree: "BEng Aerospace Engineering", year: "3rd Year" },
      { name: "Neelam Dhariwal", role: "Aerospace Engineer", degree: "BEng Aerospace Engineering", year: "3rd Year" }
    ],
  },
  {
    season: "26/27",
    competition: "NRC TBC",
    image: null,
    members: [
    ],
  },
  {
    season: "25/26",
    competition: "NRC",
    image: "/team.jpg",
    members: [
      { name: "Inga Panko", role: "Team / Aerodynamics Lead", degree: "BEng Aerospace Engineering", year: "2nd Year" },
      { name: "Thiruwaran Kalvin", role: "Vice Team / Ground Station & Payload Lead", degree: "BSc Computer Science With Artificial Intelligence", year: "2nd Year" },
      { name: "Juny Suh", role: "Propulsion / Simulations Lead", degree: "BEng Aerospace Engineering", year: "2nd Year" },
      { name: "Karl King", role: "Chief Advisor", degree: "MEng Aerospace Engineering", year: "3rd Year" },
      { name: "Hildah Namulondo", role: "CAD Lead", degree: "BEng Aerospace Engineering", year: "2nd Year" },
      { name: "Leah Shibin", role: "CAD / Materials and Manufacturing / Recovery", degree: "BEng Aerospace Engineering", year: "2nd Year" },
      { name: "A'isha Ayyub", role: "Aerodynamics / Manufacturing / Testing", degree: "MEng Aerospace Engineering", year: "2nd Year" },
      { name: "Sanjo Peeter Silijan", role: "Recovery Lead", degree: "MEng Aerospace Engineering", year: "2nd Year" },
      { name: "Joseph Wood", role: "Electronics / Avionics Lead", degree: "MEng Avionic Systems", year: "3rd Year" },
      { name: "Adam Smart", role: "Programming", degree: "BSc Computer Science", year: "2nd Year" },
    ],
  },
  {
    season: "24/25",
    competition: "NRC",
    image: "/gallery4.jpg",
    members: [
      { name: "Karl King", role: "Team Lead", degree: "MEng Aerospace Engineering", year: "2nd Year" },
      { name: "Eissa Hussain", role: "CAD Lead", degree: "MEng Aerospace Engineering", year: "2nd Year" },
      { name: "Matthew Barnes", role: "Manufacturing Lead / CAD", degree: "BEng Aerospace Engineering", year: "2nd Year" },
      { name: "Hildah Namulondo", role: "Aerospace Engineer / Testing", degree: "BEng Aerospace Engineering", year: "1st Year" },
      { name: "Juny Suh", role: "Simulations Lead", degree: "BEng Aerospace Engineering", year: "1st Year" },
      { name: "Leah Shibin", role: "Aerospace Engineer / Testing", degree: "BEng Aerospace Engineering", year: "1st Year" },
      { name: "Hugh Rawes", role: "Recovery", degree: "BEng Aerospace Engineering", year: "2nd Year" },
      { name: "Joseph Wood", role: "Avionics Lead", degree: "MEng Avionic Systems", year: "2nd Year" },
      { name: "Thiruwaran Kalvin", role: "Programming Lead", degree: "BSc Computer Science With Artificial Intelligence", year: "1st Year" },
      { name: "Adam Smart", role: "Programming", degree: "BSc Computer Science", year: "1st Year" },
    ],
  },
  {
    season: "23/24",
    competition: "NRC",
    image: "/gallery1.jpg",
    members: [
      { name: "Natasha Cooper", role: "Founder / Team Lead", degree: "MEng Aerospace Engineering", year: "3rd Year" },
      { name: "Karl King", role: "Vice Team Lead", degree: "MEng Aerospace Engineering", year: "1st Year" },
    ],
  },
];

function AboutPage() {
  return (
    <main className="about-page-container">
      <h2 className="about-page-title">About The Team</h2>

      <div className="about-page-description-box">
        <h3>About Unity Rise</h3>
        <p>
          Unity Rise is a student-run, multidisciplinary rocketry team from the University of
          Liverpool. Operating as a project team within LASER, we bring together STEM
          students&mdash;primarily from aerospace engineering, mechanical engineering, electrical engineering and computer science
          backgrounds&mdash;to design, build and launch high-power rockets.
        </p>

        <h3>Our Engineering Approach</h3>
        <p>
          Our mission is to provide members with practical, hands-on experience across the entire
          rocket development cycle in a supportive learning environment. We design and build our
          rockets from the ground up to meet rigorous competition targets, such as the 2,500ft
          altitude goal. Every subsystem is student-led, from initial CAD models to launch day. Our
          core focus areas include:
        </p>
        <ul>
          <li>
            <strong>Custom Airframes &amp; Structures:</strong> Designed for innovation, aerodynamic
            performance and safe testing.
          </li>
          <li>
            <strong>In-House Avionics:</strong> Tailored electronic systems developed from scratch
            for accurate flight data, tracking and telemetry.
          </li>
          <li>
            <strong>Propulsion &amp; Recovery:</strong> Iteratively designed and rigorously
            ground-tested to ensure vehicle reliability.
          </li>
        </ul>

        <h3>Competitions &amp; Awards</h3>
        <p>
          We actively push our engineering limits by competing annually in Mach-X and the UKSEDS
          National Rocketry Championship (NRC). We are incredibly proud of our track record at the
          NRC, highlighted by our overall 1st Place Championship win in 2026. Our history of
          technical and team awards includes:
        </p>
        <ul>
          <li>NRC Championship Overall Winners (2026)</li>
          <li>Best Rideshare Payload Award (2026)</li>
          <li>Public Engagement Award (2026)</li>
          <li>Most Novel Deployment Award (2025)</li>
          <li>Best Airframe Award (2024)</li>
        </ul>
        <p>
          We are always looking for new members who are passionate about aerospace, hands-on
          engineering and pushing our rockets higher each year!
        </p>
      </div>

      {teamSeasons.map(({ season, competition, image, members }) => (
        <div className="team-section" key={`${season}-${competition}`}>
          <h3>
            Meet the Team {season} ({competition})
          </h3>

          {image && (
            <div className="team-image-container">
              <img
                src={image}
                alt={`The Unity Rise Team ${season} (${competition})`}
                className="team-image"
              />
            </div>
          )}

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
                {members.map((member) => (
                  <tr key={`${member.name}-${member.role}`}>
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
      ))}
    </main>
  );
}

export default AboutPage;
