import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HomeCard from '../components/HomeCard.jsx'
import Viewing from '../components/Viewing.jsx'
import { homes, islandName, office } from '../data/site.js'
import { money, monthly, priceLabel, toggleSaved, useReveal, useSaved } from '../lib.js'

export default function Property() {
  const { id } = useParams()
  const h = homes.find(x => x.id === id)
  const saved = useSaved().includes(id)
  const [i, setI] = useState(0)
  useReveal(id)
  useEffect(() => { setI(0); if (h) document.title = `${h.title} · Landmark Bahrain` }, [id])
  if (!h) return (
    <section className="sect wrap page-top"><h1 className="title">This home has been sold or let</h1><p className="lede">It is no longer on the market. Here is everything we have now.</p><Link className="btn btn-ink" to="/#homes">See all homes</Link></section>
  )
  const similar = homes.filter(x => x.id !== h.id && x.deal === h.deal).sort((a, b) => (b.island === h.island) - (a.island === h.island)).slice(0, 3)
  const buy = h.deal === 'buy'
  return (
    <>
      <section className="prop wrap page-top" aria-labelledby="prop-h">
        <Link to="/#homes" className="back">← All homes</Link>
        <div className="gallery">
          <div className="gallery-main">
            <img key={i} src={h.imgs[i]} alt={`${h.title}, photo ${i + 1} of ${h.imgs.length}`} />
            {h.status && <span className="card-tag">{h.status}</span>}
          </div>
          <div className="gallery-thumbs" role="group" aria-label="Photos">
            {h.imgs.map((src, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={src} alt="" /></button>)}
          </div>
        </div>
        <div className="prop-body">
          <div className="prop-main">
            <p className="prop-where">{islandName(h.island)} · {h.type}</p>
            <h1 id="prop-h" className="title">{h.title}</h1>
            <p className="prop-price">{priceLabel(h)}</p>
            <dl className="facts">
              <div><dt>Bedrooms</dt><dd>{h.beds}</dd></div>
              <div><dt>Bathrooms</dt><dd>{h.baths}</dd></div>
              <div><dt>Size</dt><dd>{h.size} m²</dd></div>
              <div><dt>Ownership</dt><dd>{buy ? 'Freehold' : 'Lease'}</dd></div>
            </dl>
            <p className="prop-text">{h.text}</p>
            <ul className="prop-features">{h.features.map(f => <li key={f}>{f}</li>)}</ul>
            {buy && (
              <dl className="ledger">
                <div><dt>Registration fee (2%)</dt><dd>{money(h.price * 0.02)}</dd></div>
                <div><dt>With 30% down, monthly over 20 years</dt><dd>{money(monthly(h.price * 0.7, 6.25, 20))}</dd></div>
                <div className="is-sum"><dt>Golden Residency</dt><dd>{h.price >= 200000 ? 'Qualifies' : 'Below BHD 200,000'}</dd></div>
              </dl>
            )}
            <button type="button" className={'btn btn-line save-big' + (saved ? ' is-on' : '')} aria-pressed={saved} onClick={() => toggleSaved(h.id)}>{saved ? 'Saved' : 'Save this home'}</button>
          </div>
          <aside className="prop-side" aria-labelledby="book-h">
            <h2 id="book-h" className="subtitle">Book a viewing</h2>
            <Viewing home={h} />
            <p className="fine">Or call <a href={`tel:${office.tel}`}>{office.phone}</a></p>
          </aside>
        </div>
      </section>
      <section className="sect wrap" aria-labelledby="sim-h">
        <h2 id="sim-h" className="title" data-rv>You may also like</h2>
        <div className="cards">{similar.map(x => <HomeCard key={x.id} h={x} />)}</div>
      </section>
    </>
  )
}
