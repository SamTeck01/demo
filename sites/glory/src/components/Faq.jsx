const qs = [
  ['When is handover?', 'Ask us for the current schedule for each building; we send it with the brochure.'],
  ['Is the 0% plan really interest-free?', 'Yes. You pay the price in equal monthly instalments after the deposit, with no bank and no interest.'],
  ['Can I buy without visiting?', 'Yes. Many buyers reserve on WhatsApp, sign digitally and visit later.'],
  ['Is there a service charge?', 'Yes, set per building. We send the figures before you reserve.'],
]
export default function Faq() {
  return (
    <section id="faq" className="faq wrap" aria-labelledby="faq-h">
      <h2 id="faq-h" className="title" data-rv>Questions buyers ask</h2>
      <div className="faq-list">{qs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </section>
  )
}
