import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office } from '../data/site.js'
import { useScrolled } from '../lib.js'

const links = [['Listings', '/#listings'], ['Rentals', '/?deal=lease#listings'], ['Sell or lease', '/#owners'], ['Areas', '/#areas'], ['About', '/#about']]

export default function Nav() {
  const solid = useScrolled(80)
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
      <Link to="/" className="nav-g" aria-label="Graham Central Properties, home">G</Link>
      <nav className="nav-links" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <a className="nav-call" href={`tel:${office.tel}`}>{office.phone}</a>
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <a className="btn btn-yellow" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </div>
      </div>
    </header>
  )
}
