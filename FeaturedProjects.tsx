import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Home, Calendar } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Uptown Heights',
      description: 'Luxury residential apartments with modern amenities and beautiful city views.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Model Town, Panipat',
      type: 'Residential',
      status: 'Under Construction',
      units: '120 Units',
      slug: 'uptown-heights'
    },
    {
      id: 2,
      title: 'Commercial Plaza',
      description: 'Prime commercial space in the heart of the city with excellent connectivity.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'G.T. Road, Panipat',
      type: 'Commercial',
      status: 'Ready to Move',
      units: '50 Shops',
      slug: 'commercial-plaza'
    },
    {
      id: 3,
      title: 'Green Valley Villas',
      description: 'Premium villas with landscaped gardens and modern security systems.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Sector 12, Panipat',
      type: 'Residential',
      status: 'Launching Soon',
      units: '30 Villas',
      slug: 'green-valley-villas'
    }
  ];

  const developers = [
    { name: 'M3M', tagline: 'Premium Luxury', bg: 'bg-blue-50', text: 'text-blue-700' },
    { name: 'Eldeco', tagline: 'Quality Living', bg: 'bg-green-50', text: 'text-green-700' },
    { name: 'Ansal', tagline: 'Trusted Brand', bg: 'bg-purple-50', text: 'text-purple-700' },
    { name: 'Palm Drive', tagline: 'Elite Residences', bg: 'bg-orange-50', text: 'text-orange-700' },
    { name: 'TDI City', tagline: 'Modern Homes', bg: 'bg-indigo-50', text: 'text-indigo-700' },
    { name: 'TDI Connaught', tagline: 'Luxury Villas', bg: 'bg-teal-50', text: 'text-teal-700' },
    { name: 'Address Infra', tagline: 'Smart Homes', bg: 'bg-yellow-50', text: 'text-yellow-700' },
    { name: 'Bhutani', tagline: 'Premium Projects', bg: 'bg-pink-50', text: 'text-pink-700' },
    { name: 'Century 21', tagline: 'Global Standard', bg: 'bg-cyan-50', text: 'text-cyan-700' },
    { name: 'Tech Design', tagline: 'Innovation Hub', bg: 'bg-emerald-50', text: 'text-emerald-700' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-16 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-indigo-200/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-tl from-purple-100/25 to-pink-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Projects We Work With
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive partnerships with top developers bringing you the finest properties in Panipat. From luxury residences to smart homes, we offer premium options.
          </p>
        </div>

        {/* Developer Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Our Developer Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {developers.map((partner, index) => (
              <div key={index} className={`${partner.bg} border border-gray-200 p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className={`font-semibold ${partner.text}`}>{partner.name}</div>
                <div className="text-sm text-gray-600">{partner.tagline}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.type}
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Home className="h-4 w-4 mr-2" />
                    {project.units}
                  </div>
                </div>
                
                <Link href={`/projects/${project.slug}`}>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;