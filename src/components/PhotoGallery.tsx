'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import BrochureModal from '@/components/BrochureModal';

interface Props {
  project: Project;
}

// Placeholder gallery images (colored SVG tiles)
function getGalleryImages(slug: string): string[] {
  // Return placeholder gradient tiles — replace with real image paths
  return Array.from({ length: 4 }, (_, i) => `/api/placeholder/${slug}/${i}`);
}

export default function PhotoGallery({ project }: Props) {
  const [docModal, setDocModal] = useState<'brochure' | 'layout' | null>(null);
  const images = getGalleryImages(project.slug);
  const colors = ['#E8DDD0', '#DDD4C8', '#D4C9BA', '#CCC0AE'];

  const waUrl = `https://wa.me/919518091945?text=${encodeURIComponent('Please share photos of ' + project.title)}`;

  return (
    <>
      {/* Photo Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 180px)',
        gap: 8, borderRadius: 16, overflow: 'hidden',
        marginTop: 6,
      }}>
        {/* 4 Image Tiles (1 Big + 3 Small) - Static Placeholders */}
        {images.map((_, i) => (
          <div key={i}
            style={{
              position: 'relative', padding: 0, border: 'none', cursor: 'default',
              background: colors[i % colors.length],
              gridRow: i === 0 ? 'span 2' : 'span 1',
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {i === 0 ? (
              /* First / Main Tile Badge Overlay */
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                textAlign: 'center', padding: 20,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(21, 19, 15, 0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15130F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <line x1="1" y1="1" x2="23" y2="23" stroke="#15130F" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 18, color: '#15130F' }}>
                    Photo Not Available
                  </div>
                  <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>
                    Request site photos &amp; walkthrough below
                  </div>
                </div>
              </div>
            ) : (
              /* Smaller Tiles Icon */
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.35 }}>
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="#15130F" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" fill="#15130F" />
                <path d="M21 15l-5-5L5 21" stroke="#15130F" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </div>
        ))}

        {/* 5th Tile / Slot 8: Request Photos via WhatsApp Tile */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener"
          style={{
            gridColumn: 'span 1',
            gridRow: 'span 1',
            background: 'var(--band)',
            border: '1px dashed var(--outline)',
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: 12,
            textDecoration: 'none',
            color: 'var(--ink)',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--gold)';
            e.currentTarget.style.background = 'var(--card)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--outline)';
            e.currentTarget.style.background = 'var(--band)';
          }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(37,211,102,0.12)', color: '#25D366',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, textAlign: 'center', lineHeight: 1.3, color: 'var(--ink)' }}>
            Request Photos<br />via WhatsApp ↗
          </span>
        </a>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 14 }}>
        <button
          type="button"
          onClick={() => setDocModal('brochure')}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '12px 16px', cursor: 'pointer',
            color: 'var(--ink)', fontWeight: 700, fontSize: 14,
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          <span style={{ fontSize: 15, color: 'var(--acc)' }}>↓</span>
          Get Brochure
        </button>
        <button
          type="button"
          onClick={() => setDocModal('layout')}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '12px 16px', cursor: 'pointer',
            color: 'var(--ink)', fontWeight: 700, fontSize: 14,
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          <span style={{ fontSize: 15, color: 'var(--acc)' }}>↓</span>
          Get Layout Plan
        </button>
        <ShareButton title={project.title} />
      </div>

      {docModal && (
        <BrochureModal
          projectTitle={project.title}
          type={docModal}
          isOpen={true}
          onClose={() => setDocModal(null)}
          pdfUrl={docModal === 'brochure' ? project.brochureUrl : project.layoutUrl}
        />
      )}
    </>
  );
}

function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle');

  const share = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = window.location.href;

    // Copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied('ok');
      setTimeout(() => setCopied('idle'), 2500);
    } catch {
      setCopied('fail');
      setTimeout(() => setCopied('idle'), 2500);
    }

    // Trigger native share menu if supported
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {}
    }
  };

  return (
    <button type="button" onClick={share}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 12, padding: '12px 16px',
        color: 'var(--ink)', fontWeight: 700, fontSize: 14, cursor: 'pointer',
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <span>↗</span>
      {copied === 'ok' ? 'Link copied' : copied === 'fail' ? 'Copy failed' : 'Share Project'}
    </button>
  );
}
