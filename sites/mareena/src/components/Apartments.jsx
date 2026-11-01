import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { apts } from '../data/site.js'
import { money } from '../lib.js'

export default function Apartments() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const f = q.get('f') || ''
  const shown = apts.filter(a => !f || (f === 'furnished') === a.furnished)
  return (
    <section id="apartments" className="apts wrap" aria-labelledby="apts-h">
      <div className="apts-head">
        <h2 id="apts-h" className="title" data-rv>Apartments available</h2>
        <div className="chips" role="group" aria-label="Furnishing">
          {[['', 'All'], ['furnished', 'Furnished'], ['unfurnished', 'Unfurnished']].map(([k, t]) => <button key={k} type="button" aria-pressed={f === k} onClick={() => go(k ? `/?f=${k}#apartments` : '/#apartments', { replace: true })}>{t}</button>)}
        </div>
      </div>
      <div className="list">
        {shown.map(a => (
          <Link key={a.id} to={`/apartment/${a.id}`} className="apt" data-rv>
            <img src={a.imgs[0]} alt="" loading="lazy" />
            <span className="apt-name">{a.title}</span>
            <span className="apt-meta">{a.beds ? `${a.beds} bed` : 'Studio'} · {a.size} m² · {a.furnished ? 'Furnished' : 'Unfurnished'}{a.status ? ` · ${a.status}` : ''}</span>
            <span className="apt-price">from {money(a.rent)} a month</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
