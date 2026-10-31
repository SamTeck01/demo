import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office } from '../data/site.js'
import { useScrolled } from '../lib.js'

const links = [['The homes', '/#homes'], ['Launch plan', '/#plan'], ['Drew', '/#drew'], ['Contact', '/#contact']]

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
      <Link to="/" className="nav-word" aria-label="Austin Boutique Realty, home">Austin Boutique</Link>
      <nav className="nav-links" aria-label="Main">{links.map(([t, h]) => <Link key={t} to={h}>{t}</Link>)}</nav>
      <div className="nav-end">
        <Link className="pill" to="/#contact">Book a visit</Link>
        <button type="button" className="burger" aria-label="Menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}><span /><span /></button>
      </div>
      <div id="menu" className="drawer" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="drawer-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="drawer-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <p className="drawer-contact"><a href={`tel:${office.tel}`}>{office.phone}</a></p>
        </div>
      </div>
    </header>
  )
}
