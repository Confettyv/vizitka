import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'ru' | 'en'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Выбирает строку по текущему языку. Копи co-located с разметкой (как data-en в прототипе). */
  t: (ru: string, en: string) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru')

  const t = useCallback(
    (ru: string, en: string) => (lang === 'en' ? en : ru),
    [lang],
  )

  const value = useMemo<LangContextValue>(() => ({ lang, setLang, t }), [lang, t])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
