import { Link, useParams } from 'react-router-dom'
import { ProductGallery } from '../components/ProductGallery.tsx'
import { ProductStatus } from '../components/ProductStatus.tsx'
import { Seo } from '../components/Seo.tsx'
import { WhatsAppButton } from '../components/WhatsAppButton.tsx'
import { siteConfig } from '../config/site.ts'
import { formatPrice } from '../utils/format.ts'
import { getProductBySlug, getProductImages } from '../utils/products.ts'
import { productInquiryMessage } from '../utils/whatsapp.ts'

export function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <section className="section">
        <Seo
          title={`Pieza no encontrada | ${siteConfig.name}`}
          description={siteConfig.seo.description}
        />
        <div className="container narrow">
          <h1>No encontré ese amigurumi</h1>
          <p className="lead">
            Puede que el enlace haya cambiado. En el catálogo están las piezas que puedo mostrarte ahora.
          </p>
          <Link className="btn btn-primary" to={{ pathname: '/', hash: '#catalogo' }}>
            {siteConfig.texts.viewCatalog}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section detail-page">
      <Seo title={`${product.nombre} | ${siteConfig.name}`} description={product.descripcion} />
      <div className="container">
        <Link className="back-link" to={{ pathname: '/', hash: '#catalogo' }}>
          ← Volver al catálogo
        </Link>
        <div className="detail">
          <ProductGallery images={getProductImages(product)} nombre={product.nombre} />
          <div className="detail-info">
            <p className="eyebrow">{product.categoria}</p>
            <h1>{product.nombre}</h1>
            <p className="detail-price">{formatPrice(product.precio, product.moneda)}</p>
            <p className="detail-description">{product.descripcion}</p>
            <dl className="specs">
              <div>
                <dt>Medidas</dt>
                <dd>{product.medidas}</dd>
              </div>
              <div>
                <dt>Material</dt>
                <dd>{product.material}</dd>
              </div>
              <div>
                <dt>Estado</dt>
                <dd>
                  <ProductStatus estado={product.estado} />
                </dd>
              </div>
              <div>
                <dt>Tiempo de elaboración</dt>
                <dd>{product.tiempoElaboracion}</dd>
              </div>
              <div>
                <dt>Personalizable</dt>
                <dd>{product.personalizable ? 'Sí' : 'No'}</dd>
              </div>
              <div>
                <dt>Categoría</dt>
                <dd>{product.categoria}</dd>
              </div>
            </dl>
            {product.estado === 'AGOTADO' && (
              <p className="detail-note">
                Esta pieza ya tiene dueño. Puedes escribirme si quieres una similar.
              </p>
            )}
            <div className="detail-actions">
              <WhatsAppButton message={productInquiryMessage(product.nombre)}>
                {siteConfig.texts.whatsappCta}
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
