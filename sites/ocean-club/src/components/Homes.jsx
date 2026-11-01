import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { homes, towers, towerOf } from '../data/site.js'
import { money } from '../lib.js'

export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const deal = q.get('deal') === 'rent' ? 'rent' : 'buy', tower = q.get('tower') || ''
  const set = (k, v) => { const p = new URLSearchParams(q); v ? p.set(k, v) : p.delete(k); go(`/?${p}#homes`, { replace: true }) }
  const shown = homes.filter(h => h.rent === (deal === 'rent') && (!tower || h.tower === tower))
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <div className="homes-head">
        <h2 id="homes-h" className="title" data-rv>{deal === 'rent' ? 'Seasonal rentals' : 'Homes for sale'}</h2>
        <div className="tabs" role="group" aria-label="Sale or rent">
          <button type="button" aria-pressed={deal === 'buy'} onClick={() => set('deal', '')}>For sale</button>
          <button type="button" aria-pressed={deal === 'rent'} onClick={() => set('deal', 'rent')}>Seasonal rentals</button>
        </div>
      </div>
      <div className="chips" role="group" aria-label="Tower">
        <button type="button" aria-pressed={!tower} onClick={() => set('tower', '')}>All towers</button>
        {towers.map(t => <button key={t.id} type="button" aria-pressed={tower === t.id} onClick={() => set('tower', t.id)}>{t.name}</button>)}
      </div>
      {shown.length ? (
        <div className="grid">
          {shown.map(h => {
            const t = towerOf(h.tower)
            return (
              <Link key={h.id} to={`/home/${h.id}`} className="card" data-rv>
                <span className="card-img"><img src={h.imgs[0]} alt="" loading="lazy" /><span className="steps">{t.steps} steps to the sand</span></span>
                <span className="card-row"><span className="card-title">{h.title}</span><span className="card-price">{money(h.price)}{h.rent ? '/mo' : ''}</span></span>
                <span className="card-meta">{h.beds} bed · {h.baths} bath · {h.sqft.toLocaleString('en-US')} sq ft{h.status ? ` · ${h.status}` : ''}</span>
              </Link>
            )
          })}
        </div>
      ) : <div className="empty"><p>Nothing listed in that tower right now. Owners often call us before they list.</p><Link className="pill" to="/#office">Ask the office</Link></div>}
    </section>
  )
}
