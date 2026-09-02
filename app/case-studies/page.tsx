import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    number: '01',
    slug: 'move-my-stuff',
    title: 'Move My Stuff',
    type: 'Smart Logistics and Operations Platform',
    image: '/projects/move-my-stuff.png',
    description:
      'A connected operating model spanning customer setup, locations, pricing, bookings, jobs, capacity, routes, finance, and integrations.',
    tags: ['Logistics', 'ERP', 'Requirements', 'UAT'],
  },
  {
    number: '02',
    slug: 'koala-marketing-cloud',
    title: 'Koala Marketing Cloud',
    type: 'Customer Engagement and Behavior-Based Marketing',
    image: '/projects/koala-marketing-cloud.png',
    description:
      'Connected signup forms, customer profiles, consent, dynamic audiences, behavioral activity, and personalized experiences.',
    tags: ['MarTech', 'Personalization', 'Customer Data'],
  },
  {
    number: '03',
    slug: 'worksbuddy',
    title: 'Worksbuddy',
    type: 'Unified Business Management SaaS Ecosystem',
    image: '/projects/worksbuddy-dashboard.png',
    description:
      'Five connected business modules coordinated across design, engineering, QA, and senior stakeholders within four months.',
    tags: ['SaaS', 'Agile Delivery', 'SSO', 'Release'],
  },
  {
    number: '04',
    slug: 'ai-native-erp-pos',
    title: 'AI-Native ERP & POS',
    type: 'Governed Conversational Business Software',
    image: '/projects/ai-erp-pos.png',
    description:
      'A controlled product concept for describing, previewing, testing, approving, and deploying business software changes.',
    tags: ['AI', 'ERP', 'POS', 'Governance'],
  },
  {
    number: '05',
    slug: 'ai-office-analytics',
    title: 'AI Office Analytics',
    type: 'Privacy-Conscious Computer-Vision Proof of Concept',
    image: '/projects/ai-office-analytics.png',
    description:
      'Anonymous occupancy, utilization, visitor movement, and space-density analytics using local computer vision.',
    tags: ['Computer Vision', 'Python', 'Privacy', 'PoC'],
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <main className="studies-page">
      <header className="case-page-header">
        <a href="/" className="brand">
          <span className="monogram">NC</span>
          <span>
            <strong>Nishkarsh Chaudhary</strong>
            <small>Technical Project Coordinator</small>
          </span>
        </a>
        <a href="/#projects" className="case-back">
          <ArrowLeft /> Portfolio
        </a>
      </header>
      <section className="studies-hero">
        <p className="section-label">[ ALL CASE STUDIES ]</p>
        <h1>
          Product delivery,
          <br />
          <span>in practice.</span>
        </h1>
        <p>
          Five projects across logistics, marketing technology, SaaS, ERP, and
          applied AI—each shaped through structured requirements and coordinated
          execution.
        </p>
      </section>
      <section className="studies-list" aria-label="Case studies">
        {caseStudies.map((study) => (
          <a
            className="study-row"
            href={`/case-studies/${study.slug}`}
            key={study.slug}
          >
            <div className="study-image">
              <img src={study.image} alt="" />
              <span>{study.number} / 05</span>
            </div>
            <div className="study-info">
              <p>{study.type}</p>
              <h2>{study.title}</h2>
              <p>{study.description}</p>
              <div>
                {study.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <ArrowUpRight className="study-arrow" />
          </a>
        ))}
      </section>
      <footer className="studies-footer">
        <a href="/">Nishkarsh Chaudhary</a>
        <span>Technical Project Coordinator</span>
      </footer>
    </main>
  );
}
