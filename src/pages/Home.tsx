import { useMemo, useState } from 'react'
import { CategoryFilter } from '../components/CategoryFilter.tsx'
import { ContactSection } from '../components/ContactSection.tsx'
import { CustomSection } from '../components/CustomSection.tsx'
import { Hero } from '../components/Hero.tsx'
import { ProductGrid } from '../components/ProductGrid.tsx'
import { Seo } from '../components/Seo.tsx'
import { siteConfig } from '../config/site.ts'
import { products } from '../data/products.ts'
import type { StatusFilter } from '../types/filters.ts'

export function Home() {
  const [status, setStatus] = useState<StatusFilter>('TODOS')
  const [category, setCategory] = useState('TODAS')

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const statusMatches = status === 'TODOS' || product.estado === status
        const categoryMatches = category === 'TODAS' || product.categoria === category
        return statusMatches && categoryMatches
      }),
    [status, category],
  )

  const countLabel = filtered.length === 1 ? '1 amigurumi' : `${filtered.length} amigurumis`

  return (
    <>
      <Seo title={siteConfig.seo.title} description={siteConfig.seo.description} />
      <Hero />
      <section className="section" id="catalogo">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Catálogo</p>
            <h2>{siteConfig.texts.catalogTitle}</h2>
            <p className="lead">{siteConfig.texts.catalogIntro}</p>
          </div>
          <CategoryFilter
            products={products}
            status={status}
            category={category}
            onStatusChange={setStatus}
            onCategoryChange={setCategory}
          />
          <p className="result-count" aria-live="polite">
            {countLabel}
          </p>
          <ProductGrid products={filtered} />
        </div>
      </section>
      <CustomSection />
      <ContactSection />
    </>
  )
}
