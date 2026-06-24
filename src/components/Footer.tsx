import { c, font, contacts } from '../theme'

const link: React.CSSProperties = { color: c.muted2 }

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${c.border}` }}>
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '36px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 26,
              height: 26,
              borderRadius: 7,
              background: c.text,
              color: '#fff',
              fontFamily: font.mono,
              fontSize: 13,
            }}
          >
            A
          </span>
          <span>Алим</span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 12,
              color: c.faint,
              marginLeft: 8,
            }}
          >
            Fullstack
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            fontSize: 14,
            color: c.muted2,
            fontFamily: font.mono,
          }}
        >
          <a
            className="foot-link"
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
            style={link}
          >
            Telegram
          </a>
          <a
            className="foot-link"
            href={contacts.github}
            target="_blank"
            rel="noreferrer"
            style={link}
          >
            GitHub
          </a>
          <a className="foot-link" href={`mailto:${contacts.email}`} style={link}>
            Email
          </a>
        </div>

        <div style={{ fontFamily: font.mono, fontSize: 12, color: c.faint2 }}>
          © 2026
        </div>
      </div>
    </footer>
  )
}
