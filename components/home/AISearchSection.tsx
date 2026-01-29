'use client';

import { useState } from 'react';
import { Sparkles, MapPin, DollarSign, Calendar, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const suggestions = [
  { icon: MapPin, text: 'Hidden beaches in Cox\'s Bazar', color: 'bg-blue-500' },
  { icon: Users, text: 'Family-friendly destinations', color: 'bg-green-500' },
  { icon: DollarSign, text: 'Budget tours under 10,000 BDT', color: 'bg-yellow-500' },
  { icon: TrendingUp, text: 'Trending spots this month', color: 'bg-purple-500' },
];

export default function AISearchSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A3C78] to-[#0FB9C6] text-white px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">AI-Powered Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Intelligent Travel Companion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover hidden gems, avoid crowds, and create unforgettable memories with AI-powered recommendations
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A3C78] to-[#0FB9C6] rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="flex-1 flex items-center space-x-3 bg-gray-50 rounded-xl px-6 py-4">
                  <Sparkles className="w-6 h-6 text-[#0FB9C6]" />
                  <Input
                    type="text"
                    placeholder="Ask AI: 'Find peaceful places with waterfalls', 'Plan a 3-day trip under 15k'..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 bg-transparent text-lg focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF5722] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-[#0FB9C6] hover:shadow-md transition-all duration-200 group"
              >
                <div className={`${suggestion.color} w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <suggestion.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-700 group-hover:text-[#0A3C78] transition-colors">
                  {suggestion.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#0FB9C6] group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A3C78] to-[#0FB9C6] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Destination Finder</h3>
            <p className="text-gray-600">
              AI analyzes your preferences, budget, and travel style to recommend perfect destinations
            </p>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#0FB9C6] group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A3C78] to-[#0FB9C6] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Crowd Avoidance</h3>
            <p className="text-gray-600">
              Real-time crowd intelligence helps you find peaceful spots and avoid tourist congestion
            </p>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#0FB9C6] group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A3C78] to-[#0FB9C6] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Itineraries</h3>
            <p className="text-gray-600">
              Get custom travel plans with hotels, guides, and activities tailored to your budget
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
