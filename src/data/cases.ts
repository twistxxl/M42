import type { Lang } from '../i18n/ui';

export type CaseCategory = 'Сайты' | 'Боты' | 'Веб-приложения' | 'Мобильные приложения';

export interface CaseMetric {
  n: string;
  l: string;
}

export interface CaseDoneItem {
  text: string;
}

export interface CaseTranslation {
  title: string;
  task: string;
  result: string;
  fullTask: string;
  done: CaseDoneItem[];
  stack: string;
  metrics: CaseMetric[];
}

export interface CaseItem {
  id: string;
  cat: CaseCategory;
  title: string;
  task: string;
  result: string;
  ph: string;
  img: string;
  url?: string;
  fullTask: string;
  done: CaseDoneItem[];
  stack: string;
  metrics: CaseMetric[];
  en?: CaseTranslation;
}

export const cases: CaseItem[] = [
  {
    id: 'abuse',
    cat: 'Веб-приложения',
    title: 'Интернет-магазин с нуля вместо продаж через директ',
    task: 'Продавали через ВКонтакте и Instagram — своего магазина не было',
    result: 'Конверсия выросла с 2,1% до 10,4%',
    ph: 'скриншот: брендовый магазин Anti-Abuse',
    img: '/images/abuse.jpg',
    url: 'https://abuse.moscow/',
    fullTask:
      'Бренд Anti-Abuse вёл продажи через группу ВКонтакте и Instagram: каждая продажа — переписка в директе, ручное оформление, никакой аналитики. Нужен был полноценный магазин который работает на бренд и продаёт без участия менеджера.',
    done: [
      { text: 'Спроектировал структуру магазина под философию бренда с нуля' },
      { text: 'Реализовал каталог, корзину и оформление заказа' },
      { text: 'Подключил приём оплат и сквозную аналитику' },
      { text: 'Провёл серию тестов первого экрана и карточек товаров' },
    ],
    stack: 'Интернет-магазин, приём оплат, аналитика',
    metrics: [
      { n: '10,4%', l: 'конверсия в заказ (было 2,1%)' },
      { n: '×5', l: 'рост конверсии относительно стартовых показателей' },
      { n: '3 нед', l: 'от брифа до запуска' },
    ],
    en: {
      title: 'Online store built from scratch instead of DM sales',
      task: 'Sales ran through VKontakte and Instagram — there was no store of their own',
      result: 'Conversion grew from 2.1% to 10.4%',
      fullTask:
        "The Anti-Abuse brand sold through a VKontakte group and Instagram: every sale meant a DM conversation, manual processing, zero analytics. It needed a full-fledged store that works for the brand and sells without a manager involved.",
      done: [
        { text: "Designed the store structure around the brand's philosophy from scratch" },
        { text: 'Built the catalog, cart and checkout' },
        { text: 'Connected payments and full-funnel analytics' },
        { text: 'Ran a series of tests on the hero section and product cards' },
      ],
      stack: 'Online store, payments, analytics',
      metrics: [
        { n: '10.4%', l: 'order conversion rate (was 2.1%)' },
        { n: '×5', l: 'conversion growth vs. starting numbers' },
        { n: '3 wks', l: 'from brief to launch' },
      ],
    },
  },
  {
    id: 'abuse-bots-support',
    cat: 'Боты',
    title: 'Два бота которые закрыли 70% обращений в поддержку',
    task: 'После запуска магазина поддержка не справлялась с потоком вопросов',
    result: '70% обращений бот закрывает без участия человека',
    ph: 'скриншот: диалог бота поддержки',
    img: '/images/abuse-bots.png',
    url: 'https://t.me/abuse_manager_bot',
    fullTask:
      'После запуска магазина клиенты начали засыпать команду одними и теми же вопросами: доставка, возврат, размерная сетка. Поддержка не справлялась — нужно было снять нагрузку без потери качества коммуникации с покупателем.',
    done: [
      { text: 'Собрал базу частых вопросов и автоматизировал ответы в FAQ-боте' },
      { text: 'Запустил бота поддержки для нестандартных ситуаций с передачей оператору' },
      { text: 'Разгрузил команду — человек подключается только там где нужен' },
    ],
    stack: 'Два Telegram-бота: FAQ и полноценная поддержка клиентов',
    metrics: [
      { n: '70%', l: 'обращений FAQ-бот закрывает без человека' },
      { n: '24/7', l: 'доступность поддержки без дополнительного найма' },
      { n: '2', l: 'бота: для типовых и нестандартных вопросов' },
    ],
    en: {
      title: 'Two bots that resolved 70% of support requests',
      task: "After the store launched, support couldn't keep up with the flow of questions",
      result: '70% of requests handled by the bot with no human involved',
      fullTask:
        "After the store launched, customers started flooding the team with the same questions: shipping, returns, size charts. Support couldn't keep up — the load needed to come down without losing communication quality with buyers.",
      done: [
        { text: 'Built a knowledge base of common questions and automated answers in an FAQ bot' },
        { text: 'Launched a support bot for edge cases with handoff to an operator' },
        { text: 'Took load off the team — a human steps in only where actually needed' },
      ],
      stack: 'Two Telegram bots: FAQ and full customer support',
      metrics: [
        { n: '70%', l: 'of requests closed by the FAQ bot with no human' },
        { n: '24/7', l: 'support availability with no extra hires' },
        { n: '2', l: 'bots: for routine and non-standard questions' },
      ],
    },
  },
  {
    id: 'barbarossa',
    cat: 'Сайты',
    title: 'Сайт и бот записи для сети барбершопов',
    task: 'Администраторы тонули в звонках и переносах',
    result: '80% записей ушло в бота',
    ph: 'скриншот: сайт Barbarossa',
    img: '/images/barbarossa.png',
    url: 'https://barbarossa.top/',
    fullTask:
      'Сеть из четырёх барбершопов: администраторы половину смены отвечали на звонки о записи и переносах, клиенты не дозванивались и уходили к конкурентам.',
    done: [
      { text: 'Спроектировал сценарий записи за 3 касания' },
      { text: 'Подключил расписание мастеров и автоматические напоминания клиентам' },
      { text: 'Добавил перенос и отмену без участия администратора' },
    ],
    stack: 'Сайт, Telegram-бот, интеграция с расписанием мастеров',
    metrics: [
      { n: '80%', l: 'записей проходит через бота' },
      { n: '−35%', l: 'неявок благодаря напоминаниям' },
      { n: '1', l: 'ставка администратора сэкономлена в смене' },
    ],
    en: {
      title: 'Website and booking bot for a barbershop chain',
      task: 'Admins were drowning in calls and reschedules',
      result: '80% of bookings moved to the bot',
      fullTask:
        "A chain of four barbershops: admins spent half their shift answering calls about bookings and reschedules, clients couldn't get through and left for competitors.",
      done: [
        { text: 'Designed a 3-tap booking flow' },
        { text: "Connected masters' schedules and automatic client reminders" },
        { text: 'Added reschedule and cancellation without admin involvement' },
      ],
      stack: "Website, Telegram bot, integration with masters' schedules",
      metrics: [
        { n: '80%', l: 'of bookings go through the bot' },
        { n: '−35%', l: 'fewer no-shows thanks to reminders' },
        { n: '1', l: 'admin position saved per shift' },
      ],
    },
  },
  {
    id: 'ravir-store',
    cat: 'Веб-приложения',
    title: 'Перезапуск интернет-магазина: удобно для клиента и для владельца',
    task: 'MVP не справлялся: каждый дроп — правки в коде, сайт падал под нагрузкой',
    result: 'Дроп через админку за 10 минут — без разработчика и падений',
    ph: 'скриншот: интерфейс магазина Ravir',
    img: '/images/ravir.png',
    url: 'https://ravir.store/',
    fullTask:
      'У основателя уже был работающий MVP — но каждый сезонный дроп требовал правок в коде. В день запуска сайт падал под нагрузкой. Управлять каталогом без разработчика было невозможно. Нужен был удобный инструмент — и для клиента, и для владельца.',
    done: [
      { text: 'Переделал клиентский интерфейс под удобство покупки' },
      { text: 'Выстроил полноценную админку для управления каталогом без разработчика' },
      { text: 'Оптимизировал архитектуру под нагрузку в дни дропов' },
      { text: 'Сезонные запуски теперь делаются через панель за минуты' },
    ],
    stack: 'Веб-приложение, панель администратора, каталог товаров',
    metrics: [
      { n: '10 мин', l: 'запуск нового дропа через админку (было: правки в коде)' },
      { n: '0', l: 'падений сайта в день запуска' },
      { n: '−70%', l: 'времени на управление каталогом' },
    ],
    en: {
      title: 'Relaunching an online store: convenient for both customer and owner',
      task: "The MVP couldn't keep up: every drop meant code changes, the site crashed under load",
      result: 'New drop launched via the admin panel in 10 minutes — no developer, no crashes',
      fullTask:
        "The founder already had a working MVP — but every seasonal drop required code changes. On launch day the site crashed under load. Managing the catalog without a developer was impossible. It needed a tool that's convenient for both the customer and the owner.",
      done: [
        { text: 'Redesigned the customer interface for a smoother purchase flow' },
        { text: 'Built a full admin panel for managing the catalog without a developer' },
        { text: 'Optimized the architecture for drop-day load' },
        { text: 'Seasonal launches are now done through the panel in minutes' },
      ],
      stack: 'Web app, admin panel, product catalog',
      metrics: [
        { n: '10 min', l: 'launching a new drop via the admin panel (was: code changes)' },
        { n: '0', l: 'site crashes on launch day' },
        { n: '−70%', l: 'time spent managing the catalog' },
      ],
    },
  },
  {
    id: 'jtstudy',
    cat: 'Сайты',
    title: 'Лендинг курсов английского который окупил рекламу за 2 недели',
    task: 'Трафик из Казахстана был, продаж не было',
    result: 'Реклама окупилась за 2 недели',
    ph: 'скриншот: лендинг JTStudy',
    img: '/images/jtstudy.png',
    fullTask:
      'Автор курсов по английскому из Казахстана уже покупала трафик у блогеров, но страница не продавала: люди читали программу курса и уходили думать. Нужно было превратить интерес в оплаты.',
    done: [
      { text: 'Пересобрал оффер: с «программы курса» на результат ученицы' },
      { text: 'Адаптировал страницу под казахстанский рынок и мобильный трафик из соцсетей' },
      { text: 'Добавил простой сценарий оплаты без регистрации' },
    ],
    stack: 'Лендинг, приём оплат, аналитика по источникам трафика',
    metrics: [
      { n: '2 нед', l: 'до окупаемости рекламного бюджета' },
      { n: '4,8%', l: 'конверсия в оплату' },
      { n: '−60%', l: 'стоимость заявки' },
    ],
    en: {
      title: 'English course landing page that paid back ad spend in 2 weeks',
      task: 'There was traffic from Kazakhstan, but no sales',
      result: 'Ad spend paid back in 2 weeks',
      fullTask:
        "An English course creator from Kazakhstan was already buying traffic from bloggers, but the page wasn't selling: people read the course curriculum and left to think it over. The goal was to turn interest into payments.",
      done: [
        { text: "Rebuilt the offer: from the 'course curriculum' to the student's result" },
        { text: 'Adapted the page for the Kazakhstani market and mobile traffic from social media' },
        { text: 'Added a simple checkout flow without registration' },
      ],
      stack: 'Landing page, payments, traffic-source analytics',
      metrics: [
        { n: '2 wks', l: 'until ad budget paid back' },
        { n: '4.8%', l: 'conversion to payment' },
        { n: '−60%', l: 'cost per lead' },
      ],
    },
  },
  {
    id: 'soyakim',
    cat: 'Сайты',
    title: 'Онлайн-каталог доставки еды в Ереване без лишних сложностей',
    task: 'Заказы принимали только по телефону — клиенты не дозванивались',
    result: '-40% пропущенных заказов, первые онлайн-заявки в день запуска',
    ph: 'скриншот: каталог блюд Soyakim',
    img: '/images/soyakim.png',
    url: 'https://www.soyakim.am/',
    fullTask:
      'Ресторан азиатской кухни в Ереване принимал заказы только по телефону. Клиенты не дозванивались в час пик, часть заказов терялась. Нужен был простой инструмент: каталог онлайн, заявка — и звонок для подтверждения.',
    done: [
      { text: 'Разработал каталог с категориями и карточками блюд' },
      { text: 'Настроил форму заявки с автоматической отправкой администратору' },
      { text: 'Адаптировал под мобильные устройства — основной трафик ресторана' },
    ],
    stack: 'Лендинг, каталог блюд, форма заявки администратору',
    metrics: [
      { n: '−40%', l: 'пропущенных заказов' },
      { n: '2 мин', l: 'среднее время оформления заявки онлайн' },
      { n: '1 день', l: 'до первого онлайн-заказа после запуска' },
    ],
    en: {
      title: 'A no-fuss online food ordering catalog for a restaurant in Yerevan',
      task: "Orders were phone-only — customers couldn't get through",
      result: '-40% missed orders, first online orders on launch day',
      fullTask:
        "An Asian restaurant in Yerevan only took orders by phone. Customers couldn't get through during rush hour, and some orders were lost. It needed a simple tool: an online catalog, a request form, and a confirmation call.",
      done: [
        { text: 'Built a catalog with categories and dish cards' },
        { text: 'Set up a request form with automatic delivery to the admin' },
        { text: "Adapted it for mobile — the restaurant's main traffic source" },
      ],
      stack: 'Landing page, dish catalog, request form to the admin',
      metrics: [
        { n: '−40%', l: 'missed orders' },
        { n: '2 min', l: 'average time to submit an order online' },
        { n: '1 day', l: 'until the first online order after launch' },
      ],
    },
  },
  {
    id: 'digipandas',
    cat: 'Сайты',
    title: 'Лендинг маркетингового агентства для международного рынка',
    task: 'Команда из Индии работала без сайта — некуда было вести клиентов',
    result: 'Воронка продаж на английском запущена за 3 недели',
    ph: 'скриншот: сайт DigiPandas',
    img: '/images/digipandas.png',
    url: 'https://digipandas.com/',
    fullTask:
      'Команда маркетингового агентства из Индии работала без сайта — не было куда вести потенциального клиента. Нужна была профессиональная воронка продаж на английском языке под международную аудиторию.',
    done: [
      { text: 'Разработал лендинг на английском языке для международной аудитории' },
      { text: 'Выстроил структуру как воронку: проблема клиента → решение → CTA' },
      { text: 'Адаптировал визуал и тон под позиционирование агентства' },
    ],
    stack: 'Лендинг, воронка продаж, английский язык',
    metrics: [
      { n: '3 нед', l: 'от брифа до запуска лендинга' },
      { n: '2', l: 'континента — клиент из Индии, рынок международный' },
      { n: '1 мес', l: 'до первых входящих заявок с сайта' },
    ],
    en: {
      title: 'Landing page for a marketing agency targeting the international market',
      task: 'A team in India was operating without a website — nowhere to send clients',
      result: 'English-language sales funnel launched in 3 weeks',
      fullTask:
        'A marketing agency team in India was operating without a website — there was nowhere to send a potential client. It needed a professional, English-language sales funnel built for an international audience.',
      done: [
        { text: 'Built an English-language landing page for an international audience' },
        { text: "Structured it as a funnel: client's problem → solution → CTA" },
        { text: "Adapted the visuals and tone to the agency's positioning" },
      ],
      stack: 'Landing page, sales funnel, English copy',
      metrics: [
        { n: '3 wks', l: 'from brief to landing page launch' },
        { n: '2', l: 'continents — client based in India, market international' },
        { n: '1 mo', l: 'until the first inbound leads from the site' },
      ],
    },
  },
  {
    id: 'lkbk',
    cat: 'Веб-приложения',
    title: 'Из идеи — в рабочий продукт: приложение поиска одежды по фото',
    task: 'Была идея — не было понимания как превратить её в продукт',
    result: 'MVP за 3 месяца — дальше команда развивала сама',
    ph: 'скриншот: интерфейс LKBK',
    img: '/images/lkbk.png',
    url: 'https://www.shoplkbk.com/',
    fullTask:
      'Была чёткая идея — сервис поиска одежды по скриншоту. Не было понимания с чего начать, как выстроить архитектуру и не утонуть в фичах. Нужен был партнёр который поможет сделать из идеи продукт.',
    done: [
      { text: 'Помог расставить приоритеты и срезал лишние фичи до работающего ядра' },
      { text: 'Разработал веб-версию с функцией поиска по скриншоту' },
      { text: 'Выстроил архитектуру под будущее расширение: extension и мобильное приложение' },
      { text: 'Передал продукт команде — дальше они развивали сами' },
    ],
    stack: 'Веб-приложение, поиск по изображению, масштабируемая архитектура',
    metrics: [
      { n: '3 мес', l: 'от идеи до работающего MVP' },
      { n: '3', l: 'платформы после: сайт, расширение, мобильное приложение' },
      { n: '100%', l: 'команда развивает продукт самостоятельно после передачи' },
    ],
    en: {
      title: 'From idea to working product: an app for finding clothes from photos',
      task: 'There was an idea — no understanding of how to turn it into a product',
      result: 'MVP in 3 months — the team took it from there',
      fullTask:
        "There was a clear idea — a service for finding clothes from a screenshot. There was no understanding of where to start, how to structure the architecture, or how to avoid drowning in features. It needed a partner to help turn the idea into a product.",
      done: [
        { text: 'Helped set priorities and cut extra features down to a working core' },
        { text: 'Built the web version with screenshot-based search' },
        { text: 'Designed the architecture for future expansion: a browser extension and a mobile app' },
        { text: 'Handed the product to the team — they took it from there' },
      ],
      stack: 'Web app, image search, scalable architecture',
      metrics: [
        { n: '3 mo', l: 'from idea to working MVP' },
        { n: '3', l: 'platforms afterward: website, extension, mobile app' },
        { n: '100%', l: 'team develops the product independently after handoff' },
      ],
    },
  },
  {
    id: 'linia-market',
    cat: 'Веб-приложения',
    title: 'Маркетплейс винтажной одежды с нуля',
    task: 'Нужен был маркетплейс с нуля — сложно сделать правильно с первого раза',
    result: 'Полноценный маркетплейс за 12 месяцев, окупился в первый год',
    ph: 'скриншот: главная Linia Market',
    img: '/images/linia-market.png',
    url: 'https://linia.market/',
    fullTask:
      'Маркетплейс винтажной одежды — сложный продукт с двумя сторонами: продавцы и покупатели. Важно было выстроить механику правильно с первого раза и не переделывать фундамент через год.',
    done: [
      { text: 'Спроектировал механику двусторонней платформы: продавцы и покупатели' },
      { text: 'Реализовал личные кабинеты, каталог, фильтры и систему заказов' },
      { text: 'Обеспечил масштабируемость на старте — фундамент не пришлось переделывать' },
    ],
    stack: 'Маркетплейс, личные кабинеты продавцов и покупателей, каталог',
    metrics: [
      { n: '12 мес', l: 'от нуля до полноценного маркетплейса' },
      { n: '2', l: 'стороны платформы: продавцы и покупатели с первого релиза' },
      { n: '1 год', l: 'до окупаемости продукта' },
    ],
    en: {
      title: 'A vintage clothing marketplace built from scratch',
      task: 'Needed a marketplace from scratch — hard to get right the first time',
      result: 'Full marketplace in 12 months, paid back in the first year',
      fullTask:
        'A vintage clothing marketplace — a complex two-sided product: sellers and buyers. It was important to get the mechanics right the first time and not rebuild the foundation a year later.',
      done: [
        { text: 'Designed the mechanics of a two-sided platform: sellers and buyers' },
        { text: 'Built account dashboards, catalog, filters and an order system' },
        { text: 'Made scalability part of the foundation from day one — it never had to be rebuilt' },
      ],
      stack: 'Marketplace, seller and buyer dashboards, catalog',
      metrics: [
        { n: '12 mo', l: 'from zero to a full marketplace' },
        { n: '2', l: 'sides of the platform: sellers and buyers from the first release' },
        { n: '1 yr', l: 'until the product paid back' },
      ],
    },
  },
  {
    id: 'acrosstheworld',
    cat: 'Сайты',
    title: 'Сайт с каталогом и фильтрами вместо менеджеров на телефоне',
    task: 'Некуда было вести клиента — менеджеры тонули в ручной обработке',
    result: 'Нагрузка на менеджеров упала на 50%',
    ph: 'скриншот: каталог AcrossTheWorld',
    img: '/images/acrosstheworld.png',
    url: 'https://acrosstheworld.ru/',
    fullTask:
      'Некуда было вести клиента — менеджеры обрабатывали все запросы вручную через мессенджеры. Нужен был сайт с каталогом и фильтрами, который снимает первичный поток вопросов и готовит клиента к сделке.',
    done: [
      { text: 'Разработал сайт с каталогом, карточками и фильтрами' },
      { text: 'Выстроил воронку: от первого визита до заявки менеджеру' },
      { text: 'Снял базовую нагрузку с отдела продаж' },
    ],
    stack: 'Сайт с каталогом, фильтры, карточки товаров',
    metrics: [
      { n: '−50%', l: 'нагрузки на менеджеров' },
      { n: '100%', l: 'клиентов приходят к менеджеру уже с выбором' },
      { n: '3 нед', l: 'от брифа до запуска' },
    ],
    en: {
      title: 'A catalog-and-filters website instead of managers on the phone',
      task: 'Nowhere to send clients — managers were drowning in manual processing',
      result: 'Manager workload dropped by 50%',
      fullTask:
        'There was nowhere to send a client — managers handled every request manually through messengers. It needed a website with a catalog and filters that absorbs the initial wave of questions and gets the client ready to close.',
      done: [
        { text: 'Built a website with a catalog, product cards and filters' },
        { text: 'Built a funnel: from first visit to a request sent to a manager' },
        { text: 'Took the base load off the sales team' },
      ],
      stack: 'Catalog website, filters, product cards',
      metrics: [
        { n: '−50%', l: 'manager workload' },
        { n: '100%', l: 'clients arrive to the manager already having chosen' },
        { n: '3 wks', l: 'from brief to launch' },
      ],
    },
  },
  {
    id: 'seller',
    cat: 'Боты',
    title: 'Инструмент для монетизации социального капитала',
    task: 'Автор контента не знал, как монетизировать навыки в сфере моды и брендопостроения',
    result: 'Бот + сайт за 2 месяца — автор начал монетизировать аудиторию',
    ph: 'скриншот: бот и сайт Seller',
    img: '/images/seller.png',
    url: 'https://byseller.store/',
    fullTask:
      'Автор контента в сфере моды и брендопостроения накопил аудиторию, но не знал как превратить её в доход. Нужен был инструмент который упаковывает знания в продукт и продаёт его без постоянного участия автора.',
    done: [
      { text: 'Упаковал экспертизу автора в понятный продукт для продажи' },
      { text: 'Разработал бота для приёма заявок и автоматических оплат' },
      { text: 'Создал сайт-воронку под трафик из соцсетей' },
      { text: 'Автор сфокусировался на контенте — продажи пошли сами' },
    ],
    stack: 'Telegram-бот, сайт-воронка, автоматический приём оплат',
    metrics: [
      { n: '2 мес', l: 'от идеи до запуска инструмента продаж' },
      { n: '24/7', l: 'продажи без участия автора' },
      { n: '100%', l: 'оплат проходят автоматически' },
    ],
    en: {
      title: 'A tool for monetizing social capital',
      task: "A content creator didn't know how to monetize their skills in fashion and branding",
      result: 'Bot + website in 2 months — the creator started monetizing their audience',
      fullTask:
        "A content creator in fashion and personal branding had built up an audience but didn't know how to turn it into income. It needed a tool that packages their knowledge into a product and sells it without constant involvement from the creator.",
      done: [
        { text: "Packaged the creator's expertise into a sellable product" },
        { text: 'Built a bot for taking orders and automatic payments' },
        { text: 'Created a funnel website for traffic from social media' },
        { text: 'The creator focused on content — sales took care of themselves' },
      ],
      stack: 'Telegram bot, funnel website, automatic payments',
      metrics: [
        { n: '2 mo', l: 'from idea to launching the sales tool' },
        { n: '24/7', l: 'sales with no involvement from the creator' },
        { n: '100%', l: 'payments processed automatically' },
      ],
    },
  },
  {
    id: 'campus',
    cat: 'Мобильные приложения',
    title: 'Студент не читает листовки. Он смотрит в телефон',
    task: 'Бизнес вокруг кампусов тратил деньги на рекламу которую студенты не замечали',
    result: 'Мобильная платформа где студент — аудитория, а бизнес платит за доступ к ней',
    ph: 'скриншот: Campus App',
    img: '/images/campus.png',
    url: 'https://campusapp.ru/',
    fullTask:
      'Вокруг любого университета — кафе, барбершопы, репетиторы, курсы. Все хотят студентов. Но студент не читает листовки у входа и не замечает баннеры. Он живёт в телефоне. Нужна была платформа которую студент откроет сам — а бизнес получит к нему прямой доступ через рекламу.',
    done: [
      { text: 'Спроектировал приложение под реальные сценарии студенческой жизни' },
      { text: 'Разработал iOS и Android версии из единой кодовой базы' },
      { text: 'Встроил рекламный инструмент для бизнеса — простой запуск без агентств' },
      { text: 'Опубликовал в App Store и Google Play' },
    ],
    stack: 'Мобильное приложение, iOS и Android, встроенная рекламная платформа',
    metrics: [
      { n: '3 мес', l: 'от концепции до публикации в сторах' },
      { n: 'iOS + Android', l: 'два приложения из одной кодовой базы' },
      { n: '0₽', l: 'для студентов — монетизация через рекламодателей' },
    ],
    en: {
      title: "Students don't read flyers. They look at their phones",
      task: 'Businesses near campuses spent money on ads students never noticed',
      result: 'A mobile platform where students are the audience — and businesses pay for access',
      fullTask:
        "Around every university there are cafés, barbershops, tutors, and delivery services — all trying to reach students. But students don't notice flyers at the entrance or banners on the street. They live on their phones. The idea was simple: build an app students would open on their own — and give businesses direct access to them through advertising.",
      done: [
        { text: 'Designed the app around real student life scenarios' },
        { text: 'Built iOS and Android versions from a single codebase' },
        { text: 'Integrated an advertising tool for businesses — easy launch without agencies' },
        { text: 'Published on App Store and Google Play' },
      ],
      stack: 'Mobile app, iOS and Android, built-in advertising platform',
      metrics: [
        { n: '3 mo', l: 'from concept to store publication' },
        { n: 'iOS + Android', l: 'two apps from one codebase' },
        { n: 'Free', l: 'for students — monetized through advertisers' },
      ],
    },
  },
];

export const categories: CaseCategory[] = ['Сайты', 'Боты', 'Веб-приложения', 'Мобильные приложения'];

export function localizeCase(item: CaseItem, lang: Lang): CaseItem {
  if (lang !== 'en' || !item.en) return item;
  const { en, ...rest } = item;
  return { ...rest, ...en, en };
}

export function getCases(lang: Lang = 'ru'): CaseItem[] {
  return cases.map((c) => localizeCase(c, lang));
}

export function getCaseById(id: string, lang: Lang = 'ru'): CaseItem | undefined {
  const item = cases.find((c) => c.id === id);
  return item ? localizeCase(item, lang) : undefined;
}
