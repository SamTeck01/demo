import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office, wa } from '../data/site.js'

const links = [['Buildings', '/#top'], ['Units', '/#units'], ['Move-in cost', '/#cost'], ['Questions', '/#faq']]

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
      <Link to="/" className="nav-word" aria-label="PrimeState Properties, home">PrimeState</Link>
      <nav className="nav-links" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <a className="box" href={wa('Hello PrimeState, I would like to book a viewing.')} target="_blank" rel="noreferrer">Book viewing</a>
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>Menu</button>
      <div id="menu" className="sheet" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="sheet-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="sheet-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <a className="box box-solid" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </div>
      </div>
    </header>
  )
}
