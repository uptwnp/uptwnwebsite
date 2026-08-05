import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://uptownproperty.in'),
  title: {
    default: 'Uptown Property · Panipat Real Estate & Plots',
    template: '%s | Uptown Property',
  },
  description: 'Plots, villas, floors and industrial land across 13 live projects in Panipat. Trusted by 1 Lakh+ buyers, 10+ years of real estate experience in Panipat & NCR.',
  keywords: [
    'Panipat Real Estate',
    'Plots in Panipat',
    'M3M City of Dreams Panipat',
    'Builder Floors Panipat',
    'Industrial Land Panipat',
    'Uptown Property',
    'Property Deals Panipat',
    'Real Estate Advisor Panipat',
  ],
  authors: [{ name: 'Uptown Property' }],
  creator: 'Uptown Property',
  publisher: 'Uptown Property',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Uptown Property · Panipat Real Estate & Plots',
    description: 'Plots, villas, floors and industrial land across 13 live projects in Panipat. Trusted by 1 Lakh+ people, 10+ years in the market.',
    url: 'https://uptownproperty.in',
    siteName: 'Uptown Property',
    images: [
      {
        url: '/uptown-logo-with-slogan.png',
        width: 1200,
        height: 630,
        alt: 'Uptown Property Panipat Real Estate',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uptown Property · Panipat Real Estate',
    description: 'Plots, villas, floors and industrial land across 13 live projects in Panipat. Trusted by 1 Lakh+ buyers.',
    images: ['/uptown-logo-with-slogan.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/uptown-logo-white.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Uptown Property',
  image: 'https://uptownproperty.in/uptown-logo-with-slogan.png',
  '@id': 'https://uptownproperty.in/#organization',
  url: 'https://uptownproperty.in',
  telephone: '+919518091945',
  priceRange: '₹₹–₹₹₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Panipat',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.3909,
    longitude: 76.9635,
  },
  areaServed: ['Panipat', 'Haryana', 'NCR'],
  sameAs: ['https://wa.me/919518091945'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash: set theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('uptown-theme');
                  if (t === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollToTop />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
