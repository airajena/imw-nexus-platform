
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Globe, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-5 animate-bounce" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-full text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              India's Premier Manufacturing Exhibition
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                India Mobile
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  World 2025
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 font-light">
                International Manufacturing Week
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
              Join the world's largest gathering of manufacturing leaders, innovators, and industry experts. 
              Discover cutting-edge technologies, forge strategic partnerships, and shape the future of global manufacturing.
            </p>

            {/* Event Details */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="w-6 h-6 text-orange-400" />
                <div>
                  <p className="text-sm text-blue-200">Date</p>
                  <p className="font-semibold">Feb 10-12</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-sm text-blue-200">Venue</p>
                  <p className="font-semibold">New Delhi</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-sm text-blue-200">Expected</p>
                  <p className="font-semibold">50K+ Visitors</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold group">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg group">
                <Play className="w-5 h-5 mr-2" />
                Watch Promo
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-400">1000+</p>
                <p className="text-sm text-blue-200">Exhibitors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">50+</p>
                <p className="text-sm text-blue-200">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">100+</p>
                <p className="text-sm text-blue-200">Sessions</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Video */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Mock Industry Visual */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/40 to-blue-600/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-4 rounded-lg shadow-lg transform rotate-3">
                <p className="text-sm font-semibold">Early Bird</p>
                <p className="text-lg font-bold">50% OFF</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-4 rounded-lg shadow-lg transform -rotate-3">
                <p className="text-sm font-semibold">Free Entry</p>
                <p className="text-lg font-bold">For Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
