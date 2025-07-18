import { MapPin, Building, Home, Store } from 'lucide-react';

const WorkingAreas = () => {
  const areas = [
    {
      name: 'HUDA All Sectors',
      description: 'Complete coverage of all HUDA sectors with modern infrastructure.',
      icon: Home,
      properties: '100+ Properties',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      name: 'Model Town Nearby',
      description: 'Premium residential area with excellent connectivity and amenities.',
      icon: Building,
      properties: '80+ Properties',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-700'
    },
    {
      name: 'GT Road',
      description: 'Main commercial hub with high footfall and business opportunities.',
      icon: Store,
      properties: '60+ Properties',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-700'
    },
    {
      name: 'Tehsil Camp',
      description: 'Central location with government offices and residential options.',
      icon: Building,
      properties: '45+ Properties',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-700'
    },
    {
      name: 'Jattal Road Areas',
      description: 'Developing area with good connectivity and investment potential.',
      icon: MapPin,
      properties: '35+ Properties',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-700'
    },
    {
      name: 'Assand Road Areas',
      description: 'Residential and commercial properties with modern amenities.',
      icon: Store,
      properties: '40+ Properties',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-700'
    },
    {
      name: 'Sanoli Road',
      description: 'Prime location with excellent connectivity and infrastructure.',
      icon: Building,
      properties: '50+ Properties',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-700'
    },
    {
      name: 'Chautala Road',
      description: 'Growing area with residential and commercial opportunities.',
      icon: Home,
      properties: '30+ Properties',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50 relative">
      {/* Natural background elements */}
      <div className="absolute top-32 left-10 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-tl from-purple-100/25 to-pink-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Working Areas in Panipat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have extensive local knowledge and presence across all major areas of Panipat, ensuring we can help you find the perfect property in your preferred location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className={`${area.bgColor} ${area.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm`}>
              <div className="flex items-start space-x-4">
                <div className={`${area.iconBg} p-3 rounded-xl shadow-sm`}>
                  <area.icon className={`h-6 w-6 ${area.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-gray-600 mb-3">{area.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${area.iconColor}`}>{area.properties}</span>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 via-white/80 to-purple-50/60 rounded-3xl"></div>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl"></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Local Expertise You Can Trust
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Our deep understanding of Panipat's real estate market, combined with our extensive network and local connections, enables us to provide you with the best opportunities and guidance for your property investments.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center bg-blue-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-700">200+</div>
                <div className="text-sm text-gray-600">Properties Available</div>
              </div>
              <div className="text-center bg-purple-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-purple-700">8</div>
                <div className="text-sm text-gray-600">Major Areas Covered</div>
              </div>
              <div className="text-center bg-green-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-green-700">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingAreas;