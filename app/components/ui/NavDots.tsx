"use client";
import { useEffect, useState } from "react";
import { Home, Briefcase, User, Zap, Heart, FolderOpen } from "lucide-react";

const sections = [
  { id: "hero",      icon: Home,       label: "Home" },
  { id: "services",  icon: Briefcase,  label: "Services" },
  { id: "about",     icon: User,       label: "About" },
  { id: "skills",    icon: Zap,        label: "Skills" },
  { id: "knowme",    icon: Heart,      label: "Know Me" },
  { id: "portfolio", icon: FolderOpen, label: "Portfolio" },
];

export default function NavDots() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observers = sections.map(({ id }, i) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (isMobile) {
    return (
      <nav
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "10px 14px",
          borderRadius: 9999,
          background: "rgba(21, 43, 38, 0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(26, 188, 156, 0.18)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(26,188,156,0.08)",
          whiteSpace: "nowrap",
        }}
      >
        {sections.map(({ id, icon: Icon, label }, i) => {
          const isActive = active === i;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={label}
              title={label}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                background: isActive ? "var(--color-accent)" : "rgba(26, 188, 156, 0.07)",
                color: isActive ? "#fff" : "var(--color-text-muted)",
                boxShadow: isActive ? "0 0 16px rgba(26,188,156,0.45)" : "none",
                transform: isActive ? "scale(1.15)" : "scale(1)",
                flexShrink: 0,
              }}
            >
              <Icon size={16} strokeWidth={isActive ? 2.5 : 1.8} />
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav
      style={{
        position: "fixed",
        left: 20,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "14px 10px",
        borderRadius: 999,
        background: "rgba(21, 43, 38, 0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(26, 188, 156, 0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
      }}
    >
      {sections.map(({ id, icon: Icon, label }, i) => {
        const isActive = active === i;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={label}
            title={label}
            style={{
              width: 38, height: 38, borderRadius: "50%",
              border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.3s ease",
              background: isActive ? "var(--color-accent)" : "rgba(26, 188, 156, 0.07)",
              color: isActive ? "#fff" : "var(--color-text-muted)",
              boxShadow: isActive ? "0 0 16px rgba(26,188,156,0.45)" : "none",
              transform: isActive ? "scale(1.15)" : "scale(1)",
            }}
          >
            <Icon size={15} strokeWidth={isActive ? 2.5 : 1.8} />
          </button>
        );
      })}
    </nav>
  );
}
