import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useSaved, useScrolled } from '../lib.js'

const links = [['Buy', '/#homes'], ['Rent', '/?deal=rent#homes'], ['Islands', '/#islands'], ['Owners', '/#owners'], ['About', '/#process']]

export default function Nav() {
  const saved = useSaved()
  const solid = useScrolled()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const onHome = pathname === '/'
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const k = e => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k)
    return () => removeEventListener('keydown', k)
  }, [open])
  return (
    <header className={'nav' + (solid || !onHome ? ' is-solid' : '')}>
      <div className="nav-in">
        <Link to="/" className="nav-logo" aria-label="Landmark Bahrain, home"><Logo /></Link>
        <nav className="nav-links" aria-label="Main">
          {links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}
        </nav>
        <div className="nav-end">
          <Link to="/saved" className="nav-saved" aria-label={`Saved homes, ${saved.length}`}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
            {saved.length > 0 && <span className="nav-count">{saved.length}</span>}
          </Link>
          <Link to="/#contact" className="btn btn-bronze nav-cta">Book a viewing <Arrow /></Link>
          <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
        </div>
      </div>
      <div id="menu" className={'sheet' + (open ? ' is-open' : '')} hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <Link to="/saved" onClick={() => setOpen(false)}>Saved homes ({saved.length})</Link>
          <Link to="/#contact" className="btn btn-bronze" onClick={() => setOpen(false)}>Book a viewing</Link>
        </div>
      </div>
    </header>
  )
}

export const Arrow = () => <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
