export interface StaticPage {
  slug: string;
  title: string;
  description: string;
  content: string;
  lastUpdated: string;
}

export const staticPages: StaticPage[] = [
  {
    slug: 'about',
    title: 'About Us',
    description: 'Learn more about UptownProperties.in - Panipat\'s most trusted real estate company with over 10 years of experience.',
    content: `
      <h2>About UptownProperties.in</h2>
      <p>UptownProperties.in is Panipat's most trusted real estate company, serving the community for over a decade. We specialize in residential and commercial properties, offering comprehensive real estate solutions to our clients.</p>
      
      <h3>Our Mission</h3>
      <p>To provide transparent, reliable, and customer-centric real estate services that help our clients make informed property decisions.</p>
      
      <h3>Our Vision</h3>
      <p>To be the leading real estate company in Panipat, known for our integrity, expertise, and exceptional customer service.</p>
      
      <h3>Why Choose Us?</h3>
      <ul>
        <li>Over 10 years of experience in Panipat real estate market</li>
        <li>500+ properties in our portfolio</li>
        <li>90K+ active buyer network</li>
        <li>100+ trusted associates</li>
        <li>Transparent and honest dealings</li>
        <li>Complete legal assistance</li>
      </ul>
    `,
    lastUpdated: 'January 15, 2025'
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Privacy Policy for UptownProperties.in - How we collect, use, and protect your personal information.',
    content: `
      <h2>Privacy Policy</h2>
      <p><strong>Last updated:</strong> January 15, 2025</p>
      
      <h3>Information We Collect</h3>
      <p>We collect information you provide directly to us, such as when you contact us for property inquiries, create an account, or communicate with us.</p>
      
      <h3>How We Use Your Information</h3>
      <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
      
      <h3>Information Sharing</h3>
      <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
      
      <h3>Data Security</h3>
      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      
      <h3>Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at info@uptownproperties.in or call +91 95180 91945.</p>
    `,
    lastUpdated: 'January 15, 2025'
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    description: 'Terms of Service for UptownProperties.in - Terms and conditions for using our real estate services.',
    content: `
      <h2>Terms of Service</h2>
      <p><strong>Last updated:</strong> January 15, 2025</p>
      
      <h3>Acceptance of Terms</h3>
      <p>By accessing and using UptownProperties.in services, you accept and agree to be bound by the terms and provision of this agreement.</p>
      
      <h3>Use of Services</h3>
      <p>You may use our services for lawful purposes only. You agree not to use the services in any way that violates applicable laws or regulations.</p>
      
      <h3>Property Information</h3>
      <p>While we strive to provide accurate property information, we cannot guarantee the accuracy, completeness, or timeliness of all information.</p>
      
      <h3>Limitation of Liability</h3>
      <p>UptownProperties.in shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
      
      <h3>Contact Information</h3>
      <p>For questions about these Terms of Service, contact us at info@uptownproperties.in or +91 95180 91945.</p>
    `,
    lastUpdated: 'January 15, 2025'
  },
  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    description: 'Disclaimer for UptownProperties.in - Important information about our real estate services and property listings.',
    content: `
      <h2>Disclaimer</h2>
      <p><strong>Last updated:</strong> January 15, 2025</p>
      
      <h3>General Information</h3>
      <p>The information on this website is provided on an "as is" basis. UptownProperties.in makes no representations or warranties of any kind, express or implied.</p>
      
      <h3>Property Information</h3>
      <p>Property details, prices, and availability are subject to change without notice. All information should be verified independently before making any property decisions.</p>
      
      <h3>Investment Advice</h3>
      <p>We do not provide investment advice. All property investments carry risk, and past performance does not guarantee future results.</p>
      
      <h3>Third-Party Content</h3>
      <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.</p>
      
      <h3>Professional Advice</h3>
      <p>Always consult with qualified professionals before making any real estate decisions. This includes legal, financial, and tax advisors.</p>
    `,
    lastUpdated: 'January 15, 2025'
  }
];