'use client';

import { Car, Bike, Navigation, Clock, DollarSign, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const vehicles = [
  {
    type: 'Chander Gari',
    icon: Car,
    price: '500-1000',
    time: '2-5 mins',
    capacity: '4-6 people',
    rating: 4.8,
    available: 12,
  },
  {
    type: 'CNG',
    icon: Car,
    price: '300-800',
    time: '3-7 mins',
    capacity: '3-4 people',
    rating: 4.6,
    available: 25,
  },
  {
    type: 'Bike',
    icon: Bike,
    price: '150-400',
    time: '1-3 mins',
    capacity: '1-2 people',
    rating: 4.9,
    available: 18,
  },
];

export default function LocalLogisticsSection() {
  return (
    <section id="transport" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#0FB9C6] text-white px-6 py-3 rounded-full mb-6">
            <Car className="w-5 h-5" />
            <span className="font-semibold">Local Transport</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ride Anywhere, Anytime
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book local rides like CNG, Chander Gari, and bikes in Bandarban and beyond
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Ride</h3>

              <div className="space-y-4 mb-6">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0FB9C6] rounded-full"></div>
                  <input
                    type="text"
                    placeholder="Pickup location"
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0FB9C6] transition-all"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B35] rounded-full"></div>
                  <input
                    type="text"
                    placeholder="Drop-off location"
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0FB9C6] transition-all"
                  />
                </div>
              </div>

              <Button size="lg" className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                <Navigation className="w-5 h-5 mr-2" />
                Find Rides
              </Button>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#0A3C78]/5 to-[#0FB9C6]/5 rounded-xl border border-[#0FB9C6]/20">
                <div className="flex items-center space-x-2 text-[#0A3C78]">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">Safe & Verified Drivers</span>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg"
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Currently available in</p>
                  <p className="text-xl font-bold text-[#0A3C78]">Bandarban District</p>
                  <p className="text-sm text-[#0FB9C6] mt-2">More cities coming soon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#0FB9C6] group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A3C78] to-[#0FB9C6] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <vehicle.icon className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-green-500 text-white">
                  {vehicle.available} available
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{vehicle.type}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Arrival
                  </span>
                  <span className="font-semibold text-gray-900">{vehicle.time}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Fare
                  </span>
                  <span className="font-semibold text-gray-900">৳{vehicle.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-semibold text-gray-900">{vehicle.capacity}</span>
                </div>
              </div>

              <Button className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                Book {vehicle.type}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
