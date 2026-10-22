import type { Product } from '../types/Product.ts'

const statusContent = {
  DISPONIBLE: { emoji: '🟢', label: 'Disponible', className: 'status-available' },
  POR_PEDIDO: { emoji: '🟡', label: 'Por pedido', className: 'status-order' },
  AGOTADO: { emoji: '🔴', label: 'Agotado', className: 'status-soldout' },
} as const

type ProductStatusProps = {
  estado: Product['estado']
}

export function ProductStatus({ estado }: ProductStatusProps) {
  const content = statusContent[estado]
  return (
    <span className={`status ${content.className}`}>
      <span aria-hidden="true">{content.emoji}</span>
      {content.label}
    </span>
  )
}
