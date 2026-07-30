import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="MRF Gym home"><span>⌁</span> MRF</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? '×' : '☰'}
      </button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#top" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#trainers" onClick={closeMenu}>Trainers</a>
        <a href="#schedule" onClick={closeMenu}>Schedule</a>
        <a href="#achievements" onClick={closeMenu}>Achievements</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="#memberships" onClick={closeMenu}>Join Now</a>
      </nav>
    </header>
  )
}

export default Navbar
