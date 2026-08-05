import logo from '../assets/logo.png'

function Footer({ onNavigate }) {
  const handleNavigate = (page) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    onNavigate(page)
  }

  const handleSectionNavigate = (hash) => {
    if (typeof window !== 'undefined') {
      window.location.hash = hash
    }
    onNavigate('home')
  }

  return (
    <footer className="footer footer-grid">
      <div className="footer-brand">
        <a className="brand" href="#top" onClick={(event) => { event.preventDefault(); handleNavigate('home') }}><img src={logo} alt="MRF Gym logo" className="brand-logo" /></a>
      </div>

      <div className="footer-column">
        <h3>Legal</h3>
        <a className="footer-link" href="#terms" onClick={(event) => { event.preventDefault(); handleNavigate('terms') }}>Terms & Conditions</a>
        <a className="footer-link" href="#privacy" onClick={(event) => { event.preventDefault(); handleNavigate('privacy') }}>Privacy Policy</a>
        <a className="footer-link" href="#rules" onClick={(event) => { event.preventDefault(); handleNavigate('rules') }}>Rules</a>
      </div>

      

      <div className="footer-column">
        <h3>Support</h3>
        <a className="footer-link" href="#contact" onClick={(event) => { event.preventDefault(); handleSectionNavigate('#contact') }}>Get Help</a>
        
        <a className="footer-link" href="#achievements" onClick={(event) => { event.preventDefault(); handleSectionNavigate('#achievements') }}>Achievements</a>
      </div>

     <div className="footer-column">
  <h3>Visit Us</h3>
  <a
    href="https://www.google.com/maps/search/?api=1&query=48,+Subramani+Street,+Telungupalayam,+Coimbatore,+Tamil+Nadu+641039"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
  >
    48, Subramani Street, Telungupalayam
    <br />
    Coimbatore, Tamil Nadu 641039
  </a>
</div>
      <p className="copyright">
  © {new Date().getFullYear()} MRF Gym ·{" "}
  <span>Forge your legacy. Train with intent.</span>
</p>
    </footer>
  )
}

export default Footer
