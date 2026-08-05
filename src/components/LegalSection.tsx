import { Project } from '@/data/projects';

export default function LegalSection({ project }: { project: Project }) {
  const approvalText = project.segment === 'Industrial'
    ? 'DTCP / HRERA Approved Industrial Park with bank financing options available.'
    : 'DTCP Haryana Approved Plotted / Residential Development. Bank home loan approvals available.';

  return (
    <section style={{ paddingTop: 40 }}>
      <h2 style={{ margin: '0 0 18px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
        Legal & Compliance
      </h2>
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}>
        {/* RERA */}
        {project.rera && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
              RERA Registration
            </span>
            <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>
              {project.rera}
              {project.reraAlso && (
                <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: 13 }}>
                  {' '}(Also registered: {project.reraAlso})
                </span>
              )}
            </span>
          </div>
        )}

        {/* Approved Status */}
        <div style={{ paddingTop: 14, borderTop: '1px dashed var(--border)', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
            Approved Status
          </span>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text)' }}>
            {approvalText}
          </p>
        </div>

        {/* Disclaimer */}
        <div style={{ paddingTop: 14, borderTop: '1px dashed var(--border)', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
            Disclaimer & Advisory
          </span>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--muted)' }}>
            Property details and RERA information shown are compiled from developer filings and official RERA portals. Buyers are requested to verify title deeds, RERA numbers, and statutory approvals before agreement.
          </p>
        </div>
      </div>
    </section>
  );
}
