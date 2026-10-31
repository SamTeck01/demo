import { office } from '../data/site.js'

export default function Drew() {
  return (
    <section id="drew" className="drew wrap" aria-labelledby="drew-h">
      <div className="tile drew-tile" data-rv>
        <span className="mono" aria-hidden="true">DB</span>
        <h2 id="drew-h" className="title">Drew Buchanan</h2>
        <blockquote className="quote">I keep the business small on purpose, so every seller gets my time. You will never be handed to a junior.</blockquote>
        <ul className="creds"><li>Licensed Texas broker</li><li>Office on Janice Drive, 78703</li><li>A limited number of listings at a time</li></ul>
        <a className="pill pill-light" href={`tel:${office.tel}`}>Call Drew, {office.phone}</a>
      </div>
    </section>
  )
}
