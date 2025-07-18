'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Award, Users, Building } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Natural background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-purple-200/25 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-300/15 rounded-full blur-2xl"></div>
      </div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                Panipat's Most Trusted{' '}
                <span className="text-blue-700">Real Estate</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
                Your gateway to premium properties with 500+ listings and 90K+ active network. Find your perfect property in Panipat with new age realtors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  I Want to Buy Property
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 text-lg transition-all duration-300">
                  I Want to Sell Property
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building className="h-6 w-6 text-blue-700" />
                </div>
                <span className="text-lg text-gray-700">500+ Properties</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
                <span className="text-lg text-gray-700">90K+ Buyers Pool</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Award className="h-6 w-6 text-yellow-700" />
                </div>
                <span className="text-lg text-gray-700">#1 Trending in Panipat</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Background card effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/40 rounded-3xl backdrop-blur-sm shadow-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-50/50 to-white/70 rounded-3xl backdrop-blur-sm shadow-xl transform -rotate-1"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Real Estate Properties"
                className="object-cover w-full h-96 rounded-xl"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/50">
              <div className="text-3xl font-bold text-blue-700">100+</div>
              <div className="text-sm font-medium text-gray-600">Associates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;