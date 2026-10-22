import { siteConfig } from '../config/site.ts'
import type { Product } from '../types/Product.ts'

// Agrega un producto nuevo copiando un objeto de este arreglo.
// Las fotografías no van aquí: colócalas en public/images/
// y usa la ruta pública, por ejemplo "/images/graduacion-01.jpg".
// Si el archivo todavía no existe, la tarjeta muestra un reemplazo
// e indica el nombre del archivo que falta.

export const products: Product[] = [
  {
    id: 'graduacion',
    nombre: 'Amigurumi de Graduación',
    slug: 'amigurumi-graduacion',
    descripcion:
      'Amigurumi tejido a mano, ideal para celebrar un logro tan especial como una graduación.',
    precio: 100,
    moneda: siteConfig.currency,
    medidas: '25 cm aprox.',
    material: 'Hilo de algodón y relleno hipoalergénico',
    estado: 'POR_PEDIDO',
    tiempoElaboracion: '7-10 días',
    personalizable: true,
    categoria: 'Graduación',
    imagenPrincipal: '/images/graduada.png',
    imagenes: ['/images/graduacion-01.jpg', '/images/graduacion-02.jpg'],
    destacado: true,
  },
  {
  id: 'snoopy-calabaza',
  nombre: 'Snoopy Calabaza',
  slug: 'snoopy-calabaza',
  descripcion: 'Snoopy tejido a mano con disfraz de calabaza, perfecto para darle un toque tierno y divertido a Halloween.',
  precio: 45,
  moneda: siteConfig.currency,
  medidas: '14 cm aprox.',
  material: 'Hilo de algodón y relleno suave',
  estado: 'DISPONIBLE',
  tiempoElaboracion: '4-6 días',
  personalizable: false,
  categoria: 'Animales',
  imagenPrincipal: '/images/snoopy-calabaza-01.png',
  imagenes: ['/images/snoopy-calabaza-01.jpg'],
  destacado: true,
},
  {
    id: 'conejito',
    nombre: 'Conejito',
    slug: 'conejito',
    descripcion:
      'Conejito de orejas largas tejida a mano, con un lazo delicado. Se prepara por pedido y puede llevar los colores que elijas.',
    precio: 70,
    moneda: siteConfig.currency,
    medidas: '22 cm aprox.',
    material: 'Hilo de algodón y relleno hipoalergénico',
    estado: 'POR_PEDIDO',
    tiempoElaboracion: '7-10 días',
    personalizable: true,
    categoria: 'Animales',
    imagenPrincipal: '/images/conejo.png',
    imagenes: ['/images/conejita-01.jpg', '/images/conejita-02.jpg'],
    destacado: true,
  },
  {
  "id": "ingeniera-amigurumi",
  "nombre": "Ingeniera",
  "slug": "ingeniera-amigurumi",
  "descripcion": "Ingeniera tejida a mano, con un estilo tierno y moderno. Un detalle especial para regalar.",
  "precio": 70,
  "moneda": "PEN",
  "medidas": "25 cm aprox.",
  "material": "Hilo de algodón y relleno suave",
  "estado": "POR_PEDIDO",
  "tiempoElaboracion": "7-10 días",
  "personalizable": false,
  "categoria": "Personalizados",
  "imagenPrincipal": "/images/ingeniera.png",
  "imagenes": [
    "/images/ingeniera-01.jpg"
  ],
  "destacado": false
},
]
