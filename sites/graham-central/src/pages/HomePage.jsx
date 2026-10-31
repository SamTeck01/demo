import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Tour from '../components/Tour.jsx'
import { homes, areas, office } from '../data/site.js'
import { money, monthly, useReveal } from '../lib.js'

export default function HomePage() {
  const { id } = useParams()
  const h = homes.find(x => x.id === id)
  const [i, setI] = useState(0)
  useReveal(id)
  useEffect(() => { setI(0); if (h) document.title = `${h.title} · Graham Central Properties` }, [id])
  if (!h) return <section className="wrap page-top"><h1 className="title">That home has sold</h1><p className="lede">It is no longer on the market. New homes and leases come in every week.</p><Link className="btn btn-black" to="/#listings">See current homes</Link></section>
  const a = areas.find(x => x.id === h.area)
  const pay = monthly(h.price * 0.8, 6.5, 30) + h.price * 0.02 / 12 + 400
  const next = homes[(homes.indexOf(h) + 1) % homes.length]
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#listings" className="back">← All listings</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={h.imgs[i]} alt={`${h.title}, photo ${i + 1} of ${h.imgs.length}`} />{h.status && <span className="tag">{h.status}</span>}</div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{h.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{h.title}</h1>
          <p className="row-meta">{a.name} · {h.type}{h.lease ? ' for lease' : ''}</p>
          <p className="row-price">{money(h.price)}{h.lease ? ' a month' : ''}</p>
          <dl className="facts">
            <div><dt>Bedrooms</dt><dd>{h.beds}</dd></div><div><dt>Baths</dt><dd>{h.baths}</dd></div>
            <div><dt>Size</dt><dd>{h.sqft.toLocaleString('en-US')} sq ft</dd></div><div><dt>Schools</dt><dd>{a.school}</dd></div>
          </dl>
          <p className="row-desc">{h.text}</p>
          <dl className="hours">
            {h.lease ? <div><dt>Lease</dt><dd>12 months, pets by request</dd></div> : <div><dt>Monthly with 20% down, tax and insurance</dt><dd>{money(pay)}</dd></div>}
            <div><dt>{a.name} median</dt><dd>{a.median}</dd></div>
          </dl>
          <p className="next">Next: <Link className="ul-link" to={`/home/${next.id}`}>{next.title}</Link></p>
        </div>
        <aside className="panel prop-side" aria-labelledby="tour-h"><h2 id="tour-h" className="panel-h">Schedule a tour</h2><Tour home={h} /><p className="fine">Or call the office on <a href={`tel:${office.tel}`}>{office.phone}</a></p></aside>
      </div>
    </section>
  )
}
