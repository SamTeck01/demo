const steps = [['View', 'Same-day viewings, seven days a week.'], ['Reserve', 'Hold the unit with the security deposit.'], ['Sign', 'Contract and Kahramaa set up by us.'], ['Move in', 'Keys on the agreed date.']]
const qs = [
  ['Are bills included?', 'It depends on the unit; each listing says whether Kahramaa is included.'],
  ['How many cheques?', 'Usually twelve post-dated cheques; ask about six, four or two.'],
  ['Can I sign as a company?', 'Yes, corporate leases are welcome.'],
  ['Can I buy instead?', 'Viva Bahriya units are freehold and some are for sale; ask leasing for the list.'],
]
export function Steps() {
  return (
    <section className="steps wrap" aria-labelledby="steps-h">
      <h2 id="steps-h" className="title" data-rv>From viewing to keys</h2>
      <ol className="step-list">{steps.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </section>
  )
}
export function Faq() {
  return (
    <section id="faq" className="faq wrap" aria-labelledby="faq-h">
      <h2 id="faq-h" className="title" data-rv>Leasing questions</h2>
      <div className="faq-list">{qs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </section>
  )
}
