import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { c, font, contacts } from '../theme'
import CaseHeader from '../components/CaseHeader'
import Footer from '../components/Footer'
import type { Bilingual, CaseData } from '../data/cases'

const sectionH2: React.CSSProperties = {
  fontSize: 'clamp(22px,3vw,30px)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  margin: '0 0 16px',
}

const bodyP: React.CSSProperties = {
  fontSize: 17.5,
  lineHeight: 1.65,
  color: c.bodyDark,
  margin: 0,
  maxWidth: '62ch',
}

const metaLabel: React.CSSProperties = {
  fontFamily: font.mono,
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: c.faint,
  marginBottom: 8,
}

export default function CasePage({ data }: { data: CaseData }) {
  const { t } = useLang()
  const tr = (b: Bilingual) => t(b.ru, b.en)

  return (
    <div
      style={{
        background: c.bg,
        color: c.text,
        fontFamily: font.sans,
        WebkitFontSmoothing: 'antialiased',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <CaseHeader />

      {/* TITLE */}
      <section
        style={{
          maxWidth: 920,
          margin: '0 auto',
          padding: 'clamp(48px,8vw,88px) 24px clamp(32px,5vw,48px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22, flexWrap: 'wrap' }}>
          {data.tags.map((tag) => (
            <span
              key={tag.ru}
              style={{
                fontFamily: font.mono,
                fontSize: 12,
                color: c.textDim,
                padding: '5px 11px',
                background: c.surface,
                border: `1px solid ${c.border2}`,
                borderRadius: 7,
              }}
            >
              {tr(tag)}
            </span>
          ))}
        </div>
        <h1
          style={{
            fontSize: 'clamp(34px,5.4vw,60px)',
            lineHeight: 1.04,
            letterSpacing: '-0.035em',
            fontWeight: 600,
            margin: '0 0 20px',
            maxWidth: '16ch',
          }}
        >
          {data.title}
        </h1>
        <p
          style={{
            fontSize: 'clamp(17px,2.1vw,21px)',
            lineHeight: 1.55,
            color: c.muted,
            maxWidth: '54ch',
            margin: 0,
          }}
        >
          {tr(data.subtitle)}
        </p>
      </section>

      {/* HERO SHOT */}
      <section
        style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px clamp(40px,6vw,72px)' }}
      >
        <div
          style={{
            borderRadius: 22,
            overflow: 'hidden',
            border: `1px solid ${c.border}`,
            background: c.surface,
          }}
        >
          <img
            src={data.hero.src}
            alt={tr(data.hero.alt)}
            style={{
              display: 'block',
              width: '100%',
              aspectRatio: '16/9',
              objectFit: 'cover',
              objectPosition: data.hero.objectPosition,
            }}
          />
        </div>
        {data.hero.caption && (
          <p style={{ fontFamily: font.mono, fontSize: 12, color: c.faint, margin: '12px 0 0' }}>
            {tr(data.hero.caption)}
          </p>
        )}
      </section>

      {/* META + BODY */}
      <section
        style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px clamp(64px,9vw,112px)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
            gap: 1,
            background: c.border,
            border: `1px solid ${c.border}`,
            borderRadius: 16,
            overflow: 'hidden',
            marginBottom: 'clamp(48px,7vw,80px)',
          }}
        >
          {data.meta.map((cell) => (
            <div key={cell.label.ru} style={{ background: c.surface, padding: '22px 24px' }}>
              <div style={metaLabel}>{tr(cell.label)}</div>
              {cell.href ? (
                <a
                  href={cell.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: 15, fontWeight: 500, color: c.accent }}
                >
                  {tr(cell.value)} ↗
                </a>
              ) : (
                <div style={{ fontSize: 15, fontWeight: 500 }}>{tr(cell.value)}</div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px,6vw,64px)' }}>
          <div>
            <h2 style={sectionH2}>{t('Задача', 'The task')}</h2>
            <p style={bodyP}>{tr(data.task)}</p>
          </div>

          <div>
            <h2 style={sectionH2}>{t('Решение', 'The solution')}</h2>
            <p style={{ ...bodyP, margin: '0 0 24px' }}>{tr(data.solution)}</p>
            <div
              style={{
                borderRadius: 18,
                overflow: 'hidden',
                border: `1px solid ${c.border}`,
                background: c.surface,
              }}
            >
              <img
                src={data.solutionImg.src}
                alt={tr(data.solutionImg.alt)}
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '16/10',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <div>
            <h2 style={sectionH2}>{t('Результат', 'The result')}</h2>
            <p style={bodyP}>{tr(data.result)}</p>
          </div>
        </div>
      </section>

      {/* NEXT / CTA */}
      <section
        style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px clamp(72px,9vw,112px)' }}
      >
        <div
          style={{
            borderTop: `1px solid ${c.border}`,
            paddingTop: 'clamp(40px,6vw,56px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: font.mono,
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: c.faint,
                marginBottom: 10,
              }}
            >
              {t('Следующий кейс', 'Next case')}
            </div>
            <Link
              to={data.next.to}
              style={{
                fontSize: 'clamp(24px,3.5vw,34px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: c.text,
              }}
            >
              {data.next.title} →
            </Link>
          </div>
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 16,
              fontWeight: 500,
              padding: '14px 24px',
              background: c.accent,
              color: '#fff',
              borderRadius: 11,
            }}
          >
            <span>{t('Заказать проект', 'Start a project')}</span>
            <span style={{ fontFamily: font.mono }}>→</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
