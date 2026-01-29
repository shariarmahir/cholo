'use client';

import { Star, MapPin, Award, Languages, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const guides = [
  {
    name: 'Kamal Hassan',
    location: 'Bandarban',
    rating: 4.9,
    tours: 230,
    languages: ['Bengali', 'English'],
    specialties: ['Mountain Trekking', 'Cultural Tours'],
    price: '2,500',
    verified: true,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    name: 'Rashida Begum',
    location: 'Cox\'s Bazar',
    rating: 4.8,
    tours: 189,
    languages: ['Bengali', 'English', 'Hindi'],
    specialties: ['Beach Tours', 'Photography'],
    price: '2,000',
    verified: true,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    name: 'Minhaj Ahmed',
    location: 'Sylhet',
    rating: 4.9,
    tours: 156,
    languages: ['Bengali', 'English'],
    specialties: ['Tea Gardens', 'Nature Walks'],
    price: '1,800',
    verified: true,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  },
  {
    name: 'Fatima Khan',
    location: 'Dhaka',
    rating: 4.7,
    tours: 145,
    languages: ['Bengali', 'English', 'Urdu'],
    specialties: ['Historical Sites', 'Food Tours'],
    price: '1,500',
    verified: true,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
];

export default function TouristGuidesSection() {
  return (
    <section id="guides" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A3C78] to-[#0FB9C6] text-white px-6 py-3 rounded-full mb-6">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Certified & Verified</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expert Tourist Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with certified local guides who know every hidden gem and story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {guide.verified && (
                  <div className="absolute top-4 right-4 bg-[#0FB9C6] text-white p-2 rounded-full shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-gray-900">{guide.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">{guide.tours} tours</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{guide.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{guide.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <Languages className="w-4 h-4 text-[#0FB9C6]" />
                    <span className="text-sm font-semibold text-gray-700">Languages:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {guide.languages.map((lang, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {guide.specialties.map((specialty, i) => (
                      <Badge key={i} className="text-xs bg-[#0A3C78] text-white">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[#0A3C78]">৳{guide.price}</span>
                    <span className="text-gray-500 text-sm">/day</span>
                  </div>
                </div>

                <Button className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Request Guide
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-2 border-[#0A3C78] text-[#0A3C78] hover:bg-[#0A3C78] hover:text-white px-8">
            View All Guides
          </Button>
        </div>
      </div>
    </section>
  );
}
