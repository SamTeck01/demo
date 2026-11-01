import { Link, useNavigate } from 'react-router-dom'
import { heroImg, suburbs } from '../data/site.js'

const why = ['Licensed since 2004', '45+ five-star reviews', 'School-zone advice', 'Relocation tours by video', 'Pricing on real comps', 'Help through closing day']

export default function Hero() {
  const go = useNavigate()
  const submit = e => {
    e.preventDefault()
    const p = new URLSearchParams()
    for (const [k, v] of new FormData(e.currentTarget)) if (v) p.set(k, v)
    go(`/?${p}#homes`)
  }
  return (
    <section className="hero" aria-labelledby="hero-h">
      <img className="hero-img" src={heroImg} alt="Timber and stone home lit up at dusk" fetchpriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <aside className="glass-card" aria-label="Why Cedar Park Living">
        <b>Why Cedar Park Living</b>
        <ul>{why.map(w => <li key={w}>{w}</li>)}</ul>
      </aside>
      <div className="hero-copy">
        <h1 id="hero-h" className="hero-h">Live with <span>pride &amp; confidence.</span></h1>
        <p className="hero-lede">Homes in Cedar Park, Leander and Round Rock. Christina and Stephanie have helped families buy, sell and relocate here since 2004: the lake, the trails, the schools, then the house.</p>
        <form className="search" onSubmit={submit} aria-label="Search homes">
          <label><span>Area</span><select name="area" defaultValue=""><option value="">All areas</option>{suburbs.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label>
          <label><span>Beds</span><select name="beds" defaultValue=""><option value="">Any</option><option value="3">3+</option><option value="4">4+</option><option value="5">5+</option></select></label>
          <label><span>Max price</span><select name="max" defaultValue=""><option value="">Any</option><option value="450000">$450k</option><option value="550000">$550k</option><option value="700000">$700k</option><option value="900000">$900k</option></select></label>
          <button className="btn btn-mint" type="submit">Explore homes</button>
        </form>
        <Link className="hero-alt" to="/#move">Moving from out of town? See the plan</Link>
      </div>
    </section>
  )
}
