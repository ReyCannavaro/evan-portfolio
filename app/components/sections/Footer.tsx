"use client";
import { Link2, X, Globe, MessageCircle, Mail } from "lucide-react";
import { footerData } from "@/app/lib/data";

export default function Footer() {
  return (
    <footer id="footer" style={{ background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
      <div className="section-container" style={{ paddingTop: 60, paddingBottom: 32 }}>
        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 12, whiteSpace: "pre-line" }}>
              {footerData.brand}
            </h3>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
              {footerData.description}
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[Link2, X, Globe, MessageCircle, Mail].map((Icon, i) => (
                <a key={i} href="#" className="social-icon" aria-label="social">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none" }}>
              {footerData.quickLinks.map((link) => (
                <li key={link} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ fontSize: 12, color: "var(--color-text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              Services
            </h4>
            <ul style={{ listStyle: "none" }}>
              {footerData.services.map((s) => (
                <li key={s} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ fontSize: 12, color: "var(--color-text-secondary)", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              Resources
            </h4>
            <ul style={{ listStyle: "none" }}>
              {footerData.resources.map((r) => (
                <li key={r} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ fontSize: 12, color: "var(--color-text-secondary)", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                  >{r}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 20, textAlign: "center", fontSize: 11, color: "var(--color-text-muted)" }}>
          © {new Date().getFullYear()} Al Evan Diamantoro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
