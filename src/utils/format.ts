export function formatPrice(amount: number, currency: string): string {
  const fractionDigits = Number.isInteger(amount) ? 0 : 2
  try {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(amount)
  } catch {
    return `${currency} ${amount}`
  }
}
