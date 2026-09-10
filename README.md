# Alfi Shahriyar — UI/UX Designer & Front-End Developer Portfolio

> **Professional Portfolio & Case Study Showcase**  
> Designed and engineered to demonstrate human-centered interface design, conversion rate optimization (CRO), heuristic audits, design systems, and modern front-end craftsmanship (React, Next.js, TypeScript, Tailwind CSS).

---

## 🧭 Overview & Philosophy

This portfolio is built to demonstrate design maturity for design agencies, product studios, and engineering teams. Rather than presenting generic developer templates or unverified claims, this repository showcases genuine design thinking:

1. **The Computer Science & Interface Bridge**: As a Computer Science student and developer transitioning into UI/UX and web design, I bridge engineering feasibility with aesthetic refinement. Understanding CSS layout algorithms, browser rendering performance, and component state enables me to design Figma interfaces that are not only visually balanced, but also realistic, performant, and frictionless to build.
2. **Form Follows Mental Models**: Visual hierarchy is designed around cognitive load, scanning habits (F-pattern), and user anxiety triggers rather than arbitrary decoration.
3. **Accessibility as a First Principle**: Strict compliance with WCAG 2.1 AA/AAA contrast guidelines, semantic HTML landmarks, keyboard navigation, and mobile thumb-zone ergonomics.
4. **Authenticity & Integrity**: All self-initiated projects are explicitly labeled as concept redesigns or architectural case studies. No fictional commercial clients, fabricated employment histories, or unverified statistics are portrayed.

---

## 🛠️ Unified Configuration File

All project details, personal information, social links, and case study narratives are centrally maintained in **`src/config/portfolioConfig.ts`**. To update links, projects, or bio copy, modify this single file:

```typescript
// src/config/portfolioConfig.ts
export const PORTFOLIO_CONFIG = {
  name: 'Alfi Shahriyar',
  title: 'UI/UX Designer & Front-End Developer',
  contact: {
    email: 'alfishahriyar242@gmail.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    figma: 'https://figma.com',
  },
  projects: [
    // Apex Roofing, FlowDesk AI, NovaCare, ClearFlow Plumbing
  ]
};
```

---

## 📁 Featured Projects & Case Studies

### 1. ClearFlow Plumbing Redesign
* **Project Type**: UI/UX Case Study • Conversion Optimization (CRO)
* **Tools**: Figma, Heuristic Evaluation, React, TypeScript, Tailwind CSS
* **Concept Context**: A comprehensive heuristic audit and responsive redesign for an outdated local trade business.
* **Core Solutions**:
  * Dual-pathway conversion architecture (24/7 emergency hotline vs. 60-second quote).
  * Interactive 60-Second Instant Quote Calculator with live price range and technician dispatch confirmation.
  * Interactive Before/After craftsmanship drag slider.
  * Live zip-code coverage & ETA checker.
  * Interactive 2008 legacy website explorer featuring 8 inspectable heuristic pins.

### 2. Apex Roofing
* **Project Type**: Concept Redesign • High-Conversion Trade Website
* **Tools**: Figma, Responsive Design, Tailwind CSS, TypeScript
* **Concept Context**: Solving contractor quote abandonment and price opacity in high-ticket residential replacements ($8,000–$25,000).
* **Core Solutions**:
  * Interactive Roof Cost Calculator factoring in pitch (low, standard, steep) and material grades (architectural asphalt, standing seam metal, tile).
  * 24-hour storm damage emergency tarp dispatch hotline.
  * High-contrast architectural visual language with terracotta orange conversion accents.

### 3. FlowDesk AI
* **Project Type**: Product Design • B2B SaaS Workflow Dashboard
* **Tools**: Figma, Design Systems, React, TypeScript, Tailwind CSS
* **Concept Context**: De-cluttering cognitive overload for teams orchestrating multi-model prompt chains.
* **Core Solutions**:
  * Modular 3-pane bento grid: History & Pipelines, Synchronized Prompt Canvas, Parameter Telemetry.
  * Keyboard-first command palette (`Cmd+K`) navigation.
  * Real-time token velocity speedometer and cost-per-thousand telemetry HUD.
  * Low-fatigue monochromatic dark mode.

### 4. NovaCare
* **Project Type**: UI/UX Case Study • Healthcare & Patient Experience (PX)
* **Tools**: Figma, WCAG AAA Accessibility, User Journey Mapping, React
* **Concept Context**: Patient-first telemedicine booking designed to eliminate booking anxiety for elderly and low-vision patients.
* **Core Solutions**:
  * Plain-language symptom triage search engine.
  * Strict WCAG 2.1 AAA contrast and 18px base typographic scale.
  * Upfront insurance co-pay confirmation ($20.00 confirmed) before booking.
  * Zero password requirement: 1-tap SMS/Email video consultation links.

---

## 📑 Case Study Structure

Each project modal and case study page follows a standardized, rigorous design methodology:

1. **Problem Statement**: Root cause analysis and emotional mental models.
2. **Goal & Target Objectives**: Quantifiable goals for conversion and usability.
3. **Design Process**: Step-by-step milestones and concrete deliverables.
4. **Wireframe Approach & IA**: Zoning rationale and visual layout hierarchy.
5. **Design System**: Typography scale, semantic color palette with hex values and contrast roles.
6. **Final Design Highlights**: Key interactive features and solutions.
7. **Responsive Design**: Mobile thumb-zone ergonomics and breakpoint adaptations.
8. **Key Design Decisions**: In-depth explanations of 5+ critical decisions detailing **Why Made**, **Alternative Considered**, and **Trade-off**.
9. **Outcome & Impact**: Measured or projected conversion improvements.

---

## 🧰 Skills Inventory

* **UI/UX & Visual Design**: Figma (Components, Auto Layout, Variants, Variables), Framer, Heuristic Audits, Wireframing, Responsive Design, Design Systems.
* **Front-End Engineering**: HTML5 (Semantic & Accessible), CSS3 & Tailwind CSS, JavaScript (ES6+), TypeScript, React, Next.js.
* **Workflow & Collaboration**: Git, GitHub, Version Control, Pull Requests.

---

## ♿ Accessibility & Performance

* **WCAG 2.1 AA/AAA**: Contrast ratios exceeding 4.5:1 for body copy and 3:1 for large display text.
* **Keyboard Navigation**: Native `tabindex` flows, visible focus rings (`focus-visible:ring-2`), and `Escape` key listeners on all modals.
* **Semantic HTML**: Structural landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **Zero Dependency Bloat**: Lightweight component-driven architecture with zero extraneous packages.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Lint and check TypeScript types
npm run lint

# Compile production build
npm run build
```

---

## 📄 License

This portfolio repository is open-sourced under the **Apache-2.0** license.
