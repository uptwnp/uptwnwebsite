'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import BrochureModal from '@/components/BrochureModal';

interface Props {
  project: Project;
}

// Placeholder gallery images (colored SVG tiles)
function getGalleryImages(slug: string): string[] {
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
      <div className="photo-gallery-grid">
        {/* Main Hero Tile */}
        <div
          className="photo-tile photo-tile-main"
          style={{ background: colors[0] }}
        >
          <div className="main-tile-content">
            <div className="camera-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15130F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <line x1="1" y1="1" x2="23" y2="23" stroke="#15130F" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <div className="main-tile-title">
                Photo Not Available
              </div>
              <div className="main-tile-sub">
                Request site photos &amp; walkthrough below
              </div>
            </div>
          </div>
        </div>

        {/* Small Tile 1 (Visible on Mobile & Desktop) */}
        <div className="photo-tile photo-tile-sub" style={{ background: colors[1] }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.35 }}>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#15130F" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#15130F" />
            <path d="M21 15l-5-5L5 21" stroke="#15130F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Small Tile 2 (Desktop Only) */}
        <div className="photo-tile photo-tile-sub photo-tile-mobile-hide" style={{ background: colors[2] }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.35 }}>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#15130F" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#15130F" />
            <path d="M21 15l-5-5L5 21" stroke="#15130F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Small Tile 3 (Desktop Only) */}
        <div className="photo-tile photo-tile-sub photo-tile-mobile-hide" style={{ background: colors[3] }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.35 }}>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#15130F" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#15130F" />
            <path d="M21 15l-5-5L5 21" stroke="#15130F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* WhatsApp Request Tile (Visible on Mobile & Desktop) */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener"
          className="photo-tile photo-tile-wa"
        >
          <div className="wa-icon-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <span className="wa-text">
            Request Photos<br />via WhatsApp ↗
          </span>
        </a>
      </div>

      {/* Action Buttons */}
      <div className="gallery-actions">
        <button
          type="button"
          onClick={() => setDocModal('brochure')}
          className="gallery-action-btn"
        >
          <span className="btn-icon">↓</span>
          <span className="btn-text-full">Get Brochure</span>
          <span className="btn-text-short">Brochure</span>
        </button>
        <button
          type="button"
          onClick={() => setDocModal('layout')}
          className="gallery-action-btn"
        >
          <span className="btn-icon">↓</span>
          <span className="btn-text-full">Get Layout</span>
          <span className="btn-text-short">Layout</span>
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

      <style>{`
        .photo-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 190px 105px;
          gap: 8px;
          border-radius: 16px;
          overflow: hidden;
          margin-top: 6px;
        }

        .photo-tile {
          position: relative;
          padding: 0;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 8px;
        }

        .photo-tile-main {
          grid-column: span 2;
          grid-row: span 1;
        }

        .main-tile-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          padding: 16px;
        }

        .camera-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(21, 19, 15, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .main-tile-title {
          font-family: Archivo, sans-serif;
          font-weight: 800;
          font-size: 17px;
          color: #15130F;
        }

        .main-tile-sub {
          font-size: 13px;
          color: #555;
          margin-top: 3px;
        }

        .photo-tile-sub {
          grid-column: span 1;
          grid-row: span 1;
        }

        .photo-tile-mobile-hide {
          display: none !important;
        }

        .photo-tile-wa {
          grid-column: span 1;
          grid-row: span 1;
          background: var(--band);
          border: 1px dashed var(--outline);
          border-radius: 8px;
          gap: 5px;
          padding: 8px;
          text-decoration: none;
          color: var(--ink);
          transition: all 0.15s ease;
        }

        .photo-tile-wa:hover {
          border-color: var(--gold);
          background: var(--card);
        }

        .wa-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.12);
          color: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wa-text {
          font-size: 11px;
          font-weight: 700;
          text-align: center;
          line-height: 1.25;
          color: var(--ink);
        }

        /* Action Buttons - 100% Uniform & Consistent */
        .gallery-actions {
          display: flex;
          flex-wrap: nowrap;
          gap: 8px;
          margin-top: 12px;
        }

        .gallery-action-btn, .gallery-share-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          height: 42px;
          padding: 0 8px;
          cursor: pointer;
          color: var(--ink);
          font-weight: 700;
          font-size: 13px;
          white-space: nowrap;
          transition: all 0.15s ease;
          flex: 1 1 0px;
          min-width: 0;
          box-sizing: border-box;
        }

        .gallery-action-btn:hover, .gallery-share-btn:hover {
          border-color: var(--gold);
          background: var(--band);
        }

        .btn-icon {
          font-size: 14px;
          color: var(--acc);
          flex-shrink: 0;
        }

        .btn-text-short {
          display: inline;
        }

        .btn-text-full {
          display: none;
        }

        /* Desktop Layout (768px and up) */
        @media (min-width: 768px) {
          .photo-gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 175px);
          }

          .photo-tile-main {
            grid-column: span 2;
            grid-row: span 2;
          }

          .camera-icon-wrapper {
            width: 48px;
            height: 48px;
          }

          .main-tile-title {
            font-size: 18px;
          }

          .photo-tile-mobile-hide {
            display: flex !important;
          }

          .wa-icon-wrapper {
            width: 36px;
            height: 36px;
          }

          .wa-text {
            font-size: 12px;
            line-height: 1.3;
          }

          .gallery-actions {
            gap: 12px;
          }

          .gallery-action-btn, .gallery-share-btn {
            height: 46px;
            font-size: 14px;
            padding: 0 18px;
            gap: 8px;
          }

          .btn-icon {
            font-size: 15px;
          }

          .btn-text-short {
            display: none;
          }

          .btn-text-full {
            display: inline;
          }
        }
      `}</style>
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
    <button type="button" onClick={share} className="gallery-share-btn">
      <span className="btn-icon">↗</span>
      <span>{copied === 'ok' ? 'Copied!' : 'Share'}</span>
    </button>
  );
}


