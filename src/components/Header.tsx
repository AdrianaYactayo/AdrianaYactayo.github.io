import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site.ts'

const navItems = [
  { label: 'Inicio', hash: '#inicio' },
  { label: 'Catálogo', hash: '#catalogo' },
  { label: 'Personalizados', hash: '#personalizados' },
  { label: 'Contacto', hash: '#contacto' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('nav-open')
    }
  }, [open])

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" to={{ pathname: '/', hash: '#inicio' }} onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <circle cx="16" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M10.5 17.2c1.8.8 2.8-1.6 4.6-.8 1.7.8 2.6 1.8 4.6.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <circle cx="22.5" cy="10" r="2.2" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-name">{siteConfig.name}</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
        <nav id="site-nav" className={open ? 'nav-panel is-open' : 'nav-panel'}>
          {navItems.map((item) => (
            <Link
              key={item.hash}
              className="nav-link"
              to={{ pathname: '/', hash: item.hash }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
