import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang } from '../components/Lang.jsx'
import { Lead } from '../components/Contact.jsx'
import { homes, areaName } from '../data/site.js'
import { money, monthly } from '../lib.js'

export default function HomePage() {
  const { t, lang } = useLang()
  const { id } = useParams()
  const h = homes.find(x => x.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (h) document.title = `${h[lang][0]} · Aria Global Realty` }, [id, lang])
  if (!h) return <section className="card-sect"><h1 className="title">{t.sold}</h1><p>{t.soldNote}</p><Link className="btn btn-ink" to="/#homes">{t.back}</Link></section>
  const pay = monthly(h.price * 0.8, 6.6, 30) + h.price * 0.02 / 12 + 330
  return (
    <section className="card-sect prop" aria-labelledby="prop-h">
      <Link to="/#homes" className="back">{t.back}</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={h.imgs[i]} alt={`${h[lang][0]} ${i + 1}/${h.imgs.length}`} />{h.status && <span className="tag">{h.status[lang]}</span>}</div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{h.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{h[lang][0]}</h1>
          <p className="prop-price">{money(h.price)}{h.rent ? t.mo : ''}</p>
          <dl className="facts">
            <div><dt>{t.bedrooms}</dt><dd>{h.beds}</dd></div><div><dt>{t.baths}</dt><dd>{h.baths}</dd></div>
            <div><dt>{t.size}</dt><dd>{h.sqft.toLocaleString('en-US')} sq ft</dd></div><div><dt>{t.area}</dt><dd>{areaName(h.area)}</dd></div>
          </dl>
          <p className="prop-text">{h[lang][1]}</p>
          {!h.rent && <p className="prop-pay"><span>{t.monthly}</span><b>{money(pay)}</b></p>}
        </div>
        <aside className="prop-side" aria-labelledby="book-h"><h2 id="book-h" className="side-h">{t.book}</h2><Lead subject={`${t.book}: ${h[lang][0]}`} extra={[`${h[lang][0]} · ${money(h.price)}`]} /></aside>
      </div>
    </section>
  )
}
