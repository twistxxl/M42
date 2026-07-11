import { useMemo, useRef, useState } from 'react';
import type { CaseCategory, CaseItem } from '../data/cases';
import { categoryLabels, useTranslations, type Lang } from '../i18n/ui';

interface Props {
  items: CaseItem[];
  categories: CaseCategory[];
  lang?: Lang;
}

const ALL = 'ALL' as const;
type Filter = CaseCategory | typeof ALL;
const PAGE_SIZE = 6;

function FilterCard({ item, lang }: { item: CaseItem; lang: Lang }) {
  const t = useTranslations(lang);
  const prefix = lang === 'en' ? '/en' : '';
  return (
    <div
      className="card hover-card"
      style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div
        className="ph-block"
        style={{ height: 180, borderBottom: '1px solid var(--border)', overflow: 'hidden' }}
      >
        {item.img ? (
          <img
            src={item.img}
            alt={item.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span className="mono" style={{ fontSize: 13, color: 'var(--muted)' }}>
            {item.ph}
          </span>
        )}
      </div>
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <div
          className="mono"
          style={{
            alignSelf: 'flex-start',
            fontSize: 12,
            letterSpacing: '0.1em',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 4,
            padding: '4px 8px',
          }}
        >
          {categoryLabels[lang][item.cat].toUpperCase()}
        </div>
        <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.3 }}>{item.title}</div>
        <div style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--muted)' }}>{item.task}</div>
        <div style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 500, flex: 1 }}>{item.result}</div>
        <span style={{ fontSize: 16, fontWeight: 600, marginTop: 6 }}>{t('cta.readMore')}</span>
      </div>
      <a
        href={`${prefix}/portfolio/${item.id}`}
        aria-label={item.title}
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      />
    </div>
  );
}

export default function PortfolioFilter({ items, categories, lang = 'ru' }: Props) {
  const t = useTranslations(lang);
  const [filter, setFilter] = useState<Filter>(ALL);
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const filters: Filter[] = [ALL, ...categories];
  const filterLabel = (f: Filter) => (f === ALL ? t('portfolio.all') : categoryLabels[lang][f]);

  const filtered = useMemo(
    () => (filter === ALL ? items : items.filter((c) => c.cat === filter)),
    [filter, items],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleFilterChange = (f: Filter) => {
    setFilter(f);
    setPage(1);
  };

  const goToPage = (n: number) => {
    setPage(n);
    const el = gridRef.current;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              style={{
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: 500,
                padding: '9px 16px',
                borderRadius: 999,
                border: `1px solid ${active ? '#F5F5F5' : '#2A2A2A'}`,
                background: active ? '#F5F5F5' : 'transparent',
                color: active ? '#0F0F0F' : '#888888',
              }}
            >
              {filterLabel(f)}
            </button>
          );
        })}
      </div>
      <div className="grid-auto" ref={gridRef}>
        {paged.map((c) => (
          <FilterCard key={c.id} item={c} lang={lang} />
        ))}
      </div>
      {pageCount > 1 && (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 48 }}>
          <button
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            style={{
              cursor: currentPage === 1 ? 'default' : 'pointer',
              fontSize: 15,
              fontWeight: 500,
              padding: '9px 16px',
              borderRadius: 999,
              border: '1px solid #2A2A2A',
              background: 'transparent',
              color: currentPage === 1 ? '#444444' : '#888888',
            }}
          >
            ←
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => {
            const active = n === currentPage;
            return (
              <button
                key={n}
                onClick={() => goToPage(n)}
                style={{
                  cursor: 'pointer',
                  fontSize: 15,
                  fontWeight: 500,
                  minWidth: 40,
                  padding: '9px 16px',
                  borderRadius: 999,
                  border: `1px solid ${active ? '#F5F5F5' : '#2A2A2A'}`,
                  background: active ? '#F5F5F5' : 'transparent',
                  color: active ? '#0F0F0F' : '#888888',
                }}
              >
                {n}
              </button>
            );
          })}
          <button
            onClick={() => goToPage(Math.min(pageCount, currentPage + 1))}
            disabled={currentPage === pageCount}
            style={{
              cursor: currentPage === pageCount ? 'default' : 'pointer',
              fontSize: 15,
              fontWeight: 500,
              padding: '9px 16px',
              borderRadius: 999,
              border: '1px solid #2A2A2A',
              background: 'transparent',
              color: currentPage === pageCount ? '#444444' : '#888888',
            }}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
