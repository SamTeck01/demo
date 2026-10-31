import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import './page.css'
import Home from './Home.jsx'
import Page from './Page.jsx'

// A client with its own folder in ./sites gets its bespoke build; the rest use the plan engine until rebuilt.
const bespoke = Object.fromEntries(Object.entries(import.meta.glob('./sites/*/index.jsx')).map(([k, f]) => [k.split('/')[2], lazy(f)]))

function Client() {
  const { path } = useParams()
  const Site = bespoke[path]
  return Site ? <Suspense fallback={null}><Site /></Suspense> : <Page />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:path/*" element={<Client />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
