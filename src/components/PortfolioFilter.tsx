import { useMemo, useState } from 'react';
import type { CaseCategory, CaseItem } from '../data/cases';

interface Props {
  items: CaseItem[];
  categories: CaseCategory[];
}

const ALL = 'Все' as const;
type Filter = CaseCategory | typeof ALL;

function FilterCard({ item }: { item: CaseItem }) {
  return (
    <div className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div
        className="ph-block"
        style={{ height: 180, borderBottom: '1px solid var(--border)' }}
      >
        <span className="mono" style={{ fontSize: 13, color: 'var(--muted)' }}>
          {item.ph}
        </span>
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
          {item.cat.toUpperCase()}
        </div>
        <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.3 }}>{item.title}</div>
        <div style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--muted)' }}>{item.task}</div>
        <div style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 500, flex: 1 }}>{item.result}</div>
        <a href={`/portfolio/${item.id}`} style={{ fontSize: 16, fontWeight: 600, marginTop: 6 }}>
          Подробнее →
        </a>
      </div>
    </div>
  );
}

export default function PortfolioFilter({ items, categories }: Props) {
  const [filter, setFilter] = useState<Filter>(ALL);
  const filters: Filter[] = [ALL, ...categories];

  const filtered = useMemo(
    () => (filter === ALL ? items : items.filter((c) => c.cat === filter)),
    [filter, items],
  );

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
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
              {f}
            </button>
          );
        })}
      </div>
      <div className="grid-auto">
        {filtered.map((c) => (
          <FilterCard key={c.id} item={c} />
        ))}
      </div>
    </div>
  );
}
