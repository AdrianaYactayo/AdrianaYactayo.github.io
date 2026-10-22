import { useState } from 'react'
import { ProductImage } from './ProductImage.tsx'

type ProductGalleryProps = {
  images: string[]
  nombre: string
}

export function ProductGallery({ images, nombre }: ProductGalleryProps) {
  const [active, setActive] = useState(0)
  const safeIndex = active < images.length ? active : 0
  const current = images[safeIndex] ?? images[0]

  if (!current) return null

  return (
    <div className="gallery">
      <div className="gallery-main frame">
        <ProductImage
          key={current}
          src={current}
          alt={`${nombre}, fotografía ${safeIndex + 1}`}
          priority
        />
      </div>
      {images.length > 1 && (
        <ul className="thumbs">
          {images.map((image, index) => (
            <li key={`${image}-${index}`}>
              <button
                type="button"
                className={index === safeIndex ? 'thumb frame is-active' : 'thumb frame'}
                onClick={() => setActive(index)}
                aria-label={`Ver fotografía ${index + 1} de ${nombre}`}
                aria-current={index === safeIndex}
              >
                <ProductImage src={image} alt="" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
