
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    "About IMW 2025",
    "Exhibition Details",
    "Conference Program",
    "Registration",
    "Venue Information",
    "Archives"
  ];

  const exhibitorLinks = [
    "Exhibitor Registration",
    "Stall Booking",
    "Exhibitor Portal",
    "Floor Plans",
    "Services & Facilities",
    "Sponsorship Opportunities"
  ];

  const visitorLinks = [
    "Visitor Registration",
    "Event Schedule",
    "Travel Information",
    "Accommodation",
    "Visa Assistance",
    "Meeting Scheduler"
  ];

  const supportLinks = [
    "Contact Support",
    "FAQs",
    "Technical Help",
    "Media Center",
    "Download Center",
    "Privacy Policy"
  ];

  const bookingLinks = [
    { name: 'Hotel Booking', href: '/hotel-booking' },
    { name: 'Venue Booking', href: '/venue-booking' },
    { name: 'Transportation', href: '/transportation' },
    { name: 'My Dashboard', href: '/dashboard' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with IMW 2025
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Get the latest news, updates, and exclusive offers for India Maritime Week delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">IMW</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">India Maritime Week</h3>
                  <p className="text-gray-400 text-sm">IMW 2025</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                India's premier international maritime conference, bringing together global industry leaders, 
                innovators, and decision-makers to shape the future of maritime industry.
              </p>
              
              {/* Government Compliance */}
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-300 mb-2">
                  <strong>Government Initiative</strong>
                </p>
                <p className="text-xs text-gray-400">
                  Compliant with GIG W3.0 guidelines and hosted on MEITY-empanelled cloud services.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 11 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>info@imw.org.in</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span>www.imw.org.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Booking Services</h4>
              <ul className="space-y-3">
                {bookingLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm font-bold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exhibitors */}
            <div>
              <h4 className="text-lg font-semibold mb-6">For Exhibitors</h4>
              <ul className="space-y-3">
                {exhibitorLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visitors */}
            <div>
              <h4 className="text-lg font-semibold mb-6">For Visitors</h4>
              <ul className="space-y-3">
                {visitorLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            {/* <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 mb-6">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul> */}

              {/* Social Media */}
              {/* <div>
                <h5 className="font-semibold mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 India Maritime Week (IMW) 2025. All rights reserved. | An Initiative of Government of India
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
