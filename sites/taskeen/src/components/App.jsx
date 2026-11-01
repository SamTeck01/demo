import { useState } from 'react'

// A working slice of the owner app, drawn in HTML: the month an owner sees on their phone.
const tenants = [
  ['Flat 1', 'Paid', 380], ['Flat 2', 'Paid', 420], ['Flat 3', 'Paid', 420], ['Flat 4', 'Due Sun', 380],
  ['Flat 5', 'Paid', 450], ['Flat 6', 'Vacant', 0], ['Flat 7', 'Paid', 420], ['Flat 8', 'Paid', 380],
]
const jobs = [['AC service, Flat 4', 'Done today'], ['Lift inspection', 'Booked Tue'], ['Leak, Flat 7', 'Fixed in 3 h']]
const services = [
  ['Rent collection', 'Tenants pay in the app. You see every payment as it lands.'],
  ['24-hour maintenance', 'Our own technicians, day and night, with photos of every job.'],
  ['Leasing', 'We fill empty flats and check every tenant before they move in.'],
  ['Monthly report', 'Income, repairs and arrears, in Arabic and English, on the 1st.'],
]

export default function OwnerApp() {
  const [tab, setTab] = useState('rent')
  const paid = tenants.filter(t => t[1] === 'Paid').reduce((s, t) => s + t[2], 0)
  return (
    <section id="app" className="app-sect wrap" aria-labelledby="app-h">
      <div className="app-copy">
        <h2 id="app-h" className="title" data-rv>The owner’s quiet month</h2>
        <p className="lede" data-rv>This is the screen owners open instead of chasing tenants. Rent in, repairs done, one vacancy being let.</p>
        <ul className="svc">{services.map(([t, d]) => <li key={t} data-rv><h3>{t}</h3><p>{d}</p></li>)}</ul>
      </div>
      <div className="phone" data-ui data-rv>
        <div className="ph-top"><b>Building 14, Salmiya</b><span>November</span></div>
        <div className="ph-kpi"><span>Collected</span><b>KWD {paid.toLocaleString('en-US')}</b><small>of KWD {tenants.reduce((s, t) => s + (t[2] || 420), 0).toLocaleString('en-US')}</small></div>
        <div className="ph-tabs" role="tablist" aria-label="App views">
          <button type="button" role="tab" aria-selected={tab === 'rent'} onClick={() => setTab('rent')}>Rent</button>
          <button type="button" role="tab" aria-selected={tab === 'jobs'} onClick={() => setTab('jobs')}>Repairs</button>
        </div>
        {tab === 'rent' ? (
          <ul className="ph-list" role="tabpanel">{tenants.map(([f, s, r]) => <li key={f}><span>{f}</span><span className={'st st-' + s.split(' ')[0].toLowerCase()}>{s}</span><b>{r ? r : '–'}</b></li>)}</ul>
        ) : (
          <ul className="ph-list" role="tabpanel">{jobs.map(([j, s]) => <li key={j}><span>{j}</span><span className="st st-paid">{s}</span></li>)}</ul>
        )}
        <p className="ph-note">Sample building. Figures for illustration.</p>
      </div>
    </section>
  )
}
