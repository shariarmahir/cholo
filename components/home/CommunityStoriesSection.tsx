'use client';

import { MessageCircle, Heart, Share2, Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const stories = [
  {
    author: 'Sarah Johnson',
    location: 'Cox\'s Bazar',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    content: 'Found the most amazing hidden beach with our guide! Absolutely breathtaking sunset experience. Will definitely come back!',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    rating: 5,
    likes: 342,
    comments: 45,
    timestamp: '2 hours ago',
  },
  {
    author: 'Ravi Patel',
    location: 'Bandarban',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    content: 'Trek to the mountain peak was challenging but rewarding. The guide was knowledgeable and very helpful. Highly recommended for adventure seekers!',
    image: 'https://images.pexels.com/photos/1506814/pexels-photo-1506814.jpeg',
    rating: 5,
    likes: 298,
    comments: 32,
    timestamp: '4 hours ago',
  },
  {
    author: 'Amina Khan',
    location: 'Sylhet',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    content: 'Tea garden tour was so peaceful and educational. Loved learning about traditional tea processing. The local snacks were delicious!',
    image: 'https://images.pexels.com/photos/1619424/pexels-photo-1619424.jpeg',
    rating: 4.8,
    likes: 267,
    comments: 28,
    timestamp: '6 hours ago',
  },
];

export default function CommunityStoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#0FB9C6] text-white px-6 py-3 rounded-full mb-6">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Traveler Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Community Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your experiences, connect with fellow travelers, and discover authentic travel stories from Bangladesh
          </p>
        </div>

        <div className="mb-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-start space-x-4">
            <Avatar className="w-12 h-12 flex-shrink-0">
              <AvatarImage src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <textarea
                placeholder="Share your travel story, tips, and recommendations..."
                className="w-full h-24 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0FB9C6] transition-all resize-none"
              ></textarea>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <button className="text-[#0FB9C6] hover:text-[#0A3C78] transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="text-[#0FB9C6] hover:text-[#0A3C78] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Post Story
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="w-12 h-12 flex-shrink-0">
                      <AvatarImage src={story.avatar} />
                      <AvatarFallback>{story.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{story.author}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                        <span>{story.location}</span>
                        <span>•</span>
                        <span>{story.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(story.rating) ? 'fill-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{story.content}</p>

                {story.image && (
                  <div className="mb-4 rounded-xl overflow-hidden h-64 bg-gray-100">
                    <img
                      src={story.image}
                      alt="Story"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors group">
                      <Heart className="w-5 h-5 group-hover:fill-red-500" />
                      <span className="text-sm font-semibold">{story.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#0FB9C6] transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-semibold">{story.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#0A3C78] transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm font-semibold">Share</span>
                    </button>
                  </div>
                  <Button size="sm" variant="outline" className="border-[#0FB9C6] text-[#0FB9C6] hover:bg-[#0FB9C6] hover:text-white">
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-2 border-[#0A3C78] text-[#0A3C78] hover:bg-[#0A3C78] hover:text-white px-8">
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
}
