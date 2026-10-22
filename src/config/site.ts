const name = "Mi Amigurumi"
const seoDescription = "Amigurumis tejidos a mano, regalos personalizados y detalles únicos."

export const siteConfig = {
  name,
  description: "Amigurumis hechos a mano con mucho amor",
  whatsapp: "51992688374",
  instagram: "https://www.instagram.com/arystejido/",
  currency: "PEN",
  // Imagen del hero. Sustitúyela por tu fotografía en public/images/
  // y, si cambias el nombre del archivo, actualiza esta ruta.
  heroImage: "/images/snopy.png",
  placeholderImage: "/images/placeholder.svg",
  seo: {
    title: `Amigurumis | ${name}`,
    description: seoDescription,
  },
  texts: {
    heroTitle: "Amigurumis hechos a mano con mucho amor",
    heroSubtitle: "Detalles únicos para regalar, celebrar y guardar para siempre.",
    catalogTitle: "Mis amigurumis",
    catalogIntro: "Piezas tejidas a mano, de una en una, para regalar y conservar.",
    customTitle: "¿Tienes una idea especial?",
    customText: "Podemos crear un amigurumi personalizado para ti.",
    customButton: "Quiero un personalizado",
    viewCatalog: "Ver catálogo",
    whatsappCta: "Consultar por WhatsApp",
    detailCta: "Ver detalle",
    contactTitle: "Hablemos",
    contactText: "Cuéntame qué tienes en mente. Respondo personalmente.",
  },
}
