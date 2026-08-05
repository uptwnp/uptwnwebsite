export interface PaymentStep {
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  segment: string;
  form: string;
  type: string;
  status: string;
  price: string;
  area: string;
  units: string;
  possession: string;
  total: string;
  bookingAmount?: string;
  paymentPlan?: {
    bookingAmount?: string;
    steps?: PaymentStep[];
  };
  description: string;
  details: string[];
  features: string[];
  amenities: string[];
  nearby?: string[];
  specifications: Record<string, string>;
  rera?: string;
  reraAlso?: string;
  mapUrl?: string;
  brochureUrl?: string;
  layoutUrl?: string;
}

export function formatPrice(price: string): { main: string; onwards: string } {
  let main = price.replace(/\bL\b/g, 'Lakh');
  let onwards = '';
  if (main.toLowerCase().includes('onwards')) {
    main = main.replace(/\s*onwards\s*/i, '').trim();
    onwards = 'onwards';
  }
  return { main, onwards };
}

export function getSpecsWithoutRera(specs: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(specs).filter(([k]) =>
      k !== 'RERA' && k !== 'Also registered' && !k.toLowerCase().includes('rera')
    )
  );
}

export const FILTER_TABS = ['All', 'Plots', 'Villas', 'Residential', 'Industrial'] as const;
export type FilterTab = typeof FILTER_TABS[number];

export function filterProjects(projects: Project[], tab: FilterTab): Project[] {
  if (tab === 'All') return projects;
  if (tab === 'Villas') return projects.filter(p => p.type.includes('Villas'));
  return projects.filter(p => p.type.includes(tab));
}
