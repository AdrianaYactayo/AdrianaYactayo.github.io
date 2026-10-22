import { siteConfig } from '../config/site.ts'
import { generalInquiryMessage } from '../utils/whatsapp.ts'
import { InstagramIcon } from './Icons.tsx'
import { WhatsAppButton } from './WhatsAppButton.tsx'

const year = new Date().getFullYear()

export function Footer() {

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">{siteConfig.name}</p>
        <div className="footer-links">
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="btn-icon" />
            Instagram
          </a>
          <WhatsAppButton variant="text" message={generalInquiryMessage()}>
            WhatsApp
          </WhatsAppButton>
        </div>
        <p className="copyright">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
