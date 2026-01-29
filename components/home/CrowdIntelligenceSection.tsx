'use client';

import { Activity, TrendingDown, AlertCircle, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const crowdData = [
  {
    location: 'Cox\'s Bazar Beach',
    crowdLevel: 'High',
    percentage: 85,
    bestTime: '6:00 AM - 8:00 AM',
    color: 'bg-red-500',
  },
  {
    location: 'Bandarban Trails',
    crowdLevel: 'Low',
    percentage: 25,
    bestTime: 'All day',
    color: 'bg-green-500',
  },
  {
    location: 'Sylhet Tea Gardens',
    crowdLevel: 'Medium',
    percentage: 55,
    bestTime: '2:00 PM - 5:00 PM',
    color: 'bg-yellow-500',
  },
  {
    location: 'Sundarbans Jetty',
    crowdLevel: 'High',
    percentage: 78,
    bestTime: '6:00 AM - 7:30 AM',
    color: 'bg-red-500',
  },
];

export default function CrowdIntelligenceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#0FB9C6] text-white px-6 py-3 rounded-full mb-6">
            <Activity className="w-5 h-5" />
            <span className="font-semibold">Real-Time Analytics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real-Time Crowd Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Know before you go. Get live crowd updates and best times to visit popular destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crowdData.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex-1">{item.location}</h3>
                <Badge className={`${item.color} text-white text-xs font-semibold`}>
                  {item.crowdLevel}
                </Badge>
              </div>

              <div className="mb-6">
                <div className="flex items-end justify-between mb-2">
                  <span className="text-sm text-gray-600">Current Level</span>
                  <span className="text-2xl font-bold text-gray-900">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-[#0A3C78]" />
                <span>Best: {item.bestTime}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-[#0A3C78] rounded-2xl flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Peak Hours</h3>
                <p className="text-gray-700">
                  Avoid tourist hotspots during 10 AM - 3 PM. Most locations experience highest foot traffic during these hours.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-[#0FB9C6] rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Alerts</h3>
                <p className="text-gray-700">
                  Enable notifications to get alerts when crowd levels drop at your favorite destinations.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
