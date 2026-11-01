import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Switch, useLang } from './Lang.jsx'
import { office } from '../data/site.js'

export const Logo = () => <svg viewBox="0 0 30 30" width="28" height="28" aria-hidden="true" fill="currentColor"><rect x="2" y="14" width="4" height="14" /><rect x="9" y="6" width="4" height="22" /><rect x="16" y="2" width="4" height="26" /><rect x="23" y="10" width="4" height="18" /></svg>

// Only shown off the home page; the home hero carries its own header inside the card.
export default function Nav() {
  const { t } = useLang()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className="nav">
      <Link to="/" className="logo" aria-label="Aria Global Realty, home"><Logo /><span>Aria Global</span></Link>
      <nav className="nav-links" aria-label="Main">{t.nav.map(([l, h]) => <Link key={h} to={h}>{l}</Link>)}</nav>
      <Switch />
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>{t.menu}</button>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label={t.menu}>
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>{t.close}</button>
          {t.nav.map(([l, h]) => <Link key={h} to={h} onClick={() => setOpen(false)}>{l}</Link>)}
          <a className="btn btn-ink" href={`tel:${office.tel}`}>{t.call}</a>
        </div>
      </div>
    </header>
  )
}
