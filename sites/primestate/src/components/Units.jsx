import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { buildings, units, buildingOf } from '../data/site.js'
import { money } from '../lib.js'

export default function Units() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const bld = q.get('building') || '', beds = +q.get('beds') || 0
  const set = (k, v) => { const p = new URLSearchParams(q); v ? p.set(k, v) : p.delete(k); go(`/?${p}#units`, { replace: true }) }
  const shown = units.filter(u => (!bld || u.building === bld) && (!beds || u.beds === beds))
  return (
    <section id="units" className="units wrap" aria-labelledby="units-h">
      <h2 id="units-h" className="title" data-rv>Units available now</h2>
      <div className="filters">
        <div className="chips" role="group" aria-label="Building"><button type="button" aria-pressed={!bld} onClick={() => set('building', '')}>All buildings</button>{buildings.map(b => <button key={b.id} type="button" aria-pressed={bld === b.id} onClick={() => set('building', b.id)}>{b.name}</button>)}</div>
        <div className="chips" role="group" aria-label="Bedrooms"><button type="button" aria-pressed={!beds} onClick={() => set('beds', '')}>Any</button>{[1, 2, 3, 4].map(n => <button key={n} type="button" aria-pressed={beds === n} onClick={() => set('beds', String(n))}>{n} bed</button>)}</div>
      </div>
      {shown.length ? (
        <div className="grid">
          {shown.map(u => (
            <Link key={u.id} to={`/unit/${u.id}`} className="card" data-rv>
              <span className="card-img"><img src={u.imgs[0]} alt="" loading="lazy" /><span className="tag">{u.lease ? 'For lease' : 'For sale'}</span></span>
              <span className="card-row"><span className="card-title">{buildingOf(u.building).name}</span><b>{money(u.price)}{u.lease ? '/mo' : ''}</b></span>
              <span className="card-meta">{u.title} · {u.size} m²{u.bills ? ` · ${u.bills}` : ''}</span>
            </Link>
          ))}
        </div>
      ) : <p className="empty">Nothing free in that combination today. Units come free every month; <Link to="/#contact">ask leasing</Link>.</p>}
    </section>
  )
}
