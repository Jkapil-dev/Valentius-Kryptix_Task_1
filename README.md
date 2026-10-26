# FocusFlow — Premium Productivity SaaS Landing Page

> **"Make space for your best work."**

FocusFlow is a modern, calm, and intelligent productivity workspace built for students, software developers, freelancers, and productivity-conscious professionals to organize tasks, plan goals, and protect their focus in one unified interface.

Designed as a high-conversion, production-ready SaaS marketing website, FocusFlow demonstrates modern web development standards, responsive design, accessibility best practices, and interactive micro-experiences.

---

## ⚡ Live Features & Highlights

- **Interactive Hero Dashboard**:
  - **Live Task Management**: Check and uncheck real-time tasks with instant visual strikethrough and status updates.
  - **Dynamic Progress Indicator**: Automatically recalculates completion percentages and animates the progress bar as tasks change.
  - **Interactive Focus Timer**: Functional 25-minute Deep Work sprint timer with play/pause states and active status indicators.
  - **Weekly Flow Chart**: Visual breakdown of focus hours across the week.
  - **Quick Task Entry**: Add custom focus tasks on the fly with instant reactivity.
- **Accessible Sticky Navigation**:
  - Responsive layout with smooth anchor scrolling to all page sections.
  - Mobile hamburger menu with smooth toggle, keyboard navigation, and auto-dismiss on link selection.
- **Cohesive Design System**:
  - Curated, calm color palette using warm off-whites, deep navy, vivid indigo, and fresh lime accents.
  - Modern typography pairing: **Manrope** for bold headlines and **Inter** for readable body text.
- **7 Complete Landing Page Sections**:
  1. **Sticky Navbar**: Brand logo, navigation links, and primary CTA.
  2. **Hero**: High-impact copy, trust badges, and interactive product dashboard preview.
  3. **Features & Benefits**: 4 core cards with interactive mini-previews (*Smart Task Planning*, *Focus Sessions*, *Goal Tracking*, *One Unified Workspace*).
  4. **Social Proof**: Sample testimonials from students, freelancers, and software engineers, paired with core benefit badges.
  5. **Transparent Pricing**: Free (₹0), Pro (₹299/mo recommended), and Team (₹799/mo) with full feature comparisons.
  6. **Final CTA**: High-contrast navy closing section with risk-free guarantees.
  7. **Footer**: Brand information, operational status badge, product/company links, social icons, and dynamic copyright year.
- **Accessible Interactive Demo Modal**:
  - Opens on CTA button clicks to demonstrate user onboarding without collecting personal data or requiring authentication.
  - Includes Escape key dismiss, backdrop click dismissal, and focus management.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component-driven UI architecture and declarative state |
| **Vite 8** | Lightning-fast build tooling and hot module replacement (HMR) |
| **TypeScript** | Type safety, maintainability, and clean data contracts |
| **Tailwind CSS v4** | Modern utility-first styling with custom theme tokens |
| **Lucide React** | Clean, accessible iconography |
| **Google Fonts** | Manrope & Inter web typography |

---

## 🎨 Design System

| Element | Specification | Hex / Value |
| :--- | :--- | :--- |
| **Primary Background** | Warm Off-White | `#F8F8F5` |
| **Main Text** | Deep Navy | `#17212B` |
| **Primary Brand** | Vivid Indigo | `#635BFF` |
| **Accent Color** | Fresh Lime | `#C8F169` |
| **Surface Cards** | Clean White | `#FFFFFF` |
| **Muted Text** | Slate Gray | `#64748B` |
| **Borders** | Subtle Cool Gray | `#E2E8F0` |
| **Headings Font** | Manrope | Sans-serif (600, 700, 800) |
| **Body Font** | Inter | Sans-serif (400, 500, 600, 700) |

---

## 📁 Project Structure

```text
Task_1/
├── public/
│   ├── favicon.svg             # Branded SVG favicon (Indigo + Lime motif)
│   └── icons.svg
├── src/
│   ├── assets/                 # Static illustrations & icons
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx            # Hero section with copy & dashboard container
│   │   ├── DashboardPreview.tsx# Interactive dashboard with live tasks & timer
│   │   ├── Features.tsx        # 4 feature cards with custom mini-previews
│   │   ├── Testimonials.tsx    # Benefit tags and persona testimonial cards
│   │   ├── Pricing.tsx         # 3-tier pricing comparison (Free, Pro, Team)
│   │   ├── FinalCTA.tsx        # High-contrast closing call-to-action
│   │   ├── Footer.tsx          # Multi-column footer with dynamic copyright
│   │   └── DemoModal.tsx       # Accessible prototype onboarding dialog
│   ├── types.ts                # TypeScript data interfaces
│   ├── App.tsx                 # Root application assembling all 7 sections
│   ├── main.tsx                # React root mount
│   └── index.css               # Tailwind CSS v4 design tokens & base rules
├── index.html                  # SEO tags, OpenGraph metadata, and Google Fonts
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite & Tailwind CSS plugins
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Jkapil-dev/Valentius-Kryptix_Task_1.git
cd Valentius-Kryptix_Task_1
npm install
```

### 2. Run Development Server

Start the local Vite dev server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/`.

### 3. Production Build

Create an optimized static production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### 4. Code Quality & Linting

Run Oxlint to check code quality:

```bash
npm run lint
```

---

## 🌐 Deployment

The project builds standard static HTML, CSS, and JS assets in the `dist/` directory, ready for deployment to any static hosting platform:

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Deploy to Netlify

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

---

## ♿ Accessibility & Standards

- **Semantic HTML5**: Structured with `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` landmark tags.
- **Keyboard Navigation**: Logical tab order, visible focus rings (`focus-visible`), and Escape key dismissal for modals.
- **Aria Attributes**: Meaningful `aria-label`, `aria-expanded`, `aria-checked`, and `role` attributes on all interactive controls.
- **Motion Accessibility**: Includes `@media (prefers-reduced-motion: reduce)` rules to respect operating system motion preferences.

---

## 📄 License & Notes

FocusFlow is a fictional SaaS concept designed for portfolio showcase and demonstration purposes. All company names, prices, and testimonials represent illustrative sample prototypes.
