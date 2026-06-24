import { useLang, type Lang } from '../i18n'
import { c, font, shadow } from '../theme'

const wrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  padding: 3,
  background: c.surface2,
  borderRadius: 9,
  border: `1px solid ${c.border4}`,
}

function btnStyle(active: boolean): React.CSSProperties {
  return {
    fontFamily: font.mono,
    fontSize: 12,
    padding: '5px 10px',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    background: active ? c.surface : 'transparent',
    color: active ? c.text : c.faint,
    boxShadow: active ? shadow.langActive : 'none',
  }
}

export default function LangToggle() {
  const { lang, setLang } = useLang()
  const langs: Lang[] = ['ru', 'en']
  return (
    <div style={wrap} role="group" aria-label="Language switcher">
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          style={btnStyle(lang === l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
