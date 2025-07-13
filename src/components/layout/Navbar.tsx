import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isLandingPage ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-white border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SmartPitch</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/saved-scripts" className="text-gray-600 hover:text-gray-900 transition-colors">
              My Scripts
            </Link>
            <Link to="/wizard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Create Script
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/saved-scripts"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                My Scripts
              </Link>
              <Link
                to="/wizard"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Create Script
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">Login</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}