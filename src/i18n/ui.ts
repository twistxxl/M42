import type { CaseCategory } from '../data/cases';

export const languages = {
  ru: 'RU',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ru';

export function getLangFromPathname(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ru';
}

/** Toggles the /en prefix on a normalized (trailing-slash-free) pathname. */
export function withLangPrefix(pathname: string, lang: Lang): string {
  const bare = pathname.replace(/^\/en(\/|$)/, '/').replace(/\/$/, '') || '/';
  if (lang === 'ru') return bare;
  return bare === '/' ? '/en' : `/en${bare}`;
}

export const ui = {
  ru: {
    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.services': 'Услуги',
    'nav.about': 'Обо мне',
    'nav.contact': 'Контакт',
    'nav.menuOpen': 'Открыть меню',
    'nav.menuClose': 'Закрыть меню',
    'cta.telegram': 'Написать в Telegram →',
    'cta.discuss': 'Обсудить стоимость →',
    'cta.readMore': 'Подробнее →',
    'cta.viewAllProjects': 'Смотреть все проекты →',
    'cta.viewProjects': 'Смотреть проекты →',
    'cta.wantSame': 'Хочу так же →',
    'cta.backToProjects': '← Назад к проектам',
    'cta.viewLiveProject': 'Смотреть проект →',
    'meta.defaultDescription':
      'Продуктовый инженер полного цикла: сайты, боты и веб-приложения, которые зарабатывают деньги.',
    'portfolio.all': 'Все',
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menuOpen': 'Open menu',
    'nav.menuClose': 'Close menu',
    'cta.telegram': 'Message on Telegram →',
    'cta.discuss': 'Discuss pricing →',
    'cta.readMore': 'Learn more →',
    'cta.viewAllProjects': 'View all projects →',
    'cta.viewProjects': 'View projects →',
    'cta.wantSame': 'I want this too →',
    'cta.backToProjects': '← Back to projects',
    'cta.viewLiveProject': 'View project →',
    'meta.defaultDescription':
      'Full-cycle product engineer: websites, bots and web apps that make money.',
    'portfolio.all': 'All',
  },
} as const;

export type UiKey = keyof (typeof ui)['ru'];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export const categoryLabels: Record<Lang, Record<CaseCategory, string>> = {
  ru: {
    Сайты: 'Сайты',
    Боты: 'Боты',
    'Веб-приложения': 'Веб-приложения',
    'Мобильные приложения': 'Мобильные приложения',
  },
  en: {
    Сайты: 'Websites',
    Боты: 'Bots',
    'Веб-приложения': 'Web Apps',
    'Мобильные приложения': 'Mobile Apps',
  },
};