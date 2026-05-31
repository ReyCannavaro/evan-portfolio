"use client";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { skillsData } from "@/app/lib/data";

export default function SkillsSection() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="section-container" ref={ref}>
        <SectionTitle title="PROFESSIONAL SKILLS" subtitle="My Talent" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px 40px" }}>
          {skillsData.map((skill, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)" }}>
                  {skill.name}
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-accent)" }}>
                  {skill.percent}%
                </span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: animated ? `${skill.percent}%` : "0%" }}
                />
              </div>
              <p style={{ fontSize: 11, color: "var(--color-text-muted)", marginTop: 8, lineHeight: 1.5 }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
