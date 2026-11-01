import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { homes, office, districtName } from '../data/site.js'
import { mail, money } from '../lib.js'

export default function HomePage() {
  const { id } = useParams()
  const h = homes.find(x => x.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (h) document.title = `${h.title} · Gulf Avenues` }, [id])
  if (!h) return <section className="wrap page-top"><h1 className="title">That home is no longer available</h1><Link className="peach" to="/#homes">See all homes</Link></section>
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#homes" className="back">← All homes</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={h.imgs[i]} alt={`${h.title}, photo ${i + 1}`} /></div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{h.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{h.title}</h1>
          <p className="prop-price">{money(h.price)}{h.lease ? ' a month' : ''}</p>
          <dl className="hours"><div><dt>District</dt><dd>{districtName(h.district)}</dd></div><div><dt>Bedrooms</dt><dd>{h.beds}</dd></div><div><dt>Bathrooms</dt><dd>{h.baths}</dd></div><div><dt>Size</dt><dd>{h.size} m²</dd></div><div><dt>Deal</dt><dd>{h.lease ? 'Lease' : 'Sale'}</dd></div></dl>
          <p className="prop-text">{h.text}</p>
        </div>
        <aside className="side">
          <h2 className="side-h">Book a viewing</h2>
          <a className="peach" href={mail(office.email, `Viewing: ${h.title}`, [`${h.title}, ${money(h.price)}${h.lease ? ' a month' : ''}`, 'Name:', 'Phone:', 'Best day:'])}>Email an agent <span aria-hidden="true">↗</span></a>
        </aside>
      </div>
    </section>
  )
}
