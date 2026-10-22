import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site.ts'
import type { Product } from '../types/Product.ts'
import { formatPrice } from '../utils/format.ts'
import { ProductImage } from './ProductImage.tsx'
import { ProductStatus } from './ProductStatus.tsx'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const detailPath = `/producto/${product.slug}`
  const soldOut = product.estado === 'AGOTADO'

  return (
    <article className={soldOut ? 'card is-soldout' : 'card'}>
      <Link className="card-media frame" to={detailPath} aria-label={product.nombre}>
        <ProductImage src={product.imagenPrincipal} alt={product.nombre} />
        {product.destacado && <span className="ribbon">Destacado</span>}
      </Link>
      <div className="card-body">
        <p className="card-category">{product.categoria}</p>
        <h3>
          <Link to={detailPath}>{product.nombre}</Link>
        </h3>
        <p className="price">{formatPrice(product.precio, product.moneda)}</p>
        <p className="card-line">Medidas: {product.medidas}</p>
        <ProductStatus estado={product.estado} />
        <p className="card-line">Elaboración: {product.tiempoElaboracion}</p>
        <Link className="btn btn-secondary card-cta" to={detailPath}>
          {siteConfig.texts.detailCta}
        </Link>
      </div>
    </article>
  )
}
