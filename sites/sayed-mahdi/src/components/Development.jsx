import { Link } from 'react-router-dom'
import { img } from '../data/site.js'

const steps = [['Plot', 'We find or assess the land and its zoning.'], ['Design', 'Homes planned for how Bahraini families live: majlis, courtyard, parking.'], ['Build', 'Construction managed to the handover date.'], ['Sell', 'Instalment plans that let families buy before completion.']]

export default function Development() {
  return (
    <section id="development" className="dev" aria-labelledby="dev-h">
      <img src={img.wood} alt="Timber and render facade of a new home" loading="lazy" />
      <div className="dev-in">
        <h2 id="dev-h" className="title" data-rv>From plot to handover</h2>
        <ol className="dev-list">{steps.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ol>
        <Link className="pill pill-light" to="/#contact">Discuss a plot or scheme</Link>
      </div>
    </section>
  )
}
