import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './page.css'
import Home from './Home.jsx'
import Page from './Page.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:path" element={<Page />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
