import { CheckCircle, Target, Heart, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: '500+ Properties Listed',
      description: 'Exclusively for Panipat with verified documentation and complete authenticity check.',
      color: 'blue'
    },
    {
      icon: Target,
      title: '90K+ Buyers Pool',
      description: 'Active seekers and serious buyers looking for properties across Panipat.',
      color: 'green'
    },
    {
      icon: Shield,
      title: '100+ Associates',
      description: 'Trusted partners and extensive dealer network ensuring maximum property options.',
      color: 'purple'
    },
    {
      icon: Heart,
      title: '#1 Trending in Panipat',
      description: 'Most trusted real estate company with proven track record and customer satisfaction.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-100 text-blue-700',
      green: 'bg-green-50 border-green-100 text-green-700',
      purple: 'bg-purple-50 border-purple-100 text-purple-700',
      orange: 'bg-orange-50 border-orange-100 text-orange-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 relative">
      {/* Subtle background elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-16 w-80 h-80 bg-gradient-to-tl from-purple-100/30 to-pink-100/25 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Panipat's Most Trusted Real Estate Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the market with unmatched expertise and new age realtors. We provide complete coverage across Panipat with verified properties and extensive network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${getColorClasses(feature.color)} p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm`}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white rounded-full shadow-md">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50 rounded-3xl"></div>
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl"></div>
          
          <div className="relative p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                <p className="text-gray-600 mb-6">
                  Founded with a vision to revolutionize the real estate experience in Panipat, UptownProperties.in has been serving the community for over a decade. We understand the local market dynamics and help our clients make informed decisions.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experienced professionals is dedicated to providing transparent, reliable, and customer-centric services. Whether you're looking to buy, sell, or invest in property, we're here to guide you every step of the way.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-700">100+</div>
                    <div className="text-sm text-gray-600">Properties Sold</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Image background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-2xl transform rotate-2"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Our team at work"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;