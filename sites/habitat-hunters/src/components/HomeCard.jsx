import { Link } from 'react-router-dom'
import { habitatName } from '../data/site.js'
import { money, toggleSaved, useSaved } from '../lib.js'

export default function HomeCard({ h }) {
  const saved = useSaved().includes(h.id)
  return (
    <article className="card" data-rv>
      <Link to={`/home/${h.id}`} className="card-link">
        <span className="card-img"><img src={h.imgs[0]} alt="" loading="lazy" /></span>
        <span className="card-row"><span className="card-title">{h.title}</span><span className="card-price">{money(h.price)}</span></span>
        <span className="card-meta">{habitatName(h.habitat)} · {h.beds} bed · {h.baths} bath · {h.sqft.toLocaleString('en-US')} sq ft</span>
      </Link>
      {h.status && <span className="card-tag">{h.status}</span>}
      <button type="button" className={'card-save' + (saved ? ' is-on' : '')} aria-pressed={saved} aria-label={saved ? `Remove ${h.title} from saved` : `Save ${h.title}`} onClick={() => toggleSaved(h.id)}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
      </button>
    </article>
  )
}
