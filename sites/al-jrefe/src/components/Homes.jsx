import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { districts, homes, districtName } from '../data/site.js'
import { money } from '../lib.js'

export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const d = q.get('district') || '', deal = q.get('deal') || ''
  const set = (k, v) => { const p = new URLSearchParams(q); v ? p.set(k, v) : p.delete(k); go(`/?${p}#homes`, { replace: true }) }
  const shown = homes.filter(h => (!d || h.district === d) && (!deal || h.lease === (deal === 'rent')))
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <div className="homes-head">
        <h2 id="homes-h" className="title" data-rv>For sale and rent</h2>
        <div className="seg" role="group" aria-label="Sale or rent">{[['', 'All'], ['buy', 'Sale'], ['rent', 'Rent']].map(([k, t]) => <button key={k} type="button" aria-pressed={deal === k} onClick={() => set('deal', k)}>{t}</button>)}</div>
      </div>
      <div className="chips" role="group" aria-label="District"><button type="button" aria-pressed={!d} onClick={() => set('district', '')}>All districts</button>{districts.map(x => <button key={x.id} type="button" aria-pressed={d === x.id} onClick={() => set('district', x.id)}>{x.name}</button>)}</div>
      <div className="grid">
        {shown.map(h => (
          <Link key={h.id} to={`/home/${h.id}`} className="card" data-rv>
            <span className="card-img"><img src={h.imgs[0]} alt="" loading="lazy" /></span>
            <span className="card-row"><span className="card-title">{h.title}</span><b>{money(h.price)}{h.lease ? '/mo' : ''}</b></span>
            <span className="card-meta">{districtName(h.district)} · {h.beds ? `${h.beds} bed · ` : ''}{h.size} m²</span>
          </Link>
        ))}
      </div>
      {!shown.length && <p className="empty">Nothing here today. <Link to="/#contact">Ask us</Link>; many villas sell before they are advertised.</p>}
    </section>
  )
}
