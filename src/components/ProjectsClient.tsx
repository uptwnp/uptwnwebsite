'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TYPE_TABS = ['All', 'Plots', 'Builder Floors', 'Flats', 'Industrial'];

export default function ProjectsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      // Search query filter (title, location, description, segment)
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q || (
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.segment.toLowerCase().includes(q) ||
        project.type.toLowerCase().includes(q) ||
        (project.rera && project.rera.toLowerCase().includes(q))
      );

      // Type filter
      let matchesType = true;
      if (selectedType !== 'All') {
        if (selectedType === 'Plots') matchesType = project.type.includes('Plots');
        else if (selectedType === 'Builder Floors') matchesType = project.type.includes('Builder Floors') || project.form.includes('Floors');
        else if (selectedType === 'Flats') matchesType = project.type.includes('Flats') || project.form.includes('Apartments') || project.form.includes('Flats');
        else if (selectedType === 'Industrial') matchesType = project.segment.includes('Industrial') || project.type.includes('Industrial');
      }

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const hasActiveFilters = searchQuery !== '' || selectedType !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
  };

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
        <div className="container" style={{ padding: '48px 16px' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>Projects</span>
          </div>

          {/* Title */}
          <h1 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.1 }}>
            All Real Estate Projects
          </h1>
          <p style={{ margin: '12px 0 32px', fontSize: 16, color: 'var(--muted)', maxWidth: '60ch' }}>
            Explore RERA-checked plotted townships, builder floors, flats, and industrial parks across Panipat &amp; NCR.
          </p>

          {/* Search & Filter Controls */}
          <div className="search-filter-box" style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxShadow: '0 4px 20px var(--shadow)',
            marginBottom: 32,
            width: '100%',
            boxSizing: 'border-box',
          }}>
            {/* Search Bar */}
            <div style={{ position: 'relative', width: '100%' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search by project name, location (e.g. Sector 36, GT Road)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 38px 12px 42px',
                  borderRadius: 12,
                  border: '1px solid var(--border)',
                  background: 'var(--bg)',
                  color: 'var(--ink)',
                  fontSize: 14,
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                    border: 'none', background: 'none', cursor: 'pointer', color: 'var(--muted)',
                    fontSize: 16, padding: 4,
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Type Tabs & Counter Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
              paddingTop: 12,
              borderTop: '1px solid var(--divider)',
              width: '100%',
              minWidth: 0,
            }}>
              <div className="scrollbar-none" style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, maxWidth: '100%' }}>
                {TYPE_TABS.map(tab => {
                  const active = tab === selectedType;
                  return (
                    <button
                      key={tab}
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
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Counter & Reset */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600 }}>
                  Showing {filteredProjects.length} of {PROJECTS.length} projects
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    style={{
                      border: 'none', background: 'none', color: 'var(--acc)',
                      fontSize: 13, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline',
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
              width: '100%',
              boxSizing: 'border-box',
            }} className="projects-listing-grid">
              {filteredProjects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div style={{
              textAlign: 'center',
              padding: '64px 20px',
              background: 'var(--card)',
              border: '1px dashed var(--outline)',
              borderRadius: 24,
              margin: '20px 0',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: 20, margin: '0 0 8px', color: 'var(--ink)' }}>
                No matching projects found
              </h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 20px' }}>
                Try adjusting your search terms or clearing your filters to see available listings.
              </p>
              <button
                onClick={resetFilters}
                style={{
                  background: 'var(--gold)', color: '#15130F',
                  fontWeight: 700, fontSize: 14, padding: '12px 24px',
                  borderRadius: 999, border: 'none', cursor: 'pointer',
                }}
              >
                Reset all filters
              </button>
            </div>
          )}

        </div>
      </main>

      <style>{`
        .projects-listing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .search-filter-box {
            padding: 16px 14px !important;
            border-radius: 16px !important;
            margin-bottom: 20px !important;
          }
          .projects-listing-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-listing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
      `}</style>

      <Footer />
    </>
  );
}
