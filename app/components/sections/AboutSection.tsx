import SectionTitle from "@/app/components/ui/SectionTitle";
import { aboutData } from "@/app/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
      <div className="section-container">
        <div className="flex-two-col">
          {/* Image */}
          <div style={{ position: "relative", flexShrink: 0, width: "min(420px, 100%)" }}>
            <div style={{ width: "100%", height: "clamp(280px, 40vw, 480px)", borderRadius: 16, background: "var(--color-bg-elevated)", overflow: "hidden", boxShadow: "var(--shadow-image)" }}>
              <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-card) 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)", fontSize: 14, fontWeight: 600 }}>
                FOTO ABOUT
              </div>
            </div>
            <div style={{ position: "absolute", inset: 0, borderRadius: 16, border: "3px solid var(--color-accent)", transform: "translate(12px, 12px)", zIndex: -1, opacity: 0.6 }} />
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