'use client';

import { Shield, AlertTriangle, Phone, MapPin, Info, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const safetyTips = [
  {
    title: 'Real-Time Safety Alerts',
    description: 'Get instant notifications about weather, traffic, and security advisories',
    icon: AlertTriangle,
    color: 'bg-red-500',
  },
  {
    title: 'Emergency Support',
    description: '24/7 emergency hotline and local assistance in case of any issues',
    icon: Phone,
    color: 'bg-orange-500',
  },
  {
    title: 'Safe Zones Mapping',
    description: 'Navigate to verified safe areas with police and medical facilities',
    icon: MapPin,
    color: 'bg-blue-500',
  },
  {
    title: 'Travel Regulations',
    description: 'Updated information on permits, documentation, and local laws',
    icon: Info,
    color: 'bg-purple-500',
  },
];

const regulations = [
  { title: 'Passport Valid', description: 'Your passport must be valid for at least 6 months' },
  { title: 'Visa Requirements', description: 'Check visa requirements for your nationality' },
  { title: 'Travel Insurance', description: 'Recommended to have comprehensive travel insurance' },
  { title: 'Health Precautions', description: 'Get vaccinations as recommended by health authorities' },
];

export default function TravelSafetySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A3C78] to-[#0FB9C6] text-white px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Travel Smart & Safe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Safe, Travel Smart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time safety alerts, regulations, and emergency support for worry-free exploration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {safetyTips.map((tip, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <div className={`${tip.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <tip.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 text-[#0A3C78] mr-3" />
              Important Regulations
            </h3>
            <div className="space-y-4">
              {regulations.map((reg, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{reg.title}</h4>
                    <p className="text-sm text-gray-700">{reg.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 border-2 border-teal-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Phone className="w-6 h-6 text-[#0FB9C6] mr-3" />
              Emergency Contacts
            </h3>
            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Emergency Number</p>
                <p className="text-2xl font-bold text-[#0A3C78]">999</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Cholo Support Line</p>
                <p className="text-2xl font-bold text-[#0A3C78]">+880-1XXX-CHOLO</p>
              </div>
              <Button className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white py-6 text-lg">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Report Emergency
              </Button>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Current Travel Advisories</h3>
              <p className="text-gray-700 mb-4">
                Weather advisory: Monsoon season from June to September. Expect heavy rainfall in Hill Tracts region.
              </p>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                View All Advisories
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
