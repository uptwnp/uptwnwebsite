import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Uptown Property Panipat',
  description: 'Terms of service, RERA advisories, site visit guidelines, and client agreements for Uptown Property Panipat.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | Uptown Property Panipat',
    description: 'Terms of service, RERA advisories, site visit guidelines, and client agreements for Uptown Property Panipat.',
    url: 'https://uptownproperty.in/terms',
    siteName: 'Uptown Property',
    images: [{ url: '/uptown-logo-with-slogan.png', width: 1200, height: 630, alt: 'Terms & Conditions Uptown Property' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Uptown Property Panipat',
    description: 'Terms of service, RERA advisories, site visit guidelines, and client agreements for Uptown Property Panipat.',
    images: ['/uptown-logo-with-slogan.png'],
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
        <div className="container" style={{ padding: '48px 16px' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>Terms &amp; Conditions</span>
          </div>

          {/* Title */}
          <h1 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.1 }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ margin: '12px 0 36px', fontSize: 15, color: 'var(--muted)' }}>
            Last updated: August 2026 · Uptown Property, Panipat, Haryana
          </p>

          {/* Content Body */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, lineHeight: 1.7, color: 'var(--text)', fontSize: 16 }}>

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ margin: 0 }}>
                By accessing or using the services of <strong>Uptown Property</strong> (including our website, site visit services, and real estate advisory), you agree to comply with and be bound by the following terms and conditions.
              </p>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                2. Real Estate Advisory &amp; RERA Disclaimer
              </h2>
              <p style={{ margin: 0 }}>
                Uptown Property acts as a licensed real estate channel partner and consultant for verified developers and private plot owners in Panipat and NCR.
              </p>
              <ul style={{ paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Project details, floor plans, specifications, and prices listed are provided based on developer filings and official RERA disclosures.</li>
                <li>All prospective buyers are advised to independently verify title deeds, RERA numbers, layout approvals, and physical site measurements before signing any booking agreement or paying token money.</li>
              </ul>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                3. Site Visits &amp; Consultations
              </h2>
              <p style={{ margin: 0 }}>
                Site visits organized by Uptown Property are offered as a complimentary advisory service. While our team ensures complete safety and accompaniment during site visits, clients visit property locations at their own discretion.
              </p>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                4. Pricing &amp; Price Revisions
              </h2>
              <p style={{ margin: 0 }}>
                Property prices, availability status, and booking terms are subject to change by respective developers or plot sellers without prior notice. Final prices and payment schedules are governed strictly by the official allotment letter / agreement executed between the buyer and seller.
              </p>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                5. Limitation of Liability
              </h2>
              <p style={{ margin: 0 }}>
                Uptown Property shall not be held liable for any construction delays, developer defaults, or third-party disputes arising post-booking. We assist end-to-end in paperwork and mediation to safeguard our clients' interests.
              </p>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p style={{ margin: 0 }}>
                These terms shall be governed by and construed in accordance with the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of the courts in Panipat, Haryana.
              </p>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
