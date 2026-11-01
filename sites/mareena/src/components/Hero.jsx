import { heroImg, wa } from '../data/site.js'
import Clock from './Clock.jsx'

const figs = [['24/7', 'Reception and security'], ['5', 'Apartment types'], ['Sea', 'Views from the coastal side']]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <img className="hero-img" src={heroImg} alt="Mareena Tower’s balconies against the sky" fetchpriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <p className="hero-word" aria-hidden="true">Mareena</p>
      <dl className="figs">{figs.map(([n, l]) => <div key={l}><dt>{l}</dt><dd>{n}</dd></div>)}</dl>
      <div className="hero-low">
        <div>
          <h1 id="hero-h" className="hero-h">Open all hours, by the sea</h1>
          <Clock />
          <a className="boxbtn" href={wa('Hello Mareena Tower, I would like to see an apartment.')} target="_blank" rel="noreferrer">WhatsApp reception <span aria-hidden="true">»</span></a>
        </div>
        <p className="hero-note">Furnished and unfurnished apartments in Mareena Tower on the coastal road at Al-Mahboula, with reception, security and maintenance 24 hours a day.</p>
      </div>
    </section>
  )
}
