
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Building, Calendar, FileText } from 'lucide-react';

const RegistrationCTA = () => {
  const registrationTypes = [
    {
      icon: Building,
      title: "Exhibitor Registration",
      description: "Showcase your products and services to global audience",
      features: ["Premium stall locations", "Lead generation tools", "Networking events"],
      buttonText: "Register as Exhibitor",
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      icon: User,
      title: "Visitor Registration",
      description: "Explore innovations and connect with industry leaders",
      features: ["Free entry to exhibitions", "Conference access", "Networking sessions"],
      buttonText: "Register as Visitor",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Calendar,
      title: "Conference Registration",
      description: "Attend expert sessions and industry workshops",
      features: ["100+ expert sessions", "Workshop participation", "Digital resources"],
      buttonText: "Register for Conference",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: FileText,
      title: "Media Registration",
      description: "Cover the event and access exclusive content",
      features: ["Press center access", "Exclusive interviews", "Media kits"],
      buttonText: "Register as Media",
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join IMW 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your registration type and be part of India's largest manufacturing event. 
            Early bird discounts available for limited time.
          </p>
        </div>

        {/* Registration Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {registrationTypes.map((type, index) => (
            <div
              key={type.title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {type.description}
                  </p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className={`w-full ${type.color} text-white group`}>
                  {type.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Early Bird Offer */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Early Bird Special - Save up to 50%!
            </h3>
            <p className="text-xl mb-8 text-orange-100">
              Register before December 31st, 2024 and enjoy exclusive discounts. 
              Limited time offer with additional benefits for early registrants.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">50% OFF</div>
                <div className="text-sm text-orange-100">Conference Registration</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">30% OFF</div>
                <div className="text-sm text-orange-100">Exhibitor Packages</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">FREE</div>
                <div className="text-sm text-orange-100">Student Entry</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white px-8 py-4">
                View Pricing
              </Button>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4">
                Register Now & Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
