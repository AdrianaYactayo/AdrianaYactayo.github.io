export interface Product {
  id: string
  nombre: string
  slug: string
  descripcion: string
  precio: number
  moneda: string
  medidas: string
  material: string
  estado: 'DISPONIBLE' | 'POR_PEDIDO' | 'AGOTADO'
  tiempoElaboracion: string
  personalizable: boolean
  categoria: string
  imagenPrincipal: string
  imagenes: string[]
  destacado: boolean
}
