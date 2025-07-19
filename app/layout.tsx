import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UptownProperties.in - Premium Real Estate in Panipat',
  description: 'Leading real estate company in Panipat offering premium properties, residential projects, and commercial spaces. Your trusted partner for property investment.',
  keywords: 'real estate Panipat, properties Panipat, residential projects, commercial spaces, property investment',
  authors: [{ name: 'UptownProperties.in' }],
  creator: 'UptownProperties.in',
  publisher: 'UptownProperties.in',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'UptownProperties.in - Premium Real Estate in Panipat',
    description: 'Leading real estate company in Panipat offering premium properties, residential projects, and commercial spaces.',
    siteName: 'UptownProperties.in',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UptownProperties.in - Premium Real Estate in Panipat',
    description: 'Leading real estate company in Panipat offering premium properties, residential projects, and commercial spaces.',
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
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}