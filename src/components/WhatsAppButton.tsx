import type { ReactNode } from 'react'
import { whatsappUrl } from '../utils/whatsapp.ts'
import { WhatsAppIcon } from './Icons.tsx'

type WhatsAppButtonProps = {
  message: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  className?: string
}

export function WhatsAppButton({
  message,
  children,
  variant = 'primary',
  className,
}: WhatsAppButtonProps) {
  const classes = ['btn', `btn-${variant}`, 'whatsapp-btn', className ?? '']
    .filter((item) => item.length > 0)
    .join(' ')

  return (
    <a className={classes} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon className="btn-icon" />
      {children}
    </a>
  )
}
