import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office } from '../data/site.js'
import { useScrolled } from '../lib.js'

const links = [['Current homes', '/#homes'], ['Selling', '/#sell'], ['The family', '/#family'], ['Neighbourhoods', '/#areas'], ['Contact', '/#contact']]
export const Chev = () => <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="m8 5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>

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
      <button type="button" className="nav-menu" aria-label="Menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.6" /></svg><span>Menu</span>
      </button>
      <Link to="/" className="nav-word" aria-label="West Austin Properties, home">West Austin</Link>
      <div className="nav-end">
        <a className="sq-btn" href={`tel:${office.tel}`}>Call Laura</a>
        <Link className="sq-btn sq-icon" to="/#contact" aria-label="Contact"><Chev /></Link>
      </div>
      <div id="menu" className="drawer" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="drawer-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="drawer-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <p className="drawer-contact"><a href={`tel:${office.tel}`}>{office.phone}</a><br /><a href={`mailto:${office.email}`}>{office.email}</a></p>
        </div>
      </div>
    </header>
  )
}
