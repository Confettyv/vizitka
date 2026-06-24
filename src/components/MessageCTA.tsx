import { useLang } from '../i18n'
import { c, contacts } from '../theme'

export default function MessageCTA() {
  const { t } = useLang()
  return (
    <a
      href={contacts.telegram}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 14,
        fontWeight: 500,
        padding: '9px 16px',
        background: c.text,
        color: '#fff',
        borderRadius: 9,
        whiteSpace: 'nowrap',
      }}
    >
      {t('Написать', 'Message me')}
    </a>
  )
}
