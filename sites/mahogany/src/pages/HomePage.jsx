import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Viewing from '../components/Showing.jsx'
import { homes, office, areaName } from '../data/site.js'
import { money, monthly, useReveal } from '../lib.js'

export default function HomePage() {
  const { id } = useParams()
  const h = homes.find(x => x.id === id)
  const [i, setI] = useState(0)
  useReveal(id)
  useEffect(() => { setI(0); if (h) document.title = `${h.title} · Mahogany Real Estate` }, [id])
  if (!h) return <section className="wrap page-top"><h1 className="title">That home has sold</h1><p className="lede">Ask Angellet what is coming up.</p><Link className="pill" to="/#homes">See all homes</Link></section>
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#homes" className="back">← All homes</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={h.imgs[i]} alt={`${h.title}, photo ${i + 1} of ${h.imgs.length}`} />{h.status && <span className="tag">{h.status}</span>}</div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{h.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{h.title}</h1>
          <p className="prop-price">{money(h.price)}{h.rent ? ' a month' : ''}</p>
          <dl className="facts">
            <div><dt>Bedrooms</dt><dd>{h.beds}</dd></div><div><dt>Baths</dt><dd>{h.baths}</dd></div>
            <div><dt>Size</dt><dd>{h.sqft.toLocaleString('en-US')} sq ft</dd></div><div><dt>Area</dt><dd>{areaName(h.area)}</dd></div>
          </dl>
          <p className="prop-text">{h.text}</p>
          <dl className="ledger">
            {h.rent ? <div><dt>Available</dt><dd>{h.status}</dd></div> : <div><dt>Monthly with 10% down, tax and insurance</dt><dd>{money(monthly(h.price * 0.9, 6.6, 30) + h.price * 0.013 / 12 + 140)}</dd></div>}
            
          </dl>
        </div>
        <aside className="panel prop-side" aria-labelledby="v-h"><h2 id="v-h" className="panel-h">Book a showing</h2><Viewing home={h} /><p className="fine">Or call <a href={`tel:${office.tel}`}>{office.phone}</a></p></aside>
      </div>
    </section>
  )
}
