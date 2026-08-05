'use client';

import { useState } from 'react';
import { Project, formatPrice } from '@/data/projects';
import ScheduleVisitModal from '@/components/ScheduleVisitModal';

export default function StickySidebar({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { main, onwards } = formatPrice(project.price);
  const wa = `https://wa.me/919518091945?text=${encodeURIComponent('Hi, I want details about ' + project.title)}`;

  return (
    <>
      <div style={{
        background: 'var(--band)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        padding: 24,
        position: 'sticky',
        top: 84,
        alignSelf: 'start',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}>
        {/* Price & Size */}
        <div style={{
          paddingBottom: 14,
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
              Starting Price
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
              <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 26, color: 'var(--ink)' }}>
                {main}
              </span>
              {onwards && (
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)' }}>
                  {onwards}
                </span>
              )}
            </div>
          </div>
          <div style={{ paddingTop: 10, borderTop: '1px dashed var(--border)' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
              Unit Size
            </span>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginTop: 2 }}>
              {project.area}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            style={{
              background: 'var(--gold)', color: '#15130F',
              fontWeight: 700, fontSize: 15, textAlign: 'center',
              padding: '14px 20px', borderRadius: 999, border: 'none',
              cursor: 'pointer', whiteSpace: 'nowrap',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Schedule site visit
          </button>
          <a href={wa} target="_blank" rel="noopener"
            style={{
              border: '1px solid var(--outline)', color: 'var(--ink)',
              fontWeight: 600, fontSize: 15, textAlign: 'center',
              padding: '14px 20px', borderRadius: 999,
              textDecoration: 'none', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}
          >
            WhatsApp <span style={{ fontSize: 14, color: 'var(--acc)' }}>↗</span>
          </a>
        </div>
      </div>

      <ScheduleVisitModal
        projectTitle={project.title}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
