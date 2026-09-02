# Product Delivery Case Studies

## Nishkarsh Chaudhary

**Technical Project Coordinator | SaaS | ERP | Logistics | Marketing Technology | AI-Enabled Products**

This document presents five selected projects that demonstrate my approach to technical project coordination, product requirements, cross-functional delivery, quality management, and stakeholder alignment. The case studies focus on my contribution and the problems addressed without disclosing confidential client data, credentials, proprietary architecture, or commercially sensitive implementation details.

> **Accuracy note:** “Outcome” distinguishes delivered results from proposed or proof-of-concept value. Where a product remains in development, the case study describes the intended outcome rather than claiming a completed business result.

---

# 01 — Move My Stuff

## Smart Logistics and Operations Platform

### Case-study summary

Move My Stuff is a connected logistics and operations platform designed to bring customer setup, locations, pricing, bookings, jobs, capacity, routes, finance, and integrations into a controlled digital workflow. My contribution centered on converting operational needs and prototype concepts into detailed, testable requirements that could guide product design, engineering, QA, and stakeholder review.

### The context

Logistics products depend on connected data. A customer cannot be treated as an isolated contact record: its locations affect serviceability, pricing affects booking decisions, capacity affects scheduling, and operational instructions affect job execution. If onboarding information is incomplete or inconsistent, the problems appear later as incorrect quotations, failed integrations, route exceptions, invoicing errors, or avoidable manual work.

The project therefore needed more than a collection of forms. It required a reliable operating model showing how information is created, validated, reviewed, changed, and passed into downstream workflows.

### The objective

The objective was to define a controlled logistics platform that could:

- Establish complete and consistent customer records.
- Connect customer configuration to booking and job operations.
- Support locations, pricing, finance, capacity, routes, and integrations.
- Prevent incomplete or duplicate records from entering operational workflows.
- Apply role-based permissions to sensitive and operational information.
- Preserve an audit trail of important changes and decisions.
- Give delivery teams precise acceptance conditions for implementation and testing.

### My role

As Technical Project Coordinator, I worked between business expectations and technical execution. My responsibility was to understand the operating process, identify missing decisions, document expected system behavior, and create enough clarity for designers, developers, testers, and stakeholders to work from the same model.

My contribution included:

- Requirement discovery and functional analysis.
- Workflow and status definition.
- Functional Requirement Document preparation.
- Role and permission mapping.
- Business-rule and validation definition.
- Acceptance-criteria preparation.
- Dependency and open-question tracking.
- Cross-functional coordination.
- UAT and release-readiness support.

### Key product areas

The requirements covered interconnected areas such as:

- Customer onboarding and customer management.
- Business identity and contact information.
- Financial and invoicing configuration.
- Operating, pickup, delivery, billing, and primary locations.
- Pricing-table assignment and pricing compatibility.
- Integration and portal configuration.
- Booking and job dependencies.
- Route and zone configuration.
- Capacity and service constraints.
- User permissions, audit history, validation, and error recovery.

### Delivery approach

#### 1. Convert the prototype into a system model

The visible screens were treated as the beginning of the requirements process, not the complete specification. I mapped every section to its business purpose, required data, downstream dependencies, authorized users, validations, and completion conditions.

#### 2. Define a controlled status lifecycle

I documented meaningful states such as Draft, In Review, Ready to Create, Active, Cancelled, and Failed. This clarified what users could do at each stage and prevented partially configured customers from silently entering live operations.

#### 3. Specify permissions beyond the interface

The platform involves financial, pricing, operational, and integration information. I defined a baseline permission model for administrators, operational managers, finance users, pricing users, and operations teams, with the expectation that authorization would be enforced at both interface and service levels.

#### 4. Address validation and failure behavior

Requirements included duplicate detection, required-field validation, address and contact checks, pricing compatibility, integration validation, autosave behavior, error summaries, retry behavior, and safe handling of failed creation attempts.

#### 5. Connect onboarding to operations

The requirements explicitly considered how customer data would be consumed by bookings, jobs, capacity, pricing, finance, locations, and integrations. This reduced the risk of building an onboarding experience that appeared complete but did not support operational execution.

#### 6. Make completion testable

Each significant behavior was accompanied by acceptance criteria so QA and stakeholders could verify results consistently rather than relying on subjective interpretation.

### Key challenges

- Translating early designs into complete functional behavior.
- Identifying operational dependencies not visible in the prototype.
- Balancing a convenient onboarding flow with strict data controls.
- Supporting draft work without allowing incomplete live records.
- Defining responsibilities across operations, finance, and pricing teams.
- Managing assumptions where integration terminology or ownership required confirmation.

### Intended outcome

The documented solution provides a foundation for a connected logistics operating platform. It is intended to reduce incomplete customer records, inconsistent pricing or location data, duplicate entry, unclear ownership, and downstream operational exceptions.

For the delivery team, the main value is a shared definition of behavior: what the system must do, who may do it, how errors should be handled, and how each feature can be accepted.

### Skills demonstrated

`Logistics` `ERP` `Functional Requirements` `Business Analysis` `Workflow Design` `RBAC` `UAT` `Cross-functional Coordination`

---

# 02 — Koala Marketing Cloud

## Customer Engagement and Behavior-Based Marketing Platform

### Case-study summary

Koala Marketing Cloud is a marketing-technology platform covering signup forms, tag-based audience lists, dynamic customer segments, unified profiles, consent management, behavioral activity, and personalized popup experiences. I translated client discussions into a structured functional specification for design, estimation, engineering, and QA.

### The context

Marketing teams need more than a form builder. Effective personalization depends on connected visitor events, customer profiles, consent, tags, list membership, segment rules, campaign eligibility, scheduling, suppression, and analytics.

The central challenge was to define how these features should work together. A product view, for example, may contribute to a customer’s behavioral profile, satisfy a campaign threshold, identify an eligible form, pass frequency rules, create an impression, capture a submission, update the profile, apply tags, and change list or segment membership.

### The objective

The phase aimed to define four connected capabilities:

- Signup Forms.
- Lists and Segments.
- Customer Profiles.
- Dynamic behavior-based popups.

The goal was to provide Klaviyo-inspired usability while keeping the initial implementation appropriately scoped and native to the Marketing Cloud platform.

### My role

My responsibility was to transform meeting-level requirements into a development-ready Functional Requirement Document. I structured the product behavior, separated confirmed scope from recommended roadmap items, exposed unresolved decisions, documented dependencies, and created acceptance criteria.

My contribution included:

- Translating stakeholder discussions into functional specifications.
- Defining phase scope and explicit exclusions.
- Designing cross-module workflows.
- Documenting targeting and personalization rules.
- Defining profile, tag, list, segment, and consent behavior.
- Clarifying campaign scheduling and publishing states.
- Defining suppression, priority, and frequency logic.
- Identifying technical and data dependencies.
- Preparing acceptance criteria for development and QA.

### Key product areas

#### Signup Forms

The module supports popup, flyout, embedded, and full-page formats. Requirements covered form creation, duplication, autosave, draft and published states, dynamic fields, visual customization, responsive previews, triggers, scheduling, success actions, and performance analytics.

#### Lists and Segments

Lists were defined as native, tag-driven audiences rather than manually imported files. Match Any and Match All logic allow audience membership to update as profile tags change. Segments use grouped conditions across profile attributes, tags, behavior, and consent.

#### Unified Profiles

Profiles bring identity information, tags, activity history, audience membership, and subscription status into one view. Requirements also addressed search, filtering, consent management, and email-based deduplication.

#### Behavior-Based Popups

The new personalization layer uses visitor activity to determine whether a relevant form should appear. Examples include repeated product views, category interest, abandoned carts, or configured events.

### Behavior decision flow

The functional sequence was defined as:

1. A visitor performs a trackable action.
2. The event is stored against the session or profile.
3. The behavior service evaluates the event and relevant history.
4. The platform checks for active forms mapped to the product or category.
5. Priority rules resolve multiple eligible forms.
6. Frequency caps, cooldowns, previous submissions, and suppression rules are evaluated.
7. The selected popup is shown and its impression recorded.
8. A successful submission updates the customer profile and consent.
9. Configured tags are applied.
10. List and segment membership is recalculated.
11. Campaign analytics are updated.

### Delivery approach

#### 1. Establish a firm phase boundary

The specification separated required capabilities from future possibilities. External synchronization, file-based imports, broad campaign automation, and unrelated platform features were excluded from the phase unless later approved.

#### 2. Treat modules as one customer-data flow

Forms, profiles, tags, lists, segments, behavior, and analytics were modeled as parts of the same system rather than independent screens.

#### 3. Define control rules for personalization

Personalized campaigns can quickly become disruptive if priority and suppression are unclear. I documented eligibility, scheduling, mapping, cooldown, repeat-display, previous-submission, and overlapping-popup considerations.

#### 4. Surface decisions before implementation

The document highlighted questions about trigger thresholds, data sources, catalog integration, popup conflicts, initial tags, and the boundary between native functionality and external synchronization.

#### 5. Make analytics part of the feature

Requirements differentiated standard and behavior-triggered impressions, submissions, and conversion rates, allowing teams to understand whether personalization improves engagement.

### Key challenges

- Maintaining a clear distinction between “equivalent experience” and direct platform replication.
- Connecting anonymous behavior with known customer profiles responsibly.
- Preventing campaign overlap and excessive popup frequency.
- Keeping lists and segments dynamically synchronized with changing profile data.
- Defining consent and deduplication behavior across tracking and CRM sources.
- Protecting the phase from expansion into a complete marketing-automation suite.

### Intended outcome

The specification creates a coherent foundation for audience management and behavior-based engagement. It enables marketing teams to create forms, organize audiences, understand customer activity, and deliver more relevant experiences through configurable rules.

For engineering and QA, the document provides clear module boundaries, runtime logic, dependencies, open decisions, and acceptance conditions.

### Skills demonstrated

`Marketing Technology` `Personalization` `Customer Data` `Segmentation` `Consent` `Functional Requirements` `Analytics` `Product Scoping`

---

# 03 — Worksbuddy

## Unified Business Management SaaS Ecosystem

### Case-study summary

Worksbuddy is a five-module SaaS ecosystem combining CRM, task management, invoice management, electronic signatures, and email marketing. I coordinated delivery across design, engineering, QA, and senior stakeholders, helping the team move from requirements to production within a four-month delivery period.

### The context

Building several business applications at the same time creates coordination challenges beyond the scope of any single module. Teams must align shared authentication, navigation, users, data relationships, dependencies, design patterns, release sequencing, and quality expectations.

The product needed to behave as one connected ecosystem rather than a group of unrelated applications. This required continuous coordination between module teams and visibility into decisions that could affect the wider platform.

### The objective

The delivery objective was to launch five production-ready business modules:

- Customer Relationship Management.
- Task Management.
- Invoice Management.
- Electronic Signatures.
- Email Marketing.

The wider ecosystem also included multiple enterprise products using a unified authentication experience.

### My role

As Project Coordinator, I served as a central execution and communication point across product delivery. I helped translate priorities into coordinated work, maintained visibility across parallel tracks, supported testing and acceptance, and communicated progress and risks to senior stakeholders.

My contribution included:

- Coordinating more than 10 contributors across engineering, design, and QA.
- Supporting requirements definition and backlog preparation.
- Coordinating sprint priorities and delivery milestones.
- Tracking inter-module dependencies and blockers.
- Facilitating daily and regular delivery communication.
- Aligning teams around shared authentication and ecosystem behavior.
- Supporting UAT, release readiness, and production coordination.
- Coordinating post-launch issue resolution and stabilization.
- Translating leadership priorities into actionable delivery items.

### Delivery approach

#### 1. Create visibility across parallel workstreams

I maintained a shared view of module status, dependencies, decisions, risks, and upcoming releases. This was necessary because progress in one product could depend on authentication, design, backend, or QA work owned elsewhere.

#### 2. Translate broad goals into sprint-level execution

Business and leadership requirements were clarified and broken into actionable delivery items. The work was prioritized based on dependencies, readiness, customer value, and release needs.

#### 3. Coordinate the complete cross-functional loop

Design readiness, frontend work, backend services, integrations, QA, UAT, and release activities were treated as one continuous delivery process. Handoffs and pending inputs were actively followed rather than assumed.

#### 4. Support ecosystem consistency

The project required consistent behavior across products, particularly around authentication and the user journey between modules. Shared concerns were surfaced early and coordinated across the relevant teams.

#### 5. Maintain feedback and defect flow

Feedback from stakeholders and testing was captured, clarified, prioritized, assigned, retested, and communicated through closure. This helped protect the launch from unresolved critical issues.

### Key challenges

- Coordinating five products within a compressed delivery period.
- Managing more than one technical workstream at the same time.
- Preventing shared dependencies from delaying individual modules.
- Maintaining a unified user experience across separate applications.
- Balancing new requirements with delivery commitments.
- Preserving quality and release visibility during rapid execution.

### Outcome

The team delivered the five-module ecosystem within four months through coordinated work across more than 10 engineers, designers, and QA professionals. The project strengthened my experience in multi-product SaaS delivery, cross-functional leadership, UAT coordination, stakeholder communication, and post-release stabilization.

### Skills demonstrated

`SaaS` `Agile Delivery` `Cross-functional Leadership` `Sprint Coordination` `SSO` `UAT` `Release Management` `Stakeholder Communication`

---

# 04 — AI-Native ERP and POS

## Governed Conversational Business Software Platform

### Case-study summary

The AI-Native ERP and POS initiative is a product and feasibility concept for a platform that allows businesses to describe operational software needs in plain language, receive a working preview, request controlled changes, review test results, approve a version, and deploy it through a governed release process.

The project explores how AI can reduce repetitive custom-development effort without giving an AI system unrestricted production control.

### The context

Traditional ERP and POS implementation can involve lengthy discovery, configuration, development, testing, and handoffs. Even routine changes—adding a field, changing an approval rule, or creating a report—may require specialist intervention.

At the same time, unrestricted AI-generated changes introduce serious risks involving security, tenant isolation, regressions, data migrations, compliance, and recovery. The product therefore needed to balance flexibility with control.

### The objective

The initial objective was to define a focused platform for retail and trading businesses that could:

- Conduct guided discovery about business operations.
- Generate a structured ERP and POS application configuration.
- Provide a secure preview before release.
- Interpret bounded change requests in everyday language.
- Validate configuration and security rules automatically.
- Run regression tests before approval.
- Preserve version history and audit evidence.
- Require customer approval before production deployment.
- Support rollback when a released version causes problems.

### My role

My contribution focused on product definition, business case development, MVP scope, customer journey, governance, delivery planning, commercial thinking, and risk management.

I worked on:

- Product vision and value proposition.
- Problem and opportunity definition.
- MVP module selection.
- End-to-end customer and system flow.
- AI safety and approval controls.
- High-level architecture recommendations.
- Hosting and packaging concepts.
- Phased delivery roadmap.
- Pilot and validation strategy.
- Risk and mitigation planning.
- Success measures and ROI methodology.

### Proposed MVP

The focused reference application includes:

- Product catalogue, categories, variants, barcodes, and pricing.
- Inventory levels, stock transfers, and alerts.
- Point-of-sale checkout, billing, discounts, and returns.
- Customer profiles, loyalty, and credit accounts.
- Suppliers and purchasing.
- Invoices, receipts, sales, and payments.
- Multiple stores, users, roles, and permissions.
- Sales, stock, and margin reporting.

### Governed change journey

The proposed experience follows six controlled stages:

1. The customer describes the business and chooses the ERP and POS starting point.
2. Guided discovery collects stores, products, taxes, payments, inventory, approvals, reports, and role requirements.
3. The platform generates a structured application definition and tests.
4. The customer reviews a working preview.
5. Plain-language change requests are interpreted as bounded updates and validated.
6. A tested version is presented for approval before deployment, with history and rollback retained.

### Core control model

The product concept is built around a non-negotiable principle: AI should assist software evolution but should not receive unrestricted production or cloud credentials.

The control model includes:

- Structured change boundaries.
- Schema and relationship validation.
- Automated unit, API, and browser testing.
- Permission and tenant-isolation checks.
- Version-specific preview environments.
- Named approval gates.
- Immutable change and release history.
- Monitored deployment and rollback.
- Human escalation for ambiguous or high-risk changes.

### Delivery approach

#### 1. Begin with one complete journey

Instead of proposing an immediate replacement for every ERP category, the concept focuses on proving a complete retail ERP and POS journey and its AI-assisted change loop.

#### 2. Separate intent from implementation

Customers describe business needs, while the platform translates those needs into controlled definitions for data, forms, permissions, workflows, rules, reports, and notifications.

#### 3. Design governance into the product

Testing, approval, auditability, security, versioning, and recovery are core capabilities rather than later additions.

#### 4. Validate commercial assumptions through pilots

The proposal recommends a small group of similar retail businesses, measurement of current costs and lead times, parallel or preview operation, and evidence-based expansion.

#### 5. Measure both customer value and platform economics

Success measures include change reliability, time to preview, adoption, security-test performance, cost per successful change, contribution margin, and verified customer savings.

### Key challenges

- Keeping AI-generated changes predictable and auditable.
- Protecting authorization and tenant isolation.
- Preventing regressions across configurable customer applications.
- Managing high-risk database or financial-rule changes.
- Controlling AI, build, testing, infrastructure, and support costs.
- Avoiding premature expansion into a complete enterprise ERP suite.
- Validating whether conversational customization creates enough customer value.

### Intended outcome

The proposed platform aims to shorten routine software-change cycles and give growing businesses applications that evolve with their operations. The recommendation is to proceed through time-boxed discovery, MVP definition, representative cost benchmarking, threat modeling, and a controlled pilot before making broad commercial commitments.

This is a feasibility and product-strategy initiative; it should not be presented as a fully delivered production platform unless implementation evidence becomes available.

### Skills demonstrated

`Product Strategy` `ERP` `POS` `Artificial Intelligence` `MVP Definition` `Risk Management` `Platform Governance` `Business Case`

---

# 05 — AI Office Analytics

## Privacy-Conscious Computer-Vision Proof of Concept

### Case-study summary

AI Office Analytics is a self-directed proof-of-concept designed to evaluate whether existing cameras and open-source computer-vision components can generate useful workplace insights. The concept measures meeting-room occupancy, desk utilization, visitor movement, and space-use density without facial recognition or identity-level monitoring.

### The context

Organizations often lack reliable evidence about how meeting rooms, desks, and shared areas are actually used. Commercial workplace-analytics platforms can provide this intelligence, but a low-cost proof of concept is useful before a larger investment is considered.

The project explores the functional core using existing hardware and open-source software. It is deliberately constrained to local processing and anonymous tracking during the proof-of-concept phase.

### The objective

The proof of concept was defined to validate whether a single camera and local application could:

- Detect and track people in a live video feed.
- Determine whether configured room and desk zones are occupied.
- Measure dwell time and utilization percentages.
- Count directional entry and exit events.
- Produce space-utilization heatmaps.
- Store events locally.
- Present live and historical information in a dashboard.
- Operate without facial recognition or paid cloud services.

### My role

I acted as the project owner and requirements author for the proof of concept. My work focused on turning an experimental idea into a measurable, phased product definition.

My contribution included:

- Defining scope, constraints, and exclusions.
- Writing functional and non-functional requirements.
- Defining measurable acceptance targets.
- Structuring the logical system architecture.
- Selecting suitable open-source components for evaluation.
- Designing a phased implementation plan.
- Identifying accuracy, performance, privacy, and reliability risks.
- Defining a testing and proof-of-concept sign-off model.

### Proposed technical flow

The system is organized into five connected layers:

1. **Camera layer:** OpenCV captures frames from a webcam or RTSP camera.
2. **Detection and tracking:** YOLO detects people while ByteTrack or DeepSORT maintains temporary tracking identifiers.
3. **Analytics engine:** Python logic evaluates zones, dwell time, crossings, occupancy, and heatmap points.
4. **Storage:** SQLite retains events and aggregates locally, with CSV export when required.
5. **Dashboard:** Streamlit displays current status, historical trends, and utilization views.

### Functional areas

#### Meeting-room occupancy

Users define polygon zones over the camera frame. The system checks whether tracked person positions remain inside a zone for a minimum dwell period before changing the room’s occupancy state. State changes are timestamped for historical reporting.

#### Desk utilization

Each desk can be configured as a smaller zone. The system calculates occupied and empty time across an observation period and reports a utilization percentage.

#### Visitor analytics

A configurable virtual line represents an entrance. Directional crossing logic classifies tracked movements as entries or exits and produces aggregate counts.

#### Space-utilization heatmaps

Detection positions accumulate into a configurable grid. The resulting density view highlights areas with higher observed movement or presence.

#### Dashboard and storage

The local dashboard presents live zone status and historical trends. SQLite allows data to persist between application sessions without sending information to a cloud service.

### Privacy approach

Facial recognition and personal identification are intentionally excluded. The proposed proof of concept stores anonymous tracking IDs and derived events rather than biometric identities.

Local processing further limits unnecessary data transmission during early validation. Any future office deployment would still require organizational privacy review, transparent policies, access controls, retention rules, and compliance assessment.

### Delivery approach

The proposed implementation is divided into manageable validation stages:

1. Establish a stable camera feed and person detection.
2. Add persistent tracking across frames.
3. Validate one configurable zone.
4. Extend to multiple rooms and desks with dwell-time logic.
5. Add directional visitor counting.
6. Generate heatmap data and visualization.
7. Connect storage and dashboard layers for an end-to-end demonstration.

This sequencing allows the highest-risk technical assumptions to be tested before time is invested in a polished interface.

### Key challenges

- Maintaining detection accuracy in poor lighting.
- Preventing tracking-ID changes during occlusion.
- Achieving useful performance on local hardware.
- Mapping zone coordinates consistently.
- Distinguishing brief movement from meaningful occupancy.
- Recovering cleanly from dropped camera feeds.
- Preserving privacy while still producing useful analytics.
- Preventing proof-of-concept scope from expanding into production prematurely.

### Intended outcome

The project is intended to determine whether a zero-licence-cost, locally processed prototype can provide sufficiently accurate room, desk, visitor, and heatmap analytics to justify office evaluation.

It should be presented as a proof-of-concept initiative unless completed test results are available. Its current value is the clear, measurable definition of what must be proven and how the system can be developed incrementally.

### Skills demonstrated

`Computer Vision` `Python` `Product Discovery` `Proof of Concept` `Functional Requirements` `Privacy by Design` `Acceptance Criteria` `Risk Analysis`

---

# Combined Professional Value

Together, these five projects demonstrate my ability to work across different product domains while applying a consistent delivery discipline:

- Understand the business and user problem.
- Define scope and expose assumptions.
- Translate needs into structured product behavior.
- Connect features to data, roles, dependencies, and operational workflows.
- Coordinate business, product, design, engineering, QA, and leadership.
- Make requirements measurable through acceptance criteria.
- Keep risks, blockers, and decisions visible.
- Support validation, UAT, release readiness, and improvement.

The projects range from delivered SaaS products to enterprise logistics requirements, marketing personalization, AI platform strategy, and experimental computer vision. Across each one, my role is centered on the same outcome: turning complex ideas into clear plans, coordinated execution, and dependable digital products.

---

# Contact

**Nishkarsh Chaudhary**  
Technical Project Coordinator  
Mohali, Punjab, India  
[nishkarsh541@gmail.com](mailto:nishkarsh541@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/nishkarsh-chaudhary-a08967225/)
