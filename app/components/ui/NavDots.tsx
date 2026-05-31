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
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            aria-label={label}
            title={label}
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              background: isActive
                ? "var(--color-accent)"
                : "rgba(26, 188, 156, 0.07)",
              color: isActive ? "#fff" : "var(--color-text-muted)",
              boxShadow: isActive
                ? "0 0 16px rgba(26, 188, 156, 0.45)"
                : "none",
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