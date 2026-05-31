"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { portfolioData } from "@/app/lib/data";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="section-container">
        <SectionTitle title="PORTOFOLIO" subtitle="My Project" />

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 32 }}>
          {portfolioData.filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "6px 20px",
                borderRadius: 9999,
                fontSize: 12,
                fontWeight: 600,
                border: `1px solid ${activeFilter === f ? "var(--color-accent)" : "var(--color-border)"}`,
                background: activeFilter === f ? "var(--color-accent)" : "transparent",
                color: activeFilter === f ? "#fff" : "var(--color-text-secondary)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {filtered.map((project, i) => (
            <div key={i} className="card-base" style={{ overflow: "hidden" }}>
              {/* Thumbnail */}
              <div
                style={{
                  width: "100%",
                  height: 160,
                  background: "var(--color-bg-elevated)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text-muted)",
                  fontSize: 12,
                }}
              >
                {project.title}
              </div>

              {/* Content */}
              <div style={{ padding: 16 }}>
                <p className="section-label mb-2">{project.category}</p>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 8 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: 14 }}>
                  {project.description}
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: 12,
                    color: "var(--color-accent)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    textDecoration: "none",
                  }}
                >
                  View More <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
