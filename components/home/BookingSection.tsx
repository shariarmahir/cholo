'use client';

import { useState } from 'react';
import { Hotel, Car, Ticket, Calendar, MapPin, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const hotels = [
  {
    name: 'Sea Pearl Beach Resort',
    location: 'Cox\'s Bazar',
    price: '8,500',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    amenities: ['Pool', 'Beach View', 'WiFi'],
  },
  {
    name: 'Hill View Resort',
    location: 'Bandarban',
    price: '6,200',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    amenities: ['Mountain View', 'Restaurant', 'Parking'],
  },
  {
    name: 'Tea Garden Cottage',
    location: 'Sylhet',
    price: '5,000',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    amenities: ['Garden View', 'Tea Tours', 'WiFi'],
  },
];

const tickets = [
  { name: 'Cox\'s Bazar Day Pass', price: '500', type: 'Beach', image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg' },
  { name: 'Sundarbans Boat Tour', price: '2,500', type: 'Wildlife', image: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg' },
  { name: 'Srimangal Tea Tour', price: '1,200', type: 'Nature', image: 'https://images.pexels.com/photos/4666752/pexels-photo-4666752.jpeg' },
];

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState('hotels');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Perfect Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamless booking for hotels, transportation, and activities
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-2 space-x-2">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'hotels'
                  ? 'bg-white text-[#0A3C78] shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Hotel className="w-5 h-5" />
              <span>Hotels</span>
            </button>
            <button
              onClick={() => setActiveTab('transport')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'transport'
                  ? 'bg-white text-[#0A3C78] shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Car className="w-5 h-5" />
              <span>Transport</span>
            </button>
            <button
              onClick={() => setActiveTab('tickets')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'tickets'
                  ? 'bg-white text-[#0A3C78] shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Ticket className="w-5 h-5" />
              <span>Tickets</span>
            </button>
          </div>
        </div>

        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
            {hotels.map((hotel, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-gray-900">{hotel.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#0A3C78]">৳{hotel.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/night</span>
                    </div>
                    <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'tickets' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
            {tickets.map((ticket, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ticket.image}
                    alt={ticket.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#0FB9C6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {ticket.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{ticket.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#0A3C78]">৳{ticket.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/person</span>
                    </div>
                    <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                      Buy Ticket
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'transport' && (
          <div className="text-center py-12 animate-fadeIn">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border-2 border-dashed border-gray-300">
              <Car className="w-16 h-16 text-[#0FB9C6] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Transport Booking Coming Soon</h3>
              <p className="text-gray-600 mb-6">Book local rides and vehicles for your travels</p>
              <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                Notify Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
