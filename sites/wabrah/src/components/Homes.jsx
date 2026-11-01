import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { districts, homes, districtName } from '../data/site.js'
import { money } from '../lib.js'

export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const deal = q.get('deal') === 'lease' ? 'lease' : 'buy', d = q.get('district') || '', max = +q.get('max') || 0, min = +q.get('min') || 0
  const set = (k, v) => { const p = new URLSearchParams(q); v ? p.set(k, v) : p.delete(k); if (k === 'deal') { p.delete('min'); p.delete('max') } go(`/?${p}#homes`, { replace: true }) }
  const shown = homes.filter(h => h.lease === (deal === 'lease') && (!d || h.district === d) && (!max || h.price <= max) && (!min || h.price >= min))
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <div className="homes-head">
        <h2 id="homes-h" className="title" data-rv>{deal === 'lease' ? 'Homes for lease' : 'Homes for sale'}</h2>
        <div className="tabs" role="group" aria-label="Buy or lease">
          <button type="button" aria-pressed={deal === 'buy'} onClick={() => set('deal', '')}>Buy</button>
          <button type="button" aria-pressed={deal === 'lease'} onClick={() => set('deal', 'lease')}>Lease</button>
        </div>
      </div>
      <div className="chips" role="group" aria-label="District">
        <button type="button" aria-pressed={!d} onClick={() => set('district', '')}>All districts</button>
        {districts.map(x => <button key={x.id} type="button" aria-pressed={d === x.id} onClick={() => set('district', x.id)}>{x.name}</button>)}
        {(min || max) ? <button type="button" aria-pressed="true" onClick={() => { set('min', ''); set('max', '') }}>From {money(min)} ✕</button> : null}
      </div>
      {shown.length ? (
        <div className="grid">
          {shown.map(h => (
            <Link key={h.id} to={`/home/${h.id}`} className="card" data-rv>
              <span className="card-img"><img src={h.imgs[0]} alt="" loading="lazy" />{h.status && <span className="tag">{h.status}</span>}</span>
              <span className="card-title">{h.title}</span>
              <span className="card-row"><span>{districtName(h.district)} · {h.beds} bed · {h.size} m²</span><b>{money(h.price)}{h.lease ? '/mo' : ''}</b></span>
            </Link>
          ))}
        </div>
      ) : <div className="empty"><p>Nothing listed at that level today. Many of our homes are offered privately first.</p><Link className="btn" to="/#contact">Ask Wabrah</Link></div>}
    </section>
  )
}
