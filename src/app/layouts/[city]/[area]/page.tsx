import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { formatCityLabel } from '@/data/layouts';
import { getSingleLayoutDB, getLayoutsByAreaDB, getLayouts, getLayoutAreaParams } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AreaLayoutClient from '@/components/AreaLayoutClient';
import SingleLayoutClient from '@/components/SingleLayoutClient';

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

  // 1. Single layout
  const single = await getSingleLayoutDB(city, area);
  if (single) {
    const cityLabel = formatCityLabel(city);
    const cleanTitle = single.projectTitle.replace(/\s+(layout\s+plan|layout)$/i, '');
    const title = `${cleanTitle} Layout Plan · ${cityLabel}`;
    const description = `Download and view layout plan for ${single.projectTitle} in ${single.location}. ${single.description ?? ''}`;
    return {
      title,
      description,
      alternates: { canonical: `/layouts/${city}/${single.slug}` },
      openGraph: {
        title,
        description,
        url: `https://uptownproperty.in/layouts/${city}/${single.slug}`,
        siteName: 'Uptown Property',
        images: [{ url: single.imageUrl.endsWith('.pdf') ? '/uptown-logo-with-slogan.png' : single.imageUrl, width: 1200, height: 630, alt: title }],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [single.imageUrl.endsWith('.pdf') ? '/uptown-logo-with-slogan.png' : single.imageUrl],
      },
    };
  }

  // 2. Area layouts
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
export default async function AreaOrSingleLayoutPage({
  params,
}: {
  params: Promise<{ city: string; area: string }>;
}) {
  const { city, area } = await params;

  // 1. Try single layout match first
  const single = await getSingleLayoutDB(city, area);
  if (single) {
    const allLayouts = await getLayouts();
    const otherLayouts = allLayouts.filter(l => l.id !== single.id);

    const cleanProjectTitle = single.projectTitle.replace(/\s+(layout\s+plan|layout)$/i, '');
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${cleanProjectTitle} Layout Plan`,
      description: single.description ?? `Layout plan for ${cleanProjectTitle} in ${single.location}`,
      image: single.imageUrl,
      url: `https://uptownproperty.in/layouts/${city}/${single.slug}`,
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <SingleLayoutClient layout={single} otherLayouts={otherLayouts} />
        <Footer />
      </>
    );
  }

  // 2. Fall back to area layouts
  const layouts = await getLayoutsByAreaDB(city, area);
  if (!layouts.length) notFound();

  const cityLabel = formatCityLabel(city);
  const areaLabel = layouts[0].areaLabel;

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
      url: `https://uptownproperty.in/layouts/${city}/${l.slug}`,
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

