import { Link } from 'react-router-dom'
import { islandName } from '../data/site.js'
import { priceLabel, toggleSaved, useSaved } from '../lib.js'

export default function HomeCard({ h }) {
  const saved = useSaved().includes(h.id)
  return (
    <article className="card" data-rv>
      <Link to={`/property/${h.id}`} className="card-link">
        <span className="card-img"><img src={h.imgs[0]} alt="" loading="lazy" /></span>
        <span className="card-body">
          <span className="card-price">{priceLabel(h)}</span>
          <span className="card-title">{h.title}</span>
          <span className="card-meta">
            <span>{h.beds} bed</span><span>{h.baths} bath</span><span>{h.size} m²</span><span>{islandName(h.island)}</span>
          </span>
        </span>
      </Link>
      {h.status && <span className="card-tag">{h.status}</span>}
      <button type="button" className={'card-save' + (saved ? ' is-on' : '')} aria-pressed={saved} aria-label={saved ? `Remove ${h.title} from saved` : `Save ${h.title}`} onClick={() => toggleSaved(h.id)}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
      </button>
    </article>
  )
}
