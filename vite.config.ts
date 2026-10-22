import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'

// En GitHub Actions, GITHUB_REPOSITORY define la subruta del sitio
// (https://usuario.github.io/<repo>/). En local la base es "/".
// Para forzarla: VITE_BASE_PATH=/nombre-del-repo/
function resolveBase(): string {
  const fromEnv = process.env.VITE_BASE_PATH?.trim()
  if (fromEnv) {
    if (fromEnv === '/' || fromEnv === './') return '/'
    const withLeading =
      fromEnv.startsWith('/') || fromEnv.startsWith('http') ? fromEnv : `/${fromEnv}`
    return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
  }

  const repository = process.env.GITHUB_REPOSITORY
  if (!repository) return '/'

  const repoName = repository.split('/')[1]
  if (!repoName || repoName.endsWith('.github.io')) return '/'
  return `/${repoName}/`
}

function readSiteMeta(): { title: string; description: string } {
  const fallback = {
    title: 'Amigurumis | Mi Amigurumi',
    description: 'Amigurumis tejidos a mano, regalos personalizados y detalles únicos.',
  }

  try {
    const source = readFileSync(
      fileURLToPath(new URL('./src/config/site.ts', import.meta.url)),
      'utf8',
    )
    const name = source.match(/const name = "([^"]*)"/)?.[1] ?? 'Mi Amigurumi'
    const description =
      source.match(/const seoDescription = "([^"]*)"/)?.[1] ?? fallback.description
    return {
      title: `Amigurumis | ${name}`,
      description,
    }
  } catch {
    return fallback
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function htmlSeoPlugin(): Plugin {
  return {
    name: 'html-seo',
    transformIndexHtml(html) {
      const meta = readSiteMeta()
      return html
        .split('__SITE_TITLE__')
        .join(escapeHtml(meta.title))
        .split('__SITE_DESCRIPTION__')
        .join(escapeHtml(meta.description))
    },
  }
}

// GitHub Pages no reescribe rutas de una SPA. Copiar index.html a 404.html
// permite abrir directo /producto/slug sin perder la página.
function githubPagesSpaFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    writeBundle() {
      const indexPath = fileURLToPath(new URL('./dist/index.html', import.meta.url))
      const notFoundPath = fileURLToPath(new URL('./dist/404.html', import.meta.url))
      if (existsSync(indexPath)) {
        copyFileSync(indexPath, notFoundPath)
      }
    },
  }
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react(), htmlSeoPlugin(), githubPagesSpaFallback()],
})
