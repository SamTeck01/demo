import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSaved, useScrolled } from '../lib.js'

const links = [['Buy', '/#homes'], ['Sell', '/#sell'], ['Relocate', '/#move'], ['Suburbs', '/#compare'], ['Team', '/#team']]

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
      <Link to="/" className="glass-pill nav-logo">Cedar Park Living</Link>
      <nav className="nav-links" aria-label="Main">{links.map(([t, h]) => <Link key={t} className="glass-pill" to={h}>{t}</Link>)}</nav>
      <div className="nav-end">
        <Link to="/saved" className="glass-pill nav-saved" aria-label={`Saved homes, ${saved.length}`}><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>{saved.length ? <span style={{ marginLeft: 6 }}>{saved.length}</span> : null}</Link>
        <Link to="/#sell" className="white-pill">Home value</Link>
        <button type="button" className="glass-pill nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      </div>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <Link to="/saved" onClick={() => setOpen(false)}>Saved homes ({saved.length})</Link>
          <a className="btn btn-mint" href="tel:+15129666540">Call 512 966 6540</a>
        </div>
      </div>
    </header>
  )
}
