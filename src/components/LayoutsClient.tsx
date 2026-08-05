'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LAYOUT_TYPE_TABS, type LayoutItem, type LayoutTypeTab } from '@/data/layouts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Layout Card — Clean text-focused card linking to /layouts/[city]/[area] ─── */
function LayoutCard({ item }: { item: LayoutItem }) {
  const router = useRouter();
  const href = `/layouts/${item.citySlug}/${item.slug}`;

  return (
    <div
      className="layout-card card-hover"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        padding: '22px 24px',
        cursor: 'pointer',
        transition: 'border-color 0.15s, box-shadow 0.15s, transform 0.15s',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        justifyContent: 'space-between',
      }}
      onClick={() => router.push(href)}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
    >
      {/* Top Header: Type badge & Plans count */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <span style={{
          background: item.type === 'Industrial' ? '#1a3a5c' : item.type === 'Commercial' ? '#2d1a5c' : '#1a4a2a',
          color: '#fff', fontSize: 10, fontWeight: 700,
          padding: '4px 10px', borderRadius: 999, letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          {item.type}
        </span>
        <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>
          {item.images.length} {item.images.length === 1 ? 'Layout Plan' : 'Layout Plans'}
        </span>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--ink)', lineHeight: 1.25 }}>
          {item.projectTitle}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', fontSize: 13, fontWeight: 500 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          {item.location}
        </div>
        {item.description && (
          <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, marginTop: 4 }}>
            {item.description}
          </div>
        )}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            fontSize: 11, fontWeight: 600, color: 'var(--muted)',
            background: 'var(--band)', border: '1px solid var(--border)',
            padding: '3px 10px', borderRadius: 999,
          }}>{tag}</span>
        ))}
      </div>

      {/* Action Button */}
      <div style={{ paddingTop: 14, borderTop: '1px solid var(--divider)' }}>
        <Link
          href={href}
          onClick={e => e.stopPropagation()}
          style={{
            width: '100%', padding: '11px 0', borderRadius: 12,
            background: 'var(--gold)', border: 'none',
            color: '#15130F', fontSize: 13, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            textDecoration: 'none', transition: 'opacity 0.15s',
            boxSizing: 'border-box',
          }}
        >
          View Layout Plans
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

/* ─── Main Client Component ─── */
export default function LayoutsClient({ layouts }: { layouts: LayoutItem[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<LayoutTypeTab>('All');

  const filteredLayouts = useMemo(() => {
    return layouts.filter(item => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q || (
        item.projectTitle.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.areaLabel.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      );
      const matchesType = selectedType === 'All' || item.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [layouts, searchQuery, selectedType]);

  const hasActiveFilters = searchQuery !== '' || selectedType !== 'All';
  const resetFilters = () => { setSearchQuery(''); setSelectedType('All'); };

  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80, width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <div className="container" style={{ padding: '48px 16px', width: '100%', boxSizing: 'border-box' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>Layouts</span>
          </div>

          {/* Title row */}
          <div style={{ marginBottom: 6 }}>
            <h1 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.1 }}>
              Project Layouts
            </h1>
            <p style={{ margin: '10px 0 0', fontSize: 15, color: 'var(--muted)', maxWidth: '58ch' }}>
              Explore layout plans for real estate projects across Panipat &amp; NCR — plots, townships, and industrial parks.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="search-filter-box" style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '20px 24px',
            display: 'flex', flexDirection: 'column', gap: 16,
            boxShadow: '0 4px 20px var(--shadow)', marginBottom: 32, marginTop: 28,
            width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflow: 'hidden',
          }}>
            <div style={{ position: 'relative', width: '100%', minWidth: 0 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                id="layouts-search-input"
                type="text"
                placeholder="Search project name, location (e.g. NH 44, Sector 36)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%', padding: '12px 38px 12px 42px',
                  borderRadius: 12, border: '1px solid var(--border)',
                  background: 'var(--bg)', color: 'var(--ink)',
                  outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: 16, padding: 4 }}>✕</button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingTop: 12, borderTop: '1px solid var(--divider)', width: '100%', minWidth: 0, maxWidth: '100%' }}>
              <div className="scrollbar-none" style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, width: '100%', minWidth: 0, maxWidth: '100%' }}>
                {LAYOUT_TYPE_TABS.map(tab => {
                  const active = tab === selectedType;
                  return (
                    <button
                      key={tab}
                      id={`layout-type-tab-${tab.toLowerCase()}`}
                      onClick={() => setSelectedType(tab)}
                      style={{
                        flex: '0 0 auto',
                        border: `1px solid ${active ? 'var(--gold)' : 'var(--border)'}`,
                        background: active ? 'var(--gold)' : 'var(--bg)',
                        color: active ? '#15130F' : 'var(--text)',
                        fontWeight: 600, fontSize: 13,
                        padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >{tab}</button>
                  );
                })}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600 }}>
                  {filteredLayouts.length} of {layouts.length} layouts
                </span>
                {hasActiveFilters && (
                  <button onClick={resetFilters} style={{ border: 'none', background: 'none', color: 'var(--acc)', fontSize: 13, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Grid */}
          {filteredLayouts.length > 0 ? (
            <div className="layouts-grid">
              {filteredLayouts.map(item => (
                <LayoutCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center', padding: '64px 20px',
              background: 'var(--card)', border: '1px dashed var(--outline)',
              borderRadius: 24, margin: '20px 0', width: '100%', boxSizing: 'border-box',
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🗺️</div>
              <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: 20, margin: '0 0 8px', color: 'var(--ink)' }}>No layouts found</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 20px' }}>Try adjusting your search or clearing filters.</p>
              <button onClick={resetFilters} style={{ background: 'var(--gold)', color: '#15130F', fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 999, border: 'none', cursor: 'pointer' }}>
                Reset filters
              </button>
            </div>
          )}
        </div>
      </main>

      <style>{`
        .layouts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .search-filter-box { padding: 16px 14px !important; border-radius: 16px !important; margin-bottom: 20px !important; }
          .layouts-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .layouts-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}
