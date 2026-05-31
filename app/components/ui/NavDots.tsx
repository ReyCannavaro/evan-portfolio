"use client";
import { useEffect, useState } from "react";

const sections = ["hero", "services", "about", "skills", "knowme", "portfolio"];

export default function NavDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers = sections.map((id, i) => {
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
    <nav className="fixed left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {sections.map((id, i) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          aria-label={`Go to ${id}`}
          style={{
            background: active === i ? "var(--color-accent)" : "var(--color-dot-inactive)",
            width: active === i ? "10px" : "8px",
            height: active === i ? "10px" : "8px",
            transform: active === i ? "scale(1.3)" : "scale(1)",
            transition: "all 0.3s ease",
            border: "none",
            cursor: "pointer",
            borderRadius: "50%",
            display: "block",
          }}
        />
      ))}
    </nav>
  );
}
