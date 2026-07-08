# M42.tech — портфолио

Статический сайт-портфолио на Astro + React (React-острова только там, где нужна
интерактивность: бургер-меню и фильтр портфолио — остальное рендерится в чистый HTML/CSS
без лишнего JS).

## Структура

```
src/
  data/
    site.ts        # бренд, telegram-ссылка, пункты меню
    cases.ts        # кейсы портфолио — редактируешь тут, страницы перегенерятся сами
  layouts/
    Layout.astro     # общий каркас: <head>, Nav, Footer, floating CTA
  components/
    Nav.tsx          # React-остров: бургер-меню + подсветка активного пункта
    PortfolioFilter.tsx  # React-остров: фильтр кейсов по категориям
    Hero.astro       # 3 варианта хиро (typo / grid / split), см. src/pages/index.astro
    CaseCard.astro, MetricCard.astro, ServiceCard.astro, ComparisonTable.astro,
    Button.astro, Footer.astro, FloatingCta.astro
  pages/
    index.astro
    portfolio/index.astro
    portfolio/[id].astro   # статически генерируется для каждого кейса из cases.ts
    services.astro
    about.astro
    contact.astro
  styles/global.css  # design-токены (цвета, шрифт) переменными CSS
public/
  images/author.jpg  # фото для страницы "Обо мне"
```

## Разработка

```bash
npm install
npm run dev       # http://localhost:4321
```

## Сборка

```bash
npm run build      # -> dist/ (чистый статический HTML/CSS/JS)
npm run preview     # проверить прод-сборку локально
```

`dist/` — это обычный статический сайт, деплоится куда угодно: Vercel/Netlify/Cloudflare
Pages (просто законнектить репозиторий, build command `npm run build`, output `dist`),
GitHub Pages, либо на свой VPS через Docker + Caddy/Nginx (просто отдать `dist/` как
статику, бэкенда не требуется).

## Что редактировать под себя

- `src/data/site.ts` — имя бренда, ссылка на Telegram, домен
- `src/data/cases.ts` — кейсы портфолио (добавить/убрать/поменять — карточки и страницы
  кейсов перегенерируются автоматически по id)
- `public/images/author.jpg` — фото на странице "Обо мне"
- `src/pages/index.astro` строка `<Hero variant="typo" />` — можно поменять на `"grid"`
  или `"split"`, чтобы попробовать другой вариант хиро-секции
