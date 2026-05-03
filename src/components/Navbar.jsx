import './Navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const useDark = savedTheme ? savedTheme === 'dark' : prefersDark
    setIsDark(useDark)
    updateTheme(useDark)
  }, [])

  const updateTheme = (dark) => {
    const htmlElement = document.documentElement
    if (dark) {
      htmlElement.setAttribute('data-theme', 'dark')
    } else {
      htmlElement.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    updateTheme(newIsDark)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Unity Rise
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#sponsorships" className="nav-link">Sponsorships</a>
          </li>
          <li className="nav-item">
            <a href="#outreach" className="nav-link">Outreach</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact Us</a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {isDark ? (
            <svg className="theme-icon" viewBox="0 0 24 24" fills="none" stroke="currentColor">
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
            <svg className="theme-icon" viewBox="0 0 24 24" fills="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

