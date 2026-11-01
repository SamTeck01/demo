import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from './Nav.jsx'
import { homes, seaImg } from '../data/site.js'
import { money } from '../lib.js'

const picks = homes.filter(h => !h.lease)

// The headline crosses from the cream half onto the photograph: a second, white copy is clipped to the photo side.
export default function Hero() {
  const [i, setI] = useState(0)
  const h = picks[i]
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI(n => (n + 1) % picks.length), 7000)
    return () => clearTimeout(t)
  }, [i])
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-left">
        <nav className="hero-menu" aria-label="Sections">{links.map(([t, href]) => <Link key={t} to={href}>{t}</Link>)}</nav>
      </div>
      <div className="hero-right"><img src={seaImg} alt="Calm sea and white sand at sunrise" fetchpriority="high" /></div>
      <div className="hero-copy">
        <h1 id="hero-h" className="hero-h">Discover the beauty of living by the sea</h1>
        <p className="hero-lede">Homes for sale and lease in Kuwait City, Salmiya, Fintas and Khiran, chosen one at a time by Bader Al-Bahar.</p>
      </div>
      <aside className="pearl" aria-label="This week’s pearl" aria-live="polite">
        <img key={h.id} src={h.imgs[0]} alt="" />
        <div>
          <h2 className="pearl-h">This week’s pearl</h2>
          <p>{h.title}. {h.text}</p>
          <p className="pearl-price">{money(h.price)}</p>
          <Link className="btn" to={`/home/${h.id}`}>See the home</Link>
        </div>
        <div className="dots" role="group" aria-label="Choose a home">{picks.map((p, n) => <button key={p.id} type="button" aria-pressed={n === i} aria-label={p.title} onClick={() => setI(n)} />)}</div>
      </aside>
    </section>
  )
}
