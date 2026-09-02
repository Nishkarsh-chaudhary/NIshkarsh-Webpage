import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono, Oswald } from 'next/font/google';
import './globals.css';

const body = Archivo({ variable: '--font-body', subsets: ['latin'] });
const display = Oswald({ variable: '--font-display', subsets: ['latin'] });
const mono = IBM_Plex_Mono({ variable: '--font-mono-custom', subsets: ['latin'], weight: ['400','500'] });

export const metadata: Metadata = {
  title: 'Nishkarsh Chaudhary | Technical Project Coordinator',
  description: 'Portfolio of Nishkarsh Chaudhary, a Technical Project Coordinator experienced in SaaS, ERP, logistics platforms, marketing technology, blockchain, Agile delivery, and AI-enabled products.',
  openGraph: {
    title: 'Nishkarsh Chaudhary | Technical Project Coordinator',
    description: 'Turning complex ideas into delivered products across SaaS, ERP, logistics, MarTech, blockchain, and AI.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}><body>{children}</body></html>;
}
