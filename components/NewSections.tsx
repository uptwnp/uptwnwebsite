'use client';

import { useState } from 'react';
import { 
  Star, Users, Eye, ThumbsUp, Instagram, Facebook, Youtube, Phone, MessageCircle,
  Building, Network, Search, Clock, Zap, Globe, Shield, FileText, Target, 
  Headphones, TrendingUp, Award
} from 'lucide-react';

// Why Work With Us Section
export const WhyWorkWithUs = () => {
  const benefits = [
    {
      icon: Building,
      title: '500+ Properties Listed',
      description: 'Exclusively for Panipat with verified documentation',
      category: 'inventory',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Users,
      title: '90K+ Active Buyers Pool',
      description: 'Largest network of serious property seekers in Panipat',
      category: 'network',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Network,
      title: '100+ Dealer Network',
      description: 'Extensive network ensuring maximum property options',
      category: 'network',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      icon: Search,
      title: 'Customized Property Search',
      description: 'Find properties matching your exact requirements',
      category: 'service',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      icon: Clock,
      title: 'No Time Wastage',
      description: 'Pre-screened properties and pre-qualified buyers only',
      category: 'efficiency',
      color: 'bg-red-100 text-red-800'
    },
    {
      icon: Zap,
      title: 'Exclusive Early Access',
      description: 'First access to new listings and exclusive deals',
      category: 'advantage',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      icon: Globe,
      title: 'Online Listing & Marketing',
      description: 'Your property featured across all digital platforms',
      category: 'marketing',
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      icon: Shield,
      title: 'Verified Properties Only',
      description: 'All properties thoroughly verified for authenticity',
      category: 'security',
      color: 'bg-teal-100 text-teal-800'
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'End-to-end legal and paperwork assistance',
      category: 'support',
      color: 'bg-pink-100 text-pink-800'
    },
    {
      icon: Target,
      title: 'Only Serious Clients',
      description: 'Verified buyers and sellers with genuine intent',
      category: 'quality',
      color: 'bg-cyan-100 text-cyan-800'
    },
    {
      icon: Headphones,
      title: 'Complete Inquiry Management',
      description: 'We handle all enquiries and client screening',
      category: 'service',
      color: 'bg-lime-100 text-lime-800'
    },
    {
      icon: TrendingUp,
      title: 'Fast & Best Price',
      description: 'Quick transactions at best market rates',
      category: 'results',
      color: 'bg-emerald-100 text-emerald-800'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Benefits', icon: Star },
    { id: 'inventory', name: 'Property Inventory', icon: Building },
    { id: 'network', name: 'Network & Reach', icon: Users },
    { id: 'service', name: 'Premium Service', icon: Award },
    { id: 'efficiency', name: 'Time Efficiency', icon: Clock }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredBenefits = activeCategory === 'all' 
    ? benefits 
    : benefits.filter(benefit => benefit.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Work With Uptown Properties?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most comprehensive real estate service in Panipat. Whether you're buying or selling, we provide unmatched expertise and support throughout your property journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${benefit.color} flex-shrink-0`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mx-auto mb-4">
                <Building className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-800 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">90K+</div>
              <div className="text-gray-600">Active Buyers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-800 rounded-full mx-auto mb-4">
                <Network className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-gray-600">Associates</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-800 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">#1</div>
              <div className="text-gray-600">In Panipat</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of satisfied clients who chose Uptown Properties for their real estate needs. Whether buying or selling, we're here to make it seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919518091945"
                className="flex items-center justify-center bg-yellow-500 text-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors font-semibold text-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +91 95180 91945
              </a>
              <a 
                href="https://wa.me/919518091945"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-colors font-semibold text-lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Social Media & Community Section
export const SocialCommunity = () => {
  const socialStats = [
    { platform: 'Instagram', handle: '@uptown_property', followers: '14.8K', icon: Instagram, url: 'https://instagram.com/uptown_property' },
    { platform: 'Instagram', handle: '@panipat_uptown_property', followers: '14.4K', icon: Instagram, url: 'https://instagram.com/panipat_uptown_property' },
    { platform: 'Facebook', handle: 'Uptown Properties', followers: 'Growing', icon: Facebook, url: 'https://facebook.com/uptownproperties' },
    { platform: 'YouTube', handle: 'Uptown Properties', followers: 'Growing', icon: Youtube, url: 'https://youtube.com/@uptownproperties' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Growing Community in Panipat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expanding network of property seekers and sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-800 mb-2">500+</div>
            <div className="text-gray-600">Sellers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-800 mb-2">10M+</div>
            <div className="text-gray-600">Views</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-800 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-800 mb-2">90K+</div>
            <div className="text-gray-600">Active Network</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Follow Us on Social Media</h3>
          <p className="text-gray-600 text-center mb-8">Stay updated with latest properties and market insights</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialStats.map((social, index) => (
              <a 
                key={index} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-blue-300 cursor-pointer block"
              >
                <social.icon className="h-8 w-8 mx-auto mb-3 text-blue-800" />
                <div className="font-semibold text-gray-900">{social.followers}</div>
                <div className="text-sm text-gray-600">{social.platform}</div>
                <div className="text-xs text-gray-500">{social.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Section
export const TeamSection = () => {
  const coreTeam = [
    { 
      name: 'Yogesh Bhardwaj', 
      role: 'Co-Founder & Director', 
      focus: 'Property Consultation', 
      initials: 'YB',
      color: 'bg-blue-600',
      description: 'Expert in property valuation and market analysis with 10+ years experience'
    },
    { 
      name: 'Mohit Bhardwaj', 
      role: 'Co-Founder & Director', 
      focus: 'Business Development', 
      initials: 'MB',
      color: 'bg-green-600',
      description: 'Specializes in business growth and strategic partnerships'
    },
    { 
      name: 'Deepak', 
      role: 'Senior Telecaller', 
      focus: 'Client Relations', 
      initials: 'D',
      color: 'bg-orange-600',
      description: 'Dedicated to providing exceptional customer service and support'
    },
    { 
      name: 'Komal', 
      role: 'Telecaller', 
      focus: 'Customer Support', 
      initials: 'K',
      color: 'bg-pink-600',
      description: 'Ensures smooth communication and client satisfaction'
    }
  ];

  const associates = [
    { name: 'Hansraj Lather', initials: 'HL', area: 'HUDA Sectors' },
    { name: 'Raju', initials: 'R', area: 'Model Town' },
    { name: 'Rinku', initials: 'R', area: 'GT Road' },
    { name: 'Suresh', initials: 'S', area: 'Civil Lines' },
    { name: 'Jagjeet', initials: 'J', area: 'Tehsil Camp' },
    { name: 'Vinay', initials: 'V', area: 'Sanoli Road' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The experts behind your success. Our dedicated team of real estate professionals is committed to providing you with exceptional service and expert guidance.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className={`w-20 h-20 ${member.color} text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg`}>
                    {member.initials}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-800 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">Focus: {member.focus}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Team Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-800 mb-2">4</div>
                <div className="text-gray-600">Core Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">100+</div>
                <div className="text-gray-600">Associates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-800 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-800 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Associates Network */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Our Associates Network</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {associates.map((associate, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                    {associate.initials}
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">{associate.name}</p>
                  <p className="text-xs text-gray-500">{associate.area}</p>
                </div>
              ))}
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3 shadow-md">
                  +94
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">More Associates</p>
                <p className="text-xs text-gray-500">All Areas</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Extensive Coverage Across Panipat</h4>
              <p className="text-gray-600 mb-4">Our network of 100+ associates ensures comprehensive coverage across all major areas of Panipat, providing you with maximum property options and local expertise.</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['HUDA Sectors', 'Model Town', 'GT Road', 'Civil Lines', 'Tehsil Camp', 'Sanoli Road', 'Jattal Road', 'Assand Road'].map((area, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate real estate professionals to join our growing team. Be part of Panipat's most trusted real estate company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919518091945"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call for Career Opportunities
            </a>
            <a 
              href="https://wa.me/919518091945?text=Hi, I am interested in career opportunities with UptownProperties. Please share details about available positions and requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp for Careers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};