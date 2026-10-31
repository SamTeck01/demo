import { useNavigate, useSearchParams } from 'react-router-dom'
import { areas } from '../data/site.js'

// The black bar from the reference: four fields and a search, written to the address bar.
export default function Search() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const submit = e => {
    e.preventDefault()
    const p = new URLSearchParams()
    for (const [k, v] of new FormData(e.currentTarget)) if (v) p.set(k, v)
    go(`/?${p}#listings`)
  }
  return (
    <form className="search" onSubmit={submit} aria-label="Search homes" key={q.toString()}>
      <label><span>Area</span><select name="area" defaultValue={q.get('area') || ''}><option value="">All areas</option>{areas.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}</select></label>
      <label><span>Buy or lease</span><select name="deal" defaultValue={q.get('deal') || ''}><option value="">Both</option><option value="buy">For sale</option><option value="lease">For lease</option></select></label>
      <label><span>Type</span><select name="type" defaultValue={q.get('type') || ''}><option value="">Any type</option>{['House', 'Apartment', 'Duplex', 'Ranch'].map(t => <option key={t}>{t}</option>)}</select></label>
      <label><span>Bedrooms</span><select name="beds" defaultValue={q.get('beds') || ''}><option value="">Any</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label>
      <button type="submit" className="search-go"><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="m14 14 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>Search</button>
    </form>
  )
}
