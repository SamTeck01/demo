import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { office } from '../data/site.js'

const links = [['The app', '/#app'], ['For owners', '/#owners'], ['How handover works', '/#steps'], ['Flats for rent', '/#flats'], ['Enquiries', '/#enquire']]
export const Mark = () => <svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true"><path d="M7 25V13l9-6 9 6v12h-6v-8h-6v8z" fill="currentColor" /></svg>

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
      <button type="button" className="nav-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 8h16M4 12h16M4 16h10" stroke="currentColor" strokeWidth="1.6" /></svg>Menu
      </button>
      <Link to="/" className="nav-mark" aria-label="Taskeen Al Oula, home"><Mark /></Link>
      <Link className="nav-enq" to="/#enquire">Enquiries</Link>
      <div id="menu" className="drawer" hidden={!open} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className="drawer-in" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="drawer-close" onClick={() => setOpen(false)}>Close</button>
          {links.map(([t, h]) => <Link key={t} to={h} onClick={() => setOpen(false)}>{t}</Link>)}
          <p className="drawer-foot"><a href={`tel:${office.tel}`}>{office.phone}</a><br /><a href={`mailto:${office.email}`}>{office.email}</a></p>
        </div>
      </div>
    </header>
  )
}
