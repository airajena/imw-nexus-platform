import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is on dashboard page
  const isDashboardPage = location.pathname === '/dashboard' || location.pathname === '/user-dashboard';

  // Simulate authentication check on component mount
  useEffect(() => {
    // Check if user is authenticated (you can replace this with actual auth logic)
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Program', href: '/program' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Exhibition', href: '/exhibition' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleLoginClick = () => {
    if (isDashboardPage) {
      // If on dashboard, this could be a logout action or profile menu
      return;
    } else {
      // Simulate login process
      localStorage.setItem('authToken', 'dummy-token');
      setIsAuthenticated(true);
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/');
  };

  const renderAuthButton = () => {
    if (isDashboardPage && isAuthenticated) {
      return (
        <div className="flex items-center space-x-2">
          <div className="inline-flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-center">
  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-2">
    <User className="w-3 h-3 text-white" />
  </div>
  <span className="text-gray-700 font-medium text-sm">Hello Kapil</span>
</div>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="ml-2"
          >
            Logout
          </Button>
        </div>
      );
    } else {
      return (
        <Button 
          className="bg-orange-600 hover:bg-orange-700 flex items-center space-x-2"
          onClick={handleLoginClick}
        >
          <User className="w-4 h-4" />
          <span>Login</span>
        </Button>
      );
    }
  };

  const renderMobileAuthButton = () => {
    if (isDashboardPage && isAuthenticated) {
      return (
        <div className="pt-4 space-y-2">
          <div className="text-center py-2 text-gray-700 font-medium">Hello Kapil</div>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      );
    } else {
      return (
        <div className="pt-4 space-y-2">
          <Button 
            className="w-full bg-orange-600 hover:bg-orange-700"
            onClick={handleLoginClick}
          >
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>
      );
    }
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-orange-500 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />October 27-31, 2025</span>
            <span className="hidden md:block">Mumbai, India</span>
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
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IMW</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">India Maritime Week</h1>
                <p className="text-sm text-gray-600 hidden sm:block">International Maritime Conference 2025</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Button>
            {renderAuthButton()}
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
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full justify-center">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              {renderMobileAuthButton()}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
