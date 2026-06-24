import { useEffect, useRef } from 'react'
import { useLang } from '../i18n'
import { c, font } from '../theme'
import LangToggle from './LangToggle'
import MessageCTA from './MessageCTA'

const navLink: React.CSSProperties = { color: c.muted }

export default function Header() {
  const { t } = useLang()
  const headerRef = useRef<HTMLElement>(null)

  // Sticky-хедер с авто-скрытием: вниз — уезжает, вверх — возвращается.
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const el = headerRef.current
      if (!el) return
      const y = window.scrollY
      const goingDown = y > lastY
      const h = el.offsetHeight || 70
      if (y < 80) {
        el.style.transform = 'translateY(0)'
      } else if (goingDown && y - lastY > 4) {
        el.style.transform = `translateY(-${h + 4}px)`
      } else if (!goingDown && lastY - y > 4) {
        el.style.transform = 'translateY(0)'
      }
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'saturate(1.6) blur(12px)',
        WebkitBackdropFilter: 'saturate(1.6) blur(12px)',
        background: 'rgba(250,250,248,0.78)',
        borderBottom: `1px solid ${c.border}`,
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <nav
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontWeight: 600,
            fontSize: 17,
            letterSpacing: '-0.01em',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
              borderRadius: 8,
              background: c.text,
              color: '#fff',
              fontFamily: font.mono,
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            A
          </span>
          <span>Алим</span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 12,
              fontWeight: 400,
              color: c.faint,
              padding: '4px 9px',
              background: c.surface2,
              border: `1px solid ${c.border4}`,
              borderRadius: 7,
              whiteSpace: 'nowrap',
            }}
          >
            {'</>'} fullstack dev
          </span>
        </a>

        <div style={{ flex: 1 }} />

        <div
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            fontSize: 15,
            color: c.muted,
          }}
        >
          <a href="#services" style={navLink}>
            {t('Услуги', 'Services')}
          </a>
          <a href="#work" style={navLink}>
            {t('Кейсы', 'Work')}
          </a>
          <a href="#pricing" style={navLink}>
            {t('Цены', 'Pricing')}
          </a>
        </div>

        <LangToggle />
        <MessageCTA />
      </nav>
    </header>
  )
}
