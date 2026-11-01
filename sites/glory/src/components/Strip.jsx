const figs = [['63k', 'Starting price, BHD'], ['0%', 'Interest on the plan'], ['5 yrs', 'To pay it off'], ['All', 'Nationalities may buy']]

export default function Strip() {
  return (
    <section className="strip" aria-label="Breeze of Dilmunia in figures">
      {figs.map(([n, l]) => <p key={l} data-rv><span>{n}</span>{l}</p>)}
    </section>
  )
}
