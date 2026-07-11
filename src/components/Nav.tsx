import { useEffect, useRef, useState } from "react";
import MobileNavDrawer from "./MobileNavDrawer";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  items: NavItem[];
  currentPath: string;
  telegramUrl: string;
  ctaLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
}

function normalize(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}

function isActive(href: string, currentPath: string) {
  if (href === "/" || href === "/en") return currentPath === href;
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

function otherLangHref(currentPath: string, toEn: boolean) {
  const bare = currentPath.replace(/^\/en(\/|$)/, "/").replace(/\/$/, "") || "/";
  if (!toEn) return bare;
  return bare === "/" ? "/en" : `/en${bare}`;
}

export default function Nav({
  items,
  currentPath: initialPath,
  telegramUrl,
  ctaLabel,
  menuOpenLabel,
  menuCloseLabel,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(initialPath);
  const isEn = currentPath === "/en" || currentPath.startsWith("/en/");
  const headerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPageLoad = () => {
      setCurrentPath(normalize(window.location.pathname));
      setMenuOpen(false);
    };
    document.addEventListener("astro:page-load", onPageLoad);
    return () => document.removeEventListener("astro:page-load", onPageLoad);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        headerRef.current &&
        !headerRef.current.contains(target) &&
        drawerRef.current &&
        !drawerRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <>
      <div
        ref={headerRef}
        className={`nav-shell${menuOpen ? " nav-open" : ""}`}
      >
        <div
          className="container nav-bar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a
            href={isEn ? "/en" : "/"}
            style={{
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
            }}
          >
            M42<span style={{ color: "var(--muted)" }}>.tech</span>
          </a>

          {/* Desktop nav */}
          <div
            className="nav-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            {items.map((n) => (
              <a
                key={n.href}
                href={n.href}
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "8px 12px",
                  borderRadius: 6,
                  color: isActive(n.href, currentPath) ? "#FFFFFF" : "#888888",
                }}
              >
                {n.label}
              </a>
            ))}
            <div
              className="mono"
              style={{ display: "flex", alignItems: "center", gap: 2, marginLeft: 4 }}
            >
              <a
                href={otherLangHref(currentPath, false)}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "6px 8px",
                  borderRadius: 4,
                  color: !isEn ? "#FFFFFF" : "#888888",
                }}
              >
                RU
              </a>
              <span style={{ color: "#444444" }}>/</span>
              <a
                href={otherLangHref(currentPath, true)}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "6px 8px",
                  borderRadius: 4,
                  color: isEn ? "#FFFFFF" : "#888888",
                }}
              >
                EN
              </a>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
            aria-expanded={menuOpen}
            style={{
              display: "none",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              marginRight: -12,
              fontSize: 30,
              lineHeight: 1,
              color: "var(--fg)",
              background: "transparent",
              border: "none",
            }}
          >
            {menuOpen ? (
              "✕"
            ) : (
              <span
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  gap: 8,
                  verticalAlign: "middle",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 30,
                    height: 3,
                    background: "#F5F5F5",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 30,
                    height: 3,
                    background: "#F5F5F5",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 30,
                    height: 3,
                    background: "#F5F5F5",
                  }}
                />
              </span>
            )}
          </button>
        </div>

        <style>{`
          .nav-shell {
            position: fixed;
            top: 12px;
            left: 12px;
            right: 12px;
            z-index: 50;
            border-radius: 32px;
            background: rgba(15,15,15,0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.08);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.08),
              inset 0 0 0 1px rgba(0,0,0,0.25),
              0 10px 28px rgba(0,0,0,0.4);
            transition: top 0.2s ease, left 0.2s ease, right 0.2s ease, border-radius 0.2s ease,
              box-shadow 0.2s ease, background 0.2s ease;
          }
          .nav-bar { height: 64px; }

          @media (min-width: 701px) {
            .nav-shell {
              left: 50%;
              right: auto;
              transform: translateX(-50%);
              width: min(880px, calc(100% - 48px));
            }
          }

          @media (max-width: 700px) {
            .nav-desktop { display: none !important; }
            .nav-burger { display: inline-flex !important; }
            .nav-bar { height: 72px; }
            :root { --nav-h-mobile: 72px; }

            .nav-shell.nav-open {
              top: 0;
              left: 0;
              right: 0;
              border-radius: 0;
              border: none;
              border-bottom: 1px solid var(--border);
              box-shadow: none;
              background: rgba(15,15,15,0.92);
            }
          }
        `}</style>
      </div>

      <MobileNavDrawer
        open={menuOpen}
        panelRef={drawerRef}
        items={items}
        currentPath={currentPath}
        telegramUrl={telegramUrl}
        ctaLabel={ctaLabel}
        isEn={isEn}
        isActive={isActive}
        otherLangHref={otherLangHref}
      />
    </>
  );
}