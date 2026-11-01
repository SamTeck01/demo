import { interiorImg } from '../data/site.js'

const why = [
  ['Freehold for everyone', 'Any nationality can own outright, with the title in your name.'],
  ['Pay in crypto', 'Deposits can be paid in major cryptocurrencies.'],
  ['Golden Residency', 'Homes of BHD 200,000 or more can qualify you for Bahrain’s 10-year residency.'],
  ['Buy from abroad', 'Reserve on WhatsApp, sign digitally and visit when you are ready.'],
]

export default function Why() {
  return (
    <section className="why" aria-labelledby="why-h">
      <div className="why-text wrap">
        <h2 id="why-h" className="title" data-rv>Why buyers choose Dilmunia</h2>
        <ul className="why-list">{why.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ul>
      </div>
      <img src={interiorImg} alt="Glass staircase beside a pool" loading="lazy" />
    </section>
  )
}
