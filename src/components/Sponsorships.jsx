import './Sponsorships.css';
import AltiumLogo from './AltiumLogo';

function Sponsorships() {
  const sponsors = [
    {
      name: 'Altium',
      component: <AltiumLogo />,
      url: 'https://www.altium.com/',
    },
    {
      name: 'PTC',
      url: 'https://www.ptc.com/',
      logoLight: '/ptc_master_logo_CMYK_color.svg',
      logoDark: '/ptc_master_logo_CMYK_KO-gr.svg',
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
              {sponsor.component}
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