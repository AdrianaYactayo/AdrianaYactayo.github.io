import type { Product } from '../types/Product.ts'
import { ProductCard } from './ProductCard.tsx'

type ProductGridProps = {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="empty-state">
        No hay amigurumis con esta combinación de filtros. Prueba con otra categoría o estado.
      </p>
    )
  }

  return (
    <ul className="product-grid">
      {products.map((product, index) => (
        <li key={product.id} className="card-item" style={{ animationDelay: `${index * 50}ms` }}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
