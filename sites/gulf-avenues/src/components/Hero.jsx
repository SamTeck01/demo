import { Link } from 'react-router-dom'
import { heroImg } from '../data/site.js'

const notes = [
  { t: 'Freehold for every nationality in The Pearl, Lusail and West Bay', x: '46%', y: '46%', side: 'l' },
  { t: 'Villas with pools and gardens, apartments on the marina', x: '74%', y: '62%', side: 'r' },
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <img className="hero-img" src={heroImg} alt="White modern villa with a timber soffit and a pool" fetchpriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <p className="hero-word" aria-hidden="true">Avenues</p>
      {notes.map(n => (
        <p key={n.t} className={'note note-' + n.side} style={{ '--x': n.x, '--y': n.y }}><span className="pin" aria-hidden="true" />{n.t}</p>
      ))}
      <div className="hero-low">
        <h1 id="hero-h" className="hero-h">Find your next home in Doha</h1>
        <p>Apartments and villas for sale and lease in The Pearl, Lusail, West Bay and Al Sadd.</p>
        <Link className="underline" to="/#homes">Explore properties <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}
