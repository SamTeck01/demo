import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LangProvider } from "./components/Lang.jsx"
import App from './App.jsx'
import './styles/base.css'
import './styles/site.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/aria-global"><LangProvider><App /></LangProvider></BrowserRouter>
  </React.StrictMode>
)
