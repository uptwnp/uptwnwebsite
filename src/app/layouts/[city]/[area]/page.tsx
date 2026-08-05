import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { formatCityLabel } from '@/data/layouts';
import { getLayoutsByAreaDB, getLayoutAreaParams } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AreaLayoutClient from '@/components/AreaLayoutClient';

/* ─── Static params generation ─── */
export async function generateStaticParams() {
  return getLayoutAreaParams();
}

/* ─── SEO metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; area: string }>;
}): Promise<Metadata> {
  const { city, area } = await params;
  const layouts = await getLayoutsByAreaDB(city, area);
  if (!layouts.length) return {};

  const first = layouts[0];
  const cityLabel = formatCityLabel(city);
  const title = `${first.areaLabel} Layout Plans · ${cityLabel}`;
  const description = `Download layout plans for ${first.areaLabel}, ${cityLabel}. ${layouts.map(l => l.projectTitle).join(', ')} — RERA-approved real estate projects.`;

  return {
    title,
    description,
    alternates: { canonical: `/layouts/${city}/${area}` },
    openGraph: {
      title,
      description,
      url: `https://uptownproperty.in/layouts/${city}/${area}`,
      siteName: 'Uptown Property',
      images: [{ url: '/uptown-logo-with-slogan.png', width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/uptown-logo-with-slogan.png'],
    },
  };
}

/* ─── Page ─── */
export default async function AreaLayoutPage({
  params,
}: {
  params: Promise<{ city: string; area: string }>;
}) {
  const { city, area } = await params;
  const layouts = await getLayoutsByAreaDB(city, area);

  if (!layouts.length) notFound();

  const cityLabel = formatCityLabel(city);
  const areaLabel = layouts[0].areaLabel;

  /* JSON-LD structured data */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${areaLabel} Layout Plans — ${cityLabel}`,
    description: `Real estate layout plans for ${areaLabel}, ${cityLabel}`,
    url: `https://uptownproperty.in/layouts/${city}/${area}`,
    numberOfItems: layouts.length,
    itemListElement: layouts.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.projectTitle,
      url: `https://uptownproperty.in/layouts/${city}/${area}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <AreaLayoutClient
        layouts={layouts}
        city={city}
        area={area}
        cityLabel={cityLabel}
        areaLabel={areaLabel}
      />
      <Footer />
    </>
  );
}
