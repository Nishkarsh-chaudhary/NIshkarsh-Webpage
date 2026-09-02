import { Fragment, type ReactNode } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import caseStudyMarkdown from '../../../case-study.md?raw';

const studies = [
  { slug: 'move-my-stuff', number: '01', title: 'Move My Stuff' },
  {
    slug: 'koala-marketing-cloud',
    number: '02',
    title: 'Koala Marketing Cloud',
  },
  { slug: 'worksbuddy', number: '03', title: 'Worksbuddy' },
  { slug: 'ai-native-erp-pos', number: '04', title: 'AI-Native ERP and POS' },
  { slug: 'ai-office-analytics', number: '05', title: 'AI Office Analytics' },
] as const;

const sections = Array.from(
  caseStudyMarkdown.matchAll(/^# 0[1-5] —[\s\S]*?(?=^---$)/gm),
  (match) => match[0].trim(),
);

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function inlineMarkdown(text: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith('**'))
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      if (part.startsWith('`'))
        return <code key={index}>{part.slice(1, -1)}</code>;
      return <Fragment key={index}>{part}</Fragment>;
    });
}

function renderCaseStudy(markdown: string) {
  const lines = markdown.split('\n');
  const blocks: ReactNode[] = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const id = level >= 3 ? slugify(heading[2]) : undefined;
      const content = inlineMarkdown(heading[2]);
      blocks.push(
        level === 1 ? (
          <h2 key={i}>{content}</h2>
        ) : level === 2 ? (
          <h3 key={i}>{content}</h3>
        ) : (
          <h4 id={id} key={i}>
            {content}
          </h4>
        ),
      );
      i++;
      continue;
    }
    if (/^-\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^-\s+/.test(lines[i].trim()))
        items.push(lines[i++].trim().replace(/^-\s+/, ''));
      blocks.push(
        <ul key={`u-${i}`}>
          {items.map((item, j) => (
            <li key={j}>{inlineMarkdown(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim()))
        items.push(lines[i++].trim().replace(/^\d+\.\s+/, ''));
      blocks.push(
        <ol key={`o-${i}`}>
          {items.map((item, j) => (
            <li key={j}>{inlineMarkdown(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }
    const paragraph: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4})\s+|^-\s+|^\d+\.\s+/.test(lines[i].trim())
    )
      paragraph.push(lines[i++].trim());
    blocks.push(<p key={`p-${i}`}>{inlineMarkdown(paragraph.join(' '))}</p>);
  }
  return blocks;
}

export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = studies.findIndex((study) => study.slug === slug);
  if (index < 0)
    return (
      <main className="case-not-found">
        <h1>Case study not found.</h1>
        <a href="/#projects">Return to projects</a>
      </main>
    );
  const study = studies[index];
  const markdown = sections[index];
  const toc = Array.from(
    markdown.matchAll(/^###\s+(.+)$/gm),
    (match) => match[1],
  );
  const previous = studies[index - 1];
  const next = studies[index + 1];

  return (
    <main className="case-page">
      <header className="case-page-header">
        <a href="/" className="brand">
          <span className="monogram">NC</span>
          <span>
            <strong>Nishkarsh Chaudhary</strong>
            <small>Technical Project Coordinator</small>
          </span>
        </a>
        <a href="/" className="case-back">
          <ArrowLeft /> Back to portfolio
        </a>
      </header>
      <div className="case-shell">
        <article className="case-document">
          <p className="section-label">CASE STUDY / {study.number}</p>
          {renderCaseStudy(markdown)}
          <aside className="case-note">
            Selected details are generalized to respect client and product
            confidentiality.
          </aside>
          <nav className="case-next" aria-label="Other case studies">
            {previous ? (
              <a href={`/case-studies/${previous.slug}`}>
                <small>Previous</small>
                <span>← {previous.title}</span>
              </a>
            ) : (
              <span />
            )}
            {next && (
              <a href={`/case-studies/${next.slug}`}>
                <small>Next</small>
                <span>
                  {next.title} <ArrowUpRight />
                </span>
              </a>
            )}
          </nav>
        </article>
        <aside className="case-toc">
          <p>TABLE OF CONTENTS</p>
          <nav aria-label="Case study contents">
            {toc.map((heading, i) => (
              <a href={`#${slugify(heading)}`} key={heading}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {heading}
              </a>
            ))}
          </nav>
          <a className="case-toc-back" href="/case-studies">
            <ArrowLeft /> Back to case studies
          </a>
        </aside>
      </div>
    </main>
  );
}
