'use client';

import { ShoppingCart, Star, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    name: 'Jamdani Saree',
    seller: 'Dhaka Textiles',
    price: '3,500',
    rating: 4.9,
    category: 'Traditional Cloth',
    image: 'https://images.pexels.com/photos/3622645/pexels-photo-3622645.jpeg',
    inStock: true,
  },
  {
    name: 'Chittagong Curry',
    seller: 'Local Spice Market',
    price: '450',
    rating: 4.7,
    category: 'Food',
    image: 'https://images.pexels.com/photos/5632597/pexels-photo-5632597.jpeg',
    inStock: true,
  },
  {
    name: 'Nakshi Kantha (Embroidered)',
    seller: 'Artisan Collective',
    price: '2,200',
    rating: 4.8,
    category: 'Handicraft',
    image: 'https://images.pexels.com/photos/4255169/pexels-photo-4255169.jpeg',
    inStock: true,
  },
  {
    name: 'Sylhet Rice',
    seller: 'Farm Direct',
    price: '600',
    rating: 4.6,
    category: 'Food',
    image: 'https://images.pexels.com/photos/6646936/pexels-photo-6646936.jpeg',
    inStock: true,
  },
  {
    name: 'Terracotta Pottery',
    seller: 'Rajshahi Artisans',
    price: '1,800',
    rating: 4.8,
    category: 'Handicraft',
    image: 'https://images.pexels.com/photos/5632652/pexels-photo-5632652.jpeg',
    inStock: true,
  },
  {
    name: 'Hill Tracts Honey',
    seller: 'Organic Farms',
    price: '750',
    rating: 4.9,
    category: 'Food',
    image: 'https://images.pexels.com/photos/9920831/pexels-photo-9920831.jpeg',
    inStock: true,
  },
];

export default function LocalEcommerceSection() {
  return (
    <section id="marketplace" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#0A3C78] text-white px-6 py-3 rounded-full mb-6">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">Local Marketplace</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support Local Artisans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic traditional items, handicrafts, and local delicacies directly from creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#0FB9C6] text-white text-xs font-semibold">
                    {product.category}
                  </Badge>
                </div>
                {product.inStock && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    In Stock
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.seller}</p>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-sm text-gray-900">{product.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#0A3C78]">৳{product.price}</span>
                  </div>
                  <Button size="sm" className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-600 pt-4 border-t border-gray-200">
                  <Truck className="w-4 h-4 mr-2 text-[#0FB9C6]" />
                  <span>Fast Delivery Available</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#FF6B35] hover:bg-[#FF5722] text-white px-8">
            Browse Full Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
}
