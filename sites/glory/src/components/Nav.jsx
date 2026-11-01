import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrolled } from '../lib.js'
import { wa } from '../data/site.js'

const links = [['The island', '/#island'], ['Residences', '/#residences'], ['Payment plan', '/#plan'], ['Questions', '/#faq']]

export default function Nav() {
  const solid = useScrolled(60)
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const k = e => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [open])
  return (
    <header className={'nav' + (solid || pathname !== '/' ? ' is-solid' : '')}>
      <Link to="/" className="nav-word" aria-label="Glory Real Estate, home">Glory <span>Dilmunia</span></Link>
      <nav className="nav-links" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <a className="gold" href={wa('Hello, I would like to book a viewing at Breeze of Dilmunia.')} target="_blank" rel="noreferrer">Book a viewing</a>
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <a className="gold" href={wa('Hello, I would like to register for Breeze of Dilmunia.')} target="_blank" rel="noreferrer">WhatsApp us</a>
        </div>
      </div>
    </header>
  )
}
