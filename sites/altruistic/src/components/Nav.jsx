import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office } from '../data/site.js'
import { useSaved, useScrolled } from '../lib.js'

const links = [['Homes', '/#homes'], ['Invest', '/#numbers'], ['Areas', '/#areas'], ['About', '/#about']]

export const Mark = () => (
  <svg className="mark" viewBox="0 0 28 20" width="28" height="20" aria-hidden="true"><path d="M2 18V8l7-6 7 6v10M12 18v-6h-6M16 8h10v10H9" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
)

export default function Nav() {
  const saved = useSaved()
  const solid = useScrolled(40)
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const k = e => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [open])
  return (
    <header className={'nav' + (solid ? ' is-solid' : '')}>
      <Link to="/" className="nav-logo" aria-label="Altruistic Homes, home"><Mark /><span>Altruistic</span></Link>
      <nav className="nav-notch" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <div className="nav-end">
        <Link to="/saved" className="nav-saved">Saved{saved.length ? ` ${saved.length}` : ''}</Link>
        <a href={`tel:${office.tel}`} className="nav-call"><span>{office.phone}</span><i aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" fill="currentColor" /></svg></i></a>
        <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      </div>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <Link to="/saved" onClick={() => setOpen(false)}>Saved homes ({saved.length})</Link>
          <Link to="/#contact" className="btn btn-ink" onClick={() => setOpen(false)}>Talk to Maria Teresa</Link>
        </div>
      </div>
    </header>
  )
}
