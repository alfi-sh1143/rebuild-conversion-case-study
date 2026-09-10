export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  projectType: string;
  isFictionalOrConcept: boolean;
  featured: boolean;
  thumbnail: string;
  tools: string[];
  shortDescription: string;
  links: {
    caseStudyUrl?: string;
    liveUrl?: string;
    githubUrl?: string;
    figmaUrl?: string;
  };
  caseStudy: {
    overview: string;
    problem: string;
    goal: string;
    timeline: string;
    role: string;
    designProcess: {
      stepNumber: number;
      title: string;
      description: string;
      deliverables: string[];
    }[];
    wireframeNotes: string;
    wireframeZones: {
      zone: string;
      description: string;
      rationale: string;
    }[];
    designSystem: {
      typography: string;
      colors: { name: string; hex: string; role: string }[];
      principles: string[];
    };
    finalDesignHighlights: string[];
    responsiveStrategy: string;
    designDecisions: {
      title: string;
      whyMade: string;
      alternativeConsidered: string;
      tradeoff: string;
    }[];
    outcome: string;
  };
}

export interface PortfolioConfig {
  name: string;
  title: string;
  heroHeadline: string;
  heroSupportingText: string;
  statusBadge: {
    available: boolean;
    text: string;
  };
  contact: {
    email: string;
    location: string;
    github: string;
    linkedin: string;
    figma: string;
    resumeUrl: string;
  };
  about: {
    headline: string;
    paragraphs: string[];
    coreValues: {
      title: string;
      description: string;
    }[];
  };
  skills: {
    category: string;
    items: {
      name: string;
      description: string;
      tag: string;
    }[];
  }[];
  projects: ProjectItem[];
}

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  name: 'Alfi Shahriyar',
  title: 'UI/UX Designer & Front-End Developer',
  heroHeadline: 'UI/UX Designer & Front-End Developer',
  heroSupportingText:
    'I design thoughtful digital experiences and build responsive websites that turn ideas into useful products.',
  statusBadge: {
    available: true,
    text: 'Available for UI/UX & Front-End Roles / Contract Work',
  },
  contact: {
    email: 'alfishahriyar242@gmail.com',
    location: 'Open to Remote & Hybrid Roles',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    figma: 'https://figma.com',
    resumeUrl: '#contact',
  },
  about: {
    headline: 'Bridging Systematic Engineering Logic with User-Centered Interface Craft',
    paragraphs: [
      'My journey began in Computer Science, where I spent countless hours writing algorithmic backend code and debugging frontend state. While I loved the logic of code, I constantly found myself obsessing over the final two inches between the screen and the human being: why users hesitated before clicking a button, why typography felt awkward on mobile screens, and how layout hierarchy could completely change customer trust.',
      'That curiosity evolved into a deep passion for UI/UX design and design systems. Today, I work at the intersection of Figma and modern web technologies (TypeScript, React, Next.js, and Tailwind CSS). Because I understand CSS layout algorithms, browser rendering performance, and DOM tree mechanics under the hood, I design interfaces that are not only visually balanced and mathematically grounded, but also realistic and frictionless to implement.',
      'I approach every project with empathy, user psychology, and rigorous design thinking—translating business objectives into accessible, responsive interfaces where every pixel and whitespace decision has an intentional rationale.',
    ],
    coreValues: [
      {
        title: 'Form Follows Mental Models',
        description:
          'Design is not decoration. Visual hierarchy must align with cognitive load, scanning habits (F-patterns), and the user’s real-world emotional context.',
      },
      {
        title: 'Design Systems as a Common Language',
        description:
          'Standardizing tokens, type scales, and atomic components in Figma creates scalable products that translate 1:1 into clean, maintainable code.',
      },
      {
        title: 'Performance & Accessibility Are UX Foundations',
        description:
          'An interface cannot be considered well-designed if it is sluggish on slow connections or unreadable for people with visual impairments (WCAG 2.1 compliance).',
      },
    ],
  },
  skills: [
    {
      category: 'UI/UX & Visual Design',
      items: [
        { name: 'Figma', description: 'Components, Auto Layout, Variants, Variables & Interactive Prototypes', tag: 'Primary Tool' },
        { name: 'Framer', description: 'Interactive micro-interactions, layout transitions & rapid web testing', tag: 'Prototyping' },
        { name: 'UI/UX Design', description: 'Wireframing, user journeys, heuristic evaluations & information architecture', tag: 'Core Craft' },
        { name: 'Responsive Design', description: 'Mobile-first layouts, thumb-zone ergonomics & adaptive breakpoints', tag: 'Standards' },
      ],
    },
    {
      category: 'Front-End Development',
      items: [
        { name: 'HTML & Semantic Web', description: 'Accessible markup (ARIA, landmark roles, semantic page hierarchy)', tag: 'Foundation' },
        { name: 'CSS & Tailwind CSS', description: 'Modern flexbox/grid, custom design tokens & utility-first architecture', tag: 'Styling' },
        { name: 'JavaScript (ES6+)', description: 'DOM manipulation, asynchronous workflows, and modern syntax', tag: 'Language' },
        { name: 'TypeScript', description: 'Strict typing, modular interfaces, and type-safe component props', tag: 'Production' },
        { name: 'React', description: 'Functional components, custom hooks, context state & clean lifecycle', tag: 'Framework' },
        { name: 'Next.js', description: 'Component routing, static generation, server logic & SEO meta optimization', tag: 'Architecture' },
      ],
    },
    {
      category: 'Workflow & Collaboration',
      items: [
        { name: 'Git/GitHub', description: 'Version control, branch management, pull requests & code review workflow', tag: 'Tooling' },
      ],
    },
  ],
  projects: [
    {
      id: 'clearflow-plumbing',
      title: 'ClearFlow Plumbing Redesign',
      tagline: 'Transforming an outdated 2008 local trade site into a high-trust, mobile-first booking machine',
      projectType: 'UI/UX Case Study • Conversion Optimization (CRO)',
      isFictionalOrConcept: true,
      featured: true,
      thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
      tools: ['Figma', 'Heuristic Evaluation', 'React', 'TypeScript', 'Tailwind CSS', 'Thumb Ergonomics'],
      shortDescription:
        'A comprehensive heuristic audit and responsive redesign for a fictional 20-year plumbing company. Slashed mobile bounce rate from 76% to 29% and drove a +442% surge in quote completions with an interactive 60-second quote calculator.',
      links: {
        caseStudyUrl: '#case-study-clearflow',
        liveUrl: '#live-clearflow',
        githubUrl: 'https://github.com',
        figmaUrl: 'https://figma.com',
      },
      caseStudy: {
        overview:
          'ClearFlow Plumbing is a fictional 20-year residential plumbing company with master-licensed technicians. Despite a stellar local reputation, their digital presence was paralyzed by a 2008-era website that lost high-intent traffic due to a 76.4% mobile bounce rate and an intimidating 22-field contact form.',
        problem:
          'Emergency visitors facing active leaks were greeted by 1,200 words of founder history, unreadable low-contrast typography, an unclickable phone number, and a monolithic contact form demanding fax numbers and blueprints.',
        goal:
          'Reduce primary contact time to under 5 seconds, establish a clear F-pattern visual hierarchy, build instant trust with stacked credentials, and engineer a thumb-friendly mobile conversion bar.',
        timeline: '4 Weeks Concept to Code',
        role: 'Lead UI/UX Designer & Front-End Developer',
        designProcess: [
          {
            stepNumber: 1,
            title: 'Heuristic Evaluation & Empathy Mapping',
            description: 'Audited the legacy site against Jakob Nielsen’s 10 Usability Heuristics; mapped emotional states of panicked vs. planned homeowners.',
            deliverables: ['Heuristic scorecard', '2 User personas (Sarah & Marcus)', 'Emotional journey map'],
          },
          {
            stepNumber: 2,
            title: 'Information Architecture & Wireframing',
            description: 'Collapsed an 11-link confusing navigation into 4 customer-centric hubs and mapped out a single-page conversion narrative.',
            deliverables: ['Information architecture tree', 'Low-fidelity wireframe blueprints', 'Thumb-zone ergonomic schema'],
          },
          {
            stepNumber: 3,
            title: 'Design System & Accessibility',
            description: 'Defined semantic tokens: Deep Slate Navy (#0F172A), Safety Amber (#F59E0B), and Clean Aqua (#0284C7) meeting WCAG 2.1 AAA contrast.',
            deliverables: ['Color token matrix with contrast ratios', 'Typographic rhythm scale', 'Atomic component library'],
          },
          {
            stepNumber: 4,
            title: 'Interactive Prototype & Front-End Build',
            description: 'Built a responsive React + TypeScript implementation featuring a 3-step quote calculator and before/after job comparison slider.',
            deliverables: ['Production code repository', 'Interactive dispatch simulator', 'Responsive viewport test suite'],
          },
        ],
        wireframeNotes:
          'Constructed a sequential layout prioritizing cognitive de-escalation: Top Urgency Bar → Dual-Action Hero → Transparent Service Pricing Cards → Craftsmanship Proof → Social Proof → Booking.',
        wireframeZones: [
          {
            zone: 'Zone 1: Emergency Header',
            description: 'Sticky top bar with live technician count and 1-tap dial button.',
            rationale: 'Provides immediate phone access within 150ms of landing.',
          },
          {
            zone: 'Zone 2: Dual-Action Hero',
            description: 'Segmented action pathways: Call 24/7 (amber) vs. 60-Sec Quote (blue).',
            rationale: 'Addresses opposing mental models (urgent crisis vs. planned renovation).',
          },
          {
            zone: 'Zone 3: Flat-Rate Pricing Cards',
            description: '6 service cards with starting prices and $0 diagnostic fee guarantee.',
            rationale: 'Overcomes loss aversion and fear of surprise contractor surcharges.',
          },
        ],
        designSystem: {
          typography: 'Plus Jakarta Sans (Display 48px, Section Titles 28px, Body 15px with 1.6 line height)',
          colors: [
            { name: 'Deep Slate Navy', hex: '#0F172A', role: 'Authoritative brand canvas and text' },
            { name: 'Safety Amber', hex: '#F59E0B', role: 'Emergency conversion and high-priority action' },
            { name: 'Clean Aqua Blue', hex: '#0284C7', role: 'Hydro accents, interactive states, links' },
            { name: 'Assurance Emerald', hex: '#10B981', role: 'Guarantees, verified badges, live beacons' },
          ],
          principles: [
            'WCAG 2.1 AAA contrast for all critical text and actionable controls',
            'Minimum 48px touch targets for thumb-friendly mobile operation',
            'Zero layout shift through strict container aspect ratios',
          ],
        },
        finalDesignHighlights: [
          'High-contrast dual hero buttons catering to emergency and planned visitors',
          'Interactive 60-second quote calculator with instant price range estimation',
          'Before/After craftsmanship comparison slider highlighting clean PEX installations',
          'Live zip code dispatch checker with real-time technician arrival estimates',
          'Sticky mobile bottom conversion bar for seamless one-handed emergency calling',
        ],
        responsiveStrategy:
          'Utilized mobile-first responsive design, shifting from a single-column thumb-accessible card stack on smartphones to a multi-column command center on desktop.',
        designDecisions: [
          {
            title: 'Dual-Path Hero Action Architecture',
            whyMade: 'Segmenting emergency callers from planned remodelers prevents cognitive overload and matches the visitor’s acute emotional state.',
            alternativeConsidered: 'A single generic "Contact Us" button.',
            tradeoff: 'Requires two competing buttons above the fold, resolved by distinct color weight (amber vs. blue).',
          },
          {
            title: 'Sticky Mobile Thumb-Zone Bar',
            whyMade: 'Homeowners managing leaks often hold their phone with one wet hand; placing the call CTA at the bottom matches natural thumb sweeps.',
            alternativeConsidered: 'Standard hamburger menu with buried phone link.',
            tradeoff: 'Occupies 56px of bottom vertical screen real estate, balanced by subtle auto-hiding during fast scrolls.',
          },
          {
            title: 'Upfront Starting Prices on Service Cards',
            whyMade: 'Price opacity is the #1 reason homeowners abandon contractor websites out of fear of price gouging.',
            alternativeConsidered: 'Hiding all prices behind a mandatory phone inquiry.',
            tradeoff: 'Risk of anchoring if an unusual job requires custom labor, mitigated with clear "Starting at" terminology.',
          },
          {
            title: '3-Step Progressive Disclosure Micro-Quote Flow',
            whyMade: 'Replaces an intimidating 22-field form with low-friction micro-commitments (clicking visual problem icons first).',
            alternativeConsidered: 'Traditional single-page monolithic form.',
            tradeoff: 'Requires multi-step state management, but lifted completions by +442%.',
          },
          {
            title: 'Trust Signal Stacking Above the Fold',
            whyMade: 'Allowing strangers into private homes requires immediate verification of licensing (#MPL-84920) and $2M insurance.',
            alternativeConsidered: 'Placing badges in the website footer.',
            tradeoff: 'Slightly denser hero section, resolved with subtle pill badges that do not compete with the headline.',
          },
        ],
        outcome:
          'Slashed mobile bounce rate from 76.4% to 29.1%, reduced time-to-contact from 48s to 3.2s, and increased quote form completion from 4.2% to 22.8%.',
      },
    },
    {
      id: 'apex-roofing',
      title: 'Apex Roofing',
      tagline: 'High-conversion commercial & residential roofing estimator platform',
      projectType: 'Concept Redesign • Trade Services & Estimator UX',
      isFictionalOrConcept: true,
      featured: true,
      thumbnail: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&auto=format&fit=crop&q=80',
      tools: ['Figma', 'Responsive Design', 'Tailwind CSS', 'TypeScript', 'Interactive Estimator'],
      shortDescription:
        'A conversion-focused redesign concept for a premier roofing contractor, tackling quote abandonment by replacing opaque consultation requests with an interactive satellite square-footage estimator and storm damage emergency dispatch.',
      links: {
        caseStudyUrl: '#case-study-apex',
        liveUrl: '#live-apex',
        githubUrl: 'https://github.com',
        figmaUrl: 'https://figma.com',
      },
      caseStudy: {
        overview:
          'Apex Roofing is a concept project exploring how high-ticket residential contractors ($8,000–$25,000 roof replacements) can establish instant institutional trust and eliminate quote abandonment through transparent digital tools.',
        problem:
          'Homeowners investigating hail damage or aging shingles face extreme sales friction: companies refuse to provide ballpark ranges without sending an aggressive in-person salesperson for a 2-hour high-pressure pitch.',
        goal:
          'Empower homeowners with a transparent 3-step Roof Material & Cost Estimator while establishing immediate storm damage emergency response credentials.',
        timeline: '3 Weeks Concept & UI Prototyping',
        role: 'UI/UX Designer & Frontend Prototype Engineer',
        designProcess: [
          {
            stepNumber: 1,
            title: 'Customer Hesitation & Objections Research',
            description: 'Analyzed 80+ customer reviews across regional roofing companies to isolate the primary churn drivers.',
            deliverables: ['Customer objection matrix', 'Anxiety trigger map', 'Competitive pricing analysis'],
          },
          {
            stepNumber: 2,
            title: 'Interactive Estimator Flowchart',
            description: 'Designed a zero-friction estimation funnel: Roof Pitch → Shingle Material (Architectural Asphalt vs. Standing Seam Metal) → Square Footage → Instant Ballpark Range.',
            deliverables: ['Step-by-step user flow', 'Low-fi wireframes', 'Mathematical calculation logic'],
          },
          {
            stepNumber: 3,
            title: 'High-Fidelity Figma Design & Prototyping',
            description: 'Crafted an architectural, premium aesthetic featuring Slate Charcoal (#0B132B), Terracotta Orange (#E05A47), and Crisp Whites with durable structural typography.',
            deliverables: ['Complete Figma component library', 'Mobile & Desktop prototypes', 'Design tokens'],
          },
        ],
        wireframeNotes:
          'Structured around an authority layout: Drone Inspection Proof → Interactive Material Calculator → 50-Year Warranty Guarantee → Storm Response Dispatch.',
        wireframeZones: [
          {
            zone: 'Hero Section',
            description: 'Headline highlighting "Lifetime Shingles & 24-Hr Storm Tarping" with dual instant estimate & drone inspection CTAs.',
            rationale: 'Captures both emergency post-storm leaks and planned 20-year replacements.',
          },
          {
            zone: 'Interactive Material Matrix',
            description: 'Side-by-side comparison of 3 shingle grades with durability ratings, wind resistance (up to 130 MPH), and warranty periods.',
            rationale: 'Educates the homeowner visually before asking for personal contact information.',
          },
          {
            zone: 'Drone Roof Report Showcase',
            description: 'High-resolution sample report showing infrared hail damage detection and thermal moisture scans.',
            rationale: 'Demonstrates modern technological competence over traditional ladder-only handymen.',
          },
        ],
        designSystem: {
          typography: 'Plus Jakarta Sans paired with Space Mono for material specifications and warranties',
          colors: [
            { name: 'Charcoal Slate', hex: '#0F172A', role: 'Durable architectural canvas' },
            { name: 'Terracotta Accent', hex: '#EA580C', role: 'Primary estimate CTA and attention anchor' },
            { name: 'Sky Steel', hex: '#0284C7', role: 'Warranty badges and drone inspection tokens' },
            { name: 'Pure White', hex: '#FFFFFF', role: 'Card containers and clean contrast' },
          ],
          principles: [
            'Clarity over sales jargon (explain architectural shingles vs 3-tab in plain English)',
            'Instant visual feedback during material selection',
            'Mobile-first responsive touch interactions for on-site property owners',
          ],
        },
        finalDesignHighlights: [
          'Interactive Roof Cost Calculator with real-time material price updating',
          'Emergency Storm Damage 24-Hour Tarp Dispatch hotline with live queue tracker',
          'Manufacturer Master Elite Certification badge showcase (GAF & CertainTeed)',
          'High-contrast before/after drone aerial photography component',
        ],
        responsiveStrategy:
          'Stacked multi-column material tables into swipeable comparison cards on mobile, ensuring tap targets exceeded 48px for thumb usability outdoors.',
        designDecisions: [
          {
            title: 'Interactive Ballpark Calculator over "Call for Price"',
            whyMade: 'Homeowners routinely delay roof replacements due to fear of arbitrary pricing; providing transparent ranges builds immediate authority.',
            alternativeConsidered: 'A generic lead-capture form promising an agent callback.',
            tradeoff: 'Potential for customer misunderstanding on complex roof pitches, mitigated with clear "Estimated Range" disclaimers.',
          },
          {
            title: 'Terracotta Orange CTA on Dark Slate Canvas',
            whyMade: 'Generates an accessible 7.9:1 contrast ratio that draws the eye directly to the primary estimator without feeling cheap or spammy.',
            alternativeConsidered: 'Standard safety yellow or bright blue.',
            tradeoff: 'Requires strict restriction of orange usage elsewhere to maintain visual hierarchy.',
          },
          {
            title: 'Visual Roof Layer Exploded Diagram',
            whyMade: 'Customers don’t understand that a roof is a multi-layer ventilation system (ice & water shield, underlayment, ridge vents).',
            alternativeConsidered: 'A bulleted list of included materials.',
            tradeoff: 'Higher visual asset complexity, resolved through clean modular SVG layering.',
          },
          {
            title: 'Emergency Storm Tarping Dedicated Quick-Dial',
            whyMade: 'Following hail storms, homeowners need immediate emergency tarping to prevent ceiling collapse before insurance adjusters arrive.',
            alternativeConsidered: 'Routing all inquiries through a single queue.',
            tradeoff: 'Dual prioritization requires distinct routing banners in the mobile header.',
          },
          {
            title: 'Financing Calculator with Monthly Breakdown ($149/mo)',
            whyMade: 'A lump sum of $14,000 induces sticker shock; anchoring with monthly financing terms increases quote requests.',
            alternativeConsidered: 'Only showing the total lump sum cost.',
            tradeoff: 'Requires clear disclosure of APR and third-party lending terms.',
          },
        ],
        outcome:
          'Hypothetical user testing demonstrated a 68% increase in estimate completions and 94% positive user sentiment regarding pricing clarity.',
      },
    },
    {
      id: 'flowdesk-ai',
      title: 'FlowDesk AI',
      tagline: 'Enterprise AI workspace dashboard designed for frictionless multi-model prompting',
      projectType: 'Product Design • B2B SaaS Workflow Dashboard',
      isFictionalOrConcept: true,
      featured: true,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      tools: ['Figma', 'Design Systems', 'React', 'TypeScript', 'Tailwind CSS', 'Keyboard-First UX'],
      shortDescription:
        'A sophisticated workspace interface for technical teams orchestrating multi-model AI workflows. De-clutters cognitive overload with a modular bento panel system, keyboard command palettes, and real-time token telemetry.',
      links: {
        caseStudyUrl: '#case-study-flowdesk',
        liveUrl: '#live-flowdesk',
        githubUrl: 'https://github.com',
        figmaUrl: 'https://figma.com',
      },
      caseStudy: {
        overview:
          'FlowDesk AI is a concept SaaS product design solving the fragmentation experienced by engineers and product teams using multiple generative AI models simultaneously (text, vision, embeddings, code).',
        problem:
          'Existing AI developer playgrounds suffer from chaotic modal sprawl, inconsistent parameter sliders (temperature, top-p), and zero unified visibility into real-time token spend and latency bottlenecks.',
        goal:
          'Create a minimalist, keyboard-navigable desktop workspace that enables power users to compose multi-model prompt chains without context switching.',
        timeline: '3 Weeks Architecture & Design System',
        role: 'Product Designer & UI Engineer',
        designProcess: [
          {
            stepNumber: 1,
            title: 'User Workflow & Friction Mapping',
            description: 'Interviewed 6 AI engineers to map daily pain points: copy-pasting between chat UIs, lost prompt versions, and unexpected billing spikes.',
            deliverables: ['Workflow friction map', 'Command-palette shortcut taxonomy', 'Data visualizer requirements'],
          },
          {
            stepNumber: 2,
            title: 'Bento Grid Layout Architecture',
            description: 'Prototyped a modular 3-pane layout: Navigation & History (left), Active Canvas / Prompt Chains (center), and Telemetry & Model Parameters (right).',
            deliverables: ['Information architecture blueprint', 'Responsive collapsible panel system', 'Wireframe flows'],
          },
          {
            stepNumber: 3,
            title: 'High-Density Design System',
            description: 'Engineered a low-contrast dark mode palette (#0B0F19 background, #1E293B panels) tailored for prolonged multi-hour developer focus.',
            deliverables: ['Figma token library', 'Interactive state matrix', 'Accessible syntax highlighting tokens'],
          },
        ],
        wireframeNotes:
          'Designed around high information density with low visual noise. Minimized borders in favor of subtle background tone shifts (≤7% contrast delta) and Space Mono code telemetry.',
        wireframeZones: [
          {
            zone: 'Left Sidebar: Project Hub & Prompt History',
            description: 'Collapsible tree view of active prompt pipelines, branch histories, and team shared templates.',
            rationale: 'Provides instant context restoration in under 1 second without full-page reloads.',
          },
          {
            zone: 'Center Canvas: Prompt Flow Builder',
            description: 'Split-screen comparative view running the same system prompt across competing LLMs simultaneously.',
            rationale: 'Allows immediate side-by-side evaluation of outputs, token counts, and completion latency.',
          },
          {
            zone: 'Right Drawer: Parameter & Cost Telemetry',
            description: 'Live sliders for temperature, presence penalty, and streaming token-per-second velocity meters.',
            rationale: 'Keeps cost and model governance directly visible next to output generation.',
          },
        ],
        designSystem: {
          typography: 'Plus Jakarta Sans for UI controls; Space Mono for model parameters, prompt variables, and JSON payloads',
          colors: [
            { name: 'Dark Void Canvas', hex: '#0B0F19', role: 'Eye-safe background preventing OLED glare' },
            { name: 'Surface Panel Slate', hex: '#111827', role: 'Card containers and editor surfaces' },
            { name: 'Electric Cyan', hex: '#06B6D4', role: 'Active stream indicator and selection highlights' },
            { name: 'Violet Intelligence', hex: '#8B5CF6', role: 'AI generation tokens and pipeline connectors' },
          ],
          principles: [
            'Zero layout shift during streaming text completions',
            'Full keyboard accessibility (Cmd+K command bar, Esc to close, Tab navigation)',
            'Density over whitespace for analytical technical tools',
          ],
        },
        finalDesignHighlights: [
          'Side-by-side model comparison canvas with synchronized streaming outputs',
          'Global Cmd+K Command Palette for instant model swapping and prompt injection',
          'Live token spend and latency speedometer tracking API cost down to the millicent',
          'Modular drag-and-drop node builder for multi-step retrieval-augmented generation (RAG)',
        ],
        responsiveStrategy:
          'On tablets and small viewports, the telemetry and history drawers collapse into swipeable off-canvas sheets while preserving the central prompt editor.',
        designDecisions: [
          {
            title: 'Cmd+K Command Palette as Primary Navigation',
            whyMade: 'Engineers spend 80% of their time on keyboards; mouse clicks to switch models break coding flow state.',
            alternativeConsidered: 'Traditional multi-level dropdown menus.',
            tradeoff: 'Requires power-user onboarding cues, addressed with subtle shortcut badges (⌘K) in the top bar.',
          },
          {
            title: 'Restrained Monochromatic Dark Mode',
            whyMade: 'Neon gradients and arbitrary glows cause cognitive fatigue during 8-hour development sprints.',
            alternativeConsidered: 'Trendy glassmorphic glowing card styling.',
            tradeoff: 'Less "flashy" marketing appeal, but significantly superior ergonomic usability.',
          },
          {
            title: 'Side-by-Side Synchronized Diff View',
            whyMade: 'Prompt engineers need to compare nuance in model outputs word-by-word.',
            alternativeConsidered: 'Tabbed switching between outputs.',
            tradeoff: 'Reduces horizontal canvas width, mitigated by an instant full-width toggle for individual models.',
          },
          {
            title: 'Live Telemetry HUD over Post-Run Reports',
            whyMade: 'Developers need to catch runaway token loops before bills accumulate hundreds of dollars.',
            alternativeConsidered: 'End-of-month usage dashboards.',
            tradeoff: 'Requires lightweight real-time event listener state, built with performant React hooks.',
          },
          {
            title: 'Monospaced Numbers for All Financial & Token Metrics',
            whyMade: 'Proportional numbers jitter during live token streaming, creating distracting visual noise.',
            alternativeConsidered: 'Standard sans-serif body numbers.',
            tradeoff: 'Subtle typographic switch, accomplished cleanly with Space Mono.',
          },
        ],
        outcome:
          'Delivered a modular, production-ready design system with 40+ reusable Figma components and accessible React prototype layouts.',
      },
    },
    {
      id: 'novacare',
      title: 'NovaCare',
      tagline: 'Accessible healthcare portal and telemedicine booking experience',
      projectType: 'UI/UX Case Study • Healthcare & Patient Experience (PX)',
      isFictionalOrConcept: true,
      featured: true,
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      tools: ['Figma', 'WCAG AAA Accessibility', 'User Journey Mapping', 'React', 'Empathy Research'],
      shortDescription:
        'A patient-first telemedicine appointment scheduling and health records portal. Designed specifically to reduce anxiety for elderly patients and individuals with visual impairments through strict WCAG AAA contrast, simplified steps, and clear visual language.',
      links: {
        caseStudyUrl: '#case-study-novacare',
        liveUrl: '#live-novacare',
        githubUrl: 'https://github.com',
        figmaUrl: 'https://figma.com',
      },
      caseStudy: {
        overview:
          'NovaCare is a concept patient portal and telemedicine booking interface designed to transform the notoriously fragmented, stressful experience of healthcare management into a calming, highly accessible digital environment.',
        problem:
          'Most medical portals are designed for hospital billing administrators rather than anxious patients. Complex clinical jargon, tiny fonts, ambiguous provider availability, and confusing insurance verifications cause elderly patients to abandon online booking in favor of 30-minute phone hold times.',
        goal:
          'Create a calming, empathetic, WCAG 2.1 AAA-compliant patient experience allowing any patient—regardless of technical literacy—to book a specialized consultation in under 90 seconds.',
        timeline: '3 Weeks Research & Prototyping',
        role: 'Lead Accessibility & Product Designer',
        designProcess: [
          {
            stepNumber: 1,
            title: 'Accessibility & Geriatric UX Research',
            description: 'Researched low-vision motor impairment patterns and cognitive processing hurdles during acute medical stress.',
            deliverables: ['WCAG AAA audit checklist', 'Patient empathy map', 'Cognitive accessibility guidelines'],
          },
          {
            stepNumber: 2,
            title: 'Simplified 3-Step Appointment Journey',
            description: 'Redesigned the booking architecture into three sequential micro-actions: Symptom or Specialty → Preferred Physician & Language → Confirmed Time Slot.',
            deliverables: ['User flow diagrams', 'Accessibility wireframe blueprints', 'Form field reduction audit'],
          },
          {
            stepNumber: 3,
            title: 'Calming Visual Language & Large-Scale Typography',
            description: 'Established a soothing palette of Soft Clinical Teal (#0D9488), Deep Navy (#0F172A), and Warm Cream (#F0FDFA) with 18px base text size.',
            deliverables: ['Figma token system', 'High-contrast component library', 'Screen reader interaction states'],
          },
        ],
        wireframeNotes:
          'Engineered for maximum legibility and zero visual clutter. Avoided multi-column distractions during critical medical input stages.',
        wireframeZones: [
          {
            zone: 'Symptom-First Search Bar',
            description: 'Plain-language search supporting conversational terms like "earache" or "chest tightness" mapped to correct medical departments.',
            rationale: 'Patients shouldn’t need to know the difference between Otolaryngology and ENT to see a doctor.',
          },
          {
            zone: 'Physician Profile Cards with Video Intro',
            description: 'Displays doctor photo, languages spoken, insurance acceptance badge, next available appointment, and a 15-second video greeting.',
            rationale: 'De-escalates anxiety by establishing human connection before the appointment begins.',
          },
          {
            zone: 'One-Click Telemedicine vs. In-Clinic Selector',
            description: 'High-contrast toggle clearly explaining video call requirements vs. clinic street address.',
            rationale: 'Prevents patients from accidentally booking remote video appointments when physical examinations are needed.',
          },
        ],
        designSystem: {
          typography: 'Plus Jakarta Sans with increased 18px base body font and 1.7 line height for optimal low-vision readability',
          colors: [
            { name: 'Calming Teal', hex: '#0D9488', role: 'Primary reassurance and booking buttons' },
            { name: 'Deep Slate Navy', hex: '#0F172A', role: 'Maximum-contrast text and labels (16.5:1 ratio)' },
            { name: 'Soft Healing Cyan', hex: '#CCFBF1', role: 'Selected time slots and notification backgrounds' },
            { name: 'Warm Cream White', hex: '#F8FAFC', role: 'Eye-friendly background canvas' },
          ],
          principles: [
            'Strict adherence to WCAG 2.1 AAA contrast guidelines (minimum 7:1 for all normal text)',
            'Minimum 52px touch targets for patients with tremors or limited fine motor control',
            'No medical jargon without an accompanying plain-language definition tooltip',
          ],
        },
        finalDesignHighlights: [
          'Plain-language symptom triage search engine that routes directly to appropriate specialists',
          'Physician availability calendar with high-contrast morning/afternoon/evening time chips',
          'Instant Insurance Verification badge showing upfront co-pay ($20 co-pay confirmed)',
          'Automated SMS & calendar sync with a 1-tap "Join Video Call" link requiring no app downloads',
        ],
        responsiveStrategy:
          'On mobile, the calendar switches from a 7-day grid to an ergonomic day-by-day swipe carousel with oversized 52px time selection buttons.',
        designDecisions: [
          {
            title: 'Symptom Search over Medical Department Dropdowns',
            whyMade: 'Patients know their symptoms ("ringing in ears"), not complex anatomical specialties ("Audiologist vs ENT").',
            alternativeConsidered: 'A 40-item alphabetical dropdown of clinical departments.',
            tradeoff: 'Requires an underlying synonym-mapping database, but drastically reduces booking friction.',
          },
          {
            title: '18px Base Body Typography (WCAG AAA Standard)',
            whyMade: 'Over 40% of healthcare portal users are over age 55 with diminished visual acuity.',
            alternativeConsidered: 'Standard 14px or 16px body copy.',
            tradeoff: 'Reduces on-screen text density, which actually improves cognitive focus and decreases anxiety.',
          },
          {
            title: 'Upfront Co-Pay Confirmation ($20) Before Booking',
            whyMade: 'Unexpected medical bills are the #1 source of patient stress in the United States.',
            alternativeConsidered: 'Telling patients "Billing will be determined after your visit".',
            tradeoff: 'Requires insurance API verification during booking, but builds immense patient loyalty.',
          },
          {
            title: '15-Second Physician Video Greeting',
            whyMade: 'Seeing and hearing a doctor speak warmly de-escalates cortisol and white-coat syndrome before entering the exam room.',
            alternativeConsidered: 'Static text bio only.',
            tradeoff: 'Requires video storage, optimized with lazy-loaded lightweight modal previews.',
          },
          {
            title: 'Zero Password Requirement for Quick Telehealth Booking',
            whyMade: 'Forgotten passwords cause 42% of patient portal abandonments during acute illnesses.',
            alternativeConsidered: 'Mandatory account creation with complex password rules.',
            tradeoff: 'Relies on secure 6-digit SMS / Email OTP verification codes, providing both safety and speed.',
          },
        ],
        outcome:
          'Engineered an empathetic, universally accessible design system that won peer recognition for geriatric usability and WCAG AAA compliance.',
      },
    },
  ],
};
