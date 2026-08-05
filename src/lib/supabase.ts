import { createClient } from '@supabase/supabase-js';
import type { Project } from '@/data/projects';
import type { LayoutItem } from '@/data/layouts';

// ── DB row type (snake_case columns from Supabase) ──────────────────────────
interface ProjectRow {
  id: number;
  slug: string;
  title: string;
  location: string | null;
  segment: string | null;
  form: string | null;
  type: string | null;
  status: string | null;
  price: string | null;
  area: string | null;
  units: string | null;
  possession: string | null;
  total: string | null;
  booking_amount: string | null;
  payment_plan: { bookingAmount?: string; steps?: { title: string; detail: string }[] } | null;
  description: string | null;
  details: string[] | null;
  features: string[] | null;
  amenities: string[] | null;
  nearby: string[] | null;
  specifications: Record<string, string> | null;
  rera: string | null;
  rera_also: string | null;
  map_url: string | null;
  brochure_url: string | null;
  layout_url: string | null;
  sort_order: number | null;
}

// ── Supabase client (server-side only — returns null if env vars missing) ────
function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// ── Row → Project mapper ─────────────────────────────────────────────────────
function rowToProject(row: ProjectRow): Project {
  return {
    slug: row.slug,
    title: row.title,
    location: row.location ?? '',
    segment: row.segment ?? '',
    form: row.form ?? '',
    type: row.type ?? '',
    status: row.status ?? '',
    price: row.price ?? '',
    area: row.area ?? '',
    units: row.units ?? '',
    possession: row.possession ?? '',
    total: row.total ?? '',
    bookingAmount: row.booking_amount ?? undefined,
    paymentPlan: row.payment_plan ?? undefined,
    description: row.description ?? '',
    details: row.details ?? [],
    features: row.features ?? [],
    amenities: row.amenities ?? [],
    nearby: row.nearby ?? undefined,
    specifications: row.specifications ?? {},
    rera: row.rera ?? undefined,
    reraAlso: row.rera_also ?? undefined,
    mapUrl: row.map_url ?? undefined,
    brochureUrl: row.brochure_url ?? undefined,
    layoutUrl: row.layout_url ?? undefined,
  };
}

// ── Public helpers (Pure Supabase DB fetch) ──────────────────────────────────

/** Fetch all projects ordered by sort_order, then id */
export async function getProjects(): Promise<Project[]> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('id', { ascending: true });

    if (error || !data) return [];
    return (data as ProjectRow[]).map(rowToProject);
  } catch {
    return [];
  }
}

/** Fetch a single project by slug */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      return null;
    }
    return rowToProject(data as ProjectRow);
  } catch {
    return null;
  }
}

/** Fetch only slugs — lightweight, used for generateStaticParams & sitemap */
export async function getProjectSlugs(): Promise<string[]> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('projects')
      .select('slug')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) return [];
    return (data as { slug: string }[]).map(r => r.slug);
  } catch {
    return [];
  }
}

// ════════════════════════════════════════════════════════════════════════════
// LAYOUTS
// ════════════════════════════════════════════════════════════════════════════

interface LayoutRow {
  id: string;
  project_title: string;
  location: string | null;
  city_slug: string;
  area_slug: string;
  area_label: string;
  type: 'Residential' | 'Industrial' | 'Commercial';
  tags: string[] | null;
  image_url: string;
  images: { url: string; label?: string }[] | null;
  project_slug: string | null;
  description: string | null;
  sort_order: number | null;
}

function layoutRowToItem(row: LayoutRow): LayoutItem {
  return {
    id: row.id,
    projectTitle: row.project_title,
    location: row.location ?? '',
    citySlug: row.city_slug,
    areaSlug: row.area_slug,
    areaLabel: row.area_label,
    type: row.type,
    tags: row.tags ?? [],
    imageUrl: row.image_url,
    images: row.images ?? [{ url: row.image_url }],
    projectSlug: row.project_slug ?? undefined,
    description: row.description ?? undefined,
  };
}

/** Fetch all layouts ordered by sort_order */
export async function getLayouts(): Promise<LayoutItem[]> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('layouts')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) return [];
    return (data as LayoutRow[]).map(layoutRowToItem);
  } catch {
    return [];
  }
}

/** Fetch layouts filtered by city + area */
export async function getLayoutsByAreaDB(city: string, area: string): Promise<LayoutItem[]> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('layouts')
      .select('*')
      .eq('city_slug', city)
      .eq('area_slug', area)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) return [];
    return (data as LayoutRow[]).map(layoutRowToItem);
  } catch {
    return [];
  }
}

/** Get all unique city+area combos for generateStaticParams */
export async function getLayoutAreaParams(): Promise<{ city: string; area: string }[]> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return [];

    const { data, error } = await supabase
      .from('layouts')
      .select('city_slug, area_slug')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) return [];

    const seen = new Set<string>();
    const params: { city: string; area: string }[] = [];
    for (const row of data as { city_slug: string; area_slug: string }[]) {
      const key = `${row.city_slug}/${row.area_slug}`;
      if (!seen.has(key)) {
        seen.add(key);
        params.push({ city: row.city_slug, area: row.area_slug });
      }
    }
    return params;
  } catch {
    return [];
  }
}
