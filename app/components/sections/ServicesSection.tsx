import { ArrowRight } from "lucide-react";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { servicesData } from "@/app/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="section-container">
        <SectionTitle title="WHAT I DO" subtitle="My Services" />
        <div className="grid-3">
          {servicesData.map((service, i) => (
            <div key={i} className="card-base" style={{ padding: "24px 20px" }}>
              <p className="section-label" style={{ marginBottom: 12 }}>{service.label}</p>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 10 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 20 }}>
                {service.description}
              </p>
              <a href={service.link} style={{ fontSize: 12, color: "var(--color-accent)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}>
                See Pricing <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 32 }}>
          {[0, 1, 2].map((i) => <span key={i} className={i === 0 ? "slider-dot active" : "slider-dot"} />)}
        </div>
      </div>
    </section>
  );
}