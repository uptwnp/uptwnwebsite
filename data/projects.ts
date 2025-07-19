export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  type: string;
  status: string;
  units: string;
  price: number;
  area: string;
  slug: string;
  features: string[];
  amenities: string[];
  specifications: {
    [key: string]: string;
  };
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Uptown Heights',
    description: 'Luxury residential apartments with modern amenities and beautiful city views. Located in the heart of Model Town with excellent connectivity.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Model Town, Panipat',
    type: 'Residential',
    status: 'Under Construction',
    units: '120 Units',
    price: 45,
    area: '1200-1800 sq ft',
    slug: 'uptown-heights',
    features: [
      'Modern architecture design',
      'Prime location in Model Town',
      '24/7 security system',
      'Power backup facility',
      'Vastu compliant construction',
      'Earthquake resistant structure'
    ],
    amenities: [
      'Covered Parking',
      '24/7 Security',
      'Landscaped Gardens',
      'Gym & Fitness Center',
      'Club House',
      'High-Speed Elevators',
      'Water Treatment Plant',
      'Waste Management System'
    ],
    specifications: {
      'Total Floors': '15 Floors',
      'Apartment Types': '2BHK, 3BHK, 4BHK',
      'Possession': 'Dec 2025',
      'Approval': 'HUDA Approved',
      'Parking': 'Covered Parking',
      'Facing': 'East & North'
    },
    gallery: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 2,
    title: 'Commercial Plaza',
    description: 'Prime commercial space in the heart of the city with excellent connectivity and high footfall area. Perfect for retail and office spaces.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'G.T. Road, Panipat',
    type: 'Commercial',
    status: 'Ready to Move',
    units: '50 Shops',
    price: 35,
    area: '200-500 sq ft',
    slug: 'commercial-plaza',
    features: [
      'High street location',
      'Maximum footfall area',
      'Wide road connectivity',
      'Ample parking space',
      'Modern infrastructure',
      'Investment opportunity'
    ],
    amenities: [
      'Ample Parking',
      'Security System',
      'Power Backup',
      'High-Speed Elevators',
      'Fire Safety Systems',
      'CCTV Surveillance',
      'Maintenance Services',
      'Common Area Facilities'
    ],
    specifications: {
      'Total Floors': '4 Floors',
      'Shop Types': 'Retail, Office Space',
      'Possession': 'Immediate',
      'Approval': 'Municipal Approved',
      'Parking': 'Multi-level Parking',
      'Facing': 'Main Road'
    },
    gallery: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 3,
    title: 'Green Valley Villas',
    description: 'Premium villas with landscaped gardens and modern security systems. Designed for luxury living with all modern amenities.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 12, Panipat',
    type: 'Residential',
    status: 'Launching Soon',
    units: '30 Villas',
    price: 85,
    area: '2400-3200 sq ft',
    slug: 'green-valley-villas',
    features: [
      'Independent villa concept',
      'Private gardens for each villa',
      'Gated community',
      'Premium location',
      'Modern amenities',
      'Investment potential'
    ],
    amenities: [
      'Private Parking',
      'Gated Security',
      'Landscaped Gardens',
      'Community Club',
      'Swimming Pool',
      'Kids Play Area',
      'Jogging Track',
      'Gardens & Parks'
    ],
    specifications: {
      'Total Villas': '30 Independent Villas',
      'Villa Types': '3BHK, 4BHK',
      'Possession': 'Mar 2026',
      'Approval': 'HUDA Approved',
      'Parking': 'Private Parking',
      'Plot Size': '200-300 sq yards'
    },
    gallery: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 4,
    title: 'City Center Plots',
    description: 'Premium residential plots in developing area with excellent appreciation potential. Perfect for building your dream home.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 15, Panipat',
    type: 'Plots',
    status: 'Available',
    units: '80 Plots',
    price: 25,
    area: '120-250 sq yards',
    slug: 'city-center-plots',
    features: [
      'Developing residential area',
      'Good connectivity',
      'Clear titles',
      'Affordable pricing',
      'Future appreciation',
      'Flexible payment plans'
    ],
    amenities: [
      'Wide Roads',
      'Street Lighting',
      'Water Supply',
      'Electricity Connection',
      'Drainage System',
      'Green Spaces',
      'Community Development',
      'Security Planning'
    ],
    specifications: {
      'Total Plots': '80 Residential Plots',
      'Plot Sizes': '120, 150, 200, 250 sq yards',
      'Possession': 'Immediate',
      'Approval': 'HUDA Approved',
      'Facing': 'East, North, South',
      'Width': '20-30 feet'
    },
    gallery: [
      'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1546174/pexels-photo-1546174.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 5,
    title: 'Business Hub',
    description: 'Modern office complex designed for growing businesses with state-of-the-art infrastructure and premium location.',
    image: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Civil Lines, Panipat',
    type: 'Commercial',
    status: 'Pre-Launch',
    units: '40 Offices',
    price: 55,
    area: '400-800 sq ft',
    slug: 'business-hub',
    features: [
      'Modern office design',
      'Central location',
      'IT infrastructure ready',
      'Professional environment',
      'Business district',
      'Growth potential'
    ],
    amenities: [
      'Reserved Parking',
      'High Security',
      'Conference Rooms',
      'Cafeteria',
      'High-Speed Internet',
      'Central AC',
      'Generator Backup',
      'Reception Services'
    ],
    specifications: {
      'Total Floors': '8 Floors',
      'Office Types': 'Small, Medium, Large',
      'Possession': 'Jun 2026',
      'Approval': 'Municipal Approved',
      'Parking': 'Basement Parking',
      'Certification': 'Green Building'
    },
    gallery: [
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 6,
    title: 'Affordable Homes',
    description: 'Budget-friendly residential apartments designed for first-time homebuyers with essential amenities and good connectivity.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'HUDA Sector, Panipat',
    type: 'Residential',
    status: 'Booking Open',
    units: '200 Units',
    price: 28,
    area: '800-1200 sq ft',
    slug: 'affordable-homes',
    features: [
      'Budget-friendly pricing',
      'First-time buyer friendly',
      'Essential amenities',
      'Good connectivity',
      'Government approved',
      'Easy financing'
    ],
    amenities: [
      'Open Parking',
      'Basic Security',
      'Water Supply',
      'Power Backup',
      'Lift Facility',
      'Common Areas',
      'Children Play Area',
      'Maintenance Service'
    ],
    specifications: {
      'Total Floors': '8 Floors',
      'Apartment Types': '1BHK, 2BHK',
      'Possession': 'Aug 2025',
      'Approval': 'HUDA Approved',
      'Parking': 'Open Parking',
      'Loan': 'Bank Loan Available'
    },
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 7,
    title: 'M3M Golf Estate',
    description: 'Ultra-luxury residential project by M3M with world-class amenities, golf course views, and premium specifications. Located in the heart of Panipat with excellent connectivity.',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 65, Panipat',
    type: 'Residential',
    status: 'Under Construction',
    units: '200 Units',
    price: 95,
    area: '1800-3500 sq ft',
    slug: 'm3m-golf-estate',
    features: [
      'Golf course facing apartments',
      'Premium M3M brand quality',
      'World-class amenities',
      'Strategic location',
      'High-end specifications',
      'Excellent investment potential'
    ],
    amenities: [
      'Golf Course Views',
      'Clubhouse with Pool',
      'Multi-level Parking',
      'High-Speed Elevators',
      'Landscaped Gardens',
      'Kids Play Area',
      'Gymnasium & Spa',
      'Sports Facilities',
      '24/7 Security',
      'Power Backup',
      'Water Treatment Plant',
      'Waste Management'
    ],
    specifications: {
      'Total Floors': '25 Floors',
      'Apartment Types': '2BHK, 3BHK, 4BHK',
      'Possession': 'Dec 2026',
      'Approval': 'HUDA & RERA Approved',
      'Parking': 'Covered Parking',
      'Facing': 'Golf Course & Garden'
    },
    gallery: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 8,
    title: 'Trident Galaxy',
    description: 'Premium residential complex by Trident Group featuring modern architecture, smart home features, and comprehensive amenities. Designed for contemporary living in Panipat.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 25, Panipat',
    type: 'Residential',
    status: 'Pre-Launch',
    units: '150 Units',
    price: 75,
    area: '1400-2800 sq ft',
    slug: 'trident-galaxy',
    features: [
      'Smart home automation',
      'Trident Group quality',
      'Modern architecture',
      'Energy efficient design',
      'Premium location',
      'Future-ready infrastructure'
    ],
    amenities: [
      'Smart Home Features',
      'Swimming Pool',
      'Fitness Center',
      'Community Hall',
      'Children Play Area',
      'Jogging Track',
      'Landscaped Gardens',
      'Visitor Parking',
      'CCTV Surveillance',
      'Intercom Facility',
      'Generator Backup',
      'Water Harvesting'
    ],
    specifications: {
      'Total Floors': '18 Floors',
      'Apartment Types': '2BHK, 3BHK, 4BHK',
      'Possession': 'Mar 2027',
      'Approval': 'HUDA Approved',
      'Parking': 'Stilt + Basement',
      'Certification': 'Green Building'
    },
    gallery: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 9,
    title: 'Sigma Towers',
    description: 'Contemporary high-rise residential project by Sigma Group offering luxury living with panoramic city views. Features premium amenities and strategic location in Panipat.',
    image: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Civil Lines, Panipat',
    type: 'Residential',
    status: 'Booking Open',
    units: '180 Units',
    price: 68,
    area: '1200-2400 sq ft',
    slug: 'sigma-towers',
    features: [
      'High-rise tower design',
      'Panoramic city views',
      'Premium specifications',
      'Central location',
      'Modern lifestyle amenities',
      'Investment opportunity'
    ],
    amenities: [
      'Sky Lounge',
      'Swimming Pool',
      'Gymnasium',
      'Multi-purpose Hall',
      'Kids Play Zone',
      'Landscaped Terrace',
      'Covered Parking',
      'High-Speed Lifts',
      '24x7 Security',
      'Power Backup',
      'Fire Safety Systems',
      'Maintenance Services'
    ],
    specifications: {
      'Total Floors': '22 Floors',
      'Apartment Types': '2BHK, 3BHK',
      'Possession': 'Sep 2026',
      'Approval': 'HUDA & Fire NOC',
      'Parking': 'Multi-level Parking',
      'View': 'City & Garden Views'
    },
    gallery: [
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 10,
    title: 'Godrej Nurture',
    description: 'Premium residential project by Godrej Properties featuring eco-friendly design, world-class amenities, and sustainable living solutions. A perfect blend of luxury and nature.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 33, Panipat',
    type: 'Residential',
    status: 'Under Construction',
    units: '250 Units',
    price: 85,
    area: '1600-3200 sq ft',
    slug: 'godrej-nurture',
    features: [
      'Godrej brand assurance',
      'Eco-friendly construction',
      'Sustainable living features',
      'Premium amenities',
      'Green building design',
      'Excellent connectivity'
    ],
    amenities: [
      'Central Park',
      'Clubhouse',
      'Swimming Pool',
      'Fitness Center',
      'Yoga & Meditation Area',
      'Children Play Area',
      'Senior Citizen Area',
      'Jogging Track',
      'Cycling Track',
      'Organic Garden',
      'Rainwater Harvesting',
      'Solar Power Systems',
      'Waste Management',
      '24/7 Security'
    ],
    specifications: {
      'Total Floors': '20 Floors',
      'Apartment Types': '2BHK, 3BHK, 4BHK',
      'Possession': 'Jun 2027',
      'Approval': 'HUDA & RERA Approved',
      'Parking': 'Basement + Stilt',
      'Certification': 'IGBC Gold Rated'
    },
    gallery: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 11,
    title: 'Trident Commercial Hub',
    description: 'Premium commercial complex by Trident Group offering retail spaces, offices, and food courts. Strategically located on main road with high visibility and footfall.',
    image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'GT Road, Panipat',
    type: 'Commercial',
    status: 'Ready to Move',
    units: '80 Spaces',
    price: 65,
    area: '300-1200 sq ft',
    slug: 'trident-commercial-hub',
    features: [
      'Prime commercial location',
      'High street visibility',
      'Multiple business options',
      'Excellent connectivity',
      'Modern infrastructure',
      'High ROI potential'
    ],
    amenities: [
      'Central Air Conditioning',
      'High-Speed Elevators',
      'Ample Parking',
      'Food Court',
      'ATM Facilities',
      'CCTV Surveillance',
      'Fire Safety Systems',
      'Power Backup',
      'Maintenance Services',
      'Security Services',
      'Common Washrooms',
      'Loading/Unloading Area'
    ],
    specifications: {
      'Total Floors': '6 Floors',
      'Space Types': 'Retail, Office, Food Court',
      'Possession': 'Immediate',
      'Approval': 'Municipal Approved',
      'Parking': 'Multi-level Parking',
      'Road Width': '60 Feet Main Road'
    },
    gallery: [
      'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 13,
    title: 'Trident Panipat',
    description: 'Government approved residential plots project by Trident Group in prime location with excellent connectivity to Ansal and Sector 18. Known for reputable and reliable real estate projects.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 19A, Nizampur, Panipat',
    type: 'Plots',
    status: 'Available',
    units: 'Multiple Plot Sizes',
    price: 35,
    area: '120-300 sq yards',
    slug: 'trident-panipat',
    features: [
      'Government approved project',
      'Prime location in Sector 19A',
      'Close to Ansal and Sector 18',
      'Reputable developer brand',
      'Excellent connectivity',
      'Investment potential'
    ],
    amenities: [
      'Swimming Pool',
      'Gymnasium',
      'Landscaped Gardens',
      '24/7 Security',
      'Wide Roads',
      'Street Lighting',
      'Water Supply',
      'Electricity Connection',
      'Drainage System',
      'Green Spaces'
    ],
    specifications: {
      'Total Area': 'Multiple Acres',
      'Plot Sizes': '120-300 sq yards',
      'Possession': 'Ready for Construction',
      'Approval': 'Government Approved',
      'Facing': 'Multiple Options',
      'Developer': 'Trident Group'
    },
    gallery: [
      'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1546174/pexels-photo-1546174.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 14,
    title: 'Godrej Plotted Development Project',
    description: 'Premium plotted residential development by Godrej Properties on 43-acre land parcel. This marks Godrej Properties entry into Panipat market and their fourth residential plotted township in North India.',
    image: 'https://images.pexels.com/photos/1546174/pexels-photo-1546174.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 40, Panipat',
    type: 'Plots',
    status: 'Under Development',
    units: 'Multiple Plot Sizes',
    price: 45,
    area: '150-400 sq yards',
    slug: 'godrej-plotted-development-panipat',
    features: [
      'Godrej Properties brand assurance',
      '43-acre land parcel',
      'Approximately 1.02 million sq ft development',
      'Accessible from National Highway',
      'Close to social infrastructure',
      'Fourth plotted township in North India'
    ],
    amenities: [
      'Landscaped Gardens',
      'Community Center',
      'Children Play Area',
      'Jogging Track',
      'Security Systems',
      'Wide Internal Roads',
      'Street Lighting',
      'Water Supply',
      'Electricity Infrastructure',
      'Sewerage System',
      'Green Belt Areas',
      'Entrance Gate'
    ],
    specifications: {
      'Total Area': '43 Acres',
      'Development Size': '1.02 Million Sq Ft',
      'Plot Sizes': '150-400 sq yards',
      'Possession': 'Under Development',
      'Approval': 'HUDA Approved',
      'Connectivity': 'National Highway Access',
      'Developer': 'Godrej Properties'
    },
    gallery: [
      'https://images.pexels.com/photos/1546174/pexels-photo-1546174.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 15,
    title: 'M3M City of Dreams',
    description: 'Mega township project by M3M Group on 333-acre land parcel with investment of ₹2,700 crore and targeted revenue of ₹5,000 crore. Over 700 plots already sold totaling ₹1,100 crore.',
    image: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 36 & 37, Panipat',
    type: 'Plots',
    status: 'Booking Open',
    units: '1000+ Plots',
    price: 55,
    area: '200-500 sq yards',
    slug: 'm3m-city-of-dreams-panipat',
    features: [
      'M3M Group mega project',
      '333-acre township',
      '₹2,700 crore investment',
      'Over 700 plots already sold',
      'Targeted revenue ₹5,000 crore',
      'Premium location in Sector 36 & 37'
    ],
    amenities: [
      'Township Amenities',
      'Community Facilities',
      'Sports Complex',
      'Shopping Center',
      'Educational Facilities',
      'Healthcare Center',
      'Parks & Gardens',
      'Wide Roads',
      'Street Lighting',
      'Water Treatment Plant',
      'Sewerage Treatment',
      'Power Infrastructure',
      '24/7 Security',
      'Entrance Gates'
    ],
    specifications: {
      'Total Area': '333 Acres',
      'Investment': '₹2,700 Crore',
      'Plot Sizes': '200-500 sq yards',
      'Possession': 'Phased Development',
      'Approval': 'HUDA & RERA Approved',
      'Sales Achievement': '700+ Plots Sold',
      'Developer': 'M3M Group'
    },
    gallery: [
      'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1546174/pexels-photo-1546174.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 16,
    title: 'Sigma Industrial Park Panipat',
    description: 'Industrial park project by Sigma Group designed for manufacturing and industrial businesses. Strategic location with excellent connectivity for industrial operations and logistics.',
    image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Industrial Area, Panipat',
    type: 'Commercial',
    status: 'Pre-Launch',
    units: 'Industrial Plots',
    price: 25,
    area: '1000-5000 sq yards',
    slug: 'sigma-industrial-park-panipat',
    features: [
      'Industrial park concept',
      'Strategic industrial location',
      'Excellent connectivity',
      'Manufacturing-ready infrastructure',
      'Logistics advantages',
      'Investment opportunity'
    ],
    amenities: [
      'Industrial Infrastructure',
      'Power Supply',
      'Water Supply',
      'Drainage System',
      'Wide Roads',
      'Loading/Unloading Areas',
      'Security Systems',
      'Fire Safety',
      'Boundary Wall',
      'Entry Gates',
      'Administrative Block',
      'Parking Areas'
    ],
    specifications: {
      'Project Type': 'Industrial Park',
      'Plot Sizes': '1000-5000 sq yards',
      'Possession': 'Under Planning',
      'Approval': 'Industrial Approval',
      'Connectivity': 'Highway Access',
      'Developer': 'Sigma Group'
    },
    gallery: [
      'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 12,
    title: 'Sigma IT Park',
    description: 'Modern IT and business park by Sigma Group designed for tech companies and corporate offices. Features state-of-the-art infrastructure and business-friendly environment.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Sector 29, Panipat',
    type: 'Commercial',
    status: 'Pre-Launch',
    units: '60 Offices',
    price: 78,
    area: '500-2000 sq ft',
    slug: 'sigma-it-park',
    features: [
      'IT-ready infrastructure',
      'Modern office spaces',
      'Business park concept',
      'Tech-friendly amenities',
      'Professional environment',
      'Growth potential'
    ],
    amenities: [
      'High-Speed Internet',
      'Video Conferencing Rooms',
      'Business Center',
      'Cafeteria',
      'Gym & Recreation',
      'Parking Facility',
      'Generator Backup',
      'Central AC',
      '24/7 Security',
      'Maintenance Support',
      'Reception Services',
      'Meeting Rooms'
    ],
    specifications: {
      'Total Floors': '10 Floors',
      'Office Types': 'Small, Medium, Large',
      'Possession': 'Dec 2026',
      'Approval': 'IT Department Approved',
      'Parking': 'Dedicated IT Park Parking',
      'Connectivity': 'Fiber Optic Ready'
    },
    gallery: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];