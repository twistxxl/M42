import type { RefObject } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  open: boolean;
  panelRef: RefObject<HTMLDivElement | null>;
  items: NavItem[];
  currentPath: string;
  telegramUrl: string;
  ctaLabel: string;
  isEn: boolean;
  isActive: (href: string, currentPath: string) => boolean;
  otherLangHref: (currentPath: string, toEn: boolean) => string;
}

export default function MobileNavDrawer({
  open,
  panelRef,
  items,
  currentPath,
  telegramUrl,
  ctaLabel,
  isEn,
  isActive,
  otherLangHref,
}: Props) {
  return (
    <div
      ref={panelRef}
      aria-hidden={!open}
      style={{
        position: "fixed",
        top: "var(--nav-h-mobile, 72px)",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 49,
        background: "rgba(15,15,15,0.78)",
        backdropFilter: "blur(28px) saturate(160%)",
        WebkitBackdropFilter: "blur(28px) saturate(160%)",
        borderTop: "1px solid var(--border)",
        padding: "28px 24px 40px",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-12px)",
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}
    >
      {items.map((n) => (
        <a
          key={n.href}
          href={n.href}
          style={{
            fontSize: 28,
            fontWeight: 600,
            padding: "18px 0",
            borderBottom: "1px solid var(--border)",
            color: isActive(n.href, currentPath) ? "#FFFFFF" : "#888888",
          }}
        >
          {n.label}
        </a>
      ))}
      <div className="mono" style={{ display: "flex", gap: 8, marginTop: 24 }}>
        <a
          href={otherLangHref(currentPath, false)}
          style={{
            fontSize: 15,
            fontWeight: 600,
            padding: "8px 14px",
            borderRadius: 999,
            border: `1px solid ${!isEn ? "#F5F5F5" : "#2A2A2A"}`,
            color: !isEn ? "#FFFFFF" : "#888888",
          }}
        >
          RU
        </a>
        <a
          href={otherLangHref(currentPath, true)}
          style={{
            fontSize: 15,
            fontWeight: 600,
            padding: "8px 14px",
            borderRadius: 999,
            border: `1px solid ${isEn ? "#F5F5F5" : "#2A2A2A"}`,
            color: isEn ? "#FFFFFF" : "#888888",
          }}
        >
          EN
        </a>
      </div>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{
          marginTop: 24,
          justifyContent: "center",
          fontSize: 17,
          padding: "16px 28px",
          borderRadius: 24,

        }}
      >
        {ctaLabel}
      </a>
    </div>
  );
}