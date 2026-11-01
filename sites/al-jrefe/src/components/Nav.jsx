import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office, wa } from '../data/site.js'
import { useScrolled } from '../lib.js'

const links = [['Homes', '/#homes'], ['Districts', '/#districts'], ['Finance', '/#finance'], ['Contact', '/#contact']]

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
      <Link to="/" className="logo" aria-label="Al Jrefe Real Estate, home"><svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path d="M6 26V13l10-7 10 7v13h-7v-7h-6v7z" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg></Link>
      <nav className="nav-pill" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <a className="white-btn" href={wa('Hello Al Jrefe, I would like to talk about a property.')} target="_blank" rel="noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a>
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <a className="white-btn" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </div>
      </div>
    </header>
  )
}
