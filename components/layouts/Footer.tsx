'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#0A3C78] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo from public/logo folder */}
              <img 
                src="/logo/logo.png" 
                alt="Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback if logo not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  // Show fallback
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback logo - hidden by default */}
              <div className="w-12 h-12 bg-[#0FB9C6] rounded-lg flex items-center justify-center hidden">
                <span className="text-white font-bold text-xl">C</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Your intelligent travel companion for exploring hidden gems and creating unforgettable memories across Bangladesh.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#0FB9C6]" />
                <span className="text-gray-300">+880-1521444725</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0FB9C6]" />
                <span className="text-gray-300">support@cholo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#0FB9C6]" />
                <span className="text-gray-300">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hotels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">For Hosts</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Become a Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">List Your Hotel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Transportation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Join Marketplace</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cancellation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to get travel tips, exclusive offers, and updates directly to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-400 focus:ring-[#0FB9C6] flex-1"
              />
              <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            <p>&copy; 2026 Cholo. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
              <Facebook className="w-5 h-5 group-hover:text-[#0FB9C6] transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
              <Twitter className="w-5 h-5 group-hover:text-[#0FB9C6] transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
              <Instagram className="w-5 h-5 group-hover:text-[#0FB9C6] transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
              <Linkedin className="w-5 h-5 group-hover:text-[#0FB9C6] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}