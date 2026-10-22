import { siteConfig } from '../config/site.ts'
import { generalInquiryMessage } from '../utils/whatsapp.ts'
import { InstagramIcon } from './Icons.tsx'
import { WhatsAppButton } from './WhatsAppButton.tsx'

export function ContactSection() {
  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="contact-card">
          <p className="eyebrow is-centered">Contacto</p>
          <h2>{siteConfig.texts.contactTitle}</h2>
          <p className="lead">{siteConfig.texts.contactText}</p>
          <div className="contact-actions">
            <WhatsAppButton message={generalInquiryMessage()}>WhatsApp</WhatsAppButton>
            <a
              className="btn btn-secondary"
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="btn-icon" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
