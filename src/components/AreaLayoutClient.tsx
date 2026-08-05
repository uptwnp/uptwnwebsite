'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { LayoutItem, LayoutImage } from '@/data/layouts';

/* ─── Helpers ─── */
function isPdf(url: string) {
  return url.toLowerCase().includes('.pdf');
}

/* ─── Full-screen Image Viewer Modal ─── */
function ImageViewer({
  images,
  startIndex,
  projectTitle,
  onClose,
}: {
  images: LayoutImage[];
  startIndex: number;
  projectTitle: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setCurrent(i => Math.min(images.length - 1, i + 1)), [images.length]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const img = images[current];
  const pdf = isPdf(img.url);

  return (
    <div
      id="area-viewer-overlay"
      onClick={e => { if ((e.target as HTMLElement).id === 'area-viewer-overlay') onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 16, animation: 'alyFadeIn 0.2s ease',
      }}
    >
      <style>{`
        @keyframes alyFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes alyScale  { from { opacity: 0; transform: scale(0.96) } to { opacity: 1; transform: scale(1) } }
        .aly-nav:hover { background: rgba(255,255,255,0.2) !important; }
        .aly-close:hover { background: rgba(255,255,255,0.15) !important; }
        .aly-thumb-active { border-color: var(--gold) !important; }
      `}</style>

      {/* Top bar */}
      <div style={{
        width: '100%', maxWidth: 1100, display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 14, flexShrink: 0, gap: 12,
      }}>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: 'Archivo, sans-serif' }}>
            {projectTitle}
          </div>
          {img.label && (
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 2 }}>
              {img.label} {images.length > 1 && `· ${current + 1} / ${images.length}`}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <a
            href={img.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'var(--gold)', color: '#15130F',
              fontWeight: 700, fontSize: 13,
              padding: '8px 16px', borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download
          </a>
          <button
            className="aly-close"
            onClick={onClose}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontSize: 18, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.15s',
            }}
          >✕</button>
        </div>
      </div>

      {/* Main image area */}
      <div style={{
        position: 'relative', flex: 1, width: '100%', maxWidth: 1100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {current > 0 && (
          <button className="aly-nav" onClick={prev} style={{
            position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%', width: 42, height: 42,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff', transition: 'background 0.15s',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
        )}

        {pdf ? (
          <div style={{
            width: '100%', height: '65vh', background: '#1a1a1a', borderRadius: 14,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16,
            animation: 'alyScale 0.2s ease',
          }}>
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: 15 }}>PDF Layout</div>
            <a href={img.url} target="_blank" rel="noopener noreferrer" style={{
              marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'var(--gold)', color: '#15130F',
              fontWeight: 700, fontSize: 14, padding: '10px 24px', borderRadius: 999, textDecoration: 'none',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Open / Download PDF
            </a>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img.url}
            alt={img.label ?? 'Layout plan'}
            style={{ maxWidth: '100%', maxHeight: '65vh', objectFit: 'contain', borderRadius: 12, display: 'block', animation: 'alyScale 0.2s ease' }}
          />
        )}

        {current < images.length - 1 && (
          <button className="aly-nav" onClick={next} style={{
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%', width: 42, height: 42,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff', transition: 'background 0.15s',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div style={{
          display: 'flex', gap: 8, marginTop: 14, flexShrink: 0,
          overflowX: 'auto', maxWidth: 1100, width: '100%', paddingBottom: 4,
        }}>
          {images.map((im, i) => (
            <button
              key={i}
              className={i === current ? 'aly-thumb-active' : ''}
              onClick={() => setCurrent(i)}
              style={{
                flexShrink: 0, width: 64, height: 44, borderRadius: 8, overflow: 'hidden',
                border: `2px solid ${i === current ? 'var(--gold)' : 'rgba(255,255,255,0.2)'}`,
                background: '#222', cursor: 'pointer', padding: 0, transition: 'border-color 0.15s',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {isPdf(im.url) ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={im.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Clean Full-Width Preview Card (Pure Preview Only) ─── */
function LayoutPreviewCard({
  layout,
  onView,
}: {
  layout: LayoutItem;
  onView: (imgIndex: number) => void;
}) {
  const mainIsPdf = isPdf(layout.imageUrl);

  return (
    <div style={{
      width: '100%',
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 24, overflow: 'hidden',
      boxShadow: '0 4px 24px var(--shadow)',
      boxSizing: 'border-box',
    }}>
      {/* Main Full-Width Preview Area */}
      <div
        className="preview-box"
        style={{
          width: '100%',
          background: 'var(--band)', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', cursor: 'pointer',
        }}
        onClick={() => onView(0)}
      >
        {mainIsPdf ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '48px 24px', textAlign: 'center' }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <span style={{ fontSize: 16, color: 'var(--ink)', fontWeight: 700 }}>PDF Layout Plan</span>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>Click to view full screen</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={layout.imageUrl}
            alt={`${layout.projectTitle} layout preview`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'var(--band)', display: 'block' }}
          />
        )}

        {/* Hover overlay */}
        <div className="det-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0, transition: 'opacity 0.2s',
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.92)', borderRadius: 999,
            padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 8,
            fontWeight: 700, fontSize: 14, color: '#15130F',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            Click to View Full Screen
          </div>
        </div>

        {/* Floating Download Icon Button */}
        <a
          href={layout.images[0].url}
          download
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          title="Download layout"
          style={{
            position: 'absolute', bottom: 14, right: 14,
            background: 'var(--gold)', color: '#15130F',
            borderRadius: '50%', width: 42, height: 42,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,0.25)', textDecoration: 'none',
            zIndex: 3,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
      </div>

      {/* Thumbnail row if multiple images */}
      {layout.images.length > 1 && (
        <div style={{ display: 'flex', gap: 10, padding: '14px 18px', overflowX: 'auto', borderTop: '1px solid var(--divider)' }}>
          {layout.images.map((img, i) => (
            <button
              key={i}
              onClick={() => onView(i)}
              style={{
                flexShrink: 0, width: 80, height: 54, borderRadius: 10, overflow: 'hidden',
                border: '2px solid var(--border)',
                background: 'var(--band)', cursor: 'pointer', padding: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              {isPdf(img.url) ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={img.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main ─── */
export default function AreaLayoutClient({
  layouts,
  city,
  area,
  cityLabel,
  areaLabel,
}: {
  layouts: LayoutItem[];
  city: string;
  area: string;
  cityLabel: string;
  areaLabel: string;
}) {
  const [viewer, setViewer] = useState<{ layoutIdx: number; imgIdx: number } | null>(null);

  /* Download all for this area */
  const downloadAll = () => {
    layouts.forEach((layout, li) => {
      layout.images.forEach((img, ii) => {
        setTimeout(() => {
          const a = document.createElement('a');
          a.href = img.url;
          a.download = '';
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }, (li * layout.images.length + ii) * 450);
      });
    });
  };

  const openViewer = (layoutIdx: number, imgIdx: number) =>
    setViewer({ layoutIdx, imgIdx });

  const firstProjectSlug = layouts.find(l => l.projectSlug)?.projectSlug;

  return (
    <>
      {viewer !== null && layouts[viewer.layoutIdx] && (
        <ImageViewer
          images={layouts[viewer.layoutIdx].images}
          startIndex={viewer.imgIdx}
          projectTitle={layouts[viewer.layoutIdx].projectTitle}
          onClose={() => setViewer(null)}
        />
      )}

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
        <div className="container" style={{ padding: '32px 16px', boxSizing: 'border-box' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', marginBottom: 20, flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'inherit' }}>Home</Link>
            <span>/</span>
            <Link href="/layouts" style={{ color: 'inherit' }}>Layouts</Link>
            <span>/</span>
            <Link href={`/layouts/${city}`} style={{ color: 'inherit' }}>{cityLabel}</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{areaLabel}</span>
          </div>

          {/* Hero — Clean with Action Buttons All Up Top */}
          <div className="area-hero">
            <div className="area-hero-text">
              {/* Location pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'var(--band)', border: '1px solid var(--border)',
                borderRadius: 999, padding: '4px 12px',
                fontSize: 11, fontWeight: 700, color: 'var(--muted)',
                letterSpacing: '0.03em', textTransform: 'uppercase',
                marginBottom: 14,
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {cityLabel}
              </div>

              <h1 style={{
                margin: '0 0 10px', fontFamily: 'Archivo, sans-serif',
                fontWeight: 800, fontSize: 'clamp(26px, 6vw, 44px)',
                letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.1,
              }}>
                {areaLabel}
                <span style={{ color: 'var(--gold)' }}> Layout Plans</span>
              </h1>

              <p style={{ margin: '0 0 20px', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, maxWidth: '52ch' }}>
                {layouts.length} layout {layouts.length === 1 ? 'plan' : 'plans'} available for {areaLabel}, {cityLabel}. Click preview to view full screen.
              </p>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
                {[
                  { label: 'Layouts', value: layouts.length },
                  { label: 'Total Plans', value: layouts.reduce((s, l) => s + l.images.length, 0) },
                  { label: 'Area', value: areaLabel },
                ].map(stat => (
                  <div key={stat.label} style={{ borderLeft: '3px solid var(--gold)', paddingLeft: 10 }}>
                    <div style={{ fontSize: 20, fontWeight: 800, fontFamily: 'Archivo, sans-serif', color: 'var(--ink)', lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, marginTop: 3 }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* All Top Action Buttons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} className="area-hero-actions">
                <button
                  id="area-download-all-btn"
                  onClick={downloadAll}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'var(--gold)', color: '#15130F',
                    fontWeight: 700, fontSize: 14,
                    padding: '12px 24px', borderRadius: 999,
                    border: 'none', cursor: 'pointer',
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download All ({layouts.reduce((s, l) => s + l.images.length, 0)})
                </button>

                {firstProjectSlug && (
                  <Link
                    href={`/projects/${firstProjectSlug}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      border: '1px solid var(--border)', borderRadius: 999,
                      padding: '12px 22px', fontSize: 14, fontWeight: 600,
                      color: 'var(--ink)', textDecoration: 'none', background: 'var(--card)',
                      transition: 'border-color 0.15s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    View Project Details
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'var(--divider)', margin: '28px 0' }} />

          {/* Full-width Layout Previews Stack */}
          <div className="area-layouts-stack">
            {layouts.map((layout, idx) => (
              <LayoutPreviewCard
                key={layout.id}
                layout={layout}
                onView={(imgIdx) => openViewer(idx, imgIdx)}
              />
            ))}
          </div>

          {/* Back link */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link
              href="/layouts"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                border: '1px solid var(--border)', borderRadius: 999,
                padding: '11px 24px', fontSize: 14, fontWeight: 600,
                color: 'var(--text)', textDecoration: 'none',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              All Layouts
            </Link>
          </div>
        </div>
      </main>

      <style>{`
        .det-overlay { opacity: 0; transition: opacity 0.2s; }
        div:hover > .det-overlay { opacity: 1 !important; }

        .area-hero { width: 100%; }
        .area-hero-text { max-width: 640px; }

        .area-layouts-stack {
          display: flex;
          flex-direction: column;
          gap: 28px;
          width: 100%;
        }

        .preview-box {
          aspect-ratio: 16 / 9;
          max-height: 70vh;
        }

        @media (max-width: 640px) {
          .area-hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .area-hero-actions > * {
            width: 100% !important;
            justify-content: center !important;
            box-sizing: border-box;
          }
          .preview-box {
            aspect-ratio: 4 / 3;
            max-height: 55vh;
          }
          .area-layouts-stack {
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}
