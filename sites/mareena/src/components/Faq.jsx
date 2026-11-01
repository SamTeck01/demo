const qs = [['Monthly or yearly?', 'Both. Furnished apartments can be rented by the month; unfurnished apartments are let yearly.'], ['Can I view at night?', 'Yes. Reception is open 24 hours, every day, and can show you an apartment at any time.'], ['Are bills included?', 'Furnished monthly stays include electricity, water and internet. Yearly leases pay their own electricity.'], ['Is there parking?', 'Every apartment has a covered parking bay.']]
export default function Faq() {
  return (
    <section id="faq" className="faq wrap" aria-labelledby="faq-h">
      <h2 id="faq-h" className="title" data-rv>Before you move in</h2>
      <div className="faq-list">{qs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </section>
  )
}
