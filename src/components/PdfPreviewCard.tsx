'use client';

/**
 * Mobile fallback for PDF layout plans.
 *
 * Android Chrome refuses to render a PDF inside an <iframe> (blank frame) and
 * iOS Safari renders only a static, non-zoomable first page. Instead of a dead
 * frame we hand the file to the OS/native viewer, which handles pinch-zoom on a
 * large master plan far better than anything we can embed.
 */
export default function PdfPreviewCard({
  url,
  title,
  label,
  compact = false,
}: {
  url: string;
  title: string;
  label?: string;
  compact?: boolean;
}) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        padding: compact ? '32px 20px' : '44px 20px',
        textAlign: 'center',
        boxSizing: 'border-box',
        background: 'var(--card)',
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: 'var(--band)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </div>

      <div>
        <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 17, color: 'var(--ink)', lineHeight: 1.3 }}>
          {label || 'Layout Plan'}
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 5, lineHeight: 1.5, maxWidth: '34ch' }}>
          High-resolution PDF — open it full screen to pinch &amp; zoom into individual plots.
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', width: '100%' }}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: 'var(--gold)', color: '#15130F',
            fontWeight: 700, fontSize: 14,
            padding: '13px 22px', borderRadius: 999,
            textDecoration: 'none', flex: '1 1 160px', maxWidth: 260,
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
          </svg>
          Open Layout Plan
        </a>
        <a
          href={url}
          download
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Download ${title} layout plan`}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            border: '1px solid var(--outline)', background: 'var(--bg)',
            color: 'var(--ink)', fontWeight: 700, fontSize: 14,
            padding: '13px 22px', borderRadius: 999,
            textDecoration: 'none', flex: '1 1 130px', maxWidth: 260,
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download
        </a>
      </div>
    </div>
  );
}
