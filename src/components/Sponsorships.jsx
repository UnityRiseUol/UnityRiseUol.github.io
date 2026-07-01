import './Sponsorships.css';

function Sponsorships() {
  const sponsors = [
    {
      name: 'University of Liverpool',
      logo: '/UoL - Logo - CMYK.png',
      url: 'https://www.liverpool.ac.uk/',
      invertInDarkMode: false
    },
    {
      name: 'LASER',
      logo: '/laser_logo.png',
      url: 'https://laseruol.space/',
      invertInDarkMode: false
    },
    {
      name: 'Arrow Devices',
      logo: '/AD-logo-horizontal-BLK.svg',
      url: 'https://www.altium.com/',
      invertInDarkMode: true
    }
  ];

  return (
    <section className="sponsorships" id="sponsorships">
      <div className="section-container">
        <h2 className="section-title">Our Sponsors</h2>
        <p className="section-description">
          We are incredibly grateful for the support of our sponsors, whose contributions are vital to our ongoing success.
        </p>

        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="sponsor-card">
              <img 
                src={sponsor.logo} 
                alt={`${sponsor.name} logo`} 
                className={`sponsor-logo ${sponsor.invertInDarkMode ? 'invert-dark' : ''}`} 
              />
            </a>
          ))}
        </div>

        <div className="sponsorship-cta">
          <h3>Become a Sponsor</h3>
          <p>
            Interested in supporting the next generation of our engineers? Contact us to learn more about sponsorship opportunities.
          </p>
          <a href="mailto:unityriseuol@gmail.com" className="cta-button primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Sponsorships;