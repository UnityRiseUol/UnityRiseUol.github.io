import './Sponsorships.css';

function Sponsorships() {
  const sponsors = [
    {
      name: 'Altium',
      url: 'https://www.altium.com/',
      logoLight: '/Altium - Black (Scaled).png',
      logoDark: '/Altium - White.png',
    },
    {
      name: 'PTC',
      url: 'https://www.ptc.com/',
      logoLight: '/ptc_master_logo_CMYK_color.svg',
      logoDark: '/ptc_master_logo_CMYK_KO-gr.svg',
    },
    {
      name: 'Ansys',
      url: 'https://www.ansys.com/',
      logoLight: '/ansys_part_of_synopsys_blk.svg',
      logoDark: '/ansys_part_of_synopsys_wht.svg',
    },
    {
      name: 'Easy Composites',
      logo: '/easy-composites-logo-simple-curves.jpg',
      url: 'https://www.easycomposites.co.uk/',
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
            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className={`sponsor-card ${sponsor.name === 'Altium' ? 'altium-card' : ''}`}>
              {sponsor.logo && <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />}
              {sponsor.logoLight && <img src={sponsor.logoLight} alt={`${sponsor.name} logo`} className="sponsor-logo logo-light-theme" />}
              {sponsor.logoDark && <img src={sponsor.logoDark} alt={`${sponsor.name} logo`} className="sponsor-logo logo-dark-theme" />}
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