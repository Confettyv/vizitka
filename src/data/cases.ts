export interface Bilingual {
  ru: string
  en: string
}

export interface MetaCell {
  label: Bilingual
  /** Текст значения (для ячейки-ссылки — отображаемый домен). */
  value: Bilingual
  /** Если задано — ячейка рендерится как внешняя ссылка. */
  href?: string
}

export interface CaseData {
  slug: string
  tags: Bilingual[]
  /** Имя проекта — не переводится. */
  title: string
  subtitle: Bilingual
  hero: {
    src: string
    alt: Bilingual
    objectPosition?: string
    /** Моно-подпись под hero-картинкой (есть только у Paira). */
    caption?: Bilingual
  }
  meta: MetaCell[]
  task: Bilingual
  solution: Bilingual
  solutionImg: { src: string; alt: Bilingual }
  result: Bilingual
  /** Ссылка на следующий кейс. */
  next: { title: string; to: string }
}

const role: Bilingual = { ru: 'Дизайн и разработка', en: 'Design & development' }

export const cases: Record<'pixelwallmillion' | 'paira' | 'busya', CaseData> = {
  pixelwallmillion: {
    slug: 'pixelwallmillion',
    tags: [
      { ru: 'Сайт-хобби', en: 'Hobby project' },
      { ru: 'React', en: 'React' },
      { ru: 'Интерактив', en: 'Interactive' },
    ],
    title: 'PixelWallMillion',
    subtitle: {
      ru: 'Стена из миллиона пикселей, которые можно купить под рекламу — разместить логотип, ссылку или мем и остаться там навсегда. Сайт-хобби, созданный для запуска и продвижения в соцсетях.',
      en: 'A wall of a million pixels you can buy for ads — place a logo, link or meme and stay there forever. A hobby project built to launch and grow on social media.',
    },
    hero: {
      src: '/assets/pixel-hero.jpg',
      alt: { ru: 'PixelWallMillion — главный экран', en: 'PixelWallMillion — main screen' },
    },
    meta: [
      { label: { ru: 'Роль', en: 'Role' }, value: role },
      {
        label: { ru: 'Сроки', en: 'Timeline' },
        value: { ru: 'Соло, под ключ', en: 'Solo, end-to-end' },
      },
      { label: { ru: 'Стек', en: 'Stack' }, value: { ru: 'React · Node', en: 'React · Node' } },
      {
        label: { ru: 'Сайт', en: 'Live' },
        value: { ru: 'pixelwallmillion.ru', en: 'pixelwallmillion.ru' },
        href: 'https://pixelwallmillion.ru',
      },
    ],
    task: {
      ru: 'Возродить идею «million dollar homepage» в современном виде: стена из миллиона пикселей, где бренды и люди выкупают место под логотип, ссылку или мем — вирусная, самоокупаемая рекламная площадка.',
      en: "Revive the 'million dollar homepage' idea in a modern form: a wall of a million pixels where brands and people buy space for a logo, link or meme — a viral, self-sustaining ad surface.",
    },
    solution: {
      ru: 'Интерактивная пиксельная сетка с покупкой ячеек, «стена брендов» на 288 слотов, пакеты (Старт / Хит / Легенда) и система перепродажи с комиссией 10%. Яркий неоновый ретро-стиль и живой счётчик занятых пикселей. Продвижение запланировано через AI-ролики в Instagram, TikTok и других соцсетях.',
      en: "An interactive pixel grid with cell purchase, a 'brand wall' of 288 slots, tiered packages (Start / Hit / Legend) and a resale system with a 10% commission. Bold neon retro look and a live counter of taken pixels. Promotion planned via AI-generated clips on Instagram, TikTok and other socials.",
    },
    solutionImg: {
      src: '/assets/pixel-pricing.jpg',
      alt: { ru: 'PixelWallMillion — пакеты', en: 'PixelWallMillion — packages' },
    },
    result: {
      ru: 'Готовый рабочий сайт с собственным визуальным стилем — готов к запуску и продвижению. Сделан соло, от и до: дизайн, фронтенд и логика.',
      en: 'A finished, working site with its own visual identity — ready to launch and promote. Built solo, end to end: design, frontend and logic.',
    },
    next: { title: 'Paira', to: '/case/paira' },
  },

  paira: {
    slug: 'paira',
    tags: [
      { ru: 'Веб-приложение', en: 'Web app' },
      { ru: 'Fullstack', en: 'Fullstack' },
      { ru: 'В доработке', en: 'In progress' },
    ],
    title: 'Paira',
    subtitle: {
      ru: 'Полноценный многостраничный сервис знакомств с прочным backend — совпадения по интересам, целям и городу с понятным процентом совместимости. Сейчас в активной доработке.',
      en: 'A full multi-page dating service with a solid backend — match by interests, goals and city with a clear compatibility score. Currently in active development.',
    },
    hero: {
      src: '/assets/paira-overview.jpg',
      alt: { ru: 'Paira — обзор', en: 'Paira — overview' },
      objectPosition: 'center top',
      caption: {
        ru: 'Люди на скриншотах — демо-карточки.',
        en: 'People in the screenshots are demo cards.',
      },
    },
    meta: [
      { label: { ru: 'Роль', en: 'Role' }, value: role },
      {
        label: { ru: 'Сроки', en: 'Timeline' },
        value: { ru: 'В доработке', en: 'In progress' },
      },
      {
        label: { ru: 'Стек', en: 'Stack' },
        value: { ru: 'React · Node · DB', en: 'React · Node · DB' },
      },
      {
        label: { ru: 'Сайт', en: 'Live' },
        value: { ru: 'paira.ru', en: 'paira.ru' },
        href: 'https://paira.ru',
      },
    ],
    task: {
      ru: 'Построить сервис знакомств со смыслом — мэтчинг не по одной внешности, а по интересам, целям и городу, с прозрачным процентом совместимости. Полноценный продукт, а не лендинг: авторизация, профили, лента, чаты и модерация.',
      en: 'Build a dating service with substance — matching people not by looks alone but by interests, goals and city, with a transparent compatibility percentage. A full product, not a landing page: auth, profiles, feed, chats and moderation.',
    },
    solution: {
      ru: 'Многостраничное веб-приложение на прочном backend: регистрация и вход, лента-свайпы с оценкой совместимости, профили, пары, чаты в реальном времени, поиск, настройки, модерация, тёмная тема и два языка. Архитектура заложена так, чтобы наращивать функции без переписывания.',
      en: 'A multi-page web app on a solid backend: registration and login, a swipe feed with compatibility scoring, profiles, matches, real-time chats, search, settings, moderation, dark mode and two languages. Architected so features can grow without rewrites.',
    },
    solutionImg: {
      src: '/assets/paira-landing.jpg',
      alt: { ru: 'Paira — лендинг', en: 'Paira — landing' },
    },
    result: {
      ru: 'Рабочий многостраничный продукт с полным базовым функционалом, сейчас в активной доработке — шлифую фичи и наращиваю backend. Показывает, что я тяну реальное fullstack-приложение, а не отдельные экраны.',
      en: 'A working multi-page product with full core flows, now in active development — polishing features and growing the backend. Shows I can carry a real fullstack app, not just single screens.',
    },
    next: { title: 'Buся Inc.', to: '/case/busya' },
  },

  busya: {
    slug: 'busya',
    tags: [
      { ru: 'Сайт-шутка', en: 'Joke site' },
      { ru: 'Мем-проект', en: 'Meme project' },
      { ru: 'Интерактив', en: 'Interactive' },
    ],
    title: 'Buся Inc.',
    subtitle: {
      ru: 'Пародийный лендинг несуществующего бренда — «корпоративный культ» вокруг кота по имени Буся. Сделал в подарок близкому человеку: серьёзный корпоративный тон, применённый к абсурдной идее.',
      en: 'A parody landing for a made-up brand — a "corporate cult" around a cat named Busya. Built as a gift for someone close: a straight-faced corporate tone applied to an absurd idea.',
    },
    hero: {
      src: '/assets/busya-hero.jpg',
      alt: { ru: 'Buся Inc. — главный экран', en: 'Buся Inc. — main screen' },
    },
    meta: [
      { label: { ru: 'Роль', en: 'Role' }, value: role },
      {
        label: { ru: 'Сроки', en: 'Timeline' },
        value: { ru: 'Соло, для души', en: 'Solo, for fun' },
      },
      {
        label: { ru: 'Стек', en: 'Stack' },
        value: { ru: 'HTML · CSS · JS', en: 'HTML · CSS · JS' },
      },
      {
        label: { ru: 'Сайт', en: 'Live' },
        value: { ru: 'живое демо', en: 'live demo' },
        href: '/busya/',
      },
    ],
    task: {
      ru: 'Сделать подарок-шутку: лендинг несуществующего бренда «Buся Inc.», который на полном серьёзе предлагает поклоняться коту Бусе и «скидывать вискас» в общий фонд. Корпоративный копирайтинг и аккуратный дизайн, применённые к абсурдной идее.',
      en: 'Build a joke gift: a landing for the made-up brand "Buся Inc." that, with a completely straight face, invites you to worship a cat named Busya and chip in cat treats to a shared fund. Corporate copywriting and tidy design applied to an absurd idea.',
    },
    solution: {
      ru: 'Одностраничник в тёплой «глиняной» палитре: hero с «иконой бренда», интерактивный «Вискас-фонд» со счётчиком пачек и анимированным прогресс-баром, манифест из трёх ценностей, отзывы «адептов» и форма «записаться в адепты» с генерацией номера послушника и тостами-благословениями. Без бэкенда — вся логика на чистом JS.',
      en: 'A single page in a warm "clay" palette: a hero with the "brand icon", an interactive "treat fund" with a counter and an animated progress bar, a three-value manifesto, "adept" testimonials and a sign-up form that generates a novice number and fires blessing toasts. No backend — all logic in vanilla JS.',
    },
    solutionImg: {
      src: '/assets/busya-fund.jpg',
      alt: { ru: 'Buся Inc. — Вискас-фонд', en: 'Buся Inc. — treat fund' },
    },
    result: {
      ru: 'Рабочий шуточный сайт с цельным визуальным стилем и живым интерактивом — задеплоен на Cloudflare Pages. Заодно показывает, что я держу тон, детали и аккуратность даже там, где всё несерьёзно.',
      en: 'A working joke site with a coherent visual style and live interactions — deployed on Cloudflare Pages. It also shows I keep the tone, detail and polish even where nothing is serious.',
    },
    next: { title: 'PixelWallMillion', to: '/case/pixelwallmillion' },
  },
}
