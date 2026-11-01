import { office } from '../data/site.js'
import { mail } from '../lib.js'

const what = [['Marketing', 'Photography, listings on the main portals and our own tenant list.'], ['Viewings', 'We show the home, so you do not have to be there.'], ['Tenant checks', 'ID, employer letter and references before anything is signed.'], ['Rent', 'Cheques collected and banked, renewals handled.']]

export default function Landlords() {
  return (
    <section id="landlords" className="land wrap" aria-labelledby="land-h">
      <div>
        <h2 id="land-h" className="title" data-rv>Landlords, we fill your unit</h2>
        <a className="peach" href={mail(office.email, 'List my property with Gulf Avenues', ['Building and area:', 'Bedrooms:', 'Expected rent:'])}>List my property <span aria-hidden="true">↗</span></a>
      </div>
      <ul className="what">{what.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ul>
    </section>
  )
}
