import type { Metadata } from 'next';
import ProjectsClient from '@/components/ProjectsClient';
import { getProjects } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Real Estate Projects & Townships in Panipat | Uptown Property',
  description: 'Browse all 13+ live real estate projects in Panipat. Filter by plots, builder floors, luxury flats, and industrial parks.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Real Estate Projects & Townships in Panipat | Uptown Property',
    description: 'Browse all 13+ live real estate projects in Panipat. Filter by plots, builder floors, luxury flats, and industrial parks.',
    url: 'https://uptownproperty.in/projects',
    siteName: 'Uptown Property',
    images: [
      {
        url: '/uptown-logo-with-slogan.png',
        width: 1200,
        height: 630,
        alt: 'Real Estate Projects Panipat',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Projects & Townships in Panipat | Uptown Property',
    description: 'Browse all 13+ live real estate projects in Panipat. Filter by plots, builder floors, luxury flats, and industrial parks.',
    images: ['/uptown-logo-with-slogan.png'],
  },
};

export default async function ProjectsListingPage() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}
