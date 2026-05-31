import { ArrowRight } from "lucide-react";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { servicesData } from "@/app/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="section-container">
        <SectionTitle title="WHAT I DO" subtitle="My Services" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {servicesData.map((service, i) => (
            <div key={i} className="card-base" style={{ padding: "24px 20px" }}>
              <p className="section-label mb-3">{service.label}</p>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 10 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 20 }}>
                {service.description}
              </p>
              <a
                href={service.link}
                style={{
                  fontSize: 12,
                  color: "var(--color-accent)",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  transition: "gap 0.2s",
                  textDecoration: "none",
                }}
              >
                See Pricing <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>

        {/* Slider dots */}
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 32 }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={i === 0 ? "slider-dot active" : "slider-dot"}
              style={{ display: "inline-block" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
