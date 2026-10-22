import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { ScrollToTop } from './components/ScrollToTop.tsx'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { ProductDetail } from './pages/ProductDetail.tsx'
import { getRouterBasename } from './utils/assets.ts'

export default function App() {
  return (
    <BrowserRouter basename={getRouterBasename()}>
      <ScrollToTop />
      <div className="site">
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto/:slug" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
