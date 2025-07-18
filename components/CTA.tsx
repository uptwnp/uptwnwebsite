import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Natural background elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-tl from-purple-400/15 to-pink-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Make Your Property Move?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Connect with Panipat's most trusted real estate experts today. Available 7 days a week with response within 5 minutes and free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
            <p className="text-gray-200 mb-4">Speak directly with our experts for immediate assistance</p>
            <a href="tel:+919518091945" className="text-blue-300 hover:text-blue-200 font-medium">
              +91 95180 91945
            </a>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="bg-green-600 text-white p-4 rounded-full inline-block mb-4">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp Chat</h3>
            <p className="text-gray-200 mb-4">Get instant responses to your property queries</p>
            <a 
              href="https://wa.me/919518091945" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-200 font-medium"
            >
              Message Us Now
            </a>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="bg-purple-600 text-white p-4 rounded-full inline-block mb-4">
              <ArrowRight className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
            <p className="text-gray-200 mb-4">Meet our team in person for detailed consultations</p>
            <span className="text-purple-300 font-medium">
              Mon-Sat: 9 AM - 8 PM
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 px-8 py-3 backdrop-blur-sm bg-white/10 transition-all duration-300">
              Browse Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;