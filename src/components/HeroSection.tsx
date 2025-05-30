import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Anchor, ArrowRight, Play, X } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleWatchPromo = () => {
    setIsVideoPlaying(true);
  };

  const closeVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-5 animate-bounce" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-full text-sm font-medium">
                <Anchor className="w-4 h-4 mr-2" />
                India's Premier Maritime Exhibition
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  India Maritime
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                    Week 2025
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-blue-100 font-light">
                  International Maritime & Shipping Summit
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                Navigate the future of maritime industry at India's largest maritime gathering. Connect with shipping leaders, 
                port authorities, and maritime technology innovators to explore opportunities in India's growing blue economy.
              </p>

              {/* Event Details */}
              <div className="grid sm:grid-cols-3 gap-4 py-6">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Calendar className="w-6 h-6 text-orange-400" />
                  <div>
                    <p className="text-sm text-blue-200">Date</p>
                    <p className="font-semibold">Oct 27-31</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-blue-200">Venue</p>
                    <p className="font-semibold">Mumbai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Users className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-sm text-blue-200">Expected</p>
                    <p className="font-semibold">25K+ Visitors</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold group">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-black px-8 py-4 text-lg"
                  onClick={handleWatchPromo}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Promo
                </Button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400">500+</p>
                  <p className="text-sm text-blue-200">Exhibitors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">40+</p>
                  <p className="text-sm text-blue-200">Countries</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">75+</p>
                  <p className="text-sm text-blue-200">Sessions</p>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Video */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Mock Maritime Visual */}
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://i.imgur.com/NjqObEh_d.webp?maxwidth=1520&fidelity=grand')] bg-cover bg-center opacity-100"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/40 to-cyan-600/40"></div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-4 rounded-lg shadow-lg transform rotate-3">
                  <p className="text-sm font-semibold">Early Bird</p>
                  <p className="text-lg font-bold">40% OFF</p>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-cyan-600 text-white p-4 rounded-lg shadow-lg transform -rotate-3">
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

      {/* Video Modal - Smaller Size */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-8">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close Button - Always Visible */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-semibold">Watch Promo</h3>
              <button
                onClick={closeVideo}
                className="text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Video Player - Smaller Container */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <video
                className="w-full h-full"
                controls
                autoPlay
                onEnded={closeVideo}
              >
                <source 
                  src="https://dms.licdn.com/playlist/vid/v2/D5605AQFyCITvLHVemw/mp4-640p-30fp-crf28/B56ZVQ60ImGsBw-/0/1740819370149?e=2147483647&v=beta&t=m76oWY38zJBsq55H7x4emEIZayx9RY7-cncW_sa3gUk" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Additional Info Below Video */}
            <div className="mt-4 text-center">
              <p className="text-white/70 text-sm">
                India Maritime Week 2025 - Official Promotional Video
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
