import { office } from '../data/site.js'

export default function Team() {
  return (
    <section id="team" className="team wrap" aria-labelledby="team-h">
      <h2 id="team-h" className="title" data-rv>Two agents, one team</h2>
      <div className="people">
        <div className="person" data-rv><span className="mono" aria-hidden="true">CL</span><div><h3>Christina Legrand</h3><p>Realtor, licensed since 2004</p></div></div>
        <div className="person" data-rv><span className="mono" aria-hidden="true">SR</span><div><h3>Stephanie Reyna</h3><p>Realtor, relocation and new builds</p></div></div>
      </div>
      <p className="team-note" data-rv>45+ five-star reviews from buyers and sellers. <a href={`tel:${office.tel}`}>Call them on {office.phone}</a></p>
    </section>
  )
}
