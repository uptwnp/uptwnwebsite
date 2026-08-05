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

export const PROJECTS: Project[] = [
  {
    slug: 'm3m-city-of-dreams',
    title: 'M3M City of Dreams',
    location: 'Sector 36 & 37, Panipat',
    segment: 'Residential',
    form: 'Plots',
    type: 'Plots',
    status: 'Booking Open',
    price: '₹55 L onwards',
    area: '141–1000 sq yd',
    units: '500+ plots',
    possession: 'On Request',
    total: '337 acres',
    bookingAmount: '',
    description: 'Premium 337-acre plotted township in Sector 36 & 37, Panipat. A mega township planned around a 60m wide Central Avenue, with four clubhouses, a lake and themed sit-outs.',
    details: [
      'Spread across Sector 36 and 37, the township is planned around a 60 metre wide Central Avenue, with plot sizes from 141 to 1000 sq yd and over 700 plots already sold.',
      'Amenities are spread across four clubhouses, a sports complex, a linear park, a pet park and a shopping street, with a lake and shaded walkways through the landscape.',
    ],
    features: [
      'Mega 337-acre township',
      'Central Avenue, 60m wide',
      '700+ plots already sold',
      'Aesthetically planned landscape',
      'Multiple sports amenities',
      'Shaded walkways and lake',
      'Close to NH 44',
    ],
    amenities: [
      'Sports complex', 'Shopping street', 'Linear park', 'Pet park',
      '4 luxurious clubhouses', 'Religious centre', 'Dispensary',
      'Swimming pool', 'Spa & jacuzzi', '24x7 security',
    ],
    nearby: ['Near NH 44', 'Central Avenue, 60m wide', 'Shopping street inside township'],
    specifications: {
      'Total area': '337 acres',
      'Plot sizes': '141–1000 sq yd',
      'Developer': 'M3M',
      'RERA': 'HRERA-PKL-PROJ-1259-2023',
      'Also registered': 'HRERA-PKL-PNP-523-2023, 446-2023',
    },
    rera: 'HRERA-PKL-PROJ-1259-2023',
    reraAlso: 'HRERA-PKL-PNP-523-2023, 446-2023',
    mapUrl: 'https://maps.google.com/?q=M3M+City+of+Dreams+Sector+36+37+Panipat',
    brochureUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/layouts/m3m-layout.pdf',
    layoutUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/layouts/m3m-layout.pdf',
  },
  {
    slug: 'eldeco-paradiso',
    title: 'Eldeco Paradiso Panipat',
    location: 'Main G.T Karnal Road, Sector 40, Panipat',
    segment: 'Residential',
    form: 'Plots & Villas',
    type: 'Plots',
    status: 'Under Construction',
    price: '₹1.50 Cr',
    area: '100–180 sq yd',
    units: 'Plots & villas',
    possession: 'On Request',
    total: '35.4 acres',
    description: 'Gated plotted colony with premium villa plots under DDJAY scheme on GT Karnal Road, Sector 40, Panipat.',
    details: [
      'A premium 35.4-acre gated township under DDJAY policy on main G.T. Karnal Road, Sector 40, offering plot sizes from 100 to 180 sq yd and luxury villa plots.',
      'The township features landscaped gardens, grand entry gate, internal roads, and 24x7 security with CCTV surveillance.',
    ],
    features: [
      'Gated township on GT Karnal Road',
      'DDJAY Approved Township',
      'High-security campus',
      'Bank loan approved',
      'Premium villa plots',
      'RERA registered',
    ],
    amenities: ['Landscaped gardens', 'Internal roads', '24x7 security', 'CCTV', 'Club facility'],
    nearby: ['GT Karnal Road access', 'Sector 40, Panipat', 'Close to city center'],
    specifications: {
      'Total area': '35.4 acres',
      'Plot sizes': '100–180 sq yd',
      'Developer': 'Eldeco Group',
      'RERA': 'HRERA-PKL-PNP-299-2022',
    },
    rera: 'HRERA-PKL-PNP-299-2022',
  },
  {
    slug: 'emperium-palm-drive',
    title: 'Emperium Palm Drive',
    location: 'Sector 19A & 40, Panipat',
    segment: 'Residential',
    form: 'Builder Floors',
    type: 'Builder Floors',
    status: 'Under Construction',
    price: '₹73 L',
    area: '970 sq ft · 3 BHK',
    units: '152 builder floors',
    possession: 'Oct 2023',
    total: '10.51 acres',
    description: 'Modern 3 BHK independent builder floors in a well-planned layout across Sector 19A and 40, Panipat.',
    details: [
      'A project of 152 builder floors spread across 10.51 acres in Sector 19A & 40, Panipat, launched in October 2022 with possession targeted for October 2023.',
      'The layout includes paved internal roads, landscaped greens and a clubhouse with fitness and recreation facilities.',
    ],
    features: [
      '152 builder floors',
      'RERA registered',
      'Modern layout with amenities',
      'Bank loan approved',
      '3 BHK configuration',
    ],
    amenities: ['Clubhouse', 'Landscaped greens', 'Fitness centre', 'Internal roads', '24x7 security'],
    nearby: ['Sector 19A access', 'Sector 40, Panipat'],
    specifications: {
      'Project area': '10.51 acres',
      'Units': '152 builder floors',
      'Launched': 'Oct 2022',
      'Possession': 'Oct 2023',
      'RERA': 'HRERA-PKL-PNP-349-2022',
    },
    rera: 'HRERA-PKL-PNP-349-2022',
  },
  {
    slug: 'the-address-panipat',
    title: 'The Address Panipat',
    location: 'Sector 18, HUDA, Panipat',
    segment: 'Residential',
    form: 'Flats & Floors',
    type: 'Flats',
    status: 'Ready to Move',
    price: '₹56 L – ₹1.58 Cr',
    area: '805 sq ft · 2–3 BHK',
    units: 'Multiple units',
    possession: 'Ready',
    total: 'Multiple blocks',
    description: 'Premium ready-to-move residential complex in HUDA Sector 18 with 2 and 3 BHK apartments and floors.',
    details: [
      'A ready-to-move residential project in Sector 18, HUDA, Panipat offering 2 and 3 BHK apartments and floors ranging from 805 sq ft.',
      'The complex includes a swimming pool, gymnasium, landscaped gardens and 24x7 security with video door phones in every unit.',
    ],
    features: ['Ready to move', 'HUDA Sector 18 location', '2 & 3 BHK options', 'Bank loans available', 'Video door phone'],
    amenities: ['Swimming pool', 'Gymnasium', 'Landscaped gardens', '24x7 security', 'Video door phone', 'Power backup'],
    nearby: ['HUDA Sector 18', 'City centre access'],
    specifications: {
      'Price range': '₹56 L – ₹1.58 Cr',
      'Sizes': '805 sq ft onwards',
      'Configuration': '2–3 BHK',
      'Possession': 'Ready to move',
    },
  },
  {
    slug: 'trident-plots-panipat',
    title: 'Trident Plots Panipat',
    location: 'Near NH 44, Panipat',
    segment: 'Residential',
    form: 'Plots',
    type: 'Plots',
    status: 'Pre-Launch',
    price: 'On Request',
    area: 'Varied plot sizes',
    units: 'Varied plot sizes',
    possession: 'On Request',
    total: 'Wide land parcel',
    description: 'RERA-approved plotted development near NH 44, offering customised plot sizes with township infrastructure and gated security.',
    details: [
      'A RERA-approved plotted development near NH 44, offering customised plot sizes with township infrastructure and gated security.',
      'The township plan covers landscaped parks, walking and cycling tracks, a clubhouse with pool and spa, sports facilities, and 24/7 power and water.',
    ],
    features: [
      'RERA-approved', 'Connectivity via NH 44', 'Strategic location',
      'Customised plot sizes', 'High investment potential', 'Gated township with CCTV',
    ],
    amenities: ['Clubhouse', 'Swimming pool', 'Spa', 'Walking tracks', 'Sports facilities', '24x7 power & water'],
    nearby: ['Near NH 44', 'Railway and road network access'],
    specifications: {
      'Plot sizes': 'Varied',
      'Possession': 'On Request',
      'Approval': 'RERA-approved',
      'Connectivity': 'NH 44 and city access',
    },
  },
  {
    slug: 'maxvel-ceremony-city',
    title: 'Ceremony City by Ceremony Homes',
    location: 'Village Badoli, Sector 40, Panipat',
    segment: 'Residential',
    form: 'Plots',
    type: 'Plots',
    status: 'Under Construction',
    price: 'On Request',
    area: '9.48 acres',
    units: 'Multiple plots',
    possession: 'On Request',
    total: '9.48 acres',
    description: 'RERA-registered plotted layout in Village Badoli, Sector 40, Panipat with landscaped gardens and a strong community feel.',
    details: [
      'A HRERA-registered plotted layout of about 9.48 acres in Village Badoli, Sector 40, developed by Ceremony Homes.',
      'The layout is planned around landscaped gardens, internal roads and green pockets, with security at the entry.',
    ],
    features: ['Community-oriented layout', 'RERA registered', 'Green spaces and parks'],
    amenities: ['Landscaped gardens', 'Internal roads', 'Security', 'Green pockets'],
    nearby: ['Village Badoli, Sector 40'],
    specifications: {
      'Project area': '9.48 acres',
      'Developer': 'Ceremony Homes',
      'Approval': 'HRERA registered',
    },
  },
  {
    slug: 'emperium-city-panipat',
    title: 'Emperium City Panipat',
    location: 'Taraf Rajputan, Panipat',
    segment: 'Residential',
    form: 'Plots & Villas',
    type: 'Plots',
    status: 'Under Construction',
    price: 'On Request',
    area: '9.28 acres',
    units: 'Multiple plots',
    possession: 'On Request',
    total: '9.28 acres',
    description: 'Residential plotted township in Taraf Rajputan offering premium plots and villa plots with gated security.',
    details: [
      'A 9.28-acre residential township in Taraf Rajputan, Panipat, featuring residential plots and villa plots in a gated community.',
      'The project includes landscaped greens, internal road network, and 24x7 security.',
    ],
    features: ['Gated community', 'Plots & villa plots', 'HRERA registered', 'Landscaped greens'],
    amenities: ['Landscaped greens', 'Internal roads', '24x7 security'],
    nearby: ['Taraf Rajputan, Panipat'],
    specifications: {
      'Project area': '9.28 acres',
      'Developer': 'Emperium',
    },
  },
  {
    slug: 'nysa-panipat-residential',
    title: 'Nysa Residential Township',
    location: 'GT Road | NH 44, Panipat',
    segment: 'Residential',
    form: 'Plots',
    type: 'Plots',
    status: 'Pre-Booking Open',
    price: '₹50,000 / sq yd',
    area: '143–180 sq yd',
    units: 'Limited Inventory',
    possession: 'Approx. 1–1.5 Years',
    total: 'N/A',
    bookingAmount: '₹11 Lakhs',
    paymentPlan: {
      bookingAmount: '₹11 Lakhs',
      steps: [
        { title: 'Booking Amount', detail: '₹11 Lakh Booking Amount' },
        { title: 'After RERA Approval', detail: 'Approx. 50% Clear in 30 Days' },
        { title: 'After Allotment EMI', detail: '9 Months Every Month' },
      ],
    },
    description: 'Premium residential plotted township on main GT Road / NH 44, Panipat with 143 to 180 sq yd plots.',
    details: [
      'NYSA Residential Township offers 143 to 180 sq. yd. residential plots at a pre-launch price of ₹50,000 per sq. yd. on main GT Road / NH 44, Panipat.',
      'Payment Plan: ₹11 Lakh booking amount, approx. 50% payment clear after RERA approval in 30 days, followed by 9 monthly EMIs after allotment.',
    ],
    features: [
      'Main GT Road / NH 44 location',
      'Pre-launch price: ₹50,000 / sq yd',
      '143 to 180 sq yd plot sizes',
      '₹11 Lakh booking amount',
      'Approx. 50% clear after RERA approval (30 Days)',
      '9-Month monthly EMI after allotment',
    ],
    amenities: ['Gated township', 'Internal roads', '24x7 security', 'Landscaped entry', 'Boundary wall'],
    nearby: ['GT Road / NH 44', 'Panipat City Access'],
    specifications: {
      'Project Type': 'Plotted Residential Township',
      'Location': 'GT Road | NH 44, Panipat',
      'Plot sizes': '143–180 sq yd',
      'Rate': '₹50,000 / sq yd',
    },
    mapUrl: 'https://maps.google.com/?q=29.518339,76.978022',
    brochureUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/projects-files/nysa-brochure.pdf',
    layoutUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/layouts/nysa-layout.pdf',
  },
  {
    slug: 'godrej-panipat',
    title: 'Godrej Evora Estate Panipat',
    location: 'Sector 40, Panipat',
    segment: 'Residential',
    form: 'Plots',
    type: 'Plots',
    status: 'Upcoming / New Launch',
    price: 'On Request',
    area: '100–180 sq yd',
    units: '700+ plots',
    possession: 'On Request',
    total: '43 acres',
    description: 'Upcoming 43-acre luxury plotted township (Godrej Evora Estate) by Godrej Properties in Sector 40, Panipat near NH-44.',
    details: [
      'An upcoming 43-acre luxury township (Godrej Evora Estate) by Godrej Properties in Sector 40, Panipat featuring over 700 premium plots from 100 to 180 sq yd.',
      'The township includes a grand clubhouse ("The Arches"), landscaped green acres, sports courts, swimming pool, and 24x7 gated security.',
    ],
    features: ['Godrej Properties', 'Godrej Evora Estate', '43-acre township', '700+ premium plots', 'Prime Sector 40 location near NH-44'],
    amenities: ['Clubhouse (The Arches)', 'Landscaped gardens', 'Swimming pool', 'Sports courts', '24x7 security'],
    nearby: ['Sector 40, Panipat', 'NH-44 Delhi-Chandigarh Highway'],
    specifications: {
      'Total area': '43 acres',
      'Plot sizes': '100–180 sq yd',
      'Developer': 'Godrej Properties',
      'RERA': 'HRERA-PKL-PNP-807-2025',
    },
    rera: 'HRERA-PKL-PNP-807-2025',
  },
  {
    slug: 'bhutani-panipat',
    title: 'Bhutani Developers',
    location: 'Sector 23, Panipat',
    segment: 'Residential',
    form: 'Apartments',
    type: 'Flats',
    status: 'Pre-Launch',
    price: '₹1.55 Cr',
    area: '1650 sq ft · 2–3 BHK',
    units: 'Multiple apartments',
    possession: 'On Request',
    total: 'Multi-tower complex',
    description: 'Pre-launch premium apartments by Bhutani Developers in Sector 23, Panipat — 2 & 3 BHK with modern amenities.',
    details: [
      'A pre-launch multi-tower residential project by Bhutani Developers in Sector 23, Panipat, offering 2 and 3 BHK apartments of 1650 sq ft at ₹1.55 Cr.',
      'The project features a rooftop amenity deck, modern gymnasium, swimming pool, and retail ground floor.',
    ],
    features: ['Bhutani Developers', 'Pre-launch pricing', 'Modern amenities', '2 & 3 BHK'],
    amenities: ['Rooftop deck', 'Swimming pool', 'Gymnasium', 'Retail ground floor', '24x7 security'],
    nearby: ['Sector 23, Panipat'],
    specifications: {
      'Price range': '₹52–78 Lakh',
      'Approval': 'RERA registered agent',
      'Location': 'Sector 23–24, Panipat',
    },
  },
  {
    slug: 'century-21st-panipat',
    title: 'Century 21st Panipat',
    location: 'Sector 23–24, Panipat',
    segment: 'Residential & Commercial',
    form: 'Floors & Plots',
    type: 'Flats',
    status: 'Ready to Move',
    price: '₹52 L onwards',
    area: 'Floors & plots',
    units: 'Multiple units',
    possession: 'Ready',
    total: 'Mixed development',
    description: 'Mixed residential and commercial development in Sector 23–24, Panipat with ready-to-move floors and plots.',
    details: [
      'A ready-to-move mixed development in Sector 23–24, Panipat offering independent floors and residential plots from ₹52 Lakhs.',
      'Ideal for end use and investment with proximity to the city and existing civic infrastructure.',
    ],
    features: ['Ready to move', 'Mixed residential & commercial', 'Investment potential', 'City centre proximity'],
    amenities: ['Internal roads', 'Security', 'Commercial ground floor'],
    nearby: ['Sector 23–24, Panipat'],
    specifications: {
      'Price range': '₹52–78 Lakh',
      'Approval': 'RERA registered agent',
      'Location': 'Sector 23–24, Panipat',
    },
  },
  {
    slug: 'sigma-industrial-park-panipat',
    title: 'Sigma Industrial Park',
    location: 'Panipat & NH-07 Industrial Belt',
    segment: 'Industrial',
    form: 'Industrial Plots',
    type: 'Industrial',
    status: 'RERA Approved',
    price: '₹27,000 / sq yd',
    area: '300–3000 sq yd',
    units: 'Industrial plots',
    possession: 'On Request',
    total: 'On Request',
    bookingAmount: '₹5 Lakhs',
    description: 'RERA-approved industrial park in the Panipat industrial belt (NH-07 corridor) with plots from 300 to 3000 sq yd and ready infrastructure.',
    details: [
      'A RERA-approved industrial park in the Panipat industrial belt along the NH-07 corridor (Mauli & Sarakpur estate), offering industrial plots from 300 to 3000 sq yd starting at ₹27,000 per sq yd.',
      'Infrastructure is already built: power and water lines, wide surface street network, drainage and sewage, with 24x7 security and CCTV. Booking amount is ₹5 Lakhs.',
    ],
    features: ['RERA approved', 'High-security campus', 'Highway connectivity', 'Panipat region hub', 'Built infrastructure'],
    amenities: ['Power lines', 'Water lines', 'Drainage & sewage', 'Street network', '24x7 security', 'CCTV'],
    nearby: ['Panipat Industrial Zone', 'NH-07 corridor', 'Direct highway connectivity'],
    specifications: {
      'Plot range': '300–3000 sq yd',
      'Rate': 'From ₹27,000 / sq yd',
      'RERA': 'HRERA-PKL-PKL-503-2023',
    },
    rera: 'HRERA-PKL-PKL-503-2023',
    mapUrl: 'https://maps.google.com/?q=Sigma+Industrial+Park+Panipat',
    brochureUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/projects-files/sigma-project-history.pdf',
    layoutUrl: 'https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/projects-files/sigma-project-history.pdf',
  },
  {
    slug: 'the-village-business-park',
    title: 'The Village Business Park',
    location: 'Chautala Road, Opposite Sector 29 Part 2, Ujha, Panipat',
    segment: 'Industrial',
    form: 'Industrial Plots',
    type: 'Industrial',
    status: 'Under Construction',
    price: 'On Request',
    area: '100+ acres',
    units: 'Industrial plots, 482–4,390 m²',
    possession: 'Mar 2026',
    total: '100+ acres',
    description: 'Gated industrial plotting township by Waverly across 100+ acres at Ujha, DTCP and HRERA approved.',
    details: [
      'A gated industrial plotting township by Waverly across 100+ acres at Ujha, with plot sizes from 482 to 4,390 m² and possession targeted for March 2026.',
      'The layout is DTCP and HRERA approved, Mahavastu compliant, and includes green conservation zones, a sewage treatment plant, underground drainage and CAT VI internet cable.',
    ],
    features: [
      'DTCP / HRERA approved', 'Industrial township', 'Green conservation zones',
      'Mahavastu compliant', 'Connected to NH 44 and NH 352',
    ],
    amenities: [
      'Green conservation zones', 'Sewage treatment plant', 'Underground drainage',
      'CAT VI internet cable', '24x7 security',
    ],
    nearby: ['Connected to NH 44 and NH 352', 'Opposite Sector 29 Part 2, HUDA'],
    specifications: {
      'Total area': '100+ acres',
      'Plot sizes': '482–4,390 m²',
      'Possession': 'Mar 2026',
      'RERA': 'HRERA-PKL-PNP-321-2022',
    },
    rera: 'HRERA-PKL-PNP-321-2022',
  },
];

export const FILTER_TABS = ['All', 'Plots', 'Villas', 'Residential', 'Industrial'] as const;
export type FilterTab = typeof FILTER_TABS[number];

export function filterProjects(projects: Project[], tab: FilterTab): Project[] {
  if (tab === 'All') return projects;
  if (tab === 'Villas') return projects.filter(p => p.type.includes('Villas'));
  return projects.filter(p => p.type.includes(tab));
}
