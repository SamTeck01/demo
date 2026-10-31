const qs = [
  ['Can foreigners buy property in Bahrain?', 'Yes. In the freehold zones, which include Reef Island, Amwaj, Bahrain Bay and Juffair, every nationality can own a home outright.'],
  ['Does buying give me residency?', 'Property worth BHD 200,000 or more can qualify you for a 10-year renewable Golden Residency visa. We prepare the application with you.'],
  ['What do I pay on top of the price?', 'A 2% registration fee to the Survey and Land Registration Bureau at transfer. There is no annual property tax on homes.'],
  ['Can I get a mortgage as an expat?', 'Several Bahraini banks lend to residents and some to non-residents, usually up to 70 to 80% of the value. We introduce you to them.'],
  ['Can you manage the home while I live abroad?', 'Yes. We let it, collect the rent, handle repairs and send you a statement every month.'],
]

export default function Faq() {
  return (
    <section id="faq" className="faq wrap" aria-labelledby="faq-h">
      <h2 id="faq-h" className="title" data-rv>What buyers ask us first</h2>
      <div className="faq-list">
        {qs.map(([q, a]) => <details key={q} data-rv><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  )
}
