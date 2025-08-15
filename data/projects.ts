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
    title: "Trident Plots Panipat",
    description:
      "Premium residential plotted development strategically located near NH 44, offering customized residential plots with world-class infrastructure and township amenities. This RERA-approved project emphasizes excellent connectivity and modern facilities for a secure living experience.",
    image:
      "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Near NH 44, Panipat",
    type: "Plots",
    status: "Pre-Launch",
    units: "Varied plot sizes",
    price: 0, // On Request
    area: "Wide expanse of land",
    slug: "trident-plots-panipat",
    features: [
      "RERA-Approved",
      "Excellent Connectivity (NH 44, railway, road network)",
      "Strategic Location (near schools, markets, malls, hospitals)",
      "Modern Amenities",
      "Customized Plots",
      "High Investment Potential",
      "Safe Living (CCTV, security guards, gated township)",
    ],
    amenities: [
      "Landscaped parks",
      "Walking/cycling tracks",
      "24/7 Power & water supply",
      "Gated security with CCTV",
      "Basketball court",
      "Gym",
      "Jogging track",
      "Indoor games area",
      "Dedicated car parking",
      "Swimming pool",
      "Meditation room",
      "Clubhouse",
      "Spa",
      "Kid's play area",
      "Senior citizen deck",
      "Billiard table",
    ],
    specifications: {
      "Total Area": "Wide expanse of land",
      "Plot Sizes": "Varied",
      Possession: "On Request",
      Approval: "RERA-Approved",
      Connectivity: "NH 44 & city access",
    },
    gallery: [
      "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 2,
    title: "Ceremony City by Ceremony Homes",
    description:
      "RERA‑registered plotted layout in Village Badoli, Sector 40, Panipat. This project features landscaped gardens and fosters a strong community feel, offering multiple plots for residential development.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Village Badoli, Sector 40, Panipat",
    type: "Plots",
    status: "Under Construction",
    units: "Multiple plots",
    price: 0, // On Request
    area: "Approx. 9.48 acres",
    slug: "maxvel-ceremony-city",
    features: [
      "Community‑oriented layout",
      "RERA Registered",
      "Green spaces & parks",
    ],
    amenities: ["Landscaped gardens", "Security", "Internal roads"],
    specifications: {
      "Project Area": "Village Badoli",
      Approval: "HRERA (Ceremony Homes projects are HRERA approved)",
      Developer: "Ceremony Homes",
    },
    gallery: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 3,
    title: "Eldeco Paradiso Panipat",
    description:
      "An ongoing mixed development featuring plots & villas (100–180 sq yd) situated on Main G.T Karnal Road, Panipat. The project boasts a luxurious clubhouse and extensive sports amenities, offering easy accessibility to major cities.",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Main G.T Karnal Road, Panipat (Sector 40 area)",
    type: "Plots/Villas",
    status: "Under Construction",
    units: "100+ units",
    price: 150, // approx ₹1.50 Cr
    area: "14 Acres",
    slug: "eldeco-paradiso",
    features: [
      "Custom-built villa/plot homes",
      "Clubhouse, pool & gym",
      "Yoga & jogging garden",
      "Easy accessibility to Ghaziabad, Gurgaon, Bahadurgarh, Jhajjar and Palwal through an eight-lane Eastern peripheral expressway",
      "Close to Town Centre, Railway station, Bus stand",
    ],
    amenities: [
      "Swimming pool",
      "Gym",
      "Jogging Track",
      "Yoga Garden",
      "Lawn Tennis Court",
      "Basketball Court",
      "Banquet Lawn",
      "Kids play area",
      "Multipurpose hall",
    ],
    specifications: {
      "Plot Sizes": "100‑180 sq yd",
      Possession: "On Request",
      Approval: "HRERA‑PKL‑PNP‑299‑2022",
      Area: "14 Acres",
    },
    gallery: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 4,
    title: "Emperium Palm Drive",
    description:
      "A landmark gated society spread over 10.51 acres in Sector 19A & 40, Panipat. It offers 152 builder floors and features an amphitheatre, sports courts, and reliable power backup. The project is strategically located near NH 44 and key city amenities.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Sector 19A & 40, Panipat",
    type: "Residential",
    status: "Under Construction",
    units: "152 Units",
    price: 73, // 3 BHK ~₹73 L
    area: "970 sq ft (3 BHK)",
    slug: "emperium-palm-drive",
    features: [
      "Gated complex",
      "Amphitheatre & sports courts",
      "Zen park & pergola",
      "Underground electricity supply",
      "Premium Location",
      "850 mtrs from National Highway 44",
      "8 km from Panipat Railway Station, Banks, Schools, Hospitals",
    ],
    amenities: [
      "Jogging/strolling track",
      "Outdoor tennis & badminton courts",
      "Multipurpose courts",
      "Park & amphitheatre",
      "CCTV, power backup",
      "Fire Fighting Equipment",
      "Community entrance gate",
      "Kids play area",
      "Rain Water Harvesting",
      "Water Storage",
    ],
    specifications: {
      "Project Area": "10.51 Acres",
      Units: "152 Builder Floors",
      "Launch Date": "Oct 1 2022",
      Possession: "Oct 1 2023",
      Approval: "HRERA‑PKL‑PNP‑349‑2022",
    },
    gallery: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 5,
    title: "Emperium City Panipat",
    description:
      "A plots & villa project by Emperium Realty in Taraf Rajputan, Panipat. This gated layout offers wide roads, a clubhouse with world-class amenities, and is situated in a fast-growing locality along National Highway 44.",
    image:
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinyesrgb&w=800",
    location: "Taraf Rajputan, Panipat",
    type: "Plots/Villas",
    status: "Under Construction",
    units: "Plots & Villas",
    price: 0, // On Request
    area: "9.28 Acres",
    slug: "emperium-city-panipat",
    features: [
      "9.28 Acre gated layout",
      "Plot + villa options",
      "Broad internal roads",
      "Clubhouse with World-Class Amenities & Facilities",
      "Strategically located along National Highway 44",
    ],
    amenities: ["Wide roads", "Street lighting", "Clubhouse"],
    specifications: {
      "Total Area": "9.28 Acres",
      "Unit Type": "Plots & Villas",
      Possession: "Dec 2026",
      Approval:
        'RERA (Under Process / Coming Soon for "Emperium Panipat" projects)',
    },
    gallery: [
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 6,
    title: "M3M City of Dreams Panipat",
    description:
      "A premium 337-acre plotted township in Sector 36 & 37, Panipat. This mega township offers diverse plot sizes, luxurious amenities, and phased development, with over 700 plots already sold.",
    image:
      "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Sector 36 & 37, Panipat",
    type: "Plots",
    status: "Booking Open / Under Construction",
    units: "500+ Plots (141-1000 sq yards)",
    price: 55, // approx. ₹55 L (indicative starting price)
    area: "337 Acres",
    slug: "m3m-city-of-dreams",
    features: [
      "Mega 337‑acre township",
      "₹1,250 Cr revenue potential",
      "700+ plots sold",
      "Central Avenue (60M Wide)",
      "Aesthetically Planned Landscape",
      "Multiple Sports Amenities",
      "Shaded Walkways",
      "Themed Areas with Sit-Outs",
      "Thoughtfully Designed Lake",
      "Proximity to NH 44",
    ],
    amenities: [
      "Sports complex",
      "Shopping center",
      "Education & healthcare facilities",
      "Cycle tracks",
      "Linear park",
      "Pet park",
      "Convenience shopping area",
      "Clubhouses (4 luxurious)",
      "Planned green spaces",
      "Shopping street",
      "Religious centre",
      "Dispensary",
      "Traffic flow planning",
      "Child care facilities",
      "Kids Play Areas",
      "Cafeteria",
      "Restaurant",
      "Sauna",
      "Spa/Jacuzzi",
      "Yoga",
      "24x7 Security",
    ],
    specifications: {
      "Total Area": "337 Acres",
      "Plot Sizes": "141-1000 sq yd",
      Investment: "High (revenue potential in excess of ₹1250 Cr)",
      Approval:
        "HRERA-PKL-PROJ-1259-2023, HRERA-PKL-PNP-523-2023, HRERA-PKL-PNP-446-2023",
    },
    gallery: [
      "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 7,
    title: "Sigma Industrial Park",
    description:
      "A premium RERA‑approved industrial park located in Village Mauli & Sarakpur, Panchkula district, near the NH‑07 corridor. It offers industrial plots with modern infrastructure, 24×7 security, and flexible plans, ideal for various industries.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    location:
      "Village Mauli & Sarakpur, Panchkula (near Panipat, NH‑07 corridor)",
    type: "Commercial",
    status: "Approved and Certificate Uploaded",
    units: "Plots (300–3000 sq yd)",
    price: 27, // ₹27K per sq yard
    area: "300–3000 sq yd",
    slug: "sigma-industrial-park-panipat",
    features: [
      "RERA approved",
      "High‑security campus",
      "Highway connectivity",
      "Built infrastructure",
    ],
    amenities: [
      "24×7 security & CCTV",
      "Power & water lines",
      "Surface street network",
      "Drainage & sewage",
    ],
    specifications: {
      "Plot Range": "300–3000 sq yd",
      "Starting Price": "₹27,000/sq yd",
      "RERA ID": "HRERA‑PKL‑PKL‑503‑2023",
      "Booking Amount": "₹5 L",
    },
    gallery: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 8,
    title: "The Village Business Park",
    description:
      "A gated industrial plotting township by Waverly spanning over 100 acres in Ujha, Panipat. It holds DTCP/HRERA approval and features wide internal roads, green conservation zones, and a large range of plot sizes with robust infrastructure.",
    image:
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Chautala Road, Opposite Sector-29, Part-2, HUDA, Ujha, Panipat",
    type: "Commercial",
    status: "Under Construction",
    units: "Plots (482–4,390 m²)",
    price: 0, // On request
    area: "100+ Acres",
    slug: "the-village-business-park",
    features: [
      "DTCP/HRERA approved",
      "Industrial township",
      "Green conservation zones",
      "Large plot range",
      "Mahavastu Compliant for growth and prosperity",
      "Connected to NH 44 (Delhi Srinagar Highway), NH 352 (Rohtak Highway)",
    ],
    amenities: [
      "Wide roads",
      "Rain‑water harvesting",
      "Sewage treatment plant",
      "Security gate barrier",
      "Underground drainage & utilities",
      "CAT VI cable for internet and communication",
    ],
    specifications: {
      "Total Area": "100+ Acres",
      "Plot Sizes": "482–4,399 m²",
      "RERA ID": "HRERA‑PKL‑PNP‑321‑2022",
      Possession: "Mar 2026",
    },
    gallery: [
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 9,
    title: "The Address Panipat",
    description:
      "A premium residential project located in Sector 18, HUDA, Panipat. It offers 2-3 BHK flats & floors equipped with modern amenities, positioned in a prime locality.",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Sector 18, HUDA, Panipat",
    type: "Residential",
    status: "Ready to Move / New Booking",
    units: "Flats/Floors (2 BHK, 3 BHK)",
    price: 56, // Approx. ₹56 L for 2 BHK
    area: "Varied (e.g., 805 sq ft for 2 BHK)",
    slug: "the-address-panipat",
    features: [
      "Premium HUDA location",
      "2–3 BHK options",
      "Parking",
      "Servant Room (for some units)",
    ],
    amenities: ["Parking"],
    specifications: {
      Locality: "Sector 18, HUDA",
      "Price Range": "₹56 L - ₹1.58 Cr (Approx.)",
    },
    gallery: [
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 10,
    title: "Bhutani Developers Panipat Projects",
    description:
      "Bhutani Developers offers spacious 2 & 3 BHK apartments in Sector 23, Panipat, featuring premium design. Booking has started with a ₹5 L downpayment. Bhutani Developers is also known for providing construction services in the region.",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Sector 23, Panipat (also Panipat GT Road area)",
    type: "Residential",
    status: "Pre‑Launch",
    units: "2 & 3 BHK",
    price: 155, // ~₹1.55 Cr
    area: "1650 sq ft",
    slug: "bhutani-panipat",
    features: ["Modern architecture", "Prime neighborhood"],
    amenities: ["Scenic balconies", "Green surroundings"],
    specifications: {
      "Floor Size": "1650 sq ft",
      Booking: "From ₹5 L",
      Pricing: "₹1.55 Cr (approx)",
      Approval: "RERA (Bhutani is a registered developer)",
    },
    gallery: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 11,
    title: "Century 21st Real Estate Mentor Panipat Properties",
    description:
      "Century 21st Real Estate Mentor assists with 2–3 BHK builder floors & commercial plots in Sector 24/23, Panipat. Properties include amenities like playgrounds and parking, with prices ranging from 52–78 L.",
    image:
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Sector 23–24, Panipat",
    type: "Residential/Commercial",
    status: "Ready to Move",
    units: "Floors & Plots",
    price: 78,
    area: "160 sq ft (for floors, plots vary)",
    slug: "century-21st-panipat",
    features: ["2 & 3 BHK floors", "Commercial plot options"],
    amenities: ["Playground", "Parking", "Power backup"],
    specifications: {
      "Floor Size": "160 sq ft",
      "Price Range": "₹52–78 L",
      Approval:
        "RERA (Century 21st Real Estate Mentor is a RERA registered agent)",
    },
    gallery: [
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 12,
    title: "Godrej Panipat Project (Upcoming)",
    description:
      "Godrej Properties has acquired a 43-acre land parcel in Sector 40, Panipat, for an upcoming premium plotted development project. This significant venture, Godrej Properties' fourth plotted township in North India, is expected to generate a revenue potential exceeding ₹1,250 crore.",
    image:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Sector 40, Panipat",
    type: "Residential/Plots",
    status: "Land Acquired",
    units: "On Request (will be plotted development)",
    price: 0,
    area: "43 Acres",
    slug: "godrej-panipat",
    features: [
      "Trusted Godrej brand",
      "43-acre land parcel",
      "Plotted residential development (approx. 1.02 million sq ft)",
      "Accessible from National Highway",
      "Close to social infrastructure",
      "Fourth residential plotted township in North India for Godrej Properties",
    ],
    amenities: [], // Amenities not yet detailed for this upcoming project
    specifications: {
      "Land Area": "43 Acres",
      "Revenue Potential": "₹1250+ Cr",
      Approval: "Under Planning",
      Location: "Sector 40, Panipat",
    },
    gallery: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 13,
    title: "Nysa Residential Panipat",
    description:
      "Nysa Panipat is in 18 Acre Gated Township Situated at Shimla Maulana Road Aligned with Eldeco Paradiso",
    image:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Baberpur mandi, Panipat",
    type: "Residential/Plots",
    status: "On Sale",
    units: "10 Left",
    price: 100,
    area: "18 Acres",
    slug: "nysa-panipat-residential",
    features: [
      "Nysa brand",
      "18-acre land parcel",
      "Plotted residential development",
      "Accessible from National Highway",
      "Close to social infrastructure",
      "Prime Location Afforadable Prices",
    ],
    amenities: [], // Amenities not yet detailed for this upcoming project
    specifications: {
      "Land Area": "18 Acres",
      "Revenue Potential": "100+ Cr",
      Approval: "Registered",
      Location: "Shimla Maulana Road, Panipat",
    },
    gallery: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
];
