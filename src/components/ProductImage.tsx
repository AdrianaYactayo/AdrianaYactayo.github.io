import { useState } from 'react'
import { siteConfig } from '../config/site.ts'
import { publicAsset } from '../utils/assets.ts'

type ProductImageProps = {
  src: string
  alt: string
  priority?: boolean
}

export function ProductImage({ src, alt, priority = false }: ProductImageProps) {
  const resolved = publicAsset(src)
  const fallback = publicAsset(siteConfig.placeholderImage)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const failed = failedSrc === resolved
  const filename = src.split('/').pop() ?? src

  return (
    <span className="media">
      <img
        src={failed ? fallback : resolved}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => setFailedSrc(resolved)}
      />
      {failed && (
        <span className="media-hint" aria-hidden="true">
          public/images/{filename}
        </span>
      )}
    </span>
  )
}
