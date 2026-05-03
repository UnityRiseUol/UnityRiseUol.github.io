import './Navbar.css'
import { useState, useEffect, useRef } from 'react'

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return savedTheme ? savedTheme === 'dark' : prefersDark
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  const updateTheme = (dark) => {
    const htmlElement = document.documentElement

    if (dark) {
      htmlElement.setAttribute('data-theme', 'dark')
    } else {
      htmlElement.removeAttribute('data-theme')
    }

    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  useEffect(() => {
    updateTheme(isDark)
  }, [isDark])

  useEffect(() => {
    function handleDocumentInteraction(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }

      if (event.type === 'mousedown' && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleDocumentInteraction)
    document.addEventListener('keydown', handleDocumentInteraction)

    return () => {
      document.removeEventListener('mousedown', handleDocumentInteraction)
      document.removeEventListener('keydown', handleDocumentInteraction)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    updateTheme(newIsDark)
  }

  const closeMenu = () => setIsMenuOpen(false)

  const logoSrc = isDark ? '/ur_logo.png' : '/ur_logo_black.png'

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <a href="#" className="navbar-brand" aria-label="Unity Rise home" onClick={closeMenu}>
          <img
            src={logoSrc}
            className="navbar-brand-logo"
            alt="Unity Rise logo"
          />
          <span className="navbar-logo">Unity Rise</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="primary-navigation">
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#sponsorships" className="nav-link" onClick={closeMenu}>Sponsorships</a>
          </li>
          <li className="nav-item">
            <a href="#outreach" className="nav-link" onClick={closeMenu}>Outreach</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact Us</a>
          </li>
        </ul>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {isDark ? (
            <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg className="theme-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

