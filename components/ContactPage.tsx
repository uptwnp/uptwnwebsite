'use client';
import { Phone, MessageCircle, MapPin, Clock, Mail, Users, Home, Building, Handshake, Gift } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const contactReasons = [
    {
      icon: Home,
      title: 'To Buy Property',
      description: 'Looking for your dream home or investment property?',
      message: 'Hi, I am interested in buying property in Panipat. Please share available options with prices and details.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Building,
      title: 'To Sell Property',
      description: 'Want to sell your property at the best price?',
      message: 'Hi, I want to sell my property in Panipat. Please help me with valuation and listing. Property details: [Location, Type, Size, Age]',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Handshake,
      title: 'For Partnership',
      description: 'Interested in business partnerships and collaborations?',
      message: 'Hi, I am interested in partnership opportunities with UptownProperties. Please share details about available partnership models.',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      icon: Gift,
      title: 'Referral Program',
      description: 'Earn rewards by referring clients to us',
      message: 'Hi, I want to join your referral program. Please share details about commission structure and terms.',
      color: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Direct call for immediate assistance',
      contact: '+91 95180 91945',
      action: 'tel:+919518091945',
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with us on WhatsApp',
      contact: '+91 95180 91945',
      action: 'https://wa.me/919518091945',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us detailed queries',
      contact: 'info@uptownproperties.in',
      action: 'mailto:info@uptownproperties.in',
      color: 'bg-red-500'
    }
  ];

  const generateWhatsAppLink = (message: string) => {
    return `https://wa.me/919518091945?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with all your real estate needs. Choose your purpose below and get direct access to our experts.
          </p>
        </div>

        {/* Contact Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactReasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${reason.color}`}>
                  <reason.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 mb-4">{reason.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 font-medium mb-2">Suggested message:</p>
                    <p className="text-sm text-gray-600 italic">"{reason.message}"</p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={generateWhatsAppLink(reason.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Choose Your Preferred Contact Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className={`${method.color} text-white p-4 rounded-full inline-block mb-4`}>
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-blue-800 hover:text-blue-600 font-medium"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Office Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Office Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">123 Main Street, Panipat, Haryana 132103</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Business Hours</p>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Team</p>
                  <p className="text-gray-600">Experienced real estate professionals ready to help</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Quick Tips for Contacting Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <p>For buying: Share your budget, preferred location, and property type</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <p>For selling: Provide property details, location, size, and expected price</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <p>For partnership: Share your background and investment capacity</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <p>For referrals: Tell us about your network and commitment level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;