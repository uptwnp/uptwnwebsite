import Link from 'next/link';
import { Building, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">UptownProperties.in</span>
            </div>
            <p className="text-gray-300">
              Your trusted partner for premium real estate in Panipat. We specialize in residential and commercial properties with exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+919518091945" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                <Phone size={20} />
              </a>
              <a href="mailto:info@uptownproperties.in" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Shop No 2, First Floor, Dharm Singh Market, Sanoli Rd, opp. Malik CNG Petrol Pump, nearby Babail Naka, Panipat, Haryana 132103
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+91 95180 91945</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">info@uptownproperties.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: By Appointment
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} UptownProperties.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;