import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office } from '../data/site.js'
import { useScrolled } from '../lib.js'

const links = [['Homes', '/#homes'], ['Districts', '/#match'], ['Landlords', '/#landlords'], ['Contact', '/#contact']]

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
      <Link to="/" className="logo" aria-label="Gulf Avenues, home"><svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path d="M6 26 16 6l10 20M10.5 18h11" fill="none" stroke="currentColor" strokeWidth="2.6" /></svg><span>Gulf Avenues</span></Link>
      <nav className="nav-glass" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <Link className="peach" to="/#contact">Book a viewing <span aria-hidden="true">↗</span></Link>
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <a className="peach" href={`mailto:${office.email}`}>Email {office.email}</a>
        </div>
      </div>
    </header>
  )
}
