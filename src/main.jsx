import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './site.css'
import Home from './Home.jsx'
import Site from './Site.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:path" element={<Site />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
