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
    setDisplayed("");
    setTyping(true);
    const interval = setInterval(() => {
      if (i < role.length) {
        setDisplayed(role.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTyping(false);
          setTimeout(() => {
            setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
          }, 600);
        }, 1800);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <section
      id="hero"
      className="section-padding"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between gap-10 min-h-[70vh]">
          {/* LEFT — Text Content */}
          <div className="flex-1 max-w-[560px]">
            <p className="section-label mb-3">{heroData.greeting}</p>

            <h1 className="font-bold leading-tight mb-2" style={{ fontSize: "3rem" }}>
              <span style={{ color: "var(--color-accent)" }}>{heroData.firstName}</span>{" "}
              <span style={{ color: "var(--color-text-primary)" }}>{heroData.lastName}</span>
            </h1>

            <p className="mb-5" style={{ fontSize: "1.125rem", fontWeight: 500, color: "var(--color-text-secondary)", fontStyle: "italic" }}>
              I am a{" "}
              <span
                style={{ color: "var(--color-accent)", fontFamily: "'Dancing Script', cursive" }}
                className={typing ? "typing-cursor" : ""}
              >
                {displayed}
              </span>
            </p>

            <p className="mb-8" style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "480px" }}>
              {heroData.bio}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <a href="#portfolio" className="btn-primary">View More</a>
              <a href="#about" className="btn-secondary">About Me</a>
            </div>

            <div className="flex items-center gap-2">
              <a href={heroData.socials.instagram} className="social-icon" aria-label="Instagram">
                <Link2 size={14} />
              </a>
              <a href={heroData.socials.twitter} className="social-icon" aria-label="Twitter">
                <X size={14} />
              </a>
              <a href={heroData.socials.pinterest} className="social-icon" aria-label="Pinterest">
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* RIGHT — Photo Circle */}
          <div className="flex-shrink-0 relative">
            {/* Dot grid decoration */}
            <div className="absolute -right-4 -bottom-4 opacity-30" style={{ color: "var(--color-accent)" }}>
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="inline-block rounded-full"
                  style={{
                    width: 5,
                    height: 5,
                    background: "currentColor",
                    margin: 3,
                    display: "inline-block",
                  }}
                />
              ))}
            </div>

            {/* Circle image container */}
            <div
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "var(--color-accent)",
                overflow: "hidden",
                boxShadow: "var(--shadow-image)",
                position: "relative",
              }}
            >
              {/* Placeholder — ganti dengan <Image> setelah ada foto */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-bg-elevated) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                FOTO DISINI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
