import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Anchor, 
  Ship, 
  Globe, 
  Award, 
  Mic, 
  Users,
  Building,
  Briefcase,
  GraduationCap,
  Target,
  Waves,
  Calendar,
  MapPin
} from 'lucide-react';

const Speakers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Speakers' },
    { id: 'government', label: 'Government' },
    { id: 'industry', label: 'Industry Leaders' },
    { id: 'academic', label: 'Academia' },
    { id: 'international', label: 'International' }
  ];

  const speakers = [
    {
      name: 'Dr. Arjun Mehta',
      title: 'Minister of Ports, Shipping & Waterways',
      organization: 'Government of India',
      category: 'government',
      icon: Anchor,
      color: 'from-orange-500 to-red-500',
      expertise: 'Policy & Governance',
      session: 'Opening Keynote'
    },
    {
      name: 'Ms. Priya Sharma',
      title: 'Chairperson, Mumbai Port Authority',
      organization: 'Major Port Authority',
      category: 'government',
      icon: Ship,
      color: 'from-blue-500 to-cyan-500',
      expertise: 'Port Operations',
      session: 'Port Infrastructure Panel'
    },
    {
      name: 'Mr. Rakesh Singh',
      title: 'CEO, Adani Ports & SEZ',
      organization: 'Adani Group',
      category: 'industry',
      icon: Building,
      color: 'from-purple-500 to-indigo-500',
      expertise: 'Port Development',
      session: 'Private Port Development'
    },
    {
      name: 'Dr. Kavita Rao',
      title: 'Director, Indian Maritime University',
      organization: 'IMU Chennai',
      category: 'academic',
      icon: GraduationCap,
      color: 'from-green-500 to-teal-500',
      expertise: 'Maritime Education',
      session: 'Maritime Skills Development'
    },
    {
      name: 'Mr. Sanjay Patel',
      title: 'Managing Director, Shipping Corporation of India',
      organization: 'SCI Limited',
      category: 'industry',
      icon: Ship,
      color: 'from-cyan-500 to-blue-500',
      expertise: 'Shipping Operations',
      session: 'Coastal Shipping Forum'
    },
    {
      name: 'Ms. Anjali Desai',
      title: 'Head of Sustainability, Reliance Industries',
      organization: 'Reliance Industries',
      category: 'industry',
      icon: Waves,
      color: 'from-emerald-500 to-green-500',
      expertise: 'Blue Economy',
      session: 'Sustainable Maritime Practices'
    },
    {
      name: 'Mr. Vikram Joshi',
      title: 'Founder & CEO, Maritime Tech Solutions',
      organization: 'MTS India',
      category: 'industry',
      icon: Target,
      color: 'from-orange-500 to-yellow-500',
      expertise: 'Maritime Technology',
      session: 'Digital Maritime Innovation'
    },
    {
      name: 'Dr. Neha Kulkarni',
      title: 'Secretary, Ministry of Shipping',
      organization: 'Government of India',
      category: 'government',
      icon: Anchor,
      color: 'from-red-500 to-pink-500',
      expertise: 'Maritime Policy',
      session: 'Maritime Vision 2030'
    },
    {
      name: 'Mr. James Wilson',
      title: 'Director, International Maritime Organization',
      organization: 'IMO London',
      category: 'international',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      expertise: 'International Maritime Law',
      session: 'Global Maritime Standards'
    },
    {
      name: 'Ms. Sarah Chen',
      title: 'VP Asia Pacific, Maersk Line',
      organization: 'A.P. Moller-Maersk',
      category: 'international',
      icon: Ship,
      color: 'from-blue-500 to-indigo-500',
      expertise: 'Container Shipping',
      session: 'Global Shipping Trends'
    },
    {
      name: 'Dr. Ravi Kumar',
      title: 'Chairman, Cochin Shipyard Limited',
      organization: 'CSL',
      category: 'industry',
      icon: Building,
      color: 'from-teal-500 to-cyan-500',
      expertise: 'Shipbuilding',
      session: 'Shipbuilding Industry Outlook'
    },
    {
      name: 'Ms. Meera Nair',
      title: 'Director, National Institute of Ocean Technology',
      organization: 'NIOT Chennai',
      category: 'academic',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      expertise: 'Ocean Technology',
      session: 'Marine Technology Innovation'
    }
  ];

  const filteredSpeakers = selectedCategory === 'all' 
    ? speakers 
    : speakers.filter(speaker => speaker.category === selectedCategory);

  const speakerStats = [
    { number: '50+', label: 'Expert Speakers', icon: Users },
    { number: '15+', label: 'Countries', icon: Globe },
    { number: '25+', label: 'Sessions', icon: Mic },
    { number: '10+', label: 'Industries', icon: Briefcase }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-full text-sm font-medium mb-8">
              <Mic className="w-4 h-4 mr-2" />
              Distinguished Maritime Leaders
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                Expert Speakers
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Hear from industry leaders, policymakers, and innovators who are shaping the future 
              of India's maritime sector and the global blue economy.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {speakerStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <stat.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSpeakers.map((speaker, index) => {
              const Icon = speaker.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${speaker.color} text-white shadow-lg`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {speaker.name}
                    </h3>
                    
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      {speaker.title}
                    </p>
                    
                    <p className="text-xs text-gray-500 mb-3">
                      {speaker.organization}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        <Award className="w-3 h-3 mr-1" />
                        {speaker.expertise}
                      </div>
                      
                      <div className="flex items-center justify-center text-xs text-gray-600">
                        <Calendar className="w-3 h-3 mr-1" />
                        {speaker.session}
                      </div>
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
            Want to Speak at India Maritime Week 2025?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our distinguished panel of speakers and share your expertise with 
            the global maritime community. Applications are now open for speaker submissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
              Apply to Speak
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
              View Full Program
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;
