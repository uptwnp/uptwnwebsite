import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Vinay Sharma',
      rating: 5,
      review: 'Great service! The team helped me find a good property option. Very responsive and helpful throughout the process.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      property: 'Residential Plot'
    },
    {
      id: 2,
      name: 'Radhesyam Sharma',
      rating: 5,
      review: 'Professional approach and genuine listings. They really listen to what you need and provide good options.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      property: 'Independent House'
    },
    {
      id: 3,
      name: 'Ronak Rathee',
      rating: 5,
      review: 'Good experience working with them. Fair pricing and no hidden charges. Would recommend to others.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      property: 'Commercial Shop'
    },
    {
      id: 4,
      name: 'Rinku',
      rating: 5,
      review: 'Helpful team with good market knowledge. They guided me well in finding the right investment property.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      property: 'Agricultural Land'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "UptownProperties.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 2, First Floor, Dharm Singh Market, Sanoli Rd, opp. Malik CNG Petrol Pump, nearby Babail Naka",
      "addressLocality": "Panipat",
      "addressRegion": "Haryana",
      "postalCode": "132103",
      "addressCountry": "IN"
    },
    "telephone": "+91-95180-91945",
    "url": "https://uptownproperties.in",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "4"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString()
      },
      "reviewBody": review.review
    }))
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 relative">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Natural background elements */}
      <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-br from-yellow-100/40 to-orange-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-green-100/30 to-emerald-100/25 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with UptownProperties.in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 relative shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <Quote className="h-8 w-8 text-blue-200 absolute top-4 left-4 opacity-50" />
              
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-100"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-blue-700 font-medium">{review.property}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{review.review}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 via-white/80 to-purple-50/60 rounded-3xl"></div>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl"></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Our Happy Clients
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with Panipat's most trusted real estate professionals. Let us help you find your dream property today.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center bg-yellow-50 p-4 rounded-xl">
                <div className="text-3xl font-bold text-yellow-700">5.0</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center bg-blue-50 p-4 rounded-xl">
                <div className="text-3xl font-bold text-blue-700">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center bg-green-50 p-4 rounded-xl">
                <div className="text-3xl font-bold text-green-700">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;