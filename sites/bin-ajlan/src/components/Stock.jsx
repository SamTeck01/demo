import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { spaces, types, typeName } from '../data/site.js'
import { money } from '../lib.js'

export default function Stock() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const deal = q.get('deal') === 'buy' ? 'buy' : 'lease', type = q.get('type') || ''
  const set = (k, v) => { const p = new URLSearchParams(q); v ? p.set(k, v) : p.delete(k); go(`/?${p}#stock`, { replace: true }) }
  const shown = spaces.filter(x => x.lease === (deal === 'lease') && (!type || x.type === type))
  return (
    <section id="stock" className="stock" aria-labelledby="stock-h">
      <div className="wrap">
        <div className="stock-head">
          <h2 id="stock-h" className="title" data-rv>Available spaces</h2>
          <div className="seg seg-dark" role="group" aria-label="Lease or buy">
            <button type="button" aria-pressed={deal === 'lease'} onClick={() => set('deal', '')}>To lease</button>
            <button type="button" aria-pressed={deal === 'buy'} onClick={() => set('deal', 'buy')}>To buy</button>
          </div>
        </div>
        <div className="chips" role="group" aria-label="Type">
          <button type="button" aria-pressed={!type} onClick={() => set('type', '')}>All types</button>
          {types.map(t => <button key={t.id} type="button" aria-pressed={type === t.id} onClick={() => set('type', t.id)}>{t.name}</button>)}
        </div>
        {shown.length ? (
          <ul className="rows">
            {shown.map(x => (
              <li key={x.id} data-rv>
                <Link to={`/space/${x.id}`} className="row">
                  <img src={x.imgs[0]} alt="" />
                  <span className="row-main"><span className="row-title">{x.title}</span><span className="row-meta">{typeName(x.type)} · {x.area} · {x.size.toLocaleString('en-US')} m²{x.status ? ` · ${x.status}` : ''}</span></span>
                  <span className="row-price">{money(x.price)}{x.lease ? '/mo' : ''}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : <p className="empty">Nothing in this view today. <Link to="/#contact">Ask the office</Link> about off-market space.</p>}
      </div>
    </section>
  )
}
