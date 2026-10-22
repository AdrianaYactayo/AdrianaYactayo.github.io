import { siteConfig } from '../config/site.ts'
import { customOrderMessage } from '../utils/whatsapp.ts'
import { WhatsAppButton } from './WhatsAppButton.tsx'

export function CustomSection() {
  return (
    <section className="custom-band" id="personalizados">
      <div className="container">
        <div className="custom-card">
          <p className="eyebrow is-centered">A tu manera</p>
          <h2>{siteConfig.texts.customTitle}</h2>
          <p className="lead">{siteConfig.texts.customText}</p>
          <WhatsAppButton message={customOrderMessage()}>{siteConfig.texts.customButton}</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
