import { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us - UptownProperties.in',
  description: 'Get in touch with UptownProperties.in for property buying, selling, partnership opportunities, and referral programs. Direct WhatsApp and call support available.',
  keywords: 'contact UptownProperties, property buying selling, real estate partnership, referral program Panipat',
  openGraph: {
    title: 'Contact Us - UptownProperties.in',
    description: 'Get in touch with UptownProperties.in for property buying, selling, partnership opportunities, and referral programs.',
  },
};

export default function Contact() {
  return <ContactPage />;
}