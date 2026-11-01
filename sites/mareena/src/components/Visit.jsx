import { office, wa } from '../data/site.js'

export default function Visit() {
  return (
    <section id="visit" className="visit" aria-labelledby="visit-h">
      <div className="wrap visit-in">
        <h2 id="visit-h" className="title" data-rv>Come and see it tonight</h2>
        <div>
          <p className="addr">{office.address}</p>
          <p className="visit-act"><a className="boxbtn" href={wa('Hello Mareena Tower, I am coming to view an apartment.')} target="_blank" rel="noreferrer">WhatsApp {office.phone}</a><a className="boxbtn boxbtn-line" href={office.map} target="_blank" rel="noreferrer">Open in Maps</a></p>
          <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
        </div>
      </div>
    </section>
  )
}
