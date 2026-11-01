import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office } from '../data/site.js'
import { useScrolled } from '../lib.js'

const links = [['Homes', '/#homes'], ['Rentals', '/?deal=rent#homes'], ['Owners', '/#season'], ['The office', '/#office']]

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
      <Link to="/" className="nav-logo" aria-label="Ocean Club Realty, home">
        <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path d="M3 20c3.5-3.5 7-3.5 10.5 0s7 3.5 10.5 0 5-2.5 5-2.5M3 13c3.5-3.5 7-3.5 10.5 0s7 3.5 10.5 0 5-2.5 5-2.5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
        <span>Ocean Club Realty</span>
      </Link>
      <nav className="nav-links" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <Link className="pill" to="/#office">Book a viewing</Link>
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <a className="pill pill-full" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </div>
      </div>
    </header>
  )
}
