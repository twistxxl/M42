import type { Lang } from '../i18n/ui';
import { useTranslations } from '../i18n/ui';

export const site = {
  name: 'M42',
  domain: 'm42.tech',
  tagline: 'ПРОДУКТОВЫЙ ИНЖЕНЕР',
  taglineEn: 'PRODUCT ENGINEER',
  telegramUrl: 'https://t.me/chillbusy',
  telegramHandle: '@chillbusy',
  year: String(new Date().getUTCFullYear()),
};

export function getNavItems(lang: Lang = 'ru') {
  const t = useTranslations(lang);
  const prefix = lang === 'en' ? '/en' : '';
  return [
    { label: t('nav.home'), href: prefix || '/' },
    { label: t('nav.portfolio'), href: `${prefix}/portfolio` },
    { label: t('nav.services'), href: `${prefix}/services` },
    { label: t('nav.about'), href: `${prefix}/about` },
    { label: t('nav.contact'), href: `${prefix}/contact` },
  ];
}
