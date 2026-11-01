import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HomeCard from '../components/HomeCard.jsx'
import Showing from '../components/Showing.jsx'
import { homes, areas, office } from '../data/site.js'
import { money, monthly, toggleSaved, useReveal, useSaved } from '../lib.js'

export default function HomePage() {
  const { id } = useParams()
  const h = homes.find(x => x.id === id)
  const saved = useSaved().includes(id)
  const [i, setI] = useState(0)
  useReveal(id)
  useEffect(() => { setI(0); if (h) document.title = `${h.title} · Altruistic Homes` }, [id])
  if (!h) return <section className="wrap page-top"><h1 className="title">That home has sold</h1><p className="lede">It is off the market now. Here is what we are showing today.</p><Link className="btn btn-ink" to="/#homes">See all homes</Link></section>
  const hab = areas.find(x => x.id === h.area)
  const pay = monthly(h.price * 0.8, 6.75, 30) + h.price * 0.02 / 12 + 310 + h.hoa
  const flow = h.rent - (monthly(h.price * 0.75, 7.25, 30) + h.price * 0.02 / 12 + 310 + h.hoa + h.rent * 0.13)
  const similar = homes.filter(x => x.id !== h.id).sort((a, b) => Math.abs(a.price - h.price) - Math.abs(b.price - h.price)).slice(0, 3)
  return (
    <>
      <section className="wrap page-top prop" aria-labelledby="prop-h">
        <Link to="/#homes" className="back">← All homes</Link>
        <div className="gallery">
          <div className="gallery-main"><img key={i} src={h.imgs[i]} alt={`${h.title}, photo ${i + 1} of ${h.imgs.length}`} />{h.status && <span className="card-tag">{h.status}</span>}</div>
          <div className="gallery-thumbs" role="group" aria-label="Photos">{h.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
        </div>
        <div className="prop-body">
          <div>
            <p className="prop-where">{hab.name} · built {h.year}{h.hoa ? ` · HOA ${money(h.hoa)}` : ''}</p>
            <h1 id="prop-h" className="title">{h.title}</h1>
            <p className="prop-price">{money(h.price)}</p>
            <dl className="facts">
              <div><dt>Bedrooms</dt><dd>{h.beds}</dd></div><div><dt>Bathrooms</dt><dd>{h.baths}</dd></div>
              <div><dt>Size</dt><dd>{h.sqft.toLocaleString('en-US')} sq ft</dd></div><div><dt>Price per sq ft</dt><dd>{money(h.price / h.sqft)}</dd></div>
            </dl>
            <p className="prop-text">{h.text}</p>
            <dl className="hours">
              <div><dt>To live in: monthly with 20% down, tax, insurance, HOA</dt><dd>{money(pay)}</dd></div>
              <div><dt>Estimated rent</dt><dd>{money(h.rent)}</dd></div>
              <div><dt>As a rental: cash flow with 25% down</dt><dd>{flow < 0 ? '−' : '+'}{money(Math.abs(flow))}</dd></div>
            </dl>
            <button type="button" className={'btn btn-line save-big' + (saved ? ' is-on' : '')} aria-pressed={saved} onClick={() => toggleSaved(h.id)}>{saved ? 'Saved' : 'Save this home'}</button>
          </div>
          <aside className="panel prop-side" aria-labelledby="book-h"><h2 id="book-h" className="panel-h">Book a showing</h2><Showing home={h} /><p className="fine">Or call <a href={`tel:${office.tel}`}>{office.phone}</a></p></aside>
        </div>
      </section>
      <section className="wrap homes" aria-labelledby="sim-h"><h2 id="sim-h" className="title" data-rv>Similar homes</h2><div className="cards">{similar.map(x => <HomeCard key={x.id} h={x} />)}</div></section>
    </>
  )
}
