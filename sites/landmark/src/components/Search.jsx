import { useNavigate, useSearchParams } from 'react-router-dom'
import { islands } from '../data/site.js'

export const budgets = {
  buy: [['', 'Any budget'], ['100000', 'Up to BHD 100,000'], ['200000', 'Up to BHD 200,000'], ['300000', 'Up to BHD 300,000'], ['500000', 'Up to BHD 500,000']],
  rent: [['', 'Any budget'], ['700', 'Up to BHD 700 a month'], ['1000', 'Up to BHD 1,000 a month'], ['1500', 'Up to BHD 1,500 a month']],
}

// The search writes to the address bar, so a search can be shared or sent on WhatsApp.
export default function Search() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const deal = q.get('deal') || 'buy'
  const submit = e => {
    e.preventDefault()
    const d = new FormData(e.currentTarget), p = new URLSearchParams()
    for (const [k, v] of d) if (v) p.set(k, v)
    go(`/?${p}#homes`)
  }
  return (
    <form className="search wrap" onSubmit={submit} aria-label="Search homes" key={q.toString()}>
      <fieldset className="search-deal">
        <legend className="sr">Buy or rent</legend>
        {[['buy', 'Buy'], ['rent', 'Rent']].map(([v, t]) => (
          <label key={v}><input type="radio" name="deal" value={v} defaultChecked={deal === v} onChange={e => go(`/?deal=${e.target.value}#homes`, { replace: true })} /><span>{t}</span></label>
        ))}
      </fieldset>
      <label className="search-field"><span>Island</span>
        <select name="island" defaultValue={q.get('island') || ''}>
          <option value="">All islands</option>
          {islands.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
        </select>
      </label>
      <label className="search-field"><span>Type</span>
        <select name="type" defaultValue={q.get('type') || ''}>
          <option value="">Any type</option>
          {['Apartment', 'Villa', 'Townhouse', 'Penthouse'].map(t => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="search-field"><span>Budget</span>
        <select name="max" defaultValue={q.get('max') || ''}>
          {budgets[deal].map(([v, t]) => <option key={v} value={v}>{t}</option>)}
        </select>
      </label>
      <button className="btn btn-ink search-go" type="submit">
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="m14 14 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
        Search
      </button>
    </form>
  )
}
