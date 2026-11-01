import lounge from '../assets/img/lounge.jpg'

const steps = [
  ['A video call', 'Tell us about work, schools and budget. Twenty minutes, any evening.'],
  ['A shortlist', 'We send five to eight homes that fit, each with its school zone and commute.'],
  ['One tour weekend', 'Every home on the list in one weekend, in person or by live video.'],
  ['Keys', 'Inspections, lender and closing handled, even if you are still out of state.'],
]

export default function Move() {
  return (
    <section id="move" className="move wrap" aria-labelledby="move-h">
      <div className="move-photo" data-rv><img src={lounge} alt="Bright family living room" loading="lazy" /></div>
      <div>
        <h2 id="move-h" className="title" data-rv>Moving from out of town? Here is the plan.</h2>
        <ol className="move-list">{steps.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ol>
      </div>
    </section>
  )
}
