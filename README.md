# Mi Amigurumi

Catálogo estático de amigurumis tejidos a mano. Los clientes ven las piezas y escriben por WhatsApp. No hay compras en línea, pagos ni cuentas de usuario.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre la dirección que muestra la terminal, normalmente `http://localhost:5173`.

## Build

```bash
npm run build
```

La carpeta `dist` queda lista para publicarse. Para previsualizarla:

```bash
npm run preview
```

## Cómo agregar productos

Edita `src/data/products.ts` y agrega un objeto nuevo al arreglo `products`. No hace falta tocar los componentes.

Cada producto necesita, como mínimo: `id`, `nombre`, `slug`, `descripcion`, `precio`, `moneda`, `medidas`, `material`, `estado`, `tiempoElaboracion`, `personalizable`, `categoria`, `imagenPrincipal`, `imagenes` y `destacado`.

- `estado` solo puede ser `DISPONIBLE`, `POR_PEDIDO` o `AGOTADO`.
- `slug` se usa en la dirección. Ejemplo: `amigurumi-graduacion` abre `/producto/amigurumi-graduacion`.
- `moneda` puede tomar el valor de `siteConfig.currency`.
- Las categorías iniciales son Animales, Personajes, Graduación, Personalizados y Otros. Si escribes otra, el filtro la muestra sola.

## Cómo agregar fotografías

Coloca los archivos en `public/images/`.

Las rutas del catálogo apuntan a esa carpeta. Por ejemplo, el amigurumi de graduación espera:

```text
public/images/graduacion-01.jpg
public/images/graduacion-02.jpg
public/images/osito-01.jpg
public/images/osito-02.jpg
public/images/conejita-01.jpg
public/images/conejita-02.jpg
public/images/estrellita-01.jpg
public/images/estrellita-02.jpg
public/images/personalizado-01.jpg
public/images/personalizado-02.jpg
```

Si un archivo todavía no existe, la página no se rompe: muestra una ilustración de respaldo y el nombre del archivo que falta.

La imagen grande del inicio está en `public/images/hero.svg`. Puedes reemplazar ese archivo o cambiar `heroImage` en `src/config/site.ts` para usar una foto, por ejemplo `/images/hero.jpg`.

## Cómo cambiar WhatsApp

Edita `whatsapp` en `src/config/site.ts`.

Usa el número con código de país y sin símbolos. Ejemplo: `51999999999`. El valor de ejemplo `XXXXXXXXXXX` es un marcador: cámbialo antes de compartir el sitio.

Los botones "Consultar por WhatsApp" y "Quiero un personalizado" arman el mensaje con ese número.

## Cómo cambiar Instagram

Edita `instagram` en `src/config/site.ts` con la dirección completa del perfil, por ejemplo `https://instagram.com/tu_cuenta`.

## Cómo cambiar el nombre y los textos

También en `src/config/site.ts`:

- `name` es el nombre del emprendimiento. El título de la pestaña se arma como `Amigurumis | [nombre]`.
- `seoDescription` es la meta descripción: "Amigurumis tejidos a mano, regalos personalizados y detalles únicos."
- `texts` guarda los textos del inicio, el catálogo y los botones.

Mantén `name` y `seoDescription` entre comillas dobles. El build los lee desde ese archivo para el `index.html`.

El ícono de la pestaña está en `public/favicon.svg`.

## Cómo desplegar

El proyecto está preparado para GitHub Pages con la versión de Vite instalada. La opción `base` sigue siendo la forma compatible de publicar bajo la ruta del repositorio.

1. Crea un repositorio en GitHub y sube este proyecto en la raíz, donde está `package.json`. La rama de trabajo es `master`.
2. En el repositorio abre **Settings → Pages → Build and deployment** y elige **Source: GitHub Actions**.
3. Cada push a `master` ejecuta `.github/workflows/deploy.yml`: instala, compila y publica `dist`.
4. Durante ese build, Vite lee `GITHUB_REPOSITORY` y usa `base: /nombre-del-repo/`. El sitio queda en `https://USUARIO.github.io/NOMBRE-DEL-REPO/`.
5. Si el repositorio se llama `usuario.github.io`, la base es `/` y el sitio se sirve en la raíz del dominio.
6. Las rutas como `/producto/amigurumi-graduacion` funcionan al recargar porque el build copia `index.html` a `404.html`. GitHub Pages entrega esa página cuando no encuentra un archivo, y React Router resuelve la dirección.

Para probar en local la misma subruta que usará GitHub Pages, en PowerShell:

```powershell
$env:VITE_BASE_PATH="/amigurumi-catalogo/"
npm run build
npm run preview
```

Abre `http://localhost:4173/amigurumi-catalogo/`. Después limpia la variable con `Remove-Item Env:VITE_BASE_PATH` para que el siguiente build local vuelva a la raíz.
