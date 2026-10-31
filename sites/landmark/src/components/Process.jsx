import villa from '../assets/img/villa-white.jpg'

const steps = [
  ['View', 'Same week, in person or by video call from wherever you live.'],
  ['Reserve', 'Agree the price and hold the home with a reservation deposit.'],
  ['Register', 'We prepare the sale agreement and book the Survey and Land Registration Bureau.'],
  ['Own it', 'You receive the title deed in your name, usually within four weeks.'],
]

export default function Process() {
  return (
    <section id="process" className="process wrap" aria-labelledby="process-h">
      <div className="process-photo" data-rv><img src={villa} alt="White villa with a pool and terrace" loading="lazy" /></div>
      <div className="process-copy">
        <h2 id="process-h" className="title" data-rv>From first viewing to your title deed</h2>
        <ol className="steps">
          {steps.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}
        </ol>
      </div>
    </section>
  )
}
