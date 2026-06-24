import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import CasePage from './pages/CasePage'
import { cases } from './data/cases'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/case/pixelwallmillion"
          element={<CasePage data={cases.pixelwallmillion} />}
        />
        <Route path="/case/paira" element={<CasePage data={cases.paira} />} />
        <Route path="/case/busya" element={<CasePage data={cases.busya} />} />
        <Route path="/case/secretary" element={<CasePage data={cases.secretary} />} />
      </Routes>
    </>
  )
}
