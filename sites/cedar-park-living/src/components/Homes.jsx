import { Link, useSearchParams } from 'react-router-dom'
import HomeCard from './HomeCard.jsx'
import { homes, areaName } from '../data/site.js'

export default function Homes() {
  const [q] = useSearchParams()
  const area = q.get('area'), beds = +q.get('beds') || 0, max = +q.get('max') || Infinity
  const shown = homes.filter(h => (!area || h.area === area) && h.beds >= beds && h.price <= max)
  return (
    <section id="homes" className="band" aria-labelledby="homes-h">
      <div className="wrap">
        <div className="sect-head">
          <h2 id="homes-h" className="title" data-rv>{area ? `Homes in ${areaName(area)}` : 'Homes we’re showing now'}</h2>
          <p className="count" aria-live="polite">{shown.length} of {homes.length} homes{shown.length < homes.length && <> · <Link to="/#homes">Show all</Link></>}</p>
        </div>
        {shown.length ? <div className="cards">{shown.map(h => <HomeCard key={h.id} h={h} />)}</div> : (
          <div className="empty"><p>Nothing matches yet. Homes here often sell before they are listed; tell us what you need.</p><Link className="btn btn-dark" to="/#visit">Tell Christina &amp; Stephanie</Link></div>
        )}
      </div>
    </section>
  )
}
