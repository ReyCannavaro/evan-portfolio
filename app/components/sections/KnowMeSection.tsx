import { knowMeData } from "@/app/lib/data";

export default function KnowMeSection() {
  return (
    <section id="knowme" className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
      <div className="section-container">
        <div className="flex-two-col">
          <div style={{ flex: 1 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>{knowMeData.tag}</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 24 }}>
              <span style={{ color: "var(--color-text-primary)" }}>{knowMeData.heading[0]} </span>
              <span style={{ color: "var(--color-accent)" }}>{knowMeData.heading[1]}</span>
            </h2>
            <div style={{ marginBottom: 32 }}>
              {knowMeData.items.map((item, i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--color-border)", padding: "14px 0" }}>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 6 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item.description}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#portfolio" className="btn-secondary">See More</a>
              <a href="#footer" className="btn-primary">Contact Me</a>
            </div>
          </div>

          <div style={{ flexShrink: 0, width: "min(380px, 100%)", position: "relative" }}>
            <div style={{ width: "100%", height: "clamp(280px, 40vw, 480px)", borderRadius: 16, background: "var(--color-bg-elevated)", overflow: "hidden", boxShadow: "var(--shadow-image)" }}>
              <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-card) 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)", fontSize: 14, fontWeight: 600 }}>
                FOTO KNOW ME
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(26,188,156,0.9)", color: "#fff", padding: "8px 14px", borderRadius: 10, fontSize: 12, fontWeight: 700, backdropFilter: "blur(4px)" }}>
              EVAN<br />5F
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}