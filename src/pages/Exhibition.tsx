import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Ship, 
  Anchor, 
  Globe, 
  Award, 
  Users,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  Download,
  Target,
  Briefcase,
  Waves,
  Zap
} from 'lucide-react';

const Exhibition = () => {
  const [selectedPavilion, setSelectedPavilion] = useState('all');

  const pavilions = [
    { id: 'all', label: 'All Pavilions' },
    { id: 'ports', label: 'Ports & Infrastructure' },
    { id: 'shipping', label: 'Shipping & Logistics' },
    { id: 'technology', label: 'Maritime Technology' },
    { id: 'green', label: 'Green Maritime' }
  ];

  const exhibitionData = {
    all: [
      {
        name: 'Adani Ports & SEZ',
        category: 'Port Operations',
        pavilion: 'ports',
        booth: 'A-101',
        icon: Building,
        color: 'from-blue-500 to-cyan-500',
        description: 'Leading port operator showcasing smart port solutions'
      },
      {
        name: 'Shipping Corporation of India',
        category: 'Shipping Services',
        pavilion: 'shipping',
        booth: 'B-205',
        icon: Ship,
        color: 'from-orange-500 to-red-500',
        description: 'National shipping line with comprehensive maritime services'
      },
      {
        name: 'Cochin Shipyard Limited',
        category: 'Shipbuilding',
        pavilion: 'technology',
        booth: 'C-150',
        icon: Anchor,
        color: 'from-purple-500 to-indigo-500',
        description: 'Premier shipbuilding and ship repair facility'
      },
      {
        name: 'Wartsila India',
        category: 'Marine Technology',
        pavilion: 'technology',
        booth: 'D-301',
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        description: 'Smart marine technology and sustainable solutions'
      },
      {
        name: 'Indian Oil Corporation',
        category: 'Marine Fuels',
        pavilion: 'green',
        booth: 'E-120',
        icon: Waves,
        color: 'from-emerald-500 to-green-500',
        description: 'Clean energy solutions for maritime industry'
      },
      {
        name: 'Larsen & Toubro',
        category: 'Marine Engineering',
        pavilion: 'ports',
        booth: 'A-250',
        icon: Building,
        color: 'from-indigo-500 to-purple-500',
        description: 'Engineering solutions for ports and marine infrastructure'
      }
    ],
    ports: [
      {
        name: 'Adani Ports & SEZ',
        category: 'Port Operations',
        pavilion: 'ports',
        booth: 'A-101',
        icon: Building,
        color: 'from-blue-500 to-cyan-500',
        description: 'Leading port operator showcasing smart port solutions'
      },
      {
        name: 'Larsen & Toubro',
        category: 'Marine Engineering',
        pavilion: 'ports',
        booth: 'A-250',
        icon: Building,
        color: 'from-indigo-500 to-purple-500',
        description: 'Engineering solutions for ports and marine infrastructure'
      }
    ],
    shipping: [
      {
        name: 'Shipping Corporation of India',
        category: 'Shipping Services',
        pavilion: 'shipping',
        booth: 'B-205',
        icon: Ship,
        color: 'from-orange-500 to-red-500',
        description: 'National shipping line with comprehensive maritime services'
      }
    ],
    technology: [
      {
        name: 'Cochin Shipyard Limited',
        category: 'Shipbuilding',
        pavilion: 'technology',
        booth: 'C-150',
        icon: Anchor,
        color: 'from-purple-500 to-indigo-500',
        description: 'Premier shipbuilding and ship repair facility'
      },
      {
        name: 'Wartsila India',
        category: 'Marine Technology',
        pavilion: 'technology',
        booth: 'D-301',
        icon: Zap,
        color: 'from-green-500 to-teal-500',
        description: 'Smart marine technology and sustainable solutions'
      }
    ],
    green: [
      {
        name: 'Indian Oil Corporation',
        category: 'Marine Fuels',
        pavilion: 'green',
        booth: 'E-120',
        icon: Waves,
        color: 'from-emerald-500 to-green-500',
        description: 'Clean energy solutions for maritime industry'
      }
    ]
  };

  const exhibitionStats = [
    { number: '500+', label: 'Exhibitors', icon: Building },
    { number: '25,000+', label: 'Visitors', icon: Users },
    { number: '40+', label: 'Countries', icon: Globe },
    { number: '10', label: 'Pavilions', icon: Target }
  ];

  const filteredExhibitors = exhibitionData[selectedPavilion] || exhibitionData.all;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-full text-sm font-medium mb-8">
              <Building className="w-4 h-4 mr-2" />
              South Asia's Largest Maritime Exhibition
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Maritime
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                Exhibition 2025
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover cutting-edge maritime technologies, innovative solutions, and connect with 
              industry leaders at India's premier maritime exhibition.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {exhibitionStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <stat.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
                Book Exhibition Stall
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download Floor Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exhibition Dates</h3>
              <p className="text-gray-600">October 27-31, 2025</p>
              <p className="text-sm text-gray-500">5 Days of Innovation</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <MapPin className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Venue</h3>
              <p className="text-gray-600">Bombay Exhibition Centre</p>
              <p className="text-sm text-gray-500">Mumbai, India</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Timings</h3>
              <p className="text-gray-600">10:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-500">Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pavilion Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exhibition Pavilions
            </h2>
            <p className="text-xl text-gray-600">
              Explore specialized pavilions showcasing different aspects of maritime industry
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {pavilions.map((pavilion) => (
              <button
                key={pavilion.id}
                onClick={() => setSelectedPavilion(pavilion.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedPavilion === pavilion.id
                    ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pavilion.label}
              </button>
            ))}
          </div>

          {/* Exhibitors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExhibitors.map((exhibitor, index) => {
              const Icon = exhibitor.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br ${exhibitor.color} text-white shadow-lg flex-shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {exhibitor.name}
                      </h3>
                      
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        {exhibitor.category}
                      </p>
                      
                      <p className="text-xs text-gray-500 mb-3">
                        Booth: {exhibitor.booth}
                      </p>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {exhibitor.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Exhibit at India Maritime Week 2025?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Showcase your products and services to 25,000+ maritime professionals from around the world. 
            Book your exhibition stall today and be part of India's largest maritime gathering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
              Book Exhibition Stall
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
              Download Exhibitor Kit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Exhibition;
