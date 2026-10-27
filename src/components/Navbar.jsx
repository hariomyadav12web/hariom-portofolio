import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">H</span>
          <span>Hariom<span className="brand-accent">.</span></span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk <span>↗</span></a>
        </div>
      </div>
    </nav>
  )
}
