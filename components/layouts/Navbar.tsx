'use client';

import { useState } from 'react';
import { Search, Menu, X, User, LogIn, Facebook, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Guides', href: '#guides' },
    { name: 'Transport', href: '#transport' },
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Map', href: '#map' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
      {/* Two Line Layout */}
      <div className="max-w-7xl mx-auto">
        {/* First Line: Logo in Middle */}
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Left: Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#248efb] hover:bg-blue-50 p-2 rounded-full transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#248efb] hover:bg-pink-50 p-2 rounded-full transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center">
              <img 
                src="/logo/logo.png" 
                alt="Cholo Logo" 
                className="h-12 w-auto drop-shadow-sm"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'w-12 h-12 bg-gradient-to-br from-[#248efb] to-[#0FB9C6] rounded-lg flex items-center justify-center shadow-sm';
                  fallback.innerHTML = '<span class="text-white font-bold text-xl">C</span>';
                  target.parentNode?.insertBefore(fallback, target.nextSibling);
                }}
              />
            </div>
          </div>

          {/* Right: Auth & Language */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-2 text-[#248efb] hover:text-[#1a73e8] transition-colors duration-200 cursor-pointer">
              <Globe className="w-4 h-4" />
              <span className="font-medium text-sm">EN</span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-[#248efb] hover:text-[#1a73e8] hover:bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 h-9 text-sm transition-all duration-200"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button
                className="bg-gradient-to-r from-[#248efb] to-[#1a73e8] hover:from-[#1a73e8] hover:to-[#1557b0] text-white border-0 rounded-lg px-4 py-2 h-9 text-sm shadow-sm hover:shadow transition-all duration-200"
              >
                <User className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-[#248efb]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Blue Divider Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#248efb]/50 to-transparent w-full"></div>

        {/* Second Line: Categories & Search */}
        <div className="hidden lg:flex items-center justify-between h-12 px-4 sm:px-6 lg:px-8">
          {/* Left Categories */}
          <div className="flex items-center space-x-8">
            {categories.slice(0, 3).map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="text-[#248efb] hover:text-[#1a73e8] font-medium text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {category.name}
              </a>
            ))}
          </div>

          {/* Search Bar in Middle */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#248efb]/70 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search destinations, guides, experiences..."
                className="w-full pl-11 pr-4 py-2 bg-white/70 border border-blue-200/70 text-[#248efb] placeholder-[#248efb]/50 rounded-xl focus:bg-white focus:border-[#248efb] focus:ring-2 focus:ring-blue-100 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Categories */}
          <div className="flex items-center space-x-8">
            {categories.slice(3).map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="text-[#248efb] hover:text-[#1a73e8] font-medium text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Mobile Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#248efb] w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-blue-200 text-[#248efb] rounded-lg"
                />
              </div>
            </div>

            {/* Mobile Categories Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="px-4 py-3 text-center text-[#248efb] font-medium bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 border border-blue-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </a>
              ))}
            </div>

            {/* Mobile Social & Language */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#248efb] hover:bg-blue-50 p-2 rounded-full"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#248efb] hover:bg-pink-50 p-2 rounded-full"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#248efb]">
                <Globe className="w-4 h-4" />
                <span className="font-medium text-sm">EN</span>
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3">
              <Button 
                variant="outline" 
                className="w-full py-3 text-[#248efb] border-2 border-[#248efb] hover:bg-blue-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button 
                className="w-full py-3 bg-gradient-to-r from-[#248efb] to-[#1a73e8] text-white rounded-lg shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}