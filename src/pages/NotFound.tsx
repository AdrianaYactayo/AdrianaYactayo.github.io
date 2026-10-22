import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo.tsx'
import { siteConfig } from '../config/site.ts'

export function NotFound() {
  return (
    <section className="section">
      <Seo title={`Página no encontrada | ${siteConfig.name}`} description={siteConfig.seo.description} />
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>Esta página no existe</h1>
        <p className="lead">El enlace no lleva a ninguna pieza del catálogo.</p>
        <Link className="btn btn-primary" to={{ pathname: '/', hash: '#inicio' }}>
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
