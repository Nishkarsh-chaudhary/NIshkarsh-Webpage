Build a premium, production-ready personal portfolio website in React for Nishkarsh Chaudhary, a Technical Project Coordinator specializing in SaaS, ERP, logistics software, marketing technology, blockchain, and AI-enabled products.

Use https://minati.io/ as visual and interaction inspiration. Study its cinematic presentation, oversized typography, asymmetric layouts, horizontal marquees, dark atmospheric backgrounds, numbered feature sections, editorial spacing, reveal animations, pill-shaped calls to action, and immersive transitions.

Do not copy Minati’s logo, text, images, cryptocurrency branding, illustrations, source code, or proprietary assets. Create an original portfolio identity using the same general design principles.

# Primary Objective

The website should position Nishkarsh as a technically capable project and product-delivery professional who connects business stakeholders, product requirements, design, engineering, QA, and executive leadership.

The experience should feel:

- Premium
- Cinematic
- Technically sophisticated
- Editorial
- Minimal but expressive
- Highly interactive
- Credible and professional
- Suitable for recruiters, founders, CTOs, and product leaders

The site must not look like a generic résumé template or a collection of ordinary Bootstrap cards.

# Technology

Use:

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP with ScrollTrigger for complex scroll sequences
- Lenis for smooth scrolling
- Lucide React for interface icons
- React Router if individual project detail pages are created

Avoid unnecessary dependencies.

Use semantic HTML, accessible interactions, reusable components, clean TypeScript types, and a data-driven content structure.

# Visual Direction

Create an original visual identity based on “structured momentum.”

The design should communicate that Nishkarsh brings order, direction, and delivery discipline to complex technology projects.

## Color Palette

Use a dark primary theme:

- Main background: `#080A0B`
- Secondary background: `#101416`
- Elevated surface: `#171C1F`
- Primary text: `#F4F5F2`
- Secondary text: `#A8B0B2`
- Muted borders: `rgba(255,255,255,0.12)`
- Primary accent: electric cyan `#25D9E8`
- Secondary accent: cool blue `#5B7CFF`
- Optional warm highlight: acid-lime `#C8FF4D`

Use accent colors sparingly. The site should remain predominantly black, charcoal, white, and muted grey.

Add subtle cyan glows, illuminated lines, map-like routes, grids, nodes, and abstract project-flow imagery.

## Typography

Use a strong typography contrast:

- Condensed display font for large headings: Bebas Neue, Archivo Narrow, Oswald, or a similar open-source font.
- Modern sans-serif for body content: Inter, Manrope, or Satoshi-compatible fallback.
- Optional monospace font for labels and metadata: IBM Plex Mono or Space Mono.

Hero headings should be extremely large and tightly spaced.

Suggested desktop sizes:

- Hero display: `clamp(4.5rem, 10vw, 10rem)`
- Section heading: `clamp(3.25rem, 7vw, 7rem)`
- Project title: `clamp(2.5rem, 5vw, 5rem)`
- Body introduction: `clamp(1.35rem, 2.2vw, 2.4rem)`
- Labels: 11–14px, uppercase, generous letter spacing

Do not split every individual letter into a separate DOM element unless required for a deliberate text animation.

# Global Layout

Use full-width sections with responsive horizontal padding:

- Mobile: 20px
- Tablet: 40px
- Desktop: 64px
- Large desktop: 80px

Use generous vertical spacing of approximately 120–220px on desktop.

Create a strong alternation between:

- Full-screen visual sections
- Dense editorial sections
- Large text statements
- Horizontal project displays
- Numbered accordions
- High-impact metrics
- Quiet, spacious content areas

Avoid placing every section inside the same centered container.

# Initial Loader

Create a short full-screen introductory loader inspired by the reference site.

Display:

“NISHKARSH.”

Then transition to:

“COORDINATING IDEAS INTO IMPACT.”

Loader requirements:

- Black background
- Large white condensed typography
- Text reveal or mask animation
- Thin cyan progress line
- Duration between 1.2 and 1.8 seconds
- Play only once per browser session
- Respect `prefers-reduced-motion`
- Finish with a clean upward mask transition into the hero
- Do not make visitors wait unnecessarily

# Header

Create a transparent fixed header that becomes a blurred dark navigation bar after scrolling.

Left side:

- Original monogram logo using the letters “NC”
- Text: “Nishkarsh Chaudhary”
- Small secondary label: “Technical Project Coordinator”

Desktop navigation:

- Home
- About
- Experience
- Projects
- Expertise
- Contact

Place a small square “+” symbol beside selected navigation items, reflecting the reference site’s visual language.

Right side:

- “Let’s Connect” pill button
- Circular menu button with two horizontal lines

The menu button should open a full-screen overlay menu with:

- Oversized navigation labels
- Staggered text animation
- LinkedIn
- Email
- Current location
- Availability indicator

On mobile, use the menu overlay instead of the full navigation.

# Hero Section

Create a cinematic, full-viewport hero.

## Background

Use an original animated abstract visual rather than copying Minati’s rock imagery.

The background concept should combine:

- A dark three-dimensional terrain or abstract system map
- Glowing cyan routes
- Connected nodes
- Moving data particles
- A subtle grid
- Atmospheric fog or gradients
- Very slow parallax movement

This can be implemented with optimized images, layered CSS, canvas, or lightweight WebGL. Performance must remain smooth.

The imagery should suggest software systems, coordinated workflows, logistics routes, and interconnected products.

Add a dark overlay so all text remains readable.

## Hero Layout

Use an asymmetric two-column composition.

Left column:

Small italic eyebrow:

“Technical delivery starts with clarity.”

Large heading:

“TURNING  
COMPLEX IDEAS  
INTO DELIVERED  
PRODUCTS.”

Use line breaks intentionally. The heading should occupy a large portion of the viewport.

Right column:

Introductory copy:

“I coordinate SaaS, ERP, logistics, marketing technology, blockchain, and AI-enabled products—from requirement discovery and sprint planning through UAT, launch, and stabilization.”

Larger supporting statement:

“Business goals, product decisions, and technical teams—aligned in one delivery system.”

Primary CTA:

“Explore My Work”

Secondary CTA:

“Connect on LinkedIn”

Include diagonal arrow icons in both buttons.

At the bottom of the hero, add a slowly moving horizontal discipline marquee:

“ERP • LOGISTICS • SAAS • PRODUCT DELIVERY • AGILE • MARKETING TECHNOLOGY • BLOCKCHAIN • AI SYSTEMS”

# Introduction Statement

Create a high-impact editorial introduction immediately after the hero.

Small bracketed label:

`[ ABOUT NISHKARSH ]`

Large statement:

“I bring structure to ambitious digital products—translating business requirements into clear plans, aligned teams, testable outcomes, and dependable releases.”

Animate the words or lines into view as the user scrolls. Keep the animation restrained and readable.

Below the statement, use a two-column layout.

Left:

Large vertical text:

“CLARITY  
COORDINATION  
DELIVERY”

Right:

Two short paragraphs explaining that Nishkarsh works between business, product, design, engineering, QA, and leadership.

Include a “More About Me” pill link that scrolls to the full About section.

# Portfolio Metrics

Create a visually dramatic metrics section with one oversized number and four supporting metrics.

Main metric:

“10+”

Label:

“Cross-functional professionals coordinated across engineering, design, and QA”

Supporting metrics:

- “5” — SaaS modules delivered as one ecosystem
- “4 Months” — Worksbuddy delivery timeline
- “8+” — Blockchain and fintech projects coordinated
- “10+” — International website and design projects managed concurrently

Animate numbers when they enter the viewport.

Do not invent additional numbers.

# Selected Work Section

Section label:

`[ SELECTED WORK ]`

Heading:

“PRODUCTS I HELPED MOVE FORWARD”

Build a horizontally scrolling or sticky project showcase on desktop. Use a stacked vertical layout on mobile.

Include five featured projects:

## Project 01 — Move My Stuff

Category:

“Logistics Operations Platform”

Summary:

“A connected logistics platform covering customer onboarding, locations, bookings, jobs, routes, zones, capacity, pricing, finance, and system integrations.”

Contribution:

- Structured end-to-end customer onboarding requirements
- Defined workflow statuses, permissions, validation rules, and audit behavior
- Connected customer configuration with downstream logistics operations
- Documented acceptance criteria, edge cases, dependencies, and open decisions
- Supported route, zone, capacity, and operational workflow planning

Tags:

“Logistics”  
“ERP”  
“Requirements”  
“Operations”  
“UAT”

Visual direction:

Create an original animated route map with nodes, customer locations, directional paths, and operational status markers.

## Project 02 — Koala Marketing Cloud

Category:

“Marketing Automation Platform”

Summary:

“A customer-engagement platform covering signup forms, audience lists, dynamic segments, customer profiles, consent management, and behavior-based campaigns.”

Contribution:

- Translated client discussions into detailed functional requirements
- Defined signup-form creation, targeting, scheduling, publishing, and analytics
- Documented tag-based lists and condition-based customer segments
- Designed functional logic for behavior-triggered product and category popups
- Defined priority, cooldown, suppression, frequency, and conflict rules

Tags:

“MarTech”  
“Personalization”  
“Customer Data”  
“Segmentation”  
“Functional Requirements”

Visual direction:

Create an abstract customer journey showing visitor activity flowing into profiles, tags, segments, personalized campaigns, and analytics.

## Project 03 — Worksbuddy

Category:

“Unified Business SaaS Ecosystem”

Summary:

“A connected business-management ecosystem consisting of CRM, task management, invoicing, electronic signatures, and email marketing.”

Contribution:

- Coordinated more than 10 professionals across product delivery
- Supported delivery of five modules in four months
- Managed requirements, sprint priorities, dependencies, testing, and releases
- Coordinated unified authentication across enterprise products
- Supported UAT and post-launch stabilization

Tags:

“SaaS”  
“CRM”  
“Product Delivery”  
“SSO”  
“Agile”

Visual direction:

Show five connected product modules orbiting or feeding into one central platform.

## Project 04 — AI-Native ERP and POS

Category:

“Product Strategy and Platform Concept”

Summary:

“An AI-assisted platform that enables businesses to describe, configure, test, approve, deploy, and continuously improve ERP and POS applications.”

Contribution:

- Defined the product vision and focused MVP
- Structured the customer journey from discovery to deployment
- Defined controlled AI changes, automated testing, approval, versioning, and rollback
- Mapped ERP and POS product modules
- Developed delivery phases, risk controls, success measures, and pilot strategy

Tags:

“Artificial Intelligence”  
“ERP”  
“POS”  
“Product Strategy”  
“Platform Design”

Visual direction:

Show a natural-language request becoming structured requirements, a preview build, automated tests, approval, and a versioned release.

## Project 05 — AI Office Analytics

Category:

“Computer-Vision Proof of Concept”

Summary:

“A privacy-conscious workplace analytics concept using anonymous person detection to measure room occupancy, desk utilization, visitor activity, and space usage.”

Contribution:

- Defined project scope, system behavior, and measurable acceptance criteria
- Documented occupancy, dwell-time, visitor-counting, and heatmap requirements
- Designed the functional architecture and phased implementation plan
- Defined performance, latency, accuracy, reliability, and privacy targets
- Explicitly excluded facial recognition and identity-level monitoring

Tags:

“Computer Vision”  
“Python”  
“Analytics”  
“Privacy”  
“POC”

Visual direction:

Use an abstract camera frame with anonymous bounding boxes, polygon zones, occupancy indicators, and a subtle heatmap.

# Project Interaction

Each project card should include:

- Number
- Category
- Large title
- One-sentence summary
- Tags
- “View Case Study” button
- Original project visual
- Hover motion or cursor response

Selecting a project should open either:

- A dedicated React route, or
- A large animated modal/drawer

Each case study should contain:

1. Overview
2. Business context
3. My role
4. Responsibilities
5. Delivery approach
6. Functional areas
7. Challenges
8. Outcome or intended value
9. Tools and domain knowledge
10. Confidentiality note where appropriate

Do not expose sensitive internal specifications or claim outcomes that are not supported by the supplied information.

# Key Strengths Section

Use a layout inspired by a numbered benefits section.

Label:

`[ HOW I CREATE VALUE ]`

Heading:

“FROM AMBIGUITY TO EXECUTION”

Introductory paragraph:

“I create delivery clarity by connecting business intent, product behavior, technical execution, and measurable acceptance.”

Create four large benefit panels:

## 01 — Requirements That Teams Can Build

“Transforming meetings, business needs, and early concepts into functional requirements, workflows, user stories, validation rules, edge cases, and acceptance criteria.”

Supporting lines:

- Clear scope and priorities
- Testable product behavior

## 02 — Cross-Functional Alignment

“Keeping stakeholders, designers, developers, QA professionals, and leadership aligned around the same decisions, dependencies, and expected outcomes.”

Supporting lines:

- Shared delivery context
- Faster decision-making

## 03 — Controlled Delivery

“Supporting sprint planning, backlog management, risk tracking, dependency resolution, UAT, release readiness, and post-launch stabilization.”

Supporting lines:

- Visible progress and risk
- Dependable release preparation

## 04 — Technical and Business Translation

“Communicating technical constraints in business language and converting business objectives into actionable technical discussions.”

Supporting lines:

- Business-to-engineering translation
- Outcome-focused execution

Make these panels sticky or layered on desktop and normally stacked on mobile.

# Experience Section

Label:

`[ EXPERIENCE ]`

Heading:

“THE JOURNEY SO FAR”

Create a vertical timeline with animated progress.

## Jabit Soft

Role:

“Technical Project Coordinator”

Period:

“Current Role”

Description:

“Coordinating ERP and logistics software delivery across business requirements, product workflows, engineering execution, QA, UAT, and stakeholder communication.”

Highlights:

- ERP and logistics module coordination
- Customer, booking, job, route, capacity, pricing, and finance workflows
- Requirements and acceptance criteria
- Sprint, dependency, and risk tracking
- Cross-functional delivery
- UAT and release preparation

## LBM Solutions

Role:

“Project Coordinator”

Period:

“August 2024 – 2026”

Description:

“Coordinated SaaS, blockchain, fintech, monitoring, retail, e-commerce, and white-label product delivery.”

Highlights:

- Five-module Worksbuddy SaaS ecosystem
- Team of more than 10 contributors
- Four connected enterprise products
- More than eight blockchain and fintech projects
- Client delivery, UAT, deployment, and stabilization

## SmartSites

Role:

“Project Coordinator”

Period:

“February 2024 – August 2024”

Description:

“Coordinated international website and design projects while managing requirements, feedback, revisions, timelines, and client communication.”

Highlights:

- More than 10 concurrent projects
- International client communication
- Design and development coordination
- Change-request and feedback management

## Webcom Systems

Role:

“Project Management Trainee”

Period:

“October 2023 – February 2024”

Description:

“Supported Agile delivery for fintech, blockchain, crypto exchange, betting, and community-platform projects.”

Highlights:

- Sprint coordination
- Project documentation
- QA collaboration
- Defect tracking
- Release-readiness support

# Expertise Accordion

Create a large numbered accordion similar in energy to Minati’s feature presentation.

Heading:

“CAPABILITIES”

Accordion items:

## 01 — Technical Project Coordination

Description:

“End-to-end coordination across requirements, planning, development, testing, release, and stabilization.”

Skills:

- Project planning
- Timeline management
- Risk management
- Dependency management
- Release coordination

## 02 — Product and Requirements Management

Description:

“Converting business objectives into structured, testable, and implementation-ready product definitions.”

Skills:

- Functional requirement documents
- User stories
- Acceptance criteria
- Process mapping
- Status models
- Roles and permissions
- Validation rules
- Edge cases

## 03 — Agile Delivery

Description:

“Supporting collaborative and transparent delivery through structured Agile practices.”

Skills:

- Sprint planning
- Backlog refinement
- Daily coordination
- Progress tracking
- Retrospectives
- UAT

## 04 — Stakeholder Management

Description:

“Maintaining clear communication across clients, delivery teams, managers, technical leaders, and executives.”

Skills:

- Client communication
- Executive reporting
- Meeting facilitation
- Decision tracking
- Expectation management

## 05 — Product Domains

Description:

“Experience coordinating products across multiple technically complex industries.”

Skills:

- ERP
- Logistics
- SaaS
- CRM
- Marketing automation
- Blockchain
- Fintech
- Retail POS
- E-commerce
- Artificial intelligence

Only one accordion should be open at a time on smaller screens. On desktop, display a large contextual visual beside the active item.

# Tools and Technology Marquee

Create an infinite horizontal marquee with these items:

“JIRA — NOTION — TRELLO — ASANA — GITHUB — FIGMA — GOOGLE WORKSPACE — PYTHON — REST APIs — SQL — LINUX — AWS — SSO — RBAC”

Below it, create two clean columns.

## Delivery Tools

- Jira
- Notion
- Trello
- Asana
- GitHub
- Zoho Cliq
- Google Workspace
- Figma

## Technical Understanding

- Python
- REST APIs
- SQL fundamentals
- Git and GitHub
- Linux
- AWS EC2 and S3
- Authentication and SSO
- Role-based access control
- Database-driven applications
- Blockchain fundamentals
- AI-assisted workflows

Include this supporting copy:

“My technical background helps me communicate effectively with engineering teams, understand implementation constraints, and keep technical decisions connected to business outcomes.”

# Working Process

Create a horizontal desktop process with a scroll-linked progress line. Stack it vertically on mobile.

Use these stages:

1. Discover  
   Understand users, business goals, current processes, constraints, and desired outcomes.

2. Define  
   Establish scope, priorities, dependencies, workflows, requirements, and acceptance criteria.

3. Align  
   Create shared understanding across stakeholders, design, engineering, QA, and leadership.

4. Deliver  
   Coordinate sprints, progress, decisions, risks, blockers, dependencies, and change requests.

5. Validate  
   Support QA, UAT, defect prioritization, feedback management, and release-readiness reviews.

6. Improve  
   Review feedback, defects, bottlenecks, product usage, and opportunities for continuous improvement.

# Education and Learning

Use a lighter editorial section to give visual relief from the darker project sections.

Heading:

“LEARNING IS PART OF THE DELIVERY SYSTEM.”

Content:

“Bachelor of Technology in Computer Science and Engineering”

Institution:

“Bharat Institute of Technology, Meerut”

University:

“Dr. A.P.J. Abdul Kalam Technical University”

Graduation:

“June 2024”

GPA:

“7.0/10”

Relevant subjects:

- Data Structures
- Database Management Systems
- Operating Systems
- Computer Networks
- Software Engineering

Continuous-learning areas:

- Google Project Management
- Product discovery and strategy
- Technical program management
- Agile delivery
- AI-assisted project workflows
- Software architecture fundamentals
- Cloud platforms
- Business automation
- Data-driven product decisions

# Personal Value Statement

Create a full-screen text section.

Small label:

`[ MY PERSPECTIVE ]`

Large copy:

“I CONNECT THREE PERSPECTIVES.”

Then reveal these statements one by one:

“BUSINESS — What problem are we solving?”

“PRODUCT — What experience and behavior should we create?”

“DELIVERY — How do we organize people and work to build it successfully?”

Closing paragraph:

“I help teams move from unclear ideas to structured execution by defining requirements, coordinating specialists, managing priorities, and maintaining accountability throughout delivery.”

# Final CTA

Create a large rounded CTA section with an original animated background.

Heading:

“HAVE A COMPLEX PRODUCT TO DELIVER?”

Supporting text:

“If you are building a SaaS platform, ERP system, logistics product, marketing solution, or AI-enabled business application, let’s discuss how structured coordination can help move it forward.”

Buttons:

- “Start a Conversation”
- “Connect on LinkedIn”

Contact information:

- Email: nishkarsh541@gmail.com
- LinkedIn: https://www.linkedin.com/in/nishkarsh-chaudhary-a08967225/
- Location: Mohali, Punjab, India

Closing statement:

“TURNING COMPLEX REQUIREMENTS INTO STRUCTURED PLANS, ALIGNED TEAMS, AND DEPENDABLE DIGITAL PRODUCTS.”

# Footer

Create an oversized typographic footer.

Large text:

“NISHKARSH  
CHAUDHARY”

Footer columns:

## Navigate

- About
- Experience
- Projects
- Expertise
- Contact

## Connect

- LinkedIn
- Email

## Focus

- ERP
- Logistics
- SaaS
- Product Delivery
- AI Systems

Bottom bar:

“© 2026 Nishkarsh Chaudhary”

“Designed around clarity, coordination, and delivery.”

Add a back-to-top circular button.

# Motion and Interaction Requirements

Use motion to enhance hierarchy, not distract from the content.

Implement:

- Short animated loader
- Smooth scrolling
- Header background transition
- Hero parallax
- Masked heading reveals
- Scroll-triggered text reveals
- Subtle image scale effects
- Marquee movement
- Number counter animation
- Sticky project transitions on desktop
- Accordion transitions
- Animated route and node graphics
- Magnetic CTA hover effect
- Custom cursor only on devices with precise pointing
- Underline or arrow movement on links
- Full-screen menu transitions
- Page transitions for case-study routes

Animation rules:

- Keep typical transitions between 250ms and 700ms
- Use longer durations only for ambient background movement
- Avoid scroll hijacking
- Avoid excessive rotation or bouncing
- Do not animate all text character by character
- Ensure content remains usable while JavaScript is loading
- Respect reduced-motion preferences

# Responsive Requirements

## Desktop

- Use cinematic full-screen sections
- Allow asymmetric columns and sticky interactions
- Use oversized typography
- Use horizontal project presentation where appropriate

## Tablet

- Reduce display sizes carefully
- Preserve editorial layout without text collisions
- Replace complicated sticky sequences where space is limited

## Mobile

- Use a clean single-column flow
- Keep headings large but readable
- Disable custom cursor
- Simplify parallax and heavy animations
- Convert horizontal projects into stacked cards
- Ensure buttons are at least 44px high
- Prevent horizontal overflow
- Keep navigation reachable with one hand
- Use optimized mobile imagery

Test at:

- 360px
- 390px
- 768px
- 1024px
- 1440px
- 1920px

# Accessibility

The website must:

- Meet WCAG AA contrast requirements
- Use semantic heading order
- Include a skip-to-content link
- Provide visible keyboard focus states
- Support keyboard navigation
- Use meaningful alt text
- Avoid essential information inside animation alone
- Respect `prefers-reduced-motion`
- Use accessible accordion states
- Use accessible modal focus trapping
- Label icon-only controls
- Avoid auto-playing audio
- Keep interactive text readable over imagery

# Performance

Target:

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Requirements:

- Lazy-load below-the-fold visuals
- Use responsive WebP or AVIF images
- Preload only essential fonts
- Use local or privacy-conscious font loading
- Avoid oversized videos
- Provide static poster fallbacks
- Dynamically import heavy animation components
- Prevent cumulative layout shift
- Keep animations GPU-friendly
- Clean up GSAP ScrollTriggers on unmount
- Avoid unnecessary React re-renders

# SEO

Add:

- Descriptive page title
- Meta description
- Canonical URL placeholder
- Open Graph metadata
- Twitter card metadata
- Person structured data
- ProfilePage structured data
- Project keywords
- Sitemap placeholder
- Robots configuration
- Meaningful link labels

Suggested title:

“Nishkarsh Chaudhary | Technical Project Coordinator”

Suggested description:

“Portfolio of Nishkarsh Chaudhary, a Technical Project Coordinator experienced in SaaS, ERP, logistics platforms, marketing technology, blockchain, Agile delivery, and AI-enabled products.”

# Component Structure

Use components similar to:

- `App`
- `PageLoader`
- `Header`
- `FullscreenMenu`
- `Hero`
- `DisciplineMarquee`
- `AboutStatement`
- `Metrics`
- `SelectedProjects`
- `ProjectPanel`
- `ProjectVisual`
- `ValueSection`
- `ExperienceTimeline`
- `ExpertiseAccordion`
- `ToolsMarquee`
- `DeliveryProcess`
- `Education`
- `Perspective`
- `ContactCTA`
- `Footer`
- `MagneticButton`
- `RevealText`
- `SectionLabel`
- `AnimatedCounter`
- `ReducedMotionProvider`

Store experience, projects, skills, metrics, and navigation in typed data files instead of hardcoding repeated markup.

Suggested structure:

```text
src/
  components/
  sections/
  pages/
  data/
    portfolio.ts
  hooks/
  animations/
  assets/
  styles/
  types/
```

# Deliverables

Produce:

1. Complete React and TypeScript source
2. Responsive desktop, tablet, and mobile layouts
3. Reusable data-driven components
4. Original placeholder visuals where final images are unavailable
5. Smooth but accessible animations
6. Functional navigation
7. Working project accordions or project detail routes
8. Working LinkedIn and email links
9. README with setup and build instructions
10. Clean production build with no TypeScript or console errors

Before completion:

- Run the production build
- Check mobile overflow
- Test every navigation link
- Test keyboard navigation
- Verify reduced-motion behavior
- Confirm that no Minati branding or proprietary assets were copied
- Confirm that no unsupported professional claims were introduced
- Confirm that confidential internal project details are not exposed
- Ensure the final result feels like a premium technology portfolio rather than a résumé displayed on a webpage