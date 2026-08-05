'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Project, FILTER_TABS, FilterTab, filterProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const STATS = [
  { number: '10+', label: 'Years in Panipat' },
  { number: '500+', label: 'Properties handled' },
  { number: '1L+', label: 'Active buyers' },
  { number: '100+', label: 'Channel partners' },
];

const SOCIAL = [
  { name: 'Instagram', sub: 'Reels & site walkthroughs', href: '#' },
  { name: 'YouTube', sub: 'Full project tours', href: '#' },
  { name: 'Facebook', sub: 'Listings & updates', href: '#' },
  { name: 'WhatsApp', sub: 'Daily new inventory', href: 'https://wa.me/919518091945' },
];

export default function HomeClient({ projects = [] }: { projects?: Project[] }) {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const shown = filterProjects(projects, activeTab);

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        {/* ─── HERO ─── */}
        <section id="top" className="container" style={{ padding: '72px 16px 64px', scrollMarginTop: 74 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--band)', border: '1px solid var(--border)',
            borderRadius: 999, padding: '6px 14px', marginBottom: 22,
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--acc)',
          }}>
            🏡 {projects.length || 13} Projects · Panipat & NCR
          </div>

          <h1 style={{
            margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 62px)', lineHeight: 1.04,
            letterSpacing: '-0.02em', maxWidth: '20ch', color: 'var(--ink)',
          }}>
            Find the right<br />
            <span style={{ color: 'var(--acc)' }}>property</span> for you.
          </h1>

          <p style={{ margin: '20px 0 0', maxWidth: '50ch', fontSize: 16, lineHeight: 1.7, color: 'var(--muted)' }}>
            Plots, villas, floors and industrial land across 13 live projects.
            Trusted by 1 Lakh+ people, 10+ years in the market.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 34 }}>
            <Link href="/projects"
              style={{
                background: 'var(--gold)', color: '#15130F',
                fontWeight: 700, fontSize: 15, padding: '15px 28px',
                borderRadius: 999, whiteSpace: 'nowrap', textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Browse projects
            </Link>
            <a href="https://mylistings.in/" target="_blank" rel="noopener"
              style={{
                border: '1px solid var(--outline)', color: 'var(--ink)',
                fontWeight: 600, fontSize: 15, padding: '15px 28px',
                borderRadius: 999, whiteSpace: 'nowrap', textDecoration: 'none',
              }}
            >
              Explore properties ↗
            </a>
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="container" style={{ padding: '8px 16px 64px', scrollMarginTop: 74 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 24, letterSpacing: '-0.01em' }}>
              Projects
            </h2>
            <Link href="/projects" style={{ fontSize: 13, fontWeight: 700, color: 'var(--acc)', textDecoration: 'none' }}>
              View All Projects ({projects.length}) →
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="scrollbar-none" style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 12, marginBottom: 8 }}>
            {FILTER_TABS.map(tab => {
              const active = tab === activeTab;
              return (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  style={{
                    flex: '0 0 auto',
                    border: `1px solid ${active ? 'var(--gold)' : 'var(--border)'}`,
                    background: active ? 'var(--gold)' : 'var(--bg)',
                    color: active ? '#15130F' : 'var(--text)',
                    fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 13,
                    padding: '10px 18px', borderRadius: 999, cursor: 'pointer',
                    minHeight: 44, whiteSpace: 'nowrap',
                    transition: 'all 0.15s',
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 3-column grid */}
          <div className="home-projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 14,
            width: '100%',
            boxSizing: 'border-box',
          }}>
            {shown.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <style>{`
            .home-projects-grid {
              width: 100%;
              box-sizing: border-box;
            }
            @media (max-width: 768px) {
              .home-projects-grid {
                grid-template-columns: 1fr !important;
                gap: 12px !important;
              }
            }
            @media (min-width: 769px) and (max-width: 1024px) {
              .home-projects-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
          `}</style>
        </section>

        {/* ─── STATS BAND ─── */}
        <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--band)' }}>
          <div className="container" style={{
            padding: '36px 16px',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
          }}>
            {STATS.map(stat => (
              <div key={stat.number} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 28, color: 'var(--acc)' }}>
                  {stat.number}
                </span>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="container" style={{ padding: '72px 16px 8px', scrollMarginTop: 74 }}>
          <h2 style={{ margin: '0 0 22px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 26, letterSpacing: '-0.01em' }}>
            About us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--text)' }}>
                Uptown Property has spent over 10 years helping families and investors buy in Panipat and around. We work directly with builders on new projects and handle the paperwork end to end.
              </p>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--text)' }}>
                Our aim is simple: transparent advice, verified projects, and no pressure — so you can decide with the full picture in front of you.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  '10+ years of market expertise in Panipat & NCR',
                  '500+ properties in active portfolio',
                  '100+ trusted builder & channel partners',
                  'Complete legal & paperwork assistance',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text)' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: 'var(--band)', border: '1px solid var(--border)',
              borderRadius: 20, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
                Why choose us
              </span>
              {[
                { icon: '🏆', title: 'Verified projects only', sub: 'Every listing is RERA-checked and site-visited by our team.' },
                { icon: '📋', title: 'End-to-end legal support', sub: 'From booking to registry, we handle all paperwork and documentation.' },
                { icon: '💬', title: 'No pressure approach', sub: 'We share facts, not sales pitches. You decide at your own pace.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3, lineHeight: 1.5 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMMUNITY ─── */}
        <section id="community" className="container" style={{ padding: '72px 16px 0' }}>
          <h2 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 26, letterSpacing: '-0.01em' }}>
            Community
          </h2>
          <p style={{ margin: '12px 0 0', maxWidth: '52ch', fontSize: 16, lineHeight: 1.65, color: 'var(--muted)' }}>
            New launches, site visit updates and price movements — posted first on our channels.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginTop: 24 }}>
            {SOCIAL.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener"
                className="card-hover"
                style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 16, padding: '18px 20px', textDecoration: 'none',
                  display: 'flex', flexDirection: 'column', gap: 6,
                }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{s.name}</span>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{s.sub}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="container" style={{ padding: '72px 16px 40px', scrollMarginTop: 74 }}>
          <h2 style={{ margin: '0 0 24px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 26, letterSpacing: '-0.01em' }}>
            Visit or contact us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {/* Office */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>Office</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>123 Main Street, Panipat, Haryana 132103</span>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>Mon–Sat, 9:00 AM – 6:00 PM · Sunday closed</span>
              <a href="https://maps.google.com/?q=Panipat+Haryana" target="_blank" rel="noopener"
                style={{ fontSize: 13, fontWeight: 600, color: 'var(--acc)', marginTop: 4 }}>Open in Maps ↗</a>
            </div>
            {/* Phone */}
            <a href="tel:+919518091945" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 22, textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 6 }} className="card-hover">
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>Phone</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', fontFamily: 'Archivo, sans-serif' }}>+91 95180 91945</span>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>Also on WhatsApp</span>
            </a>
            {/* Email */}
            <a href="mailto:info@uptownproperties.in" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 22, textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 6 }} className="card-hover">
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>Email</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', fontFamily: 'Archivo, sans-serif' }}>info@uptownproperties.in</span>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>Reply within a working day</span>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
