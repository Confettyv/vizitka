// Design tokens — точные значения из дизайн-хэндофа (design/README.md).

export const c = {
  // light
  bg: '#FAFAF8',
  text: '#1A1A1E',
  textDim: '#3A3A40',
  muted: '#55555C',
  muted2: '#6B6B73',
  bodyDark: '#444',
  faint: '#9A9AA0',
  faint2: '#B8B8B0',
  accent: '#2B59E0',
  accentHover: '#2449C9',
  accentBg: '#EEF2FE',
  green: '#2BB36B',
  surface: '#FFFFFF',
  surface2: '#F0F0EB',
  border: '#ECECE6',
  border2: '#E8E8E2',
  border3: '#E2E2DA',
  border4: '#E6E6DF',
  borderHover: '#D6D6CE',
  // dark section
  darkBg: '#101014',
  darkText: '#F4F4F2',
  darkMuted: '#A0A0A8',
  darkMuted2: '#9A9AA2',
  darkBorder: '#26262C',
  darkAccent: '#6E8BFF',
} as const

export const font = {
  sans: "'Schibsted Grotesk', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const

export const shadow = {
  ctaPrimary: '0 6px 18px -6px rgba(43,89,224,0.5)',
  cardHover: '0 12px 30px -16px rgba(0,0,0,0.12)',
  langActive: '0 1px 2px rgba(0,0,0,0.06)',
} as const

// Контакты (из хэндофа)
export const contacts = {
  telegram: 'https://t.me/coffinv',
  telegramHandle: '@coffinv',
  github: 'https://github.com/Confettyv',
  email: 'miroxby@gmail.com',
} as const
