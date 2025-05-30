import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Anchor, 
  Ship,
  Building,
  Mic,
  Award,
  Globe,
  ArrowRight,
  Download
} from 'lucide-react';

const Program = () => {
  const [selectedDay, setSelectedDay] = useState('day1');

  const days = [
    { id: 'day1', label: 'Day 1', date: 'Oct 27', day: 'Monday' },
    { id: 'day2', label: 'Day 2', date: 'Oct 28', day: 'Tuesday' },
    { id: 'day3', label: 'Day 3', date: 'Oct 29', day: 'Wednesday' },
    { id: 'day4', label: 'Day 4', date: 'Oct 30', day: 'Thursday' },
    { id: 'day5', label: 'Day 5', date: 'Oct 31', day: 'Friday' }
  ];

  const programData = {
    day1: [
      {
        time: '09:00 - 10:00',
        title: 'Opening Ceremony & Welcome Address',
        speaker: 'Hon. Minister of Ports, Shipping & Waterways',
        type: 'Keynote',
        venue: 'Main Auditorium',
        icon: Mic,
        color: 'bg-orange-500'
      },
      {
        time: '10:30 - 12:00',
        title: 'India\'s Maritime Vision 2030',
        speaker: 'Secretary, Ministry of Ports & Shipping',
        type: 'Panel Discussion',
        venue: 'Conference Hall A',
        icon: Globe,
        color: 'bg-blue-500'
      },
      {
        time: '14:00 - 15:30',
        title: 'Port Infrastructure Development',
        speaker: 'Chairman, Major Port Authorities',
        type: 'Technical Session',
        venue: 'Conference Hall B',
        icon: Building,
        color: 'bg-cyan-500'
      },
      {
        time: '16:00 - 17:30',
        title: 'Maritime Technology Innovation',
        speaker: 'Global Tech Leaders Panel',
        type: 'Innovation Summit',
        venue: 'Tech Pavilion',
        icon: Award,
        color: 'bg-purple-500'
      }
    ],
    day2: [
      {
        time: '09:00 - 10:30',
        title: 'Shipping Industry Trends 2025',
        speaker: 'International Maritime Organization',
        type: 'Keynote',
        venue: 'Main Auditorium',
        icon: Ship,
        color: 'bg-orange-500'
      },
      {
        time: '11:00 - 12:30',
        title: 'Green Shipping & Sustainability',
        speaker: 'Environmental Maritime Council',
        type: 'Sustainability Forum',
        venue: 'Green Pavilion',
        icon: Globe,
        color: 'bg-green-500'
      },
      {
        time: '14:00 - 15:30',
        title: 'Digital Transformation in Ports',
        speaker: 'Port Technology Leaders',
        type: 'Digital Summit',
        venue: 'Digital Arena',
        icon: Award,
        color: 'bg-blue-500'
      },
      {
        time: '16:00 - 17:30',
        title: 'Maritime Finance & Investment',
        speaker: 'Banking & Finance Consortium',
        type: 'Finance Forum',
        venue: 'Business Center',
        icon: Building,
        color: 'bg-indigo-500'
      }
    ],
    day3: [
      {
        time: '09:00 - 10:30',
        title: 'Coastal Shipping Development',
        speaker: 'Coastal Shipping Association',
        type: 'Industry Forum',
        venue: 'Maritime Hall',
        icon: Anchor,
        color: 'bg-cyan-500'
      },
      {
        time: '11:00 - 12:30',
        title: 'Logistics & Supply Chain',
        speaker: 'Logistics Excellence Council',
        type: 'Supply Chain Summit',
        venue: 'Logistics Center',
        icon: Ship,
        color: 'bg-orange-500'
      },
      {
        time: '14:00 - 15:30',
        title: 'Maritime Safety & Security',
        speaker: 'Coast Guard & Navy Officials',
        type: 'Safety Conclave',
        venue: 'Security Pavilion',
        icon: Award,
        color: 'bg-red-500'
      },
      {
        time: '16:00 - 17:30',
        title: 'Shipbuilding Industry Outlook',
        speaker: 'Shipbuilders Association',
        type: 'Manufacturing Forum',
        venue: 'Industry Hall',
        icon: Building,
        color: 'bg-purple-500'
      }
    ],
    day4: [
      {
        time: '09:00 - 10:30',
        title: 'Blue Economy Opportunities',
        speaker: 'Marine Resources Council',
        type: 'Economic Forum',
        venue: 'Blue Economy Center',
        icon: Globe,
        color: 'bg-blue-500'
      },
      {
        time: '11:00 - 12:30',
        title: 'Port Automation & AI',
        speaker: 'Automation Technology Leaders',
        type: 'Tech Innovation',
        venue: 'AI Pavilion',
        icon: Award,
        color: 'bg-cyan-500'
      },
      {
        time: '14:00 - 15:30',
        title: 'Maritime Education & Skills',
        speaker: 'Maritime Universities Consortium',
        type: 'Education Summit',
        venue: 'Knowledge Center',
        icon: Users,
        color: 'bg-green-500'
      },
      {
        time: '16:00 - 17:30',
        title: 'International Trade Partnerships',
        speaker: 'Global Trade Representatives',
        type: 'Trade Forum',
        venue: 'International Hall',
        icon: Globe,
        color: 'bg-orange-500'
      }
    ],
    day5: [
      {
        time: '09:00 - 10:30',
        title: 'Future of Maritime Industry',
        speaker: 'Visionary Leaders Panel',
        type: 'Future Forum',
        venue: 'Vision Hall',
        icon: Award,
        color: 'bg-purple-500'
      },
      {
        time: '11:00 - 12:30',
        title: 'Startup Showcase & Innovation',
        speaker: 'Maritime Startup Ecosystem',
        type: 'Startup Pitch',
        venue: 'Innovation Hub',
        icon: Award,
        color: 'bg-cyan-500'
      },
      {
        time: '14:00 - 15:30',
        title: 'Awards & Recognition Ceremony',
        speaker: 'Industry Excellence Awards',
        type: 'Awards Ceremony',
        venue: 'Grand Ballroom',
        icon: Award,
        color: 'bg-orange-500'
      },
      {
        time: '16:00 - 17:00',
        title: 'Closing Ceremony & Way Forward',
        speaker: 'Organizing Committee',
        type: 'Closing',
        venue: 'Main Auditorium',
        icon: Mic,
        color: 'bg-blue-500'
      }
    ]
  };

  const highlights = [
    {
      icon: Users,
      title: '100+ Expert Speakers',
      description: 'Industry leaders from 40+ countries'
    },
    {
      icon: Calendar,
      title: '75+ Sessions',
      description: 'Covering all aspects of maritime industry'
    },
    {
      icon: Award,
      title: '15+ Awards',
      description: 'Recognizing maritime excellence'
    },
    {
      icon: Building,
      title: '10+ Pavilions',
      description: 'Specialized exhibition areas'
    }
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
              <Calendar className="w-4 h-4 mr-2" />
              5-Day Comprehensive Program
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Conference
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                Program 2025
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our comprehensive 5-day program featuring keynote sessions, panel discussions, 
              technical workshops, and networking opportunities with global maritime leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download Program
              </Button>
              <Button size="lg" variant="outline" className="border-white  text-blue-900 px-8 py-4">
                Register for Sessions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Program Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Five days of intensive learning, networking, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Daily Program Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Select a day to view detailed program schedule
            </p>
          </div>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedDay === day.id
                    ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-sm">{day.label}</div>
                <div className="font-bold">{day.date}</div>
                <div className="text-xs opacity-75">{day.day}</div>
              </button>
            ))}
          </div>

          {/* Program Schedule */}
          <div className="space-y-6">
            {programData[selectedDay].map((session, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${session.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <session.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{session.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {session.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {session.speaker}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {session.type}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {session.venue}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="hover:bg-orange-50 hover:border-orange-300">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Miss Out on India Maritime Week 2025
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Register now to secure your spot at India's premier maritime event and be part of 
            shaping the future of the maritime industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
              Register Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Program;
