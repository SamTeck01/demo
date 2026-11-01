import { seaImg } from '../data/site.js'

const services = [['Reception', 'At the desk 24 hours, every day of the year.'], ['Security', 'Guards and CCTV on every floor and the car park.'], ['Maintenance', 'An engineer on site day and night.'], ['Housekeeping', 'Weekly cleaning in furnished apartments.'], ['Parking', 'A covered bay for every apartment.'], ['The sea', 'The beach and the coastal walk across the road.']]

export default function Tower() {
  return (
    <section id="tower" className="tower" aria-labelledby="tower-h">
      <img src={seaImg} alt="The Gulf at sunrise from the beach" loading="lazy" />
      <div className="tower-in">
        <h2 id="tower-h" className="title" data-rv>In the tower</h2>
        <ul className="svc">{services.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ul>
      </div>
    </section>
  )
}
