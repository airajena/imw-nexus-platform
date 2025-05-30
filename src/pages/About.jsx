import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Anchor, 
  Ship, 
  Users, 
  Globe, 
  Award, 
  Target,
  Calendar,
  MapPin,
  Building,
  Waves
} from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Ship,
      title: "Promote Maritime Trade",
      description: "Foster international maritime trade relationships and boost India's position as a global shipping hub"
    },
    {
      icon: Building,
      title: "Port Development",
      description: "Showcase India's port infrastructure development and modernization initiatives under Sagarmala project"
    },
    {
      icon: Globe,
      title: "Blue Economy Growth",
      description: "Accelerate sustainable development of ocean resources and marine-based economic activities"
    },
    {
      icon: Users,
      title: "Industry Networking",
      description: "Connect maritime professionals, policymakers, and industry leaders for collaborative growth"
    }
  ];

  const keyHighlights = [
    {
      number: "500+",
      label: "Global Exhibitors",
      color: "text-orange-400"
    },
    {
      number: "40+",
      label: "Participating Countries",
      color: "text-cyan-400"
    },
    {
      number: "25,000+",
      label: "Industry Visitors",
      color: "text-blue-400"
    },
    {
      number: "75+",
      label: "Expert Sessions",
      color: "text-purple-400"
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
              <Anchor className="w-4 h-4 mr-2" />
              About India Maritime Week 2025
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Navigating India's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                Maritime Future
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              India Maritime Week 2025 is the country's premier maritime exhibition and conference, 
              bringing together the global maritime ecosystem to explore opportunities in India's rapidly expanding blue economy.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                India's Gateway to Maritime Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  India Maritime Week 2025 represents a pivotal moment in India's maritime journey. As the nation 
                  emerges as a global maritime powerhouse, this event serves as the definitive platform for 
                  showcasing India's maritime capabilities, infrastructure, and vision for the future.
                </p>
                <p>
                  Organized under the aegis of the Ministry of Ports, Shipping & Waterways, Government of India, 
                  the event aligns with the ambitious Sagarmala initiative, which aims to modernize India's port 
                  infrastructure and enhance the country's maritime trade capabilities.
                </p>
                <p>
                  The event brings together port authorities, shipping companies, maritime technology providers, 
                  logistics experts, and policy makers from around the world to explore collaborative opportunities 
                  in India's blue economy sector.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://ssbcrackexams.com/wp-content/uploads/2024/08/The-Indian-Navys-Top-10-Ships_th.jpg" 
                  alt="Maritime Port" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20"></div>
              </div>
              {/* Floating Stats */}
              {/* <div className="absolute -bottom-6 -left-16 bg-orange-600 text-white p-4 rounded-lg shadow-lg ">
                <div className="text-2xl font-bold">₹4.5 Lakh Cr</div>
                <div className="text-sm opacity-90">Sagarmala Investment</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-cyan-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">12 Major</div>
                <div className="text-sm opacity-90">Ports in India</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India Maritime Week 2025 aims to position India as the global maritime hub while 
              fostering sustainable growth in the blue economy sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      {/* Vision Section */}
<section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold mb-6">
        Our Vision for India's Maritime Future
      </h2>
      <div className="space-y-6 text-blue-100 leading-relaxed max-w-4xl mx-auto">
        <p className="text-lg">
          To establish India as the preferred global maritime destination by leveraging our strategic 
          geographical location, world-class port infrastructure, and innovative maritime technologies.
        </p>
        <p>
          We envision a sustainable blue economy that contributes significantly to India's GDP while 
          preserving our marine ecosystems and promoting responsible maritime practices.
        </p>
        <p>
          Through India Maritime Week 2025, we aim to create lasting partnerships that will drive 
          innovation, efficiency, and growth in the maritime sector for decades to come.
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <Calendar className="w-8 h-8 text-orange-400 mb-3 mx-auto" />
          <div className="text-sm text-blue-200">Event Duration</div>
          <div className="font-semibold text-lg">5 Days</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <MapPin className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
          <div className="text-sm text-blue-200">Location</div>
          <div className="font-semibold text-lg">Mumbai, India</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <Waves className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
          <div className="text-sm text-blue-200">Focus Area</div>
          <div className="font-semibold text-lg">Blue Economy</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <Target className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
          <div className="text-sm text-blue-200">Vision Year</div>
          <div className="font-semibold text-lg">2030</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Key Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of maritime professionals in shaping the future of India's maritime industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`text-4xl lg:text-5xl font-bold ${highlight.color} mb-2`}>
                  {highlight.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Government of India Initiative
            </h3>
            <p className="text-xl mb-6 text-orange-100 max-w-3xl mx-auto">
              India Maritime Week 2025 is proudly supported by the Ministry of Ports, Shipping & Waterways, 
              Government of India, as part of the nation's commitment to developing a world-class maritime ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">Sagarmala Project</span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">Maritime India Vision 2030</span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">Blue Economy Initiative</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
