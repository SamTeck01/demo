import { Link } from 'react-router-dom'
import { useLang } from './Lang.jsx'
import { areas } from '../data/site.js'
import { money } from '../lib.js'

export default function Areas() {
  const { t, lang } = useLang()
  return (
    <section id="areas" className="card-sect" aria-labelledby="areas-h">
      <h2 id="areas-h" className="title" data-rv>{t.areasH}</h2>
      <div className="areas">
        {areas.map(a => (
          <Link key={a.id} to={`/?area=${a.id}#homes`} className="area" data-rv>
            <img src={a.img} alt="" loading="lazy" />
            <span className="area-txt"><span className="area-name">{a.name}</span><span>{a[lang]}</span><span className="area-med">{t.median} {money(a.median)}</span></span>
          </Link>
        ))}
      </div>
    </section>
  )
}
