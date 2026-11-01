import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office } from '../data/site.js'

export const links = [['Homes', '/#homes'], ['Chalets', '/#chalets'], ['Areas', '/#areas'], ['Speak to Bader', '/#contact']]
export const Pearl = () => <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><circle cx="16" cy="16" r="11" fill="currentColor" /><circle cx="12" cy="12" r="3.4" fill="var(--ground)" /></svg>

// Mark top left, menu top right, as in the reference. The page list sits in the hero.
export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const k = e => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [open])
  return (
    <header className="nav">
      <Link to="/" className="mark" aria-label="La'ala Al Kuwait, home"><Pearl /><span>La’ala Al Kuwait</span></Link>
      <button type="button" className="burger" aria-label="Menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}><span /><span /><span /></button>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <a className="btn" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </div>
      </div>
    </header>
  )
}
