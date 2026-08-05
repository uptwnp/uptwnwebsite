import Link from 'next/link';

export default function Footer({ mobilePad = false }: { mobilePad?: boolean }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: 40, background: 'var(--band)' }}>
      <div
        className="container"
        style={{
          padding: mobilePad ? '28px 16px 84px' : '36px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px 24px',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 13,
          color: 'var(--muted)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, color: 'var(--ink)', fontWeight: 700 }}>
            <svg
              width="14"
              height="20"
              viewBox="0 0 549 796"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: 20, width: 'auto', flexShrink: 0, display: 'block' }}
            >
              <path d="M365.484 795.462V451.479L548.225 580.472V795.462H453.307H365.484Z" fill="#FFAD35" />
              <path d="M0 279.486L354.733 0V440.728L182.741 580.472V795.461H0V279.486Z" fill="var(--ink)" />
            </svg>
            <span style={{ lineHeight: 1, paddingBottom: 1 }}>UPTOWN<span style={{ color: 'var(--gold)' }}> PROPERTY</span></span>
            <span style={{ color: 'var(--faint)', fontWeight: 400, paddingBottom: 1 }}>· Panipat &amp; NCR</span>
          </div>

          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px', fontSize: 13 }}>
            <Link href="/projects" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Projects</Link>
            <Link href="/layouts" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Layouts</Link>
            <Link href="/contact" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Contact</Link>
            <Link href="/fees" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Brokerage &amp; Fees</Link>
            <Link href="/privacy" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Terms &amp; Conditions</Link>
            <a href="https://uptownproperties.in/links" target="_blank" rel="noopener" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Quick Links ↗</a>
            <Link href="https://mylistings.in/" target="_blank" rel="noopener" style={{ color: 'var(--muted)' }}>Resale</Link>
            <Link href="https://mylistings.in/sell" target="_blank" rel="noopener" style={{ color: 'var(--muted)' }}>Sell</Link>
          </nav>
        </div>

        <div style={{
          paddingTop: 16,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 12,
          color: 'var(--faint)',
        }}>
          <span>© 2026 Uptown Property. All rights reserved. RERA Registered Channel Partner.</span>
          <span>Panipat, Haryana 132103</span>
        </div>
      </div>
    </footer>
  );
}
