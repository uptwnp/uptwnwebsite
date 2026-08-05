import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Brokerage & Fees | Uptown Property Panipat',
  description: 'Transparent brokerage rates for new project bookings and resale properties in Panipat & NCR.',
  alternates: {
    canonical: '/fees',
  },
  openGraph: {
    title: 'Brokerage & Fees | Uptown Property Panipat',
    description: 'Transparent brokerage rates for new project bookings and resale properties in Panipat & NCR.',
    url: 'https://uptownproperty.in/fees',
    siteName: 'Uptown Property',
    images: [{ url: '/uptown-logo-with-slogan.png', width: 1200, height: 630, alt: 'Brokerage & Fees Uptown Property' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brokerage & Fees | Uptown Property Panipat',
    description: 'Transparent brokerage rates for new project bookings and resale properties in Panipat & NCR.',
    images: ['/uptown-logo-with-slogan.png'],
  },
};

export default function FeesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
        <div className="container" style={{ padding: '48px 16px' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>Brokerage &amp; Fees</span>
          </div>

          {/* Title */}
          <h1 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.1 }}>
            Brokerage &amp; Fees
          </h1>
          <p style={{ margin: '12px 0 36px', fontSize: 16, color: 'var(--muted)' }}>
            Clear and transparent fee structure for all property transactions in Panipat.
          </p>

          {/* 2 Clean Pricing Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            
            {/* Item 1: New Projects */}
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '28px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
            }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--acc)' }}>
                  New Launches &amp; Builder Townships
                </span>
                <h2 style={{ margin: '6px 0 4px', fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3.5vw, 32px)', color: 'var(--ink)' }}>
                  0% Brokerage
                </h2>
                <div style={{ fontSize: 14, color: 'var(--muted)' }}>
                  Zero commission charged from buyers for direct project bookings.
                </div>
              </div>

              <Link
                href="/projects"
                style={{
                  background: 'var(--gold)', color: '#15130F',
                  fontWeight: 700, fontSize: 14, padding: '12px 24px',
                  borderRadius: 999, textDecoration: 'none', whiteSpace: 'nowrap',
                }}
              >
                Browse Projects ↗
              </Link>
            </div>

            {/* Item 2: Resale Deals */}
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '28px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
            }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
                  Resale &amp; Secondary Deals
                </span>
                <h2 style={{ margin: '6px 0 4px', fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3.5vw, 32px)', color: 'var(--ink)' }}>
                  1% or ₹1 Lakh
                </h2>
                <div style={{ fontSize: 14, color: 'var(--acc)', fontWeight: 600 }}>
                  Whichever is higher
                </div>
              </div>

              <a
                href="https://mylistings.in/sell"
                target="_blank" rel="noopener"
                style={{
                  border: '1px solid var(--outline)', color: 'var(--ink)',
                  fontWeight: 600, fontSize: 14, padding: '12px 24px',
                  borderRadius: 999, textDecoration: 'none', whiteSpace: 'nowrap',
                }}
              >
                Inquire Resale ↗
              </a>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
