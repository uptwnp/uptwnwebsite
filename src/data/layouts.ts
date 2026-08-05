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

export const LAYOUT_TYPE_TABS = ['All', 'Residential', 'Industrial', 'Commercial'] as const;
export type LayoutTypeTab = typeof LAYOUT_TYPE_TABS[number];

/** Format city slug → display name */
export function formatCityLabel(slug: string): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}
