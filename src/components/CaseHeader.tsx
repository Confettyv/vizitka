import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { c, font } from '../theme'
import LangToggle from './LangToggle'
import MessageCTA from './MessageCTA'

export default function CaseHeader() {
  const { t } = useLang()
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'saturate(1.6) blur(12px)',
        WebkitBackdropFilter: 'saturate(1.6) blur(12px)',
        background: 'rgba(250,250,248,0.78)',
        borderBottom: `1px solid ${c.border}`,
      }}
    >
      <nav
        style={{
          maxWidth: 920,
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
        }}
      >
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 14,
            color: c.muted,
          }}
        >
          <span style={{ fontFamily: font.mono }}>←</span>
          <span>{t('Все кейсы', 'All work')}</span>
        </Link>

        <div style={{ flex: 1 }} />

        <LangToggle />
        <MessageCTA />
      </nav>
    </header>
  )
}
