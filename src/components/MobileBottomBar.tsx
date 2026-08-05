'use client';

import { useState } from 'react';
import ScheduleVisitModal from '@/components/ScheduleVisitModal';

interface Props {
  projectTitle: string;
  waUrl: string;
}

export default function MobileBottomBar({ projectTitle, waUrl }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mobile-bar">
        <div style={{ display: 'flex', gap: 10, padding: '10px 16px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            style={{
              flex: 1, textAlign: 'center', border: '1px solid var(--outline)', background: 'transparent',
              color: 'var(--ink)', fontWeight: 700, fontSize: 14, padding: 12, borderRadius: 999,
              cursor: 'pointer',
            }}
          >
            Schedule visit
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener"
            style={{
              flex: 1, textAlign: 'center', background: 'var(--gold)', color: '#15130F',
              fontWeight: 700, fontSize: 14, padding: 12, borderRadius: 999, textDecoration: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
            }}
          >
            WhatsApp ↗
          </a>
        </div>
      </div>

      <ScheduleVisitModal
        projectTitle={projectTitle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
