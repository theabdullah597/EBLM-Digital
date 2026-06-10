import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const navLinks = [
    { to: '/services',     label: 'Services' },
    { to: '/process',      label: 'Process' },
    { to: '/results',      label: 'Results' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/about',        label: 'About' },
    { to: '/contact',      label: 'Contact' },
  ]

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <Link className="brand" to="/" aria-label="BLM Digital Limited home">
        <span className="brand-mark"><span>BL</span><b>M</b></span>
        <span className="brand-sub">DIGITAL <em>LIMITED</em></span>
      </Link>

      <nav className={`nav${menuOpen ? ' open' : ''}`} id="nav">
        {navLinks.map(l => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn primary nav-cta-mobile">
          Book a Consultation <ArrowRight size={14} />
        </Link>
      </nav>

      <Link className="header-cta btn primary" to="/contact">
        Book a Consultation <ArrowRight size={14} />
      </Link>

      <button
        className={`menu${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  )
}
