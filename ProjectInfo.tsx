'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Home, Calendar, Phone, MessageCircle, Car, Shield, TreePine, Dumbbell, Users, Building, Download, Eye, FileText, Star, Share2 } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  const amenityIcons = {
    'Parking': Car,
    'Security': Shield,
    'Landscaping': TreePine,
    'Gym': Dumbbell,
    'Club House': Users,
    'Elevator': Building,
  };

  const getAmenityIcon = (amenity: string) => {
    for (const [key, Icon] of Object.entries(amenityIcons)) {
      if (amenity.includes(key)) {
        return Icon;
      }
    }
    return Building;
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium mr-2">
                {project.type}
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-3 text-blue-800" />
                <span className="text-lg">{project.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Home className="h-5 w-5 mr-3 text-blue-800" />
                <span className="text-lg">{project.units}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="h-5 w-5 mr-3 text-blue-800" />
                <span className="text-lg">{project.status}</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Starting Price</p>
                  <p className="text-3xl font-bold text-blue-800">₹{project.price.toLocaleString('en-IN')} L+</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="text-lg font-semibold text-gray-900">{project.area}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919876543210"
                className="flex items-center justify-center bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <a 
                href={`https://wa.me/919518091945?text=${encodeURIComponent(`Hi, I am interested in ${project.title} project. Please share more details about pricing, availability, and site visit options.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 text-blue-800 p-4 rounded-full inline-block mb-4">
                <Download className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Download Brochure</h4>
              <p className="text-gray-600 text-sm mb-4">Get detailed project information</p>
              <Button 
                className="w-full bg-blue-800 hover:bg-blue-700"
                onClick={() => window.open(`https://wa.me/919518091945?text=${encodeURIComponent(`Hi, I would like to download the brochure for ${project.title}. Please share the detailed brochure.`)}`, '_blank')}
              >
                Download
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 text-green-800 p-4 rounded-full inline-block mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Floor Plans</h4>
              <p className="text-gray-600 text-sm mb-4">View detailed layouts</p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.open(`https://wa.me/919518091945?text=${encodeURIComponent(`Hi, I want to see the floor plans and layout for ${project.title}. Please share the detailed floor plans.`)}`, '_blank')}
              >
                View Plans
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 text-orange-800 p-4 rounded-full inline-block mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Book Site Visit</h4>
              <p className="text-gray-600 text-sm mb-4">Schedule a property tour</p>
              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700"
                onClick={() => window.open(`https://wa.me/919518091945?text=${encodeURIComponent(`Hi, I would like to book a site visit for ${project.title}. Please let me know available dates and times for the visit.`)}`, '_blank')}
              >
                Book Visit
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 text-purple-800 p-4 rounded-full inline-block mb-4">
                <Share2 className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Share Project</h4>
              <p className="text-gray-600 text-sm mb-4">Share with friends & family</p>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: project.title,
                      text: project.description,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
              >
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-800 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h3>
            <div className="space-y-3">
              {project.amenities.map((amenity, index) => {
                const Icon = getAmenityIcon(amenity);
                return (
                  <div key={index} className="flex items-center text-gray-700">
                    <Icon className="h-5 w-5 mr-3 text-blue-800" />
                    <span>{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
            <div className="space-y-3">
              {Object.entries(project.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">{key}</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">About {project.title}</h3>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              {project.title} represents the pinnacle of modern living in {project.location}. This {project.type.toLowerCase()} project offers an exceptional blend of luxury, comfort, and convenience, making it an ideal choice for discerning homebuyers and investors.
            </p>
            <p className="mb-4">
              Strategically located in {project.location}, {project.title} provides excellent connectivity to major business districts, educational institutions, healthcare facilities, and entertainment hubs. The project is designed to cater to the evolving needs of modern families while ensuring a sustainable and eco-friendly living environment.
            </p>
            <p className="mb-4">
              With {project.units} thoughtfully designed units, {project.title} offers spacious {project.area} configurations that maximize natural light and ventilation. The project features world-class amenities and facilities that enhance the quality of life for residents.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Why Choose {project.title}?</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prime location in {project.location} with excellent connectivity</li>
              <li>Modern architecture and premium specifications</li>
              <li>Comprehensive amenities for a luxurious lifestyle</li>
              <li>Excellent investment potential with high appreciation prospects</li>
              <li>Proximity to schools, hospitals, and shopping centers</li>
              <li>Sustainable and eco-friendly construction practices</li>
            </ul>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Investment Highlights</h4>
            <p className="mb-4">
              {project.title} offers exceptional investment opportunities with strong rental yields and capital appreciation potential. The project's strategic location, quality construction, and comprehensive amenities make it a preferred choice for both end-users and investors.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h5 className="font-semibold text-blue-900 mb-2">Ready to Invest in {project.title}?</h5>
              <p className="text-blue-800 mb-4">Contact our expert team for detailed information, site visits, and exclusive offers.</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="tel:+919518091945"
                  className="inline-flex items-center bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
                <a 
                  href={`https://wa.me/919518091945?text=${encodeURIComponent(`Hi, I am interested in investing in ${project.title}. Please share detailed information about pricing, payment plans, and investment benefits.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in {project.title}?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get detailed information, floor plans, and schedule a site visit. Our experts are ready to help you make the right decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919876543210"
              className="flex items-center justify-center bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call for Details
            </a>
            <a 
              href={`https://wa.me/919518091945?text=${encodeURIComponent(`Hi, I am very interested in ${project.title}. Please provide complete details including pricing, payment plans, possession timeline, and available units. I would also like to schedule a site visit.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;