export interface LayoutImage {
  url: string;
  label?: string; // e.g. "Master Plan", "Unit Plan", "Site Plan"
}

export interface LayoutItem {
  id: string;
  projectTitle: string;
  location: string;
  /** City slug — used in URL: /layouts/[city]/[area] */
  citySlug: string;
  /** Area slug — used in URL: /layouts/[city]/[area] */
  areaSlug: string;
  /** Human-readable area name for display */
  areaLabel: string;
  type: 'Residential' | 'Industrial' | 'Commercial';
  tags: string[];
  /** Primary preview image/PDF URL */
  imageUrl: string;
  /** All layout images/PDFs (can be same as imageUrl for single-image layouts) */
  images: LayoutImage[];
  /** Optional link to the related project page */
  projectSlug?: string;
  description?: string;
}

export const LAYOUTS: LayoutItem[] = [
  {
    id: 'm3m-city-of-dreams-layout',
    projectTitle: 'M3M City of Dreams',
    location: 'Sector 36 & 37, Panipat',
    citySlug: 'panipat',
    areaSlug: 'sector-36-37',
    areaLabel: 'Sector 36 & 37',
    type: 'Residential',
    tags: ['Plots', 'Township', '337 Acres'],
    imageUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/layouts/m3m-layout.pdf',
    images: [
      { url: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/layouts/m3m-layout.pdf', label: 'Master Plan' },
    ],
    projectSlug: 'm3m-city-of-dreams',
    description: 'Master layout of the 337-acre M3M City of Dreams township showing sector-wise plot division and central avenue.',
  },
  {
    id: 'nysa-residential-layout',
    projectTitle: 'Nysa Residential Township',
    location: 'GT Road / NH 44, Panipat',
    citySlug: 'panipat',
    areaSlug: 'nh-44',
    areaLabel: 'NH 44 / GT Road',
    type: 'Residential',
    tags: ['Plots', 'NH 44', 'Pre-Launch'],
    imageUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/layouts/nysa-layout.jpg',
    images: [
      { url: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/layouts/nysa-layout.jpg', label: 'Layout Plan' },
    ],
    projectSlug: 'nysa-panipat-residential',
    description: 'Detailed layout plan for NYSA Township plots of 143–180 sq yd on main GT Road.',
  },
  {
    id: 'sigma-industrial-park-layout',
    projectTitle: 'Sigma Industrial Park',
    location: 'NH-07 Industrial Belt, Panipat',
    citySlug: 'panipat',
    areaSlug: 'nh-07-industrial-belt',
    areaLabel: 'NH-07 Industrial Belt',
    type: 'Industrial',
    tags: ['Industrial', 'RERA Approved', 'NH-07'],
    imageUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/projects-files/sigma-project-history.pdf',
    images: [
      { url: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/projects-files/sigma-project-history.pdf', label: 'Site Plan' },
    ],
    projectSlug: 'sigma-industrial-park-panipat',
    description: 'Sigma Industrial Park plot layout across the NH-07 corridor with infrastructure planning.',
  },
];

export const LAYOUT_TYPE_TABS = ['All', 'Residential', 'Industrial', 'Commercial'] as const;
export type LayoutTypeTab = typeof LAYOUT_TYPE_TABS[number];

/** Get all unique city+area combos for generateStaticParams */
export function getAllLayoutParams() {
  const seen = new Set<string>();
  const params: { city: string; area: string }[] = [];
  for (const item of LAYOUTS) {
    const key = `${item.citySlug}/${item.areaSlug}`;
    if (!seen.has(key)) {
      seen.add(key);
      params.push({ city: item.citySlug, area: item.areaSlug });
    }
  }
  return params;
}

/** Get all layouts for a specific city+area */
export function getLayoutsByArea(city: string, area: string): LayoutItem[] {
  return LAYOUTS.filter(l => l.citySlug === city && l.areaSlug === area);
}

/** Format city slug → display name */
export function formatCityLabel(slug: string): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}
