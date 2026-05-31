# 🎨 DESIGN SYSTEM — Al Evan Diamantoro Personal Portfolio

> Dokumentasi lengkap desain sistem untuk keperluan slicing yang konsisten dan presisi.

---

## 1. COLOR PALETTE

### Primary Colors

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-bg-primary` | `#0D1F1C` | Background utama seluruh halaman (dark greenish-black) |
| `--color-bg-secondary` | `#112420` | Background section alternatif / card |
| `--color-bg-card` | `#152B26` | Background card service & portofolio |
| `--color-bg-elevated` | `#1A3530` | Background elemen yang sedikit terangkat (hover state) |
| `--color-accent` | `#1ABC9C` | Warna aksen utama — teal/mint (CTA, highlight teks, border aktif, progress bar) |
| `--color-accent-hover` | `#17A589` | Hover state dari accent |
| `--color-accent-light` | `rgba(26,188,156,0.15)` | Background subtle accent (badge, tag) |

### Text Colors

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-text-primary` | `#FFFFFF` | Heading utama, nama, judul section |
| `--color-text-secondary` | `#B0BEC5` | Body text, deskripsi, paragraf |
| `--color-text-muted` | `#6B8A85` | Label kecil, placeholder, tag label atas card |
| `--color-text-accent` | `#1ABC9C` | Teks highlight (contoh: "Al Evan", "My", "Creative", "Know Me") |

### Neutral & Border

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-border` | `rgba(26,188,156,0.2)` | Border card, divider tipis |
| `--color-border-strong` | `rgba(26,188,156,0.5)` | Border card hover, outline button |
| `--color-shadow` | `rgba(0,0,0,0.4)` | Box-shadow card dan elemen floating |

### Dot / Decorative Element

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-dot-active` | `#1ABC9C` | Dot aktif pada slider/carousel |
| `--color-dot-inactive` | `#3D6B63` | Dot tidak aktif |

---

## 2. TYPOGRAPHY

### Font Families

```css
/* Heading utama — Bold, display weight */
font-family: 'Poppins', sans-serif;

/* Sub-heading script/italic — section subtitle dekoratif */
font-family: 'Dancing Script', cursive;
/* atau alternatif: 'Great Vibes', 'Pacifico' */

/* Body text — regular, readable */
font-family: 'Poppins', sans-serif;
```

> **Catatan:** Semua teks menggunakan `Poppins` kecuali subtitle italic dekoratif di bawah judul section (misalnya *"My Services"*, *"My Talent"*, *"My Project"*) menggunakan font script/kursif.

### Font Scale

| Token | Size | Weight | Line Height | Penggunaan |
|---|---|---|---|---|
| `--fs-hero-name` | `48px` / `3rem` | `700` | `1.1` | Nama hero "Al Evan Diamantoro" |
| `--fs-hero-sub` | `18px` | `500` | `1.4` | Subtitle "UI/UX Designer" (italic, animated cursor) |
| `--fs-section-title` | `28px` / `1.75rem` | `700` | `1.2` | Judul section: "WHAT I DO", "PROFESSIONAL SKILLS" |
| `--fs-section-script` | `20px` | `400` | `1` | Subtitle script di bawah section title: "My Services" |
| `--fs-card-title` | `16px` | `600` | `1.3` | Judul card / item |
| `--fs-card-label` | `10px` | `600` | `1` | Label kecil di atas card (uppercase tracking lebar) |
| `--fs-body` | `13px` / `0.8125rem` | `400` | `1.6` | Body text, deskripsi |
| `--fs-small` | `11px` | `400` | `1.5` | Caption, label skill percentage |
| `--fs-skill-percent` | `14px` | `700` | `1` | Angka persentase skill (misal: "90%") |

### Letter Spacing

```css
--ls-section-title: 0.12em;   /* WHAT I DO — uppercase spaced */
--ls-card-label: 0.15em;      /* UNIQUE VISUAL IDENTITIES — label atas card */
--ls-button: 0.05em;          /* CTA button text */
```

---

## 3. SPACING SYSTEM

Menggunakan base unit `8px` (0.5rem). Semua padding/margin kelipatan unit ini.

| Token | Value | Penggunaan |
|---|---|---|
| `--space-1` | `4px` | Gap micro (antara ikon-label) |
| `--space-2` | `8px` | Padding kecil, gap dalam card |
| `--space-3` | `12px` | Gap medium |
| `--space-4` | `16px` | Padding card horizontal kecil |
| `--space-5` | `20px` | Padding card standar |
| `--space-6` | `24px` | Gap antar elemen dalam section |
| `--space-8` | `32px` | Padding card besar, gap grid |
| `--space-10` | `40px` | Margin antar sub-section |
| `--space-12` | `48px` | Padding section vertikal minimum |
| `--space-16` | `64px` | Padding section besar |
| `--space-20` | `80px` | Padding section vertikal utama |
| `--space-24` | `96px` | Jarak antar section (top/bottom) |

### Section Padding Convention

```css
/* Setiap section utama */
padding-top: var(--space-20);     /* 80px */
padding-bottom: var(--space-20);  /* 80px */

/* Container max-width */
max-width: 1200px;
padding-left: var(--space-8);    /* 32px */
padding-right: var(--space-8);   /* 32px */
margin: 0 auto;
```

---

## 4. BORDER & RADIUS

| Token | Value | Penggunaan |
|---|---|---|
| `--radius-sm` | `6px` | Badge, label tag kecil |
| `--radius-md` | `10px` | Card service, card portofolio |
| `--radius-lg` | `16px` | Card besar, image wrapper |
| `--radius-xl` | `24px` | Gambar hero bulat (circle ~300px) |
| `--radius-full` | `9999px` | Button pill, progress bar, dot |
| `--radius-circle` | `50%` | Foto profil hero (bulat sempurna) |

### Border Style

```css
/* Default card border */
border: 1px solid var(--color-border);        /* rgba(26,188,156,0.2) */

/* Card hover / aktif */
border: 1px solid var(--color-border-strong); /* rgba(26,188,156,0.5) */

/* Accent border kiri card service */
border-left: 3px solid var(--color-accent);
```

---

## 5. SHADOW & ELEVATION

```css
/* Card default */
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3);

/* Card hover */
--shadow-card-hover: 0 8px 32px rgba(26, 188, 156, 0.15);

/* Button CTA */
--shadow-button: 0 4px 16px rgba(26, 188, 156, 0.3);

/* Foto hero / image float */
--shadow-image: 0 12px 40px rgba(0, 0, 0, 0.5);

/* Floating element */
--shadow-float: 0 20px 60px rgba(0, 0, 0, 0.6);
```

---

## 6. LAYOUT & GRID

### Global

```css
/* Wrapper */
max-width: 1200px;
margin: 0 auto;
padding: 0 32px;

/* Body full width */
width: 100%;
overflow-x: hidden;
background-color: var(--color-bg-primary);
```

### Grid Systems Per Section

#### Hero Section
```
Layout: 2 kolom — [teks kiri 55%] [gambar kanan 45%]
Alignment: flex, align-items: center
Gap: 40px
```

#### Services / Cards Section
```
Layout: 3 kolom grid
grid-template-columns: repeat(3, 1fr)
gap: 24px
```

#### About Me (Discover Journey)
```
Layout: 2 kolom — [gambar kiri 45%] [teks kanan 55%]
Alignment: flex, align-items: center
Gap: 60px
```

#### Professional Skills
```
Layout: 3 kolom grid
grid-template-columns: repeat(3, 1fr)
gap: 32px vertikal, 40px horizontal
```

#### Get to Know Me
```
Layout: 2 kolom — [teks kiri 55%] [gambar kanan 45%]
Gap: 60px
```

#### Portfolio
```
Layout: 3 kolom grid
grid-template-columns: repeat(3, 1fr)
gap: 20px
2 baris: baris 1 (3 card), baris 2 (3 card)
```

---

## 7. COMPONENTS

### 7.1 Navigation (Sidebar Dots)

```
Posisi: Fixed, left side (left: 20px, center vertical)
Tipe: Vertical dot navigation (scroll indicator)
```

```css
.nav-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-dot-inactive);
  margin: 6px 0;
  transition: background 0.3s, transform 0.3s;
}

.nav-dot.active {
  background: var(--color-accent);
  transform: scale(1.3);
}
```

> **Catatan:** Navigation berupa dots vertikal di sisi kiri layar. Tidak ada top navbar konvensional yang terlihat. Dot berfungsi sebagai scroll indicator / section anchor.

---

### 7.2 Hero Section

**Layout:**
- Kiri: teks "HELLO, MY NAME IS" (kecil, muted), nama besar, subtitle typing, deskripsi, 2 tombol CTA, ikon sosial
- Kanan: foto bulat dalam lingkaran teal dengan backdrop warna hijau teal (`#1ABC9C`)

**Hero Image Circle:**
```css
.hero-image-wrapper {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--color-accent);  /* Teal fill */
  overflow: hidden;
  position: relative;
}
/* Titik dekoratif di sudut kanan bawah lingkaran */
.hero-dot-grid {
  position: absolute;
  right: -10px;
  bottom: -10px;
  color: var(--color-accent);
  opacity: 0.4;
}
```

**CTA Buttons:**
```css
/* Primary Button — filled */
.btn-primary {
  background: var(--color-accent);
  color: #fff;
  padding: 10px 24px;
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: var(--ls-button);
  border: none;
  box-shadow: var(--shadow-button);
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}
.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-1px);
}

/* Secondary Button — outline */
.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  padding: 10px 24px;
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 600;
  border: 1.5px solid var(--color-border-strong);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

**Social Icons:**
```css
.social-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: 14px;
  transition: border-color 0.2s, color 0.2s;
}
.social-icon:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
/* Ikon: Instagram, Twitter/X, Pinterest — horizontal row, gap: 8px */
```

---

### 7.3 Section Title Block

Digunakan di semua section heading.

```html
<div class="section-title-block">
  <p class="section-label">WHAT I DO</p>
  <p class="section-script">My Services</p>
</div>
```

```css
.section-title-block {
  text-align: center;
  margin-bottom: 48px;
}

.section-label {
  font-size: var(--fs-section-title);   /* 28px */
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: var(--ls-section-title);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.section-script {
  font-family: 'Dancing Script', cursive;
  font-size: var(--fs-section-script);  /* 20px */
  color: var(--color-accent);
  font-weight: 400;
}
```

---

### 7.4 Service Card

```css
.service-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);      /* 10px */
  padding: 24px 20px;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
}

.service-card:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-3px);
}

/* Label atas card */
.service-card-label {
  font-size: var(--fs-card-label);   /* 10px */
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: var(--ls-card-label);
  text-transform: uppercase;
  margin-bottom: 12px;
}

/* Judul card */
.service-card-title {
  font-size: var(--fs-card-title);   /* 16px */
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 10px;
}

/* Body card */
.service-card-body {
  font-size: var(--fs-body);         /* 13px */
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Link "See Pricing →" */
.service-card-link {
  font-size: 12px;
  color: var(--color-accent);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.2s;
}
.service-card-link:hover {
  gap: 8px;
}
```

**Slider Dots (bawah service cards):**
```css
.slider-dots {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: 24px;
}
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-dot-inactive); }
.dot.active { 
  width: 24px; 
  border-radius: var(--radius-full); 
  background: var(--color-accent); 
}
```

---

### 7.5 About Section (Discover My Creative Journey)

```css
/* Image kiri dengan efek green border/frame */
.about-image-wrapper {
  position: relative;
  width: 420px;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.about-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

/* Frame teal di belakang image (offset kanan-bawah) */
.about-image-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  border: 3px solid var(--color-accent);
  transform: translate(10px, 10px);
  z-index: -1;
}
```

```css
/* Teks kanan */
.about-text .tag {
  font-size: 10px;
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.about-text h2 {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin-bottom: 16px;
}

/* "My" dan "Creative" berwarna accent */
.about-text h2 .highlight {
  color: var(--color-accent);
}

/* Accordion-style list item */
.about-list-item {
  border-bottom: 1px solid var(--color-border);
  padding: 14px 0;
}

.about-list-item h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 6px;
}

.about-list-item p {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}
```

---

### 7.6 Skill Bar Component

```css
.skill-item {
  margin-bottom: 28px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.skill-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.skill-percent {
  font-size: var(--fs-skill-percent);  /* 14px */
  font-weight: 700;
  color: var(--color-accent);
}

.skill-bar-track {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: var(--radius-full);
  transition: width 1s ease;
}

/* Deskripsi di bawah bar */
.skill-description {
  font-size: 11px;
  color: var(--color-text-muted);
  margin-top: 8px;
  line-height: 1.5;
}
```

**Data Skills:**
| Skill | Persentase |
|---|---|
| Figma | 90% |
| CSS | 85% |
| Laravel | 80% |
| Canva | 85% |
| HTML | 70% |
| UI/UX Design | 75% |

---

### 7.7 "Get to Know Me" Section

Layout: Teks kiri + Foto kanan (foto dengan posisi casual/lifestyle, ada badge nama di pojok foto).

```css
.know-me-image {
  position: relative;
  width: 380px;
  height: 480px;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

/* Badge nama di foto */
.know-me-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(26,188,156,0.9);
  color: #fff;
  padding: 8px 14px;
  border-radius: var(--radius-md);
  font-size: 12px;
  font-weight: 700;
}
```

**CTA Buttons di section ini:**
- Tombol ghost/outline (kiri): `See More`
- Tombol filled teal (kanan): `Contact Me`

---

### 7.8 Portfolio Card

```css
.portfolio-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

/* Gambar thumbnail */
.portfolio-card-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

/* Konten card bawah */
.portfolio-card-content {
  padding: 16px;
}

.portfolio-card-category {
  font-size: 10px;
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.portfolio-card-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.portfolio-card-desc {
  font-size: 12px;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 14px;
}

.portfolio-card-link {
  font-size: 12px;
  color: var(--color-accent);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}
```

**Filter Tab Portfolio:**
```css
.portfolio-filter {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
}

.filter-btn {
  padding: 6px 16px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn.active {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
}
```

---

### 7.9 Footer

Layout: Multi-kolom (4 kolom), dark background, border top tipis accent.

```css
footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 60px 0 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

/* Kolom 1: Brand */
.footer-brand h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 12px;
}
.footer-brand p {
  font-size: 12px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

/* Sosial icons baris */
.footer-social {
  display: flex;
  gap: 8px;
}

/* Kolom 2-4: Link list */
.footer-col h4 {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col li {
  margin-bottom: 10px;
}

.footer-col a {
  font-size: 12px;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: var(--color-accent);
}

/* Copyright bar */
.footer-bottom {
  border-top: 1px solid var(--color-border);
  margin-top: 40px;
  padding-top: 20px;
  font-size: 11px;
  color: var(--color-text-muted);
  text-align: center;
}
```

**Footer Columns:**
- Kolom 1: Nama brand + deskripsi singkat + social icons (Facebook, Instagram, Twitter, Pinterest, WhatsApp)
- Kolom 2: **Quick Links** — Home, About, Services, Portfolio, Contact
- Kolom 3: **Services** — Brand Identity, Marketing Materials, Web & Digital Design, dll
- Kolom 4: **Resources** — link pendukung

---

## 8. DESIGN TOKENS — CSS VARIABLES (FULL)

```css
:root {
  /* Colors */
  --color-bg-primary: #0D1F1C;
  --color-bg-secondary: #112420;
  --color-bg-card: #152B26;
  --color-bg-elevated: #1A3530;
  --color-accent: #1ABC9C;
  --color-accent-hover: #17A589;
  --color-accent-light: rgba(26, 188, 156, 0.15);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B0BEC5;
  --color-text-muted: #6B8A85;
  --color-text-accent: #1ABC9C;
  --color-border: rgba(26, 188, 156, 0.2);
  --color-border-strong: rgba(26, 188, 156, 0.5);
  --color-shadow: rgba(0, 0, 0, 0.4);
  --color-dot-active: #1ABC9C;
  --color-dot-inactive: #3D6B63;

  /* Typography */
  --font-primary: 'Poppins', sans-serif;
  --font-script: 'Dancing Script', cursive;
  --fs-hero-name: 3rem;
  --fs-hero-sub: 1.125rem;
  --fs-section-title: 1.75rem;
  --fs-section-script: 1.25rem;
  --fs-card-title: 1rem;
  --fs-card-label: 0.625rem;
  --fs-body: 0.8125rem;
  --fs-small: 0.6875rem;
  --fs-skill-percent: 0.875rem;
  --ls-section-title: 0.12em;
  --ls-card-label: 0.15em;
  --ls-button: 0.05em;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 8px 32px rgba(26, 188, 156, 0.15);
  --shadow-button: 0 4px 16px rgba(26, 188, 156, 0.3);
  --shadow-image: 0 12px 40px rgba(0, 0, 0, 0.5);
  --shadow-float: 0 20px 60px rgba(0, 0, 0, 0.6);

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
  --transition-slow: 0.4s ease;
}
```

---

## 9. SECTION STRUCTURE (Urutan dari Atas ke Bawah)

```
1. HERO SECTION
   ├── Left: greeting label, hero name, subtitle typing, desc, CTA buttons, social icons
   └── Right: circular teal photo frame

2. WHAT I DO (Services)
   ├── Section title block
   ├── 3-column card grid (service cards)
   └── Slider dots

3. ABOUT ME — Discover Journey
   ├── Left: photo with teal border-frame effect
   └── Right: tag label, heading, accordion text items

4. PROFESSIONAL SKILLS
   ├── Section title block
   └── 3-column skill bars (6 skills total)

5. GET TO KNOW ME
   ├── Left: tag label, heading, accordion text, 2 CTA buttons
   └── Right: lifestyle photo with name badge

6. PORTFOLIO
   ├── Section title block
   ├── Filter tabs (All, dll)
   └── 3x2 portfolio card grid

7. FOOTER
   ├── 4-column grid (brand + 3 link columns)
   └── Copyright bar
```

---

## 10. VISUAL IDENTITY & CIRI KHAS DESAIN

| Ciri | Deskripsi |
|---|---|
| **Dark Mode Only** | Seluruh halaman gelap, tidak ada light mode |
| **Accent Teal Konsisten** | `#1ABC9C` digunakan pada semua elemen interaktif & highlight teks |
| **Heading Split Color** | Kata kunci dalam heading berwarna teal (contoh: "Al **Evan**", "**My** Creative") |
| **Script Subtitle** | Setiap section title punya italic script font di bawahnya sebagai estetika dekoratif |
| **Foto Bulat Teal** | Hero image dalam circle dengan background warna accent teal penuh |
| **Progress Bar Tipis** | Skill bar sangat tipis (4px), minimalis |
| **Label All-Caps** | Semua label kecil menggunakan `text-transform: uppercase` + `letter-spacing` lebar |
| **Border Aksen Transparan** | Border card menggunakan warna accent dengan opacity rendah untuk kesan halus |
| **Hover: Lift + Glow** | Semua card hover naik `translateY(-3px)` disertai shadow teal halus |
| **Section Alternation** | Setiap section bergantian antara layout kiri-kanan (zigzag) |
| **Dot Nav Sidebar** | Navigation menggunakan dot vertikal di kiri, bukan top navbar |
| **CTA Dua Varian** | Selalu ada tombol filled teal + tombol outline/ghost berpasangan |
| **Dekoratif Dot Grid** | Titik-titik dekoratif kecil di sekitar foto sebagai ornamen |
| **Konsistensi Font Weight** | Heading: 700, Sub-heading: 600, Body: 400 — tidak pernah campur |

---

## 11. RESPONSIVE BREAKPOINTS (Rekomendasi)

```css
/* Desktop */
@media (min-width: 1024px) { /* default — semua section 2 kolom / 3 kolom */ }

/* Tablet */
@media (max-width: 1023px) {
  .hero, .about, .know-me { flex-direction: column; }
  .service-grid { grid-template-columns: repeat(2, 1fr); }
  .skill-grid { grid-template-columns: repeat(2, 1fr); }
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

/* Mobile */
@media (max-width: 640px) {
  .service-grid { grid-template-columns: 1fr; }
  .portfolio-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
  .nav-dots { display: none; }
  :root { --fs-hero-name: 2rem; --fs-section-title: 1.4rem; }
}
```

---

## 12. ANIMASI & INTERAKSI

```css
/* Typing effect pada subtitle hero */
.typing-cursor::after {
  content: '|';
  animation: blink 0.8s step-start infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}

/* Skill bar fill on scroll */
.skill-bar-fill {
  width: 0%;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.skill-bar-fill.animated {
  width: var(--skill-value); /* Set via inline style */
}

/* Card entrance on scroll */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card-animate {
  animation: fadeInUp 0.5s ease forwards;
}

/* Button hover glow */
.btn-primary:hover {
  box-shadow: 0 6px 24px rgba(26, 188, 156, 0.5);
}
```

---

*Design System ini dibuat berdasarkan analisis visual dari desain Al Evan Diamantoro Personal Portfolio. Semua token dan nilai telah dikalibrasi untuk menghasilkan slicing yang pixel-perfect dan konsisten di seluruh halaman.*
