import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site.ts'
import { generalInquiryMessage } from '../utils/whatsapp.ts'
import { ProductImage } from './ProductImage.tsx'
import { WhatsAppButton } from './WhatsAppButton.tsx'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hecho a mano</p>
          <h1>{siteConfig.texts.heroTitle}</h1>
          <p className="lead">{siteConfig.texts.heroSubtitle}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to={{ pathname: '/', hash: '#catalogo' }}>
              {siteConfig.texts.viewCatalog}
            </Link>
            <WhatsAppButton variant="secondary" message={generalInquiryMessage()}>
              {siteConfig.texts.whatsappCta}
            </WhatsAppButton>
          </div>
        </div>
        {/* Reemplaza esta imagen en public/images/hero.svg
            o cambia siteConfig.heroImage si usas otro archivo. */}
        <figure className="hero-visual">
          <div className="hero-frame frame">
            <ProductImage
              src={siteConfig.heroImage}
              alt="Ilustración de un amigurumi tejido a mano"
              priority
            />
          </div>
          <figcaption className="hero-caption">
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
