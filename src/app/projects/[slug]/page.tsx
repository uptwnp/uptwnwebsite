import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSpecsWithoutRera, formatPrice } from '@/data/projects';
import { getProjectBySlug, getProjects, getProjectSlugs } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';
import StickySidebar from '@/components/StickySidebar';
import LegalSection from '@/components/LegalSection';
import MobileBottomBar from '@/components/MobileBottomBar';

import type { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const pageTitle = `${project.title} · ${project.form} in ${project.location}`;
  const pageDescription = `${project.description} Price: ${project.price}. Area: ${project.area}. Status: ${project.status}. Contact Uptown Property Panipat.`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      project.title,
      `${project.title} Panipat`,
      `${project.form} in ${project.location}`,
      `${project.segment} property Panipat`,
      'Uptown Property Panipat',
    ],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Uptown Property Panipat`,
      description: pageDescription,
      url: `https://uptownproperty.in/projects/${project.slug}`,
      siteName: 'Uptown Property',
      images: [
        {
          url: '/uptown-logo-with-slogan.png',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Uptown Property Panipat`,
      description: pageDescription,
      images: ['/uptown-logo-with-slogan.png'],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = await getProjects();
  const related = allProjects.filter(p => p.slug !== project.slug).slice(0, 3);
  const cleanSpecs = getSpecsWithoutRera(project.specifications);
  const { main: priceMain, onwards } = formatPrice(project.price);
  const mapUrl = project.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(project.title + ', ' + project.location)}`;
  const wa = `https://wa.me/919518091945?text=${encodeURIComponent('Hi, I want details about ' + project.title)}`;
  const waVisit = `https://wa.me/919518091945?text=${encodeURIComponent('I want to schedule a site visit for ' + project.title)}`;
  const forms = project.form.split(/\s*(?:&|\/|,)\s*/).filter(Boolean);

  const KEY_FACTS = [
    { label: 'Segment', value: project.segment || 'N/A' },
    { label: 'Price', value: priceMain ? `${priceMain}${onwards ? ' ' + onwards : ''}` : 'N/A' },
    { label: 'Unit Size', value: project.area || 'N/A' },
    { label: 'Units', value: project.units || 'N/A' },
    { label: 'Possession', value: project.possession || 'N/A' },
    { label: 'Total Area', value: project.total || 'N/A' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: project.title,
    description: project.description,
    url: `https://uptownproperty.in/projects/${project.slug}`,
    offers: {
      '@type': 'Offer',
      price: project.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    itemOffered: {
      '@type': 'Product',
      name: project.title,
      description: project.description,
      category: project.segment,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <div className="container" style={{ padding: '0 16px 64px' }}>
          {/* Two-column desktop grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 2fr) 320px',
            gap: 40,
            alignItems: 'start',
          }}>
            {/* ─── LEFT COLUMN ─── */}
            <div style={{ minWidth: 0 }}>
              {/* Breadcrumbs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'var(--muted)', paddingTop: 28 }}>
                <Link href="/" style={{ color: 'var(--muted)' }}>Panipat</Link>
                <span style={{ color: 'var(--faint)' }}>/</span>
                <Link href="/projects" style={{ color: 'var(--acc)' }}>{project.segment}</Link>
              </div>

              {/* Form badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginTop: 12 }}>
                {forms.map(f => (
                  <span key={f} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--gold)', color: '#15130F', padding: '6px 12px', borderRadius: 999 }}>
                    {f}
                  </span>
                ))}
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--border)', padding: '6px 12px', borderRadius: 999 }}>
                  {project.status}
                </span>
              </div>

              {/* Title & Location */}
              <div style={{ margin: '16px 0 18px' }}>
                <h1 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                  {project.title}
                </h1>
                <p style={{ margin: '6px 0 0', fontSize: 15, color: 'var(--muted)' }}>
                  {project.location}
                </p>
              </div>

              {/* Photo Gallery + Action Buttons */}
              <PhotoGallery project={project} />

              {/* Description */}
              <p style={{ margin: '24px 0 0', fontSize: 15, lineHeight: 1.7, color: 'var(--text)' }}>
                {project.description}
              </p>

              {/* Key Facts 2x3 Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginTop: 24 }}>
                {KEY_FACTS.map(fact => (
                  <div key={fact.label} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 14px' }}>
                    <span style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 4 }}>
                      {fact.label}
                    </span>
                    <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              {project.features.length > 0 && (
                <section style={{ paddingTop: 36 }}>
                  <h2 style={{ margin: '0 0 14px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>Highlights</h2>
                  <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20 }}>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {project.features.map(f => (
                        <li key={f} style={{ display: 'flex', gap: 12, fontSize: 14, lineHeight: 1.5, color: 'var(--text)' }}>
                          <span style={{ color: 'var(--gold)', flexShrink: 0, fontWeight: 700 }}>—</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Payment Plan Section */}
              {(project.paymentPlan || project.bookingAmount) && (
                <section style={{ paddingTop: 36 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <h2 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
                      Payment Plan
                    </h2>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(212, 163, 89, 0.12)', color: 'var(--gold)', padding: '4px 10px', borderRadius: 999, border: '1px solid rgba(212, 163, 89, 0.25)' }}>
                      Flexible Terms
                    </span>
                  </div>
                  
                  <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {/* Booking Amount Banner */}
                    {(project.paymentPlan?.bookingAmount || project.bookingAmount) && (
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(212,163,89,0.15) 0%, rgba(212,163,89,0.05) 100%)',
                        border: '1px solid rgba(212, 163, 89, 0.3)',
                        borderRadius: 12,
                        padding: '14px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                      }}>
                        <div>
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                            Booking Amount / Token
                          </span>
                          <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 20, color: 'var(--gold)' }}>
                            {project.paymentPlan?.bookingAmount || project.bookingAmount}
                          </span>
                        </div>
                        <span style={{ fontSize: 24 }}>💳</span>
                      </div>
                    )}

                    {/* Timeline Steps */}
                    {project.paymentPlan?.steps && project.paymentPlan.steps.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
                        {project.paymentPlan.steps.map((step, idx) => (
                          <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 14,
                            padding: '12px 14px',
                            background: 'var(--bg)',
                            borderRadius: 12,
                            border: '1px solid var(--border)'
                          }}>
                            <div style={{
                              width: 28,
                              height: 28,
                              borderRadius: '50%',
                              background: 'var(--gold)',
                              color: '#15130F',
                              fontWeight: 700,
                              fontSize: 13,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: 2
                            }}>
                              {idx + 1}
                            </div>
                            <div style={{ flex: 1 }}>
                              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', display: 'block' }}>
                                {step.title}
                              </span>
                              <span style={{ fontSize: 14, color: 'var(--text)', display: 'block', marginTop: 2 }}>
                                {step.detail}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Specifications */}
              {Object.keys(cleanSpecs).length > 0 && (
                <section style={{ paddingTop: 36 }}>
                  <h2 style={{ margin: '0 0 14px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>Specifications</h2>
                  <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {Object.entries(cleanSpecs).map(([k, v], i) => (
                      <div key={k} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                        padding: '10px 0',
                        borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                        gap: 16,
                      }}>
                        <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600 }}>{k}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', textAlign: 'right' }}>{v || 'N/A'}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Amenities */}
              {project.amenities.length > 0 && (
                <section style={{ paddingTop: 36 }}>
                  <h2 style={{ margin: '0 0 14px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>Amenities</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {project.amenities.map(a => (
                      <span key={a} style={{
                        fontSize: 13, fontWeight: 600, color: 'var(--text)',
                        background: 'var(--card)', border: '1px solid var(--border)',
                        borderRadius: 999, padding: '8px 14px',
                      }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Project Details */}
              {project.details.length > 0 && (
                <section style={{ paddingTop: 36 }}>
                  <h2 style={{ margin: '0 0 14px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>Project Details</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {project.details.map((d, i) => (
                      <p key={i} style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--text)' }}>{d}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Location */}
              <section style={{ paddingTop: 36 }}>
                <h2 style={{ margin: '0 0 14px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)' }}>Location</h2>
                <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>Address</span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 4, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{project.location}</span>
                      <a href={mapUrl} target="_blank" rel="noopener"
                        style={{ fontSize: 13, fontWeight: 600, color: 'var(--acc)', whiteSpace: 'nowrap', textDecoration: 'none' }}>
                        Open in Google Maps ↗
                      </a>
                    </div>
                  </div>
                  {project.nearby && project.nearby.length > 0 && (
                    <div style={{ paddingTop: 12, borderTop: '1px dashed var(--border)' }}>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>Connectivity</span>
                      <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {project.nearby.map(n => (
                          <li key={n} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.5, color: 'var(--text)' }}>
                            <span style={{ color: 'var(--gold)' }}>·</span>
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>

              {/* Legal */}
              <LegalSection project={project} />
            </div>

            {/* ─── RIGHT COLUMN (Sticky Sidebar) ─── */}
            <StickySidebar project={project} />
          </div>
        </div>

        {/* Related Projects */}
        <section className="container" style={{ padding: '56px 16px 20px' }}>
          <h2 style={{ margin: '0 0 18px', fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em' }}>
            Other projects
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {related.map(r => {
              const { main, onwards } = formatPrice(r.price);
              return (
                <Link key={r.slug} href={`/projects/${r.slug}`}
                  className="card-hover"
                  style={{
                    background: 'var(--card)', border: '1px solid var(--border)',
                    borderRadius: 16, padding: 18, textDecoration: 'none',
                    color: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 8,
                  }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--acc)' }}>
                    {r.segment} · {r.form}
                  </span>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: 17, lineHeight: 1.25 }}>{r.title}</span>
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{r.location}</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 6, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 15 }}>{main}</span>
                    {onwards && <span style={{ fontSize: 12, color: 'var(--muted)' }}>{onwards}</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <Footer />

        {/* Mobile sticky bottom bar */}
        <MobileBottomBar projectTitle={project.title} waUrl={wa} />
      </main>

      <style>{`
        @media (max-width: 820px) {
          .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="320px"] { display: none; }
          .mobile-bar {
            display: block;
            position: fixed; bottom: 0; left: 0; right: 0; z-index: 60;
            background: var(--hdr); backdrop-filter: blur(12px);
            border-top: 1px solid var(--border);
          }
        }
        @media (min-width: 821px) {
          .mobile-bar { display: none; }
        }
        @media (max-width: 1100px) and (min-width: 821px) {
          section.container > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
