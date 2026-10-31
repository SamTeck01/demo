import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSaved, useScrolled } from '../lib.js'

const links = [['Homes', '/#homes'], ['Sell', '/#sell'], ['Field guide', '/#guide'], ['Payments', '/#pay']]

export const Mark = () => (
  <span className="mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 12 12 5l8 7v7H4z" fill="currentColor" /></svg></span>
)

export default function Nav() {
  const saved = useSaved()
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
      <Link to="/" className="nav-logo" aria-label="Habitat Hunters, home"><Mark /><span>Habitat Hunters<br />since 1972</span></Link>
      <nav className="nav-pills" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <div className="nav-end">
        <Link to="/saved" className="nav-saved">Saved{saved.length ? ` ${saved.length}` : ''}</Link>
        <Link to="/#visit" className="nav-contact">Contact</Link>
        <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      </div>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <Link to="/saved" onClick={() => setOpen(false)}>Saved homes ({saved.length})</Link>
          <Link to="/#visit" className="btn btn-ink" onClick={() => setOpen(false)}>Talk to an agent</Link>
        </div>
      </div>
    </header>
  )
}
