import { categories } from '../data/categories.ts'
import { products } from '../data/products.ts'
import type { Product } from '../types/Product.ts'

const knownCategories: readonly string[] = categories

export function getProductBySlug(slug: string | undefined): Product | undefined {
  if (!slug) return undefined
  return products.find((product) => product.slug === slug)
}

export function getProductImages(product: Product): string[] {
  if (product.imagenes.length === 0) return [product.imagenPrincipal]
  if (product.imagenes.includes(product.imagenPrincipal)) return product.imagenes
  return [product.imagenPrincipal, ...product.imagenes]
}

export function getFilterCategories(items: Product[]): string[] {
  const extras = items
    .map((item) => item.categoria)
    .filter((category) => !knownCategories.includes(category))
  return [...categories, ...new Set(extras)]
}
