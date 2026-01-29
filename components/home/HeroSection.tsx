'use client';

import { useState, useEffect, useRef } from 'react';
import { Calendar, Car, Hotel, MapPin, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from './BookingModal';

const heroSlides = [
  {
    type: 'video',
    url: '/images/hero/bangladesh-thumbnail.jpg',
    videoUrl: '/videos/hero/bangladesh-travel.mp4',
    title: 'Discover Beautiful Bangladesh',
    subtitle: 'Your gateway to unforgettable travel experiences in Bandarban, Saint Martin, and Sundarbans',
  }
];

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingType, setBookingType] = useState<'transport' | 'hotel' | 'tour' | 'trip'>('trip');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Initialize video
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  const toggleVideoPlayback = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleBookingClick = (type: 'transport' | 'hotel' | 'tour' | 'trip') => {
    setBookingType(type);
    setShowBookingModal(true);
  };

  const currentSlideData = heroSlides[0];

  return (
    <>
      <div className="relative w-full overflow-hidden bg-black">
        {/* Hero Container with Perfect Aspect Ratio */}
        <div className="relative aspect-video md:aspect-video w-full max-h-[90vh] min-h-150 md:min-h-175">
          
          {/* Single Video Background */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              className="absolute w-full h-full object-cover"
              style={{
                filter: 'brightness(1.15) contrast(1.1)'
              }}
              src={currentSlideData.videoUrl}
              muted={isMuted}
              autoPlay
              loop
              playsInline
              preload="auto"
              poster={currentSlideData.url}
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/50" />
          </div>

          {/* Content - Perfectly Centered */}
          <div className="relative h-full flex items-center justify-center z-10 px-4">
            <div className="max-w-6xl w-full mx-auto text-center">
              
              {/* Responsive Title */}
              <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-4xl font-bold text-white mb-2 md:mb-2 leading-tight tracking-tight">
                <span className="bg-clip-text text-transparent bg-linear-to-t from-white via-white/95 to-white/90">
                  {currentSlideData.title}
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white/90 font-light mb-6 md:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
                {currentSlideData.subtitle}
              </p>

              {/* Plan Your Trip Section */}
              <div className="flex flex-col items-center gap-4 md:gap-6">
                {/* Main Plan Your Trip Button */}
                <Button
                  onClick={() => handleBookingClick('trip')}
                  size="lg"
                  className="group relative overflow-hidden bg-linear-to-t from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-xl border-0 min-w-62.5 md:min-w-75"
                >
                  <div className="absolute inset-0 bg-linear-to-t from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                  Plan Your Trip
                </Button>
                
                {/* Individual Booking Options */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  <button
                    onClick={() => handleBookingClick('transport')}
                    className="group relative inline-flex items-center text-white/90 hover:text-white text-sm md:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 md:px-5 py-2.5 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
                  >
                    <Car className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                    Transport
                  </button>
                  <button
                    onClick={() => handleBookingClick('hotel')}
                    className="group relative inline-flex items-center text-white/90 hover:text-white text-sm md:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 md:px-5 py-2.5 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
                  >
                    <Hotel className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                    Hotel
                  </button>
                  <button
                    onClick={() => handleBookingClick('tour')}
                    className="group relative inline-flex items-center text-white/90 hover:text-white text-sm md:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 md:px-5 py-2.5 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
                  >
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                    Tour
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
                {[
                  { value: '500+', label: 'Destinations' },
                  { value: '1000+', label: 'Hotels' },
                  { value: '24/7', label: 'Support' },
                  { value: '50K+', label: 'Travelers' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-white text-2xl md:text-3xl font-bold">{stat.value}</div>
                    <div className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-3 z-20">
            <button
              onClick={toggleMute}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white/25 border border-white/30 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              ) : (
                <Volume2 className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              )}
            </button>
            <button
              onClick={toggleVideoPlayback}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white/25 border border-white/30 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? (
                <Pause className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              ) : (
                <Play className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
        bookingType={bookingType}
      />
    </>
  );
}