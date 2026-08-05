import type { Metadata } from 'next';
import LayoutsClient from '@/components/LayoutsClient';
import { getLayouts } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Project Layout Plans in Panipat',
  description: 'Download master layout plans for all real estate projects in Panipat. Browse plot layouts, township maps, and industrial park plans for free.',
  alternates: {
    canonical: '/layouts',
  },
  openGraph: {
    title: 'Project Layout Plans in Panipat | Uptown Property',
    description: 'Download master layout plans for all real estate projects in Panipat — plots, townships, and industrial parks.',
    url: 'https://uptownproperty.in/layouts',
    siteName: 'Uptown Property',
    images: [
      {
        url: '/uptown-logo-with-slogan.png',
        width: 1200,
        height: 630,
        alt: 'Project Layouts Panipat',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Layout Plans in Panipat | Uptown Property',
    description: 'Download master layout plans for all real estate projects in Panipat.',
    images: ['/uptown-logo-with-slogan.png'],
  },
};

export default async function LayoutsPage() {
  const layouts = await getLayouts();
  return <LayoutsClient layouts={layouts} />;
}
