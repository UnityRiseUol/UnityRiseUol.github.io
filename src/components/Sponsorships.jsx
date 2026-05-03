import './Sponsorships.css'

function Sponsorships() {


  return (
    <section className="sponsorships" id="sponsorships">
      <div className="section-container">
        <h2 className="section-title">Sponsorships</h2>

        <div className="sponsorships-construction" style={{textAlign: 'center', padding: '60px 20px'}}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '12px'}}>UNDER CONSTRUCTION</h3>
          <p style={{color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto'}}>
            We are currently updating our sponsorship page for the upcoming year. Please check back
            soon, or contact us directly at <a href="mailto:unityriseuol@gmail.com">unityriseuol@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sponsorships

