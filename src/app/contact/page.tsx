import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us · Panipat',
  description: 'Get in touch with Uptown Property Panipat for project inquiries, site visits, and legal support. Call +91 95180 91945.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Uptown Property Panipat',
    description: 'Get in touch with Uptown Property Panipat for project inquiries, site visits, and legal support. Call +91 95180 91945.',
    url: 'https://uptownproperty.in/contact',
    siteName: 'Uptown Property',
    images: [{ url: '/uptown-logo-with-slogan.png', width: 1200, height: 630, alt: 'Contact Uptown Property' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Uptown Property Panipat',
    description: 'Get in touch with Uptown Property Panipat for project inquiries, site visits, and legal support.',
    images: ['/uptown-logo-with-slogan.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
        <div className="container" style={{ padding: '48px 16px' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>Contact</span>
          </div>

          {/* Title */}
          <h1 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.1 }}>
            Contact Us
          </h1>
          <p style={{ margin: '12px 0 36px', fontSize: 16, color: 'var(--muted)' }}>
            Have questions about a property or project? Reach out directly via call, WhatsApp, or email.
          </p>

          {/* 3 Contact Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }} className="contact-cards-grid">
            
            {/* Phone Card */}
            <a
              href="tel:+919518091945"
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 20, padding: '24px 20px', textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}
              className="card-hover"
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(245,166,45,0.12)', color: 'var(--acc)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
                  Phone Call
                </span>
                <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--ink)', marginTop: 6 }}>
                  +91 95180 91945
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, lineHeight: 1.4 }}>
                  Speak directly with our Panipat property advisors.
                </div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--acc)' }}>
                Call Now →
              </span>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/919518091945"
              target="_blank" rel="noopener"
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 20, padding: '24px 20px', textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}
              className="card-hover"
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(245,166,45,0.12)', color: 'var(--acc)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
                  WhatsApp Chat
                </span>
                <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--ink)', marginTop: 6 }}>
                  +91 95180 91945
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, lineHeight: 1.4 }}>
                  Get brochures, price sheets &amp; site visit details on WhatsApp.
                </div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--acc)' }}>
                Open WhatsApp Chat ↗
              </span>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info@uptownproperties.in"
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 20, padding: '24px 20px', textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}
              className="card-hover"
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(176,100,13,0.12)', color: 'var(--acc)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
                  Email Address
                </span>
                <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 15, color: 'var(--ink)', marginTop: 6, wordBreak: 'break-all' }}>
                  info@uptownproperties.in
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, lineHeight: 1.4 }}>
                  Send us official inquiries or legal query details.
                </div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--acc)' }}>
                Send Email →
              </span>
            </a>

          </div>

          {/* Office Address & Details Card */}
          <div style={{
            marginTop: 24,
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--acc)' }}>
                Head Office
              </span>
              <h2 style={{ margin: '6px 0 10px', fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 'clamp(20px, 3vw, 24px)', color: 'var(--ink)' }}>
                Uptown Property Office
              </h2>
              <p style={{ margin: 0, fontSize: 15, color: 'var(--text)', lineHeight: 1.6 }}>
                123 Main Street, Panipat, Haryana 132103
              </p>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
                🕒 <strong>Working Hours:</strong> Mon – Sat, 9:00 AM – 6:00 PM (Sunday Closed)
              </p>
            </div>

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between',
              paddingTop: 16, borderTop: '1px solid var(--divider)',
            }}>
              <a
                href="https://maps.google.com/?q=Panipat+Haryana"
                target="_blank"
                rel="noopener"
                style={{
                  background: 'var(--gold)', color: '#15130F',
                  fontWeight: 700, fontSize: 14, padding: '12px 24px',
                  borderRadius: 999, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                Open Location in Maps ↗
              </a>
              <span style={{ fontSize: 12, color: 'var(--faint)' }}>
                🔒 Free parking &amp; on-site consultation available.
              </span>
            </div>

          </div>

        </div>
      </main>

      <style>{`
        @media (max-width: 820px) {
          .contact-cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 821px) and (max-width: 1024px) {
          .contact-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}
