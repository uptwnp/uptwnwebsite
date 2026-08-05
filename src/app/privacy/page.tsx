import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Uptown Property Panipat',
  description: 'Privacy Policy of Uptown Property Panipat regarding personal data collection, usage, RERA compliance, and buyer protection.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Uptown Property Panipat',
    description: 'Privacy Policy of Uptown Property Panipat regarding personal data collection, usage, RERA compliance, and buyer protection.',
    url: 'https://uptownproperty.in/privacy',
    siteName: 'Uptown Property',
    images: [{ url: '/uptown-logo-with-slogan.png', width: 1200, height: 630, alt: 'Privacy Policy Uptown Property' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Uptown Property Panipat',
    description: 'Privacy Policy of Uptown Property Panipat regarding personal data collection, usage, RERA compliance, and buyer protection.',
    images: ['/uptown-logo-with-slogan.png'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
        <div className="container" style={{ padding: '48px 16px' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>Privacy Policy</span>
          </div>

          {/* Title */}
          <h1 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.1 }}>
            Privacy Policy
          </h1>
          <p style={{ margin: '12px 0 36px', fontSize: 15, color: 'var(--muted)' }}>
            Last updated: August 2026 · Uptown Property, Panipat, Haryana
          </p>

          {/* Content Body */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, lineHeight: 1.7, color: 'var(--text)', fontSize: 16 }}>

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                1. Overview &amp; Commitment
              </h2>
              <p style={{ margin: 0 }}>
                At <strong>Uptown Property</strong>, accessible from uptownproperties.in and mylistings.in, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information that is collected and recorded by Uptown Property and how we use it.
              </p>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                2. Information We Collect
              </h2>
              <p style={{ margin: 0 }}>When you contact us via WhatsApp or phone, or request property details, we may collect the following personal information:</p>
              <ul style={{ paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Full name and contact details (phone number, WhatsApp number, email address)</li>
                <li>Property preferences (budget, preferred location, plot size, segment)</li>
                <li>Documentation required for booking, loan processing, or registry (only when initiated by the client)</li>
              </ul>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                3. How We Use Your Information
              </h2>
              <p style={{ margin: 0 }}>We use the collected information solely for genuine property consultation and transactional purposes, including:</p>
              <ul style={{ paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Sending matching property options, site visit schedules, and project brochures</li>
                <li>Assisting with legal paperwork, bank loan approvals, and developer coordination</li>
                <li>Communicating project updates, RERA registration statuses, or new launch alerts</li>
                <li><strong>No Spam Policy:</strong> We do not sell, rent, or trade your contact information to third-party telemarketers.</li>
              </ul>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                4. Data Protection &amp; Security
              </h2>
              <p style={{ margin: 0 }}>
                We implement strict administrative and technical measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Physical copies of agreements and documents are stored securely in our office.
              </p>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                5. Third-Party Links &amp; RERA Portals
              </h2>
              <p style={{ margin: 0 }}>
                Our website contains links to external portals such as the official Haryana Real Estate Regulatory Authority (HRERA) portal and builder listing pages. We encourage users to review the privacy policies of any third-party websites they visit.
              </p>
            </div>

            <div style={{ height: 1, background: 'var(--divider)' }} />

            <div>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Archivo, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
                6. Contacting Our Privacy Officer
              </h2>
              <p style={{ margin: 0 }}>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at:
              </p>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 24px', marginTop: 16 }}>
                <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 16 }}>Uptown Property</div>
                <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>123 Main Street, Panipat, Haryana 132103</div>
                <div style={{ fontSize: 14, color: 'var(--acc)', fontWeight: 600, marginTop: 6 }}>Email: info@uptownproperties.in | Call: +91 95180 91945</div>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
