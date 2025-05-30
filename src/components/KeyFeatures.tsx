import React from 'react';
import { 
  Anchor, 
  Users, 
  Calendar, 
  Award, 
  Ship, 
  Lightbulb,
  Shield,
  Waves
} from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      icon: Anchor,
      title: "Maritime Hub",
      description: "Connect with shipping companies and port authorities from 40+ countries",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Industry Network",
      description: "Meet 25,000+ maritime professionals and decision makers",
      color: "bg-cyan-500"
    },
    {
      icon: Award,
      title: "Maritime Innovation",
      description: "Discover latest maritime technologies and sustainable shipping solutions",
      color: "bg-orange-500"
    },
    {
      icon: Ship,
      title: "Exhibition Fleet",
      description: "Explore 500+ exhibitors across shipping, ports, and logistics sectors",
      color: "bg-purple-500"
    },
    {
      icon: Calendar,
      title: "Maritime Summit",
      description: "Attend 75+ sessions with shipping industry thought leaders",
      color: "bg-red-500"
    },
    {
      icon: Lightbulb,
      title: "Blue Economy Insights",
      description: "Access maritime research, port development studies, and shipping reports",
      color: "bg-yellow-500"
    },
    {
      icon: Shield,
      title: "Government Backing",
      description: "Supported by Ministry of Ports, Shipping & Waterways, Govt of India",
      color: "bg-indigo-500"
    },
    {
      icon: Waves,
      title: "Digital Maritime",
      description: "Virtual port tours, live shipping demos, and digital maritime tools",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose India Maritime Week 2025?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India Maritime Week brings together the global maritime ecosystem under one roof, 
            creating unprecedented opportunities for growth, innovation, and collaboration in India's blue economy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                500+
              </div>
              <div className="text-lg text-blue-100">Exhibitors</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                25,000+
              </div>
              <div className="text-lg text-blue-100">Visitors</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                40+
              </div>
              <div className="text-lg text-blue-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                75+
              </div>
              <div className="text-lg text-blue-100">Sessions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
