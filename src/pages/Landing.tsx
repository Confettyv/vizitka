import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { c, font, shadow, contacts } from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Pair = readonly [ru: string, en: string]

const stack = ['React', 'Node.js', 'Python', 'PostgreSQL', 'Telegram API', 'OpenAI API']

const services: { n: string; icon: string; title: Pair; desc: Pair }[] = [
  {
    n: '01',
    icon: '◴',
    title: ['Сайты', 'Websites'],
    desc: [
      'Лендинги, многостраничники и веб-приложения. Адаптив, скорость, деплой — сразу готово к работе.',
      'Landing pages, multi-page sites and web apps. Responsive, fast, deployed and ready to work.',
    ],
  },
  {
    n: '02',
    icon: '▷',
    title: ['AI-анимация для рекламы', 'AI animation for ads'],
    desc: [
      'Короткие анимационные ролики для рекламы и соцсетей: динамичная графика, моушн и текст под внимание зрителя. Упор на стилизованную анимацию, а не на фотореалистичных людей.',
      'Short animated clips for ads and social media: dynamic motion graphics and text built to grab attention. Focused on stylised animation rather than photorealistic people.',
    ],
  },
  {
    n: '03',
    icon: '✈',
    title: ['Telegram-боты', 'Telegram bots'],
    desc: [
      'Боты для бизнеса: приём заявок, оплаты, рассылки и автоматизация, которая работает без вас.',
      'Bots for business: lead capture, payments, broadcasts and automation that runs while you sleep.',
    ],
  },
  {
    n: '04',
    icon: '⚙',
    title: ['AI-автоматизация и интеграции', 'AI automation & integrations'],
    desc: [
      'Соединяю сервисы и подключаю ИИ: приём и квалификация заявок, обработка данных, интеграции с CRM и таблицами — рутина работает без вас.',
      'I connect your services and plug in AI: lead capture and qualification, data processing, CRM and spreadsheet integrations — the routine runs without you.',
    ],
  },
]

const speed: { n: string; title: Pair; desc: Pair }[] = [
  {
    n: '01',
    title: ['Нейросети как ускоритель', 'AI as an accelerator'],
    desc: [
      'Использую нейросети, чтобы работать быстрее — но не полагаюсь на них вслепую. Архитектуру, логику и финальный код контролирую и тестирую сам.',
      'I use AI to move faster — but never blindly. The architecture, logic and final code are mine, reviewed and tested.',
    ],
  },
  {
    n: '02',
    title: ['Прямая связь', 'Direct communication'],
    desc: [
      'Один человек, быстрые ответы, решения за минуты — а не за три созвона.',
      'One person, fast replies, decisions made in minutes — not in three meetings.',
    ],
  },
  {
    n: '03',
    title: ['От идеи до деплоя', 'From idea to deploy'],
    desc: [
      'Вы получаете рабочий продукт на реальном домене — а не папку с файлами.',
      'You get a working product live on a real domain — not a folder of files.',
    ],
  },
]

const work: {
  to: string
  img: string
  alt: string
  objectPosition?: string
  caption?: Pair
  tags: Pair[]
  title: string
  desc: Pair
}[] = [
  {
    to: '/case/pixelwallmillion',
    img: '/assets/pixel-hero.jpg',
    alt: 'PixelWallMillion',
    tags: [
      ['Сайт', 'Web app'],
      ['React', 'React'],
    ],
    title: 'PixelWallMillion',
    desc: [
      'Интерактивная стена из миллиона пикселей под рекламу — логотипы, ссылки, мемы. Сайт-хобби, готовый к запуску и продвижению через AI-ролики.',
      'An interactive wall of a million pixels you can buy for ads — logos, links, memes. A hobby project built for launch and promotion through AI clips.',
    ],
  },
  {
    to: '/case/paira',
    img: '/assets/paira-overview.jpg',
    alt: 'Paira',
    objectPosition: 'center top',
    caption: ['Профили на фото — демо-карточки.', 'Profiles shown are demo cards.'],
    tags: [
      ['Веб-приложение', 'Web app'],
      ['Fullstack', 'Fullstack'],
    ],
    title: 'Paira',
    desc: [
      'Полноценный многостраничный сервис знакомств с прочным backend: лента-свайпы, профили, пары, чаты, модерация. Мэтчинг по интересам, целям и городу.',
      'A full multi-page dating service with a solid backend: swipe feed, profiles, matches, chats and moderation. Compatibility match by interests, goals and city.',
    ],
  },
  {
    to: '/case/busya',
    img: '/assets/busya-hero.jpg',
    alt: 'Buся Inc.',
    tags: [
      ['Сайт-шутка', 'Joke site'],
      ['Мем-проект', 'Meme project'],
    ],
    title: 'Buся Inc.',
    desc: [
      'Пародийный лендинг «корпоративного культа» вокруг кота Буси: вискас-фонд со счётчиком, манифест и форма для адептов. Сделан в подарок, на чистом JS.',
      'A parody landing for a "corporate cult" around a cat: a treat-fund counter, a manifesto and an adept sign-up form. A gift project, in vanilla JS.',
    ],
  },
]

const pricing: { n: string; name: Pair; price: string }[] = [
  { n: '01', name: ['Лендинг', 'Landing page'], price: '10 000 ₽' },
  {
    n: '02',
    name: ['Веб-приложение / многостраничник', 'Web app / multi-page site'],
    price: '30 000 ₽',
  },
  { n: '03', name: ['Telegram-бот', 'Telegram bot'], price: '7 500 ₽' },
  {
    n: '04',
    name: ['AI-автоматизация / интеграция', 'AI automation / integration'],
    price: '15 000 ₽',
  },
  { n: '05', name: ['AI-анимация / ролик', 'AI animation / clip'], price: '4 000 ₽' },
]

const education: { tag: Pair; title: Pair; desc: Pair }[] = [
  {
    tag: ['Высшее', 'Degree'],
    title: ['Университет в Москве', 'University in Moscow'],
    desc: [
      'Учусь по направлению fullstack-разработки — системная база под то, что делаю каждый день.',
      'Studying fullstack development at university — a systematic base for what I build every day.',
    ],
  },
  {
    tag: ['Школа 21 · Сбер', 'School 21 · Sber'],
    title: ['Прошёл отбор и поступил', 'Passed selection, enrolled'],
    desc: [
      'Интенсивная peer-to-peer школа от Сбера: прошёл вступительный отбор и поступил на основное обучение.',
      "Sber's intensive peer-to-peer school: passed the entry selection and enrolled in the main program.",
    ],
  },
  {
    tag: ['Профиль', 'Focus'],
    title: ['Кибербезопасность', 'Cybersecurity'],
    desc: [
      'Учусь по направлению кибербезопасности — поэтому к оплатам, данным и доступам отношусь серьёзно.',
      'Studying cybersecurity — so I take payments, data and access seriously by default.',
    ],
  },
]

const kicker: React.CSSProperties = {
  fontFamily: font.mono,
  fontSize: 13,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: c.accent,
  marginBottom: 14,
}

const chip: React.CSSProperties = {
  fontFamily: font.mono,
  fontSize: 12,
  color: c.textDim,
  padding: '4px 10px',
  background: c.surface2,
  borderRadius: 6,
}

export default function Landing() {
  const { t } = useLang()

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
      <Header />

      {/* HERO */}
      <section
        id="top"
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: 'clamp(64px,10vw,120px) 24px clamp(48px,7vw,88px)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            padding: '6px 13px',
            border: `1px solid ${c.border3}`,
            borderRadius: 100,
            background: c.surface,
            marginBottom: 28,
            animation: 'slrise 0.5s ease both',
          }}
        >
          <span
            style={{
              position: 'relative',
              display: 'inline-flex',
              width: 8,
              height: 8,
            }}
          >
            <span
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: c.green,
                animation: 'slpulse 2s ease-in-out infinite',
              }}
            />
          </span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 12,
              letterSpacing: '0.04em',
              color: c.textDim,
              whiteSpace: 'nowrap',
            }}
          >
            {t('Открыт для заказов', 'Open for new projects')}
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(40px,6.2vw,76px)',
            lineHeight: 1.03,
            letterSpacing: '-0.035em',
            fontWeight: 600,
            margin: '0 0 26px',
            maxWidth: '15ch',
            animation: 'slrise 0.6s ease both 0.05s',
          }}
        >
          <span style={{ display: 'block' }}>
            {t('Превращаю идеи в готовые продукты.', 'I turn ideas into finished products.')}
          </span>
          <span style={{ display: 'block', color: c.accent }}>{t('Быстро.', 'Fast.')}</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(17px,2.1vw,21px)',
            lineHeight: 1.55,
            color: c.muted,
            maxWidth: '54ch',
            margin: '0 0 36px',
            animation: 'slrise 0.6s ease both 0.12s',
          }}
        >
          {t(
            'Fullstack-разработчик. Сайты, AI-анимация, Telegram-боты и AI-автоматизация — от идеи до запуска за дни, а не месяцы.',
            'Fullstack developer. Websites, AI animation, Telegram bots & AI automation — from idea to launch in days, not months.',
          )}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            animation: 'slrise 0.6s ease both 0.18s',
          }}
        >
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
              boxShadow: shadow.ctaPrimary,
            }}
          >
            <span>{t('Обсудить проект', 'Discuss your project')}</span>
            <span style={{ fontFamily: font.mono }}>→</span>
          </a>
          <a
            href="#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 16,
              fontWeight: 500,
              padding: '14px 24px',
              background: c.surface,
              color: c.text,
              border: `1px solid ${c.border3}`,
              borderRadius: 11,
            }}
          >
            <span>{t('Смотреть кейсы', 'See my work')}</span>
          </a>
        </div>

        {/* stack strip */}
        <div
          style={{
            marginTop: 'clamp(48px,6vw,72px)',
            paddingTop: 28,
            borderTop: `1px solid ${c.border}`,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: c.faint,
              marginRight: 6,
            }}
          >
            {t('Стек', 'Stack')}
          </span>
          {stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: font.mono,
                fontSize: 13,
                color: c.textDim,
                padding: '6px 12px',
                background: c.surface,
                border: `1px solid ${c.border2}`,
                borderRadius: 8,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{ maxWidth: 1120, margin: '0 auto', padding: 'clamp(56px,8vw,96px) 24px' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            marginBottom: 44,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={kicker}>{t('Что я делаю', 'What I build')}</div>
            <h2
              style={{
                fontSize: 'clamp(28px,4vw,46px)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                fontWeight: 600,
                margin: 0,
                maxWidth: '18ch',
              }}
            >
              {t('Четыре способа запустить вашу идею', 'Four ways to ship your idea')}
            </h2>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 16,
          }}
        >
          {services.map((s) => (
            <div
              key={s.n}
              className="service-card"
              style={{
                background: c.surface,
                border: `1px solid ${c.border}`,
                borderRadius: 18,
                padding: '30px 28px 34px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontFamily: font.mono, fontSize: 13, color: c.faint2 }}>
                  {s.n}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 11,
                    background: c.accentBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                  }}
                >
                  {s.icon}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 21,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  margin: '6px 0 0',
                }}
              >
                {t(s.title[0], s.title[1])}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: c.muted2, margin: 0 }}>
                {t(s.desc[0], s.desc[1])}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPEED */}
      <section
        style={{
          background: c.darkBg,
          color: c.darkText,
          marginTop: 'clamp(40px,6vw,72px)',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: 'clamp(64px,9vw,112px) 24px',
          }}
        >
          <div style={{ ...kicker, color: c.darkAccent, marginBottom: 16 }}>
            {t('Почему быстро', 'Why fast')}
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px,4.4vw,50px)',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              fontWeight: 600,
              margin: '0 0 18px',
              maxWidth: '20ch',
            }}
          >
            {t(
              'Скорость — это не «на коленке». Это способ работать.',
              "Speed isn't cutting corners. It's a way of working.",
            )}
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: c.darkMuted,
              maxWidth: '58ch',
              margin: '0 0 56px',
            }}
          >
            {t(
              'Никакого раздутого агентского конвейера и менеджеров между нами. Вы общаетесь напрямую с тем, кто пишет код.',
              'No bloated agency pipeline, no managers between us. You talk to the person who actually writes the code.',
            )}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 1,
              background: c.darkBorder,
              border: `1px solid ${c.darkBorder}`,
              borderRadius: 16,
              overflow: 'hidden',
            }}
          >
            {speed.map((s) => (
              <div key={s.n} style={{ background: c.darkBg, padding: '32px 28px' }}>
                <div
                  style={{
                    fontFamily: font.mono,
                    fontSize: 13,
                    color: c.darkAccent,
                    marginBottom: 12,
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontSize: 19,
                    fontWeight: 600,
                    margin: '0 0 8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {t(s.title[0], s.title[1])}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: c.darkMuted2, margin: 0 }}>
                  {t(s.desc[0], s.desc[1])}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        style={{ maxWidth: 1120, margin: '0 auto', padding: 'clamp(64px,9vw,112px) 24px' }}
      >
        <div style={kicker}>{t('Избранные работы', 'Selected work')}</div>
        <h2
          style={{
            fontSize: 'clamp(28px,4vw,46px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            fontWeight: 600,
            margin: '0 0 14px',
            maxWidth: '22ch',
          }}
        >
          {t('Не верьте на слово — посмотрите сами.', "Don't take my word for it — look.")}
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: c.muted2,
            maxWidth: '52ch',
            margin: '0 0 48px',
          }}
        >
          {t(
            'Три проекта, собранных от начала до конца — два клиентских сайта и один хобби-проект для души.',
            'Three projects I designed and built end-to-end — two client sites and one hobby project for fun.',
          )}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 28,
          }}
        >
          {work.map((w) => (
            <Link
              key={w.to}
              to={w.to}
              style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
            >
              <div
                style={{
                  borderRadius: 18,
                  overflow: 'hidden',
                  border: `1px solid ${c.border}`,
                  background: c.surface,
                }}
              >
                <img
                  src={w.img}
                  alt={w.alt}
                  style={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '16/10',
                    objectFit: 'cover',
                    objectPosition: w.objectPosition,
                  }}
                />
              </div>
              {w.caption && (
                <p
                  style={{
                    fontFamily: font.mono,
                    fontSize: 12,
                    color: c.faint,
                    margin: '-8px 0 0',
                  }}
                >
                  {t(w.caption[0], w.caption[1])}
                </p>
              )}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  {w.tags.map((tag) => (
                    <span key={tag[0]} style={chip}>
                      {t(tag[0], tag[1])}
                    </span>
                  ))}
                </div>
                <h3
                  style={{
                    fontSize: 23,
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    margin: '0 0 6px',
                  }}
                >
                  {w.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: c.muted2, margin: '0 0 12px' }}>
                  {t(w.desc[0], w.desc[1])}
                </p>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 15,
                    fontWeight: 500,
                    color: c.accent,
                  }}
                >
                  <span>{t('Смотреть кейс', 'View case')}</span>
                  <span style={{ fontFamily: font.mono }}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{ maxWidth: 1120, margin: '0 auto', padding: 'clamp(56px,8vw,96px) 24px' }}
      >
        <div style={kicker}>{t('Обо мне', 'About me')}</div>
        <h2
          style={{
            fontSize: 'clamp(28px,4vw,46px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            fontWeight: 600,
            margin: '0 0 14px',
            maxWidth: '22ch',
          }}
        >
          {t('За кодом — техническая база и безопасность', 'Behind the code: a real base and security')}
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: c.muted2,
            maxWidth: '56ch',
            margin: '0 0 44px',
          }}
        >
          {t(
            'Я не просто «пишу на нейросетях». У меня системное техническое образование, а профильное направление — кибербезопасность. Для вас это аккуратная работа с оплатами, данными и доступами.',
            "I'm not just 'coding with AI'. I have a systematic technical education with a focus on cybersecurity. For you that means careful handling of payments, data and access.",
          )}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 16,
          }}
        >
          {education.map((e) => (
            <div
              key={e.title[0]}
              style={{
                background: c.surface,
                border: `1px solid ${c.border}`,
                borderRadius: 18,
                padding: '28px 26px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <span
                style={{
                  alignSelf: 'flex-start',
                  fontFamily: font.mono,
                  fontSize: 12,
                  color: c.accent,
                  padding: '4px 10px',
                  background: c.accentBg,
                  borderRadius: 6,
                }}
              >
                {t(e.tag[0], e.tag[1])}
              </span>
              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  margin: '4px 0 0',
                }}
              >
                {t(e.title[0], e.title[1])}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: c.muted2, margin: 0 }}>
                {t(e.desc[0], e.desc[1])}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: 'clamp(40px,6vw,72px) 24px clamp(64px,9vw,112px)',
        }}
      >
        <div style={kicker}>{t('Цены', 'Pricing')}</div>
        <h2
          style={{
            fontSize: 'clamp(28px,4vw,46px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            fontWeight: 600,
            margin: '0 0 14px',
            maxWidth: '20ch',
          }}
        >
          {t('Прозрачные стартовые цены', 'Transparent starting prices')}
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: c.muted2,
            maxWidth: '52ch',
            margin: '0 0 44px',
          }}
        >
          {t(
            'Финальная стоимость зависит от объёма — обсудим её после короткого разговора. Без сюрпризов.',
            "Final cost depends on scope — we'll agree on it after a short chat. No surprises.",
          )}
        </p>

        <div
          style={{
            background: c.surface,
            border: `1px solid ${c.border}`,
            borderRadius: 18,
            overflow: 'hidden',
          }}
        >
          {pricing.map((row, i) => (
            <div
              key={row.n}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,
                padding: '24px 28px',
                borderBottom:
                  i < pricing.length - 1 ? `1px solid ${c.surface2}` : 'none',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 13,
                    color: c.faint2,
                    width: 26,
                  }}
                >
                  {row.n}
                </span>
                <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>
                  {t(row.name[0], row.name[1])}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
                <span style={{ fontFamily: font.mono, fontSize: 16, color: c.text }}>
                  <span style={{ color: c.faint, fontSize: 13 }}>{t('от', 'from')}</span>{' '}
                  {row.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '0 24px clamp(72px,9vw,120px)',
        }}
      >
        <div
          style={{
            background: c.accent,
            color: '#fff',
            borderRadius: 24,
            padding: 'clamp(40px,6vw,72px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: -80,
              top: -80,
              width: 280,
              height: 280,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <h2
              style={{
                fontSize: 'clamp(28px,4.4vw,50px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontWeight: 600,
                margin: '0 0 18px',
                maxWidth: '18ch',
              }}
            >
              {t('Есть идея? Давайте запустим.', "Got an idea? Let's ship it.")}
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.82)',
                maxWidth: '48ch',
                margin: '0 0 36px',
              }}
            >
              {t(
                'Расскажите про задачу — отвечу быстро и честно скажу, что реально сделать и в какие сроки.',
                "Tell me about your task — I reply fast and tell you honestly what's possible and how soon.",
              )}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '14px 24px',
                  background: '#fff',
                  color: c.accent,
                  borderRadius: 11,
                }}
              >
                <span>Telegram</span>
                <span style={{ fontFamily: font.mono, fontWeight: 400 }}>
                  {contacts.telegramHandle}
                </span>
              </a>
              <a
                href={`mailto:${contacts.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 16,
                  fontWeight: 500,
                  padding: '14px 24px',
                  background: 'rgba(255,255,255,0.14)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 11,
                }}
              >
                <span style={{ fontFamily: font.mono, fontWeight: 400 }}>{contacts.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
