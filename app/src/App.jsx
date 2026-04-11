import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Country />} />
      </Routes>
    </>
  )
}

export default App
