import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageComponent from '@/components/PageComponent';
import { staticPages } from '@/data/staticPages';

interface StaticPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: StaticPageProps): Promise<Metadata> {
  const page = staticPages.find(p => p.slug === params.slug);
  
  if (!page) {
    return {
      title: 'Page Not Found - UptownProperties.in',
    };
  }

  return {
    title: `${page.title} - UptownProperties.in`,
    description: page.description,
    openGraph: {
      title: `${page.title} - UptownProperties.in`,
      description: page.description,
      url: `https://uptownproperties.in/${page.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return staticPages.map(page => ({
    slug: page.slug,
  }));
}

export default function StaticPage({ params }: StaticPageProps) {
  const page = staticPages.find(p => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  return <PageComponent page={page} />;
}