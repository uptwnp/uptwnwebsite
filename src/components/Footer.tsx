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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)', fontWeight: 700 }}>
            <span>UPTOWN PROPERTY</span>
            <span style={{ color: 'var(--faint)', fontWeight: 400 }}>· Panipat &amp; NCR</span>
          </div>

          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px', fontSize: 13 }}>
            <Link href="/projects" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Projects</Link>
            <Link href="/contact" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Contact</Link>
            <Link href="/fees" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Brokerage &amp; Fees</Link>
            <Link href="/privacy" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Terms &amp; Conditions</Link>
            <Link href="/links" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}>Quick Links</Link>
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
