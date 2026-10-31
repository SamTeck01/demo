import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import HomeCard from './HomeCard.jsx'
import { homes, islandName } from '../data/site.js'

const sorts = { new: ['Featured first', () => 0], low: ['Price, low to high', (a, b) => a.price - b.price], high: ['Price, high to low', (a, b) => b.price - a.price] }

export default function Listings() {
  const [q] = useSearchParams()
  const [sort, setSort] = useState('new')
  const deal = q.get('deal') || 'buy', island = q.get('island'), type = q.get('type'), max = +q.get('max') || Infinity
  const shown = homes.filter(h => h.deal === deal && (!island || h.island === island) && (!type || h.type === type) && h.price <= max).sort(sorts[sort][1])
  const filtered = island || type || q.get('max')
  return (
    <section id="homes" className="sect wrap" aria-labelledby="homes-h">
      <div className="sect-head">
        <h2 id="homes-h" className="title" data-rv>{deal === 'rent' ? 'Homes to rent' : 'Homes for sale'}{island ? ` on ${islandName(island)}` : ''}</h2>
        <div className="list-tools" data-rv>
          <p className="list-count" aria-live="polite">{shown.length} {shown.length === 1 ? 'home' : 'homes'}</p>
          <label className="select-inline"><span className="sr">Sort</span>
            <select value={sort} onChange={e => setSort(e.target.value)}>{Object.entries(sorts).map(([k, [t]]) => <option key={k} value={k}>{t}</option>)}</select>
          </label>
        </div>
      </div>
      {shown.length ? (
        <div className="cards">{shown.map(h => <HomeCard key={h.id} h={h} />)}</div>
      ) : (
        <div className="empty">
          <p>No homes match that search today. New homes reach us every week, often before they are advertised.</p>
          <div className="empty-act"><Link className="btn btn-ink" to={`/?deal=${deal}#homes`}>Clear the search</Link><Link className="btn btn-line" to="/#contact">Ask us to look for you</Link></div>
        </div>
      )}
      {filtered && shown.length > 0 && <p className="list-clear"><Link to={`/?deal=${deal}#homes`}>Clear the search</Link></p>}
    </section>
  )
}
