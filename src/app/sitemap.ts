import { MetadataRoute } from 'next';
import { getProjectSlugs, getLayoutAreaParams } from '@/lib/supabase';

const BASE_URL = 'https://uptownproperty.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/layouts`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fees`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic project pages — fetched from DB
  const slugs = await getProjectSlugs();
  const projectPages: MetadataRoute.Sitemap = slugs.map(slug => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Dynamic layout area pages — fetched from DB
  const layoutParams = await getLayoutAreaParams();
  const layoutAreaPages: MetadataRoute.Sitemap = layoutParams.map(({ city, area }) => ({
    url: `${BASE_URL}/layouts/${city}/${area}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages, ...layoutAreaPages];
}
