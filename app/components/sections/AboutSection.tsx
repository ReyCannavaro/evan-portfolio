import Image from "next/image";
import { aboutData } from "@/app/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
      <div className="section-container">
        <div className="flex-two-col">

          <div style={{ position: "relative", flexShrink: 0, width: "min(420px, 100%)" }}>
            <div style={{
              position: "absolute",
              inset: 0,
              borderRadius: 16,
              border: "3px solid var(--color-accent)",
              transform: "translate(12px, 12px)",
              zIndex: 0,
              opacity: 0.6,
            }} />

            <div style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "clamp(280px, 40vw, 480px)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "var(--shadow-image)",
            }}>
              <Image
                src="/images/about.JPG"
                alt="Al Evan Diamantoro — About"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>{aboutData.tag}</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 24 }}>
              <span style={{ color: "var(--color-text-primary)" }}>{aboutData.heading[0]} </span>
              <span style={{ color: "var(--color-accent)" }}>{aboutData.heading[1]} </span>
              <br />
              <span style={{ color: "var(--color-accent)" }}>{aboutData.heading[2]} </span>
              <span style={{ color: "var(--color-text-primary)" }}>{aboutData.heading[3]}</span>
            </h2>
            {aboutData.items.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--color-border)", padding: "14px 0" }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}