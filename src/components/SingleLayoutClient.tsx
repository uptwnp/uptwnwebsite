'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { LayoutItem, LayoutImage } from '@/data/layouts';

function isPdf(url: string) {
  return url.toLowerCase().includes('.pdf');
}

/* ─── Full-screen Viewer Modal ─── */
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
      id="single-viewer-overlay"
      onClick={e => { if ((e.target as HTMLElement).id === 'single-viewer-overlay') onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 16, animation: 'slyFadeIn 0.2s ease',
      }}
    >
      <style>{`
        @keyframes slyFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slyScale  { from { opacity: 0; transform: scale(0.96) } to { opacity: 1; transform: scale(1) } }
        .sly-nav:hover { background: rgba(255,255,255,0.2) !important; }
        .sly-close:hover { background: rgba(255,255,255,0.15) !important; }
        .sly-thumb-active { border-color: var(--gold) !important; }
      `}</style>

      {/* Top bar */}
      <div style={{
        width: '100%', maxWidth: 1100, display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 14, flexShrink: 0, gap: 12,
      }}>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, fontFamily: 'Archivo, sans-serif' }}>
            {projectTitle}
          </div>
          {img.label && (
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 2 }}>
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
            className="sly-close"
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

      {/* Main viewer */}
      <div style={{
        position: 'relative', flex: 1, width: '100%', maxWidth: 1100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {current > 0 && (
          <button className="sly-nav" onClick={prev} style={{
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
          <iframe
            src={`${img.url}#toolbar=0&navpanes=0`}
            title={`${projectTitle} PDF Viewer`}
            style={{
              width: '100%', height: '78vh', background: '#ffffff', borderRadius: 14,
              border: 'none', animation: 'slyScale 0.2s ease',
            }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img.url}
            alt={img.label ?? 'Layout plan'}
            style={{ maxWidth: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: 12, display: 'block', animation: 'slyScale 0.2s ease' }}
          />
        )}

        {current < images.length - 1 && (
          <button className="sly-nav" onClick={next} style={{
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

      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={{
          display: 'flex', gap: 8, marginTop: 14, flexShrink: 0,
          overflowX: 'auto', maxWidth: 1100, width: '100%', paddingBottom: 4,
        }}>
          {images.map((im, i) => (
            <button
              key={i}
              className={i === current ? 'sly-thumb-active' : ''}
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

/* ─── Related Layout Card ─── */
function RelatedLayoutCard({ item }: { item: LayoutItem }) {
  const href = `/layouts/${item.citySlug}/${item.slug}`;

  return (
    <Link
      href={href}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 18, padding: '18px 20px',
        display: 'flex', flexDirection: 'column', gap: 10,
        height: '100%', boxSizing: 'border-box',
        transition: 'transform 0.15s, border-color 0.15s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
      }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            background: item.type === 'Industrial' ? '#1a3a5c' : item.type === 'Commercial' ? '#2d1a5c' : '#1a4a2a',
            color: '#fff', fontSize: 10, fontWeight: 700,
            padding: '3px 8px', borderRadius: 999, letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>{item.type}</span>
          <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>{item.location}</span>
        </div>
        <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 16, color: 'var(--ink)', lineHeight: 1.3 }}>
          {item.projectTitle}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 700, color: 'var(--gold)', marginTop: 'auto' }}>
          View Layout Plan
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}

/* ─── Main Single Layout Client Component ─── */
export default function SingleLayoutClient({
  layout,
  otherLayouts,
}: {
  layout: LayoutItem;
  otherLayouts: LayoutItem[];
}) {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [showViewer, setShowViewer] = useState(false);

  const currentMedia = layout.images[selectedImgIdx] ?? layout.images[0];
  const currentIsPdf = isPdf(currentMedia.url);

  return (
    <>
      {showViewer && (
        <ImageViewer
          images={layout.images}
          startIndex={selectedImgIdx}
          projectTitle={layout.projectTitle}
          onClose={() => setShowViewer(false)}
        />
      )}

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
        <div className="container" style={{ padding: '32px 16px', boxSizing: 'border-box' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', marginBottom: 24, flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/layouts" style={{ color: 'inherit', textDecoration: 'none' }}>Layouts</Link>
            <span>/</span>
            <Link href={`/layouts/${layout.citySlug}/${layout.areaSlug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{layout.areaLabel}</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{layout.projectTitle}</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
              <span style={{
                background: layout.type === 'Industrial' ? '#1a3a5c' : layout.type === 'Commercial' ? '#2d1a5c' : '#1a4a2a',
                color: '#fff', fontSize: 11, fontWeight: 700,
                padding: '4px 12px', borderRadius: 999, letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {layout.type}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--muted)', fontWeight: 600 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {layout.location}
              </span>
            </div>

            {(() => {
              const cleanTitle = layout.projectTitle.replace(/\s+(layout\s+plan|layout)$/i, '');
              return (
                <h1 style={{
                  margin: '0 0 12px', fontFamily: 'Archivo, sans-serif',
                  fontWeight: 800, fontSize: 'clamp(28px, 5vw, 44px)',
                  letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.1,
                }}>
                  {cleanTitle} <span style={{ color: 'var(--gold)' }}>Layout Plan</span>
                </h1>
              );
            })()}

            {layout.description && (
              <p style={{ margin: '0 0 20px', fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, maxWidth: '64ch' }}>
                {layout.description}
              </p>
            )}

            {/* Tags & Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginTop: 20 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {layout.tags && layout.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 12, fontWeight: 600, color: 'var(--muted)',
                    background: 'var(--card)', border: '1px solid var(--border)',
                    padding: '4px 12px', borderRadius: 999,
                  }}>{tag}</span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href={currentMedia.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'var(--gold)', color: '#15130F',
                    fontWeight: 700, fontSize: 14,
                    padding: '12px 24px', borderRadius: 999,
                    textDecoration: 'none', transition: 'opacity 0.15s',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Layout Plan
                </a>

                {layout.projectSlug && (
                  <Link
                    href={`/projects/${layout.projectSlug}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      border: '1px solid var(--border)', borderRadius: 999,
                      padding: '12px 22px', fontSize: 14, fontWeight: 600,
                      color: 'var(--ink)', textDecoration: 'none', background: 'var(--card)',
                    }}
                  >
                    View Project Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Main Full-Width Viewer Container */}
          <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 6px 30px var(--shadow)',
            boxSizing: 'border-box', marginBottom: 48,
          }}>
            <div style={{
              width: '100%', position: 'relative',
              background: currentIsPdf ? '#f8f9fa' : 'var(--band)',
              minHeight: currentIsPdf ? 620 : 450,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {currentIsPdf ? (
                <iframe
                  src={`${currentMedia.url}#toolbar=0&navpanes=0&view=FitH`}
                  title={`${layout.projectTitle} Layout Viewer`}
                  style={{
                    width: '100%', height: '70vh', minHeight: '620px',
                    border: 'none', background: '#ffffff',
                  }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentMedia.url}
                  alt={`${layout.projectTitle} Layout Plan`}
                  onClick={() => setShowViewer(true)}
                  style={{ width: '100%', height: '100%', maxHeight: '75vh', objectFit: 'contain', cursor: 'pointer', display: 'block' }}
                />
              )}

              {/* Fullscreen Trigger Button */}
              <button
                onClick={() => setShowViewer(true)}
                title="View Full Screen"
                style={{
                  position: 'absolute', top: 16, right: 16, zIndex: 3,
                  background: 'rgba(0,0,0,0.75)', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 999, padding: '10px 18px',
                  display: 'flex', alignItems: 'center', gap: 7,
                  fontSize: 13, fontWeight: 700, cursor: 'pointer',
                  backdropFilter: 'blur(4px)', boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
                </svg>
                Full Screen
              </button>
            </div>

            {/* Thumbnail selector strip if multiple images */}
            {layout.images.length > 1 && (
              <div style={{ display: 'flex', gap: 12, padding: '16px 20px', overflowX: 'auto', borderTop: '1px solid var(--divider)', background: 'var(--card)' }}>
                {layout.images.map((im, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImgIdx(i)}
                    style={{
                      flexShrink: 0, width: 90, height: 60, borderRadius: 12, overflow: 'hidden',
                      border: `2px solid ${i === selectedImgIdx ? 'var(--gold)' : 'var(--border)'}`,
                      background: 'var(--band)', cursor: 'pointer', padding: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'border-color 0.15s',
                    }}
                  >
                    {isPdf(im.url) ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

          {/* Other Layouts Section */}
          {otherLayouts.length > 0 && (
            <div style={{ marginTop: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <h2 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 24, color: 'var(--ink)' }}>
                    Explore Other Layout Plans
                  </h2>
                  <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--muted)' }}>
                    More project layout maps across Panipat &amp; NCR.
                  </p>
                </div>
                <Link
                  href="/layouts"
                  style={{ fontSize: 14, fontWeight: 700, color: 'var(--gold)', textDecoration: 'none' }}
                >
                  View All Layouts →
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                {otherLayouts.slice(0, 4).map(item => (
                  <RelatedLayoutCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
