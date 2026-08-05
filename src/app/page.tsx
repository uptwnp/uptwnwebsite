import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';
import { getProjects } from '@/lib/supabase';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Home - #1 Real Estate Consultant in Panipat',
  description: 'Explore 13+ live residential, commercial & industrial projects in Panipat. Plots, builder floors, villas, and industrial land. 10+ years trusted real estate advisory.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Home - #1 Real Estate Consultant in Panipat | Uptown Property',
    description: 'Plots, villas, floors and industrial land across 13 live projects in Panipat. Trusted by 1 Lakh+ buyers.',
    url: 'https://uptownproperty.in',
    siteName: 'Uptown Property',
    images: [
      {
        url: '/uptown-logo-with-slogan.png',
        width: 1200,
        height: 630,
        alt: 'Uptown Property Panipat Real Estate',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home - #1 Real Estate Consultant in Panipat | Uptown Property',
    description: 'Explore 13+ live real estate projects in Panipat. Trusted by 1 Lakh+ buyers.',
    images: ['/uptown-logo-with-slogan.png'],
  },
};

export default async function HomePage() {
  const projects = await getProjects();
  return <HomeClient projects={projects} />;
}

