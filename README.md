# M42.tech — портфолио

Статический сайт-портфолио продуктового инженера на **Astro + React**. React-острова
подключены только там, где реально нужна интерактивность (навигация, фильтр портфолио,
курсор) — всё остальное рендерится в чистый HTML/CSS без лишнего JS на клиенте.

Двуязычный (RU/EN), со статической генерацией под каждый кейс портфолио.

## Технологии

- **[Astro](https://docs.astro.build) 7** — статическая сборка (`output: 'static'`), файловая маршрутизация, `getStaticPaths` для генерации страниц кейсов
- **React 19** — точечные интерактивные острова (`client:load`)
- **Astro i18n routing** — `ru` (корень, без префикса) + `en` (`/en/*`), настроено в `astro.config.mjs`
- Чистый CSS (переменные в `global.css`), без Tailwind/CSS-in-JS фреймворков
- TypeScript везде, включая типизацию контента портфолио и переводов

## Структура

```
src/
  data/
    site.ts           # бренд, telegram-ссылка, генератор пунктов меню по языку (getNavItems)
    cases.ts           # кейсы портфолио: RU-поля + опциональный `en` блок перевода на кейс,
                        # хелперы localizeCase/getCases/getCaseById(id, lang)
  i18n/
    ui.ts              # словарь общих UI-строк (nav, CTA, категории) для ru/en,
                        # useTranslations(lang), withLangPrefix() для переключателя языка
  layouts/
    Layout.astro        # общий каркас: <head>, hreflang-ссылки, Nav, Footer, floating CTA,
                        # анимированный фон, кастомный курсор
  components/
    Nav.tsx             # React-остров: плавающая nav-панель (десктоп — компактная по
                        # центру, мобильный — floating pill), переключатель RU/EN
    MobileNavDrawer.tsx  # мобильное меню — отдельный компонент-дровер со стеклянным
                        # эффектом (вынесен из-за containing-block бага, см. ниже)
    PortfolioFilter.tsx  # React-остров: фильтр по категориям + пагинация (6 карточек/
                        # страница) + кликабельные карточки
    CustomCursor.tsx    # кастомный курсор (точка + кольцо с лагом), только на
                        # десктопе (`hover: hover` и `pointer: fine`)
    AnimatedBackground.astro  # фоновые блюр-пятна + сетка, position:fixed за контентом
    Hero.astro           # 3 варианта хиро (typo / grid / split), см. src/pages/index.astro
    CaseCard.astro, MetricCard.astro, ServiceCard.astro, ComparisonTable.astro,
    Button.astro, Footer.astro, FloatingCta.astro
  pages/
    index.astro, portfolio/index.astro, portfolio/[id].astro,
    services.astro, about.astro, contact.astro
    en/                 # зеркало всех страниц выше под /en/*
  styles/global.css     # design-токены (цвета, шрифт) CSS-переменными
public/
  images/                # скриншоты кейсов
  fonts/                 # self-hosted Inter Variable (latin + cyrillic subset)
```

Из шаблона Astro Blog Starter остались неиспользуемые файлы (`consts.ts`,
`content.config.ts`, `src/assets/blog-*`, `BaseHead.astro`, `Header.astro`,
`HeaderLink.astro`, `FormattedDate.astro`) — блог не используется, страницы блога
удалены, эти файлы ни на что не влияют и безопасно удаляются при уборке.

## Ключевые решения

- **i18n без content collections.** Вместо Astro Content Collections — простой паттерн:
  RU-версия страницы как основной источник, EN-версия — файл-зеркало в `pages/en/*`,
  использующий те же компоненты с `lang="en"`. Общие UI-строки — в `i18n/ui.ts`,
  контент кейсов — прямо в `cases.ts` (поле `en` на каждом объекте). Так проще держать
  переводы синхронизированными вручную, чем городить абстракцию ради 2 языков.
- **Категории портфолио — открытый список.** `CaseCategory` в `cases.ts` — просто union
  тип; фильтр (`PortfolioFilter`) и подписи (`categoryLabels` в `i18n/ui.ts`) берут
  список категорий динамически, а не хардкодят его — добавить новую категорию можно
  правкой двух мест (тип + `categoryLabels`).
- **`position: fixed` + `backdrop-filter` — известная ловушка.** Любой `filter`/
  `backdrop-filter`/`transform` на предке создаёт новый containing block для потомков
  с `position: fixed` — из-за этого мобильное меню сначала "сжималось" по высоте шапки
  вместо всего экрана. Решение — `MobileNavDrawer` рендерится **соседом** шапки
  (`<>...</>`), а не вложен внутрь блюрящегося контейнера.
- **Кликабельные карточки без вложенных `<a>`.** Карточка кейса — это `position:relative`
  контейнер с одной invisible-`<a inset:0>` поверх (ведёт на страницу кейса); на самой
  странице кейса отдельная ссылка на превью-картинке ведёт на живой сайт проекта
  (`item.url`) — так поведение разное на уровне списка и на уровне детальной страницы,
  без вложенных ссылок (невалидный HTML).
- **Кастомный курсор и анимация фона — не мешают доступности/производительности.**
  Курсор рендерится только на устройствах с точным указателем (`pointer: fine`),
  фон уважает `prefers-reduced-motion`, блюр-пятна на фоне — это radial-gradient с
  затуханием в прозрачность, а не CSS `filter: blur()` на весь вьюпорт (дешевле для GPU).

## Разработка

```bash
npm install
npm run dev        # http://localhost:4321
```

## Сборка

```bash
npm run build       # -> dist/ (статический HTML/CSS/JS, ru + /en)
npm run preview      # проверить прод-сборку локально
```

`dist/` — обычный статический сайт, деплоится куда угодно: Vercel/Netlify/Cloudflare
Pages (просто законнектить репозиторий, build command `npm run build`, output `dist`),
GitHub Pages, либо на свой VPS через Docker + Caddy/Nginx (просто отдать `dist/` как
статику, бэкенда не требуется).

## Что редактировать под себя

- `src/data/site.ts` — имя бренда, ссылка на Telegram, домен
- `src/data/cases.ts` — кейсы портфолио: добавить/убрать/поменять RU-поля + опциональный
  `en`-блок перевода — карточки и страницы кейсов (ru и en) перегенерируются
  автоматически по `id`
- `src/i18n/ui.ts` — общие UI-строки (меню, кнопки, подписи категорий) на обоих языках
- `public/images/author.jpg` — фото на странице "Обо мне"
- `src/pages/index.astro` строка `<Hero variant="typo" />` — можно поменять на `"grid"`
  или `"split"`, чтобы попробовать другой вариант хиро-секции
- `src/components/AnimatedBackground.astro` — цвет/интенсивность/скорость фоновых пятен
- `src/components/CustomCursor.tsx` + `.custom-cursor-*` в `global.css` — вид курсора