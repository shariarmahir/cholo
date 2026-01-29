'use client';

import { Star, MapPin, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const gems = [
  {
    name: 'Naipaul Jheel',
    location: 'Rangamati',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    rating: 4.9,
    reviews: 234,
    category: 'Lake',
    price: '500',
  },
  {
    name: 'Meghalaya Falls',
    location: 'Sylhet',
    image: 'https://images.pexels.com/photos/1619424/pexels-photo-1619424.jpeg',
    rating: 4.8,
    reviews: 189,
    category: 'Waterfall',
    price: '300',
  },
  {
    name: 'Patenga Beach',
    location: 'Chittagong',
    image: 'https://images.pexels.com/photos/1619865/pexels-photo-1619865.jpeg',
    rating: 4.7,
    reviews: 156,
    category: 'Beach',
    price: '200',
  },
  {
    name: 'Three Sisters Tea Garden',
    location: 'Sylhet',
    image: 'https://images.pexels.com/photos/1620315/pexels-photo-1620315.jpeg',
    rating: 4.9,
    reviews: 212,
    category: 'Nature',
    price: '800',
  },
  {
    name: 'Kaptai National Park',
    location: 'Rangamati',
    image: 'https://images.pexels.com/photos/1619753/pexels-photo-1619753.jpeg',
    rating: 4.8,
    reviews: 167,
    category: 'Park',
    price: '1,000',
  },
  {
    name: 'Lama Temple',
    location: 'Bandarban',
    image: 'https://images.pexels.com/photos/1619964/pexels-photo-1619964.jpeg',
    rating: 4.6,
    reviews: 134,
    category: 'Cultural',
    price: '300',
  },
];

export default function HiddenGemsSection() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A3C78] to-[#0FB9C6] text-white px-6 py-3 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Undiscovered Treasures</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hidden Gems of Bangladesh
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore offbeat destinations with verified guides and authentic local experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gems.map((gem, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={gem.image}
                  alt={gem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 backdrop-blur-sm text-[#0A3C78] font-semibold">
                    {gem.category}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200">
                    <Share2 className="w-5 h-5 text-[#0FB9C6]" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                    Book with Guide
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{gem.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{gem.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-gray-900">{gem.rating}</span>
                    <span className="text-gray-500 text-sm">({gem.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#0A3C78]">৳{gem.price}</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-[#0FB9C6] text-[#0FB9C6] hover:bg-[#0FB9C6] hover:text-white">
                    Explore
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
