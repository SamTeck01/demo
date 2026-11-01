import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import PhoneBar from './components/PhoneBar.jsx'
import Home from './pages/Home.jsx'
import Property from './pages/Property.jsx'

export default function App() {
  const { pathname, hash } = useLocation()
  useEffect(() => { if (!hash) scrollTo(0, 0) }, [pathname, hash])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <PhoneBar />
    </>
  )
}
