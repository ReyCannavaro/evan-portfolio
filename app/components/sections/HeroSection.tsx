"use client";
import { useEffect, useState } from "react";
import { Link2, X, Globe } from "lucide-react";
import { heroData } from "@/app/lib/data";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = heroData.roles[roleIndex];
    let i = 0;
    setDisplayed(""); setTyping(true);
    const interval = setInterval(() => {
      if (i < role.length) { setDisplayed(role.slice(0, i + 1)); i++; }
      else {
        clearInterval(interval);
        setTimeout(() => { setTyping(false); setTimeout(() => setRoleIndex((p) => (p + 1) % heroData.roles.length), 600); }, 1800);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <section id="hero" className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
      <div className="section-container">
        <div className="flex-two-col" style={{ minHeight: "70vh", justifyContent: "space-between" }}>

          <div style={{ flex: 1, maxWidth: 560 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>{heroData.greeting}</p>

            <h1 className="font-bold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1, marginBottom: 12 }}>
              <span style={{ color: "var(--color-accent)" }}>{heroData.firstName}</span>{" "}
              <span style={{ color: "var(--color-text-primary)" }}>{heroData.lastName}</span>
            </h1>

            <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.125rem)", fontWeight: 500, color: "var(--color-text-secondary)", fontStyle: "italic", marginBottom: 20 }}>
              I am a{" "}
              <span style={{ color: "var(--color-accent)", fontFamily: "'Dancing Script', cursive" }} className={typing ? "typing-cursor" : ""}>
                {displayed}
              </span>
            </p>

            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              {heroData.bio}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <a href="#portfolio" className="btn-primary">View More</a>
              <a href="#about" className="btn-secondary">About Me</a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <a href={heroData.socials.instagram} className="social-icon" aria-label="Instagram"><Link2 size={14} /></a>
              <a href={heroData.socials.twitter} className="social-icon" aria-label="Twitter"><X size={14} /></a>
              <a href={heroData.socials.pinterest} className="social-icon" aria-label="Pinterest"><Globe size={14} /></a>
            </div>
          </div>

          <div style={{ flexShrink: 0, position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "absolute", right: -16, bottom: -16, opacity: 0.3, color: "var(--color-accent)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, zIndex: 0 }}>
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} style={{ width: 5, height: 5, background: "currentColor", borderRadius: "50%", display: "block" }} />
              ))}
            </div>

            <div style={{
              width: "clamp(200px, 30vw, 300px)",
              height: "clamp(200px, 30vw, 300px)",
              borderRadius: "50%",
              background: "var(--color-accent)",
              overflow: "hidden",
              boxShadow: "var(--shadow-image)",
              position: "relative", zIndex: 1,
            }}>
              <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-bg-elevated) 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 14, fontWeight: 600, letterSpacing: "0.1em",
              }}>
                FOTO DISINI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}