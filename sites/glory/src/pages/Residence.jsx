import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { residences, wa } from '../data/site.js'
import { money } from '../lib.js'

export default function Residence() {
  const { id } = useParams()
  const r = residences.find(x => x.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (r) document.title = `${r.name} · Breeze of Dilmunia` }, [id])
  if (!r) return <section className="wrap page-top"><h1 className="title">Residence not found</h1><Link className="gold" to="/#residences">All residences</Link></section>
  const m = r.price * 0.8 / 60
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#residences" className="back">← All residences</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={r.imgs[i]} alt={`${r.name}, photo ${i + 1}`} />{r.tag && <span className="tag">{r.tag}</span>}</div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{r.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{r.name}</h1>
          <p className="prop-price">{money(r.price)}</p>
          <dl className="facts">
            <div><dt>Size</dt><dd>{r.size} m²</dd></div><div><dt>Bedrooms</dt><dd>{r.beds || 'Studio'}</dd></div>
            <div><dt>Baths</dt><dd>{r.baths}</dd></div><div><dt>Ownership</dt><dd>Freehold</dd></div>
          </dl>
          <p className="prop-text">{r.text}</p>
        </div>
        <aside className="plan-out prop-side" aria-labelledby="pp-h">
          <h2 id="pp-h" className="side-h">The standard plan</h2>
          <p className="plan-n"><span>{money(m)}</span>a month for five years, after a 20% deposit of {money(r.price * 0.2)}</p>
          <a className="gold gold-full" href={wa(`Hello Glory, I would like to reserve: ${r.name} at ${money(r.price)} on the five-year plan.`)} target="_blank" rel="noreferrer">Reserve on WhatsApp</a>
          <Link className="line" to="/#plan">Change the deposit</Link>
        </aside>
      </div>
    </section>
  )
}
