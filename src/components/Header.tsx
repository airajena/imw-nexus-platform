
import React, { useState } from 'react';
import { Menu, X, Search, Globe, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About IMW', href: '#about' },
    { name: 'Exhibitions', href: '#exhibitions' },
    { name: 'Conference', href: '#conference' },
    { name: 'Registration', href: '#registration' },
    { name: 'Archives', href: '#archives' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-orange-500 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />February 10-12, 2025</span>
            <span className="hidden md:block">New Delhi, India</span>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="w-4 h-4" />
            <span className="hidden sm:block">An Initiative of Government of India</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IMW</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">India Mobile World</h1>
                <p className="text-sm text-gray-600 hidden sm:block">International Manufacturing Week 2025</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full justify-center">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
