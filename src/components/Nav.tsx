import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  items: NavItem[];
  currentPath: string;
  telegramUrl: string;
}

function isActive(href: string, currentPath: string) {
  if (href === '/') return currentPath === '/';
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function Nav({ items, currentPath, telegramUrl }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(15,15,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a
          href="/"
          style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--fg)' }}
        >
          M42<span style={{ color: 'var(--muted)' }}>.tech</span>
        </a>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {items.map((n) => (
            <a
              key={n.href}
              href={n.href}
              style={{
                fontSize: 16,
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: 6,
                color: isActive(n.href, currentPath) ? '#FFFFFF' : '#888888',
              }}
            >
              {n.label}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="nav-burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          style={{
            display: 'none',
            cursor: 'pointer',
            padding: '10px 4px',
            fontSize: 22,
            lineHeight: 1,
            color: 'var(--fg)',
            minWidth: 30,
            textAlign: 'right',
            background: 'transparent',
            border: 'none',
          }}
        >
          {menuOpen ? (
            '✕'
          ) : (
            <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 6, verticalAlign: 'middle' }}>
              <span style={{ display: 'block', width: 24, height: 2, background: '#F5F5F5' }} />
              <span style={{ display: 'block', width: 24, height: 2, background: '#F5F5F5' }} />
              <span style={{ display: 'block', width: 24, height: 2, background: '#F5F5F5' }} />
            </span>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 49,
            background: 'var(--bg)',
            padding: '16px 20px 32px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
          }}
        >
          {items.map((n) => (
            <a
              key={n.href}
              href={n.href}
              style={{
                fontSize: 26,
                fontWeight: 600,
                padding: '16px 0',
                borderBottom: '1px solid var(--border)',
                color: isActive(n.href, currentPath) ? '#FFFFFF' : '#888888',
              }}
            >
              {n.label}
            </a>
          ))}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 28, justifyContent: 'center', fontSize: 17, padding: '16px 28px' }}
          >
            Написать в Telegram →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
      `}</style>
    </div>
  );
}
