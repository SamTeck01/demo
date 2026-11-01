import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useLang } from './Lang.jsx'
import { homes, areaName } from '../data/site.js'
import { money } from '../lib.js'

export default function Homes() {
  const { t, lang } = useLang()
  const [q] = useSearchParams()
  const go = useNavigate()
  const kind = q.get('kind') || 'all', area = q.get('area')
  const set = v => { const p = new URLSearchParams(q); v === 'all' ? p.delete('kind') : p.set('kind', v); go(`/?${p}#homes`, { replace: true }) }
  const shown = homes.filter(h => (kind === 'all' || (kind === 'rent') === h.rent) && (!area || h.area === area))
  return (
    <section id="homes" className="card-sect" aria-labelledby="homes-h">
      <div className="sect-head">
        <h2 id="homes-h" className="title" data-rv>{area ? `${t.homesH} · ${areaName(area)}` : t.homesH}</h2>
        <div className="chips" role="group" aria-label={t.homesH}>
          {[['all', t.all], ['sale', t.sale], ['rent', t.rent]].map(([k, l]) => <button key={k} type="button" aria-pressed={kind === k} onClick={() => set(k)}>{l}</button>)}
          {area && <Link className="chip-link" to="/#homes">✕ {areaName(area)}</Link>}
        </div>
      </div>
      {shown.length ? (
        <div className="grid">
          {shown.map(h => (
            <Link key={h.id} to={`/home/${h.id}`} className="home" data-rv>
              <span className="home-img"><img src={h.imgs[0]} alt="" loading="lazy" />{h.status && <span className="tag">{h.status[lang]}</span>}</span>
              <span className="home-row"><span className="home-title">{h[lang][0]}</span><span className="home-price">{money(h.price)}{h.rent ? t.mo : ''}</span></span>
              <span className="home-meta">{areaName(h.area)} · {h.beds} {t.bed} · {h.baths} {t.bath} · {h.sqft.toLocaleString('en-US')} sq ft</span>
            </Link>
          ))}
        </div>
      ) : <div className="empty"><p>{t.none}</p><Link className="btn btn-ink" to="/#contact">{t.tell}</Link></div>}
    </section>
  )
}
