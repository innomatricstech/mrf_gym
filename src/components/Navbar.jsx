import { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="MRF Gym home" onClick={() => onNavigate('home')}><img src={logo} alt="MRF Gym logo" className="brand-logo" /></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? '×' : '☰'}
      </button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#top" onClick={closeMenu}>Home</a>
        <a href="#trainers" onClick={closeMenu}>Trainers</a>
        <a href="#achievements" onClick={closeMenu}>Achievements</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="#memberships" onClick={closeMenu}>Join Now</a>
      </nav>
    </header>
  )
}

export default Navbar
