import { siteConfig } from '../config/site.ts'

export function whatsappUrl(message: string): string {
  const digits = siteConfig.whatsapp.replace(/\D/g, '')
  const phone = digits.length > 0 ? digits : siteConfig.whatsapp
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function productInquiryMessage(nombre: string): string {
  const label = nombre === 'Amigurumi de Graduación' ? `${nombre} 🎓` : nombre
  const mentioned = label.startsWith('Amigurumi') ? `el ${label}` : label
  return `Hola, estoy interesada en ${mentioned}. ¿Podrían brindarme información sobre su disponibilidad?`
}

export function customOrderMessage(): string {
  return 'Hola, quiero un amigurumi personalizado. ¿Podrían brindarme información?'
}

export function generalInquiryMessage(): string {
  return 'Hola, estoy interesada en sus amigurumis. ¿Podrían brindarme información?'
}
