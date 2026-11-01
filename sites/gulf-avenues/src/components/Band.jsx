import { Link } from 'react-router-dom'
import { duskImg } from '../data/site.js'

export default function Band() {
  return (
    <section className="band" aria-labelledby="band-h">
      <img src={duskImg} alt="White villa and pool at dusk" loading="lazy" />
      <div className="band-in">
        <h2 id="band-h" className="title">Start your search with a viewing</h2>
        <p>Tell us the district and the budget. We line up the homes and drive you between them.</p>
        <Link className="peach" to="/#contact">Book a viewing <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}
