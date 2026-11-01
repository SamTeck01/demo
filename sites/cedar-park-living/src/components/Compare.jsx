import { Link } from 'react-router-dom'
import { suburbs, homes } from '../data/site.js'
import { money } from '../lib.js'

// Relocating families ask the same four questions about every suburb. This answers them side by side.
export default function Compare() {
  return (
    <section id="compare" className="compare wrap" aria-labelledby="cmp-h">
      <h2 id="cmp-h" className="title" data-rv>Compare the suburbs</h2>
      <div className="table-wrap" data-rv>
        <table>
          <caption className="sr">Suburbs compared by median price, schools, commute and who they suit</caption>
          <thead><tr><th scope="col">Suburb</th><th scope="col">Median home</th><th scope="col">Schools</th><th scope="col">To downtown</th><th scope="col">Best for</th><th scope="col"><span className="sr">Homes</span></th></tr></thead>
          <tbody>
            {suburbs.map(s => {
              const n = homes.filter(h => h.area === s.id).length
              return (
                <tr key={s.id}>
                  <th scope="row"><img src={s.img} alt="" loading="lazy" />{s.name}</th>
                  <td>{money(s.median)}</td><td>{s.school}</td><td>{s.commute} min</td><td>{s.best}</td>
                  <td><Link to={`/?area=${s.id}#homes`}>{n} {n === 1 ? 'home' : 'homes'}</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
