import { blockImg } from '../data/site.js'

const steps = [['Visit', 'We inspect the building and the tenancy files with you.'], ['Proposal', 'A fixed fee in writing within three working days.'], ['Onboarding', 'Tenants move to app payment; we take over the keys and the calls.'], ['Report', 'Your first statement lands on the 1st of the month.']]

export default function Steps() {
  return (
    <section id="steps" className="steps wrap" aria-labelledby="steps-h">
      <img src={blockImg} alt="Residential block with balconies" loading="lazy" data-rv />
      <div>
        <h2 id="steps-h" className="title" data-rv>Handover in four steps</h2>
        <ol className="step-list">{steps.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ol>
      </div>
    </section>
  )
}
