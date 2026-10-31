import porchImg from '../assets/img/craftsman.jpg'

const steps = [
  ['We listen first', 'One conversation about how you live: the commute, the school, the yard you want or don’t.'],
  ['We scout ahead', 'Our agents often hear about homes before they list, so you see the right one early.'],
  ['We negotiate', 'Offers written on real comps, inspections handled, repairs agreed in writing.'],
  ['You move in', 'Closing day, keys, and the name of a good plumber.'],
]

export default function Steps() {
  return (
    <section id="how" className="how" aria-labelledby="how-h">
      <div className="wrap how-in">
        <h2 id="how-h" className="title" data-rv>How a hunt goes</h2>
        <ol className="how-list">{steps.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ol>
      </div>
      <img className="how-img" src={porchImg} alt="Craftsman home with a deep front porch" loading="lazy" />
    </section>
  )
}
