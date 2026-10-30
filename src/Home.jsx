import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import index from './clients/index.json'

// Internal index of every demo. Clients are sent their own link, never this page.
export default function Home() {
  useEffect(() => { document.title = 'Realty demos' }, [])
  return (
    <main className="wrap" style={{ '--bg': '#111', '--ink': '#eee', background: '#111', color: '#eee', minHeight: '100svh', paddingBlock: 48, fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 40, marginBottom: 32, fontFamily: 'system-ui', fontWeight: 600 }}>Demo sites</h1>
      <ol style={{ display: 'grid', gap: 10, fontSize: 18, paddingLeft: 24 }}>
        {index.map(s => (
          <li key={s.path}><Link to={`/${s.path}`}>{s.name}</Link> <span style={{ opacity: 0.6 }}>· {s.city} · /{s.path}</span></li>
        ))}
      </ol>
    </main>
  )
}
