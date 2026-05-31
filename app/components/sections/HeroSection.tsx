"use client";
import { useEffect, useState } from "react";
import { Link2, X, Globe } from "lucide-react";
import Image from "next/image";
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
        setTimeout(() => {
          setTyping(false);
          setTimeout(() => setRoleIndex((p) => (p + 1) % heroData.roles.length), 600);
        }, 1800);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <section id="hero" className="section-padding" style={{ background: "var(--color-bg-primary)", overflow: "hidden" }}>
      <div className="section-container">
        <div className="flex-two-col" style={{ minHeight: "80vh", justifyContent: "space-between", alignItems: "center" }}>

          <div style={{ flex: 1, maxWidth: 560 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>{heroData.greeting}</p>

            <h1 className="font-bold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1, marginBottom: 12 }}>
              <span style={{ color: "var(--color-accent)" }}>{heroData.firstName}</span>{" "}
              <span style={{ color: "var(--color-text-primary)" }}>{heroData.lastName}</span>
            </h1>

            <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.125rem)", fontWeight: 500, color: "var(--color-text-secondary)", fontStyle: "italic", marginBottom: 20 }}>
              I am a{" "}
              <span
                style={{ color: "var(--color-accent)", fontFamily: "'Dancing Script', cursive" }}
                className={typing ? "typing-cursor" : ""}
              >
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

          <div style={{
            flexShrink: 0,
            position: "relative",
            width: "clamp(300px, 40vw, 460px)",
            height: "clamp(340px, 46vw, 520px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>

            <div style={{
              position: "absolute",
              width: "clamp(240px, 32vw, 360px)",
              height: "clamp(240px, 32vw, 360px)",
              borderRadius: "50%",
              background: "var(--color-accent)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }} />

            <div style={{
              position: "absolute",
              top: "4%",
              right: "2%",
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 6,
              opacity: 0.4,
              color: "var(--color-accent)",
              zIndex: 0,
            }}>
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} style={{ width: 4, height: 4, background: "currentColor", borderRadius: "50%", display: "block" }} />
              ))}
            </div>

            <div style={{
              position: "absolute",
              bottom: "4%",
              right: "2%",
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 6,
              opacity: 0.35,
              color: "var(--color-accent)",
              zIndex: 0,
            }}>
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} style={{ width: 4, height: 4, background: "currentColor", borderRadius: "50%", display: "block" }} />
              ))}
            </div>

            <div style={{
              position: "absolute",
              width: 20, height: 20,
              borderRadius: "50%",
              background: "var(--color-accent)",
              opacity: 0.6,
              top: "50%",
              left: "2%",
              transform: "translateY(-50%)",
              zIndex: 0,
            }} />

            <div style={{
              position: "absolute",
              width: 16, height: 16,
              borderRadius: "50%",
              background: "var(--color-accent)",
              opacity: 0.5,
              top: "55%",
              right: "0%",
              transform: "translateY(-50%)",
              zIndex: 0,
            }} />

            <div style={{
              position: "absolute",
              width: 14, height: 14,
              borderRadius: "50%",
              background: "var(--color-accent)",
              opacity: 0.45,
              bottom: "14%",
              left: "8%",
              zIndex: 0,
            }} />

            <div style={{
              position: "absolute",
              width: 22, height: 22,
              borderRadius: "50%",
              background: "var(--color-accent)",
              opacity: 0.4,
              bottom: "10%",
              right: "14%",
              zIndex: 0,
            }} />

            <div style={{
              position: "absolute",
              zIndex: 2,
              width: "clamp(200px, 26vw, 300px)",
              height: "clamp(290px, 40vw, 450px)",
              bottom: "calc(50% - clamp(240px, 32vw, 360px) / 2)",
              left: "50%",
              transform: "translateX(-50%)",
            }}>
              <Image
                src="/images/hero-picture.png"
                alt="Al Evan Diamantoro"
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 300px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}