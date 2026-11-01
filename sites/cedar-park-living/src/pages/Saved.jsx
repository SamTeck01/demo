import { Link } from 'react-router-dom'
import HomeCard from '../components/HomeCard.jsx'
import { homes, office } from '../data/site.js'
import { mail, useReveal, useSaved } from '../lib.js'

export default function Saved() {
  const ids = useSaved()
  const list = homes.filter(h => ids.includes(h.id))
  useReveal(ids.length)
  return (
    <section className="sect wrap page-top" aria-labelledby="saved-h">
      <div className="sect-head">
        <h1 id="saved-h" className="title">Your saved homes</h1>
        {list.length > 0 && <a className="btn btn-mint" href={mail(office.email, 'Showings for my saved homes', ['I would like to see:', ...list.map(h => `· ${h.title}`)])}>Book showings for all {list.length}</a>}
      </div>
      {list.length ? <div className="cards">{list.map(h => <HomeCard key={h.id} h={h} />)}</div> : (
        <div className="empty"><p>Tap the heart on any home to keep it here. Your list stays on this device.</p><div className="empty-act"><Link className="btn btn-mint" to="/#homes">Browse homes</Link></div></div>
      )}
    </section>
  )
}
