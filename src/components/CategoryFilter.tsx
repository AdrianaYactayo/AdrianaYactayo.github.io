import { getFilterCategories } from '../utils/products.ts'
import type { Product } from '../types/Product.ts'
import type { StatusFilter } from '../types/filters.ts'

const statusOptions: { value: StatusFilter; label: string }[] = [
  { value: 'TODOS', label: 'Todos' },
  { value: 'DISPONIBLE', label: 'Disponibles' },
  { value: 'POR_PEDIDO', label: 'Por pedido' },
  { value: 'AGOTADO', label: 'Agotados' },
]

type CategoryFilterProps = {
  products: Product[]
  status: StatusFilter
  category: string
  onStatusChange: (value: StatusFilter) => void
  onCategoryChange: (value: string) => void
}

export function CategoryFilter({
  products,
  status,
  category,
  onStatusChange,
  onCategoryChange,
}: CategoryFilterProps) {
  const categoryOptions = ['TODAS', ...getFilterCategories(products)]

  return (
    <div className="filters">
      <fieldset>
        <legend>Estado</legend>
        <div className="chip-row" role="group" aria-label="Filtrar por estado">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={status === option.value ? 'chip is-active' : 'chip'}
              aria-pressed={status === option.value}
              onClick={() => onStatusChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Categoría</legend>
        <div className="chip-row" role="group" aria-label="Filtrar por categoría">
          {categoryOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={category === option ? 'chip is-active' : 'chip'}
              aria-pressed={category === option}
              onClick={() => onCategoryChange(option)}
            >
              {option === 'TODAS' ? 'Todas' : option}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
