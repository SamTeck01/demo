import { office, officeImg } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="about wrap" aria-labelledby="about-h">
      <div className="about-img"><img src={officeImg} alt="A Coral Gables home with a tiled roof and palms" loading="lazy" /></div>
      <div className="about-copy">
        <h2 id="about-h" className="title" data-rv>A small brokerage on purpose</h2>
        <p className="lede">{office.broker} answers her own phone. She shows the homes, runs the numbers, negotiates the price and stays on after closing to help find tenants.</p>
        <dl className="about-facts">
          <div><dd>5.0</dd><dt>Homes.com rating</dt></div>
          <div><dd>16</dd><dt>Homes sold</dt></div>
          <div><dd>2</dd><dt>Languages, English and Spanish</dt></div>
        </dl>
      </div>
    </section>
  )
}
