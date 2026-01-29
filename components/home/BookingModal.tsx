'use client';

import { useState } from 'react';
import { X, Calendar as CalendarIcon, Users, MapPin, Car, Hotel, Search, Clock, Plane, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingType: 'transport' | 'hotel' | 'tour' | 'trip';
}

const BookingModal = ({ isOpen, onClose, bookingType }: BookingModalProps) => {
  const [activeTab, setActiveTab] = useState('one-way');
  const [passengers, setPassengers] = useState('1');
  const [rooms, setRooms] = useState('1');
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('');

  const getBookingTitle = () => {
    switch (bookingType) {
      case 'transport': return 'Book Transport';
      case 'hotel': return 'Find Hotels';
      case 'tour': return 'Discover Tours';
      case 'trip': return 'Plan Your Journey';
      default: return 'Book Now';
    }
  };

  const getBookingSubtitle = () => {
    switch (bookingType) {
      case 'transport': return 'Find the perfect ride for your journey';
      case 'hotel': return 'Discover cozy stays and luxury accommodations';
      case 'tour': return 'Explore curated experiences and adventures';
      case 'trip': return 'Plan your complete travel experience';
      default: return 'Start your journey';
    }
  };

  const getBookingIcon = () => {
    switch (bookingType) {
      case 'transport': return <Car className="w-5 h-5" />;
      case 'hotel': return <Hotel className="w-5 h-5" />;
      case 'tour': return <Globe className="w-5 h-5" />;
      case 'trip': return <Plane className="w-5 h-5" />;
      default: return <CalendarIcon className="w-5 h-5" />;
    }
  };

  const handleSearch = () => {
    console.log('Booking search:', {
      bookingType,
      date,
      returnDate,
      passengers,
      rooms,
      location,
      destination,
      tripType
    });
    alert(`Searching for ${getBookingTitle()}...`);
    onClose();
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/20 via-transparent to-purple-50/20" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <X className="w-4 h-4" />
        </button>

        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              {getBookingIcon()}
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {getBookingTitle()}
              </DialogTitle>
              <p className="text-sm text-gray-500 mt-1">
                {getBookingSubtitle()}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6 pt-0">
          {/* Transport Booking */}
          {bookingType === 'transport' && (
            <div className="space-y-6">
              <Tabs defaultValue="one-way" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 bg-gray-100/90 p-1">
                  <TabsTrigger value="one-way" className="data-[state=active]:bg-black text-black">
                    One Way
                  </TabsTrigger>
                  <TabsTrigger value="round-trip" className="data-[state=active]:bg-black text-black">
                    Round Trip
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="one-way" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-black flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        From
                      </label>
                      <Input
                        placeholder="Departure city or airport"
                        className="pl-10"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        To
                      </label>
                      <Input
                        placeholder="Destination city or airport"
                        className="pl-10"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        Departure Date
                      </label>
                      <Input
                        type="date"
                        min={today}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Passengers
                      </label>
                      <Select value={passengers} onValueChange={setPassengers}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select passengers" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Passenger{num > 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Vehicle Type
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy Car</SelectItem>
                          <SelectItem value="comfort">Comfort Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="minivan">Mini Van</SelectItem>
                          <SelectItem value="luxury">Luxury Car</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="round-trip" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        From
                      </label>
                      <Input
                        placeholder="Departure city or airport"
                        className="pl-10"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        To
                      </label>
                      <Input
                        placeholder="Destination city or airport"
                        className="pl-10"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        Departure Date
                      </label>
                      <Input
                        type="date"
                        min={today}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        Return Date
                      </label>
                      <Input
                        type="date"
                        min={date || today}
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Passengers
                      </label>
                      <Select value={passengers} onValueChange={setPassengers}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select passengers" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Passenger{num > 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Vehicle Type
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy Car</SelectItem>
                          <SelectItem value="comfort">Comfort Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="minivan">Mini Van</SelectItem>
                          <SelectItem value="luxury">Luxury Car</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Hotel Booking */}
          {bookingType === 'hotel' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Destination
                  </label>
                  <Input
                    placeholder="City, area, or hotel name"
                    className="pl-10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Hotel className="w-4 h-4" />
                    Rooms & Guests
                  </label>
                  <div className="flex gap-2">
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger className="w-1/2">
                        <SelectValue placeholder="Rooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Room{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={passengers} onValueChange={setPassengers}>
                      <SelectTrigger className="w-1/2">
                        <SelectValue placeholder="Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Guest{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Check-in
                  </label>
                  <Input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Check-out
                  </label>
                  <Input
                    type="date"
                    min={date || today}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Hotel Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Budget', '3 Star', '4 Star', '5 Star', 'Luxury', 'Resort'].map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tour Booking */}
          {bookingType === 'tour' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Tour Destination
                </label>
                <Input
                  placeholder="Where would you like to explore?"
                  className="pl-10"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Tour Date
                  </label>
                  <Input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Duration
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-day">1 Day Tour</SelectItem>
                      <SelectItem value="2-day">2 Days 1 Night</SelectItem>
                      <SelectItem value="3-day">3 Days 2 Nights</SelectItem>
                      <SelectItem value="5-day">5 Days 4 Nights</SelectItem>
                      <SelectItem value="7-day">7 Days 6 Nights</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Travelers
                  </label>
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Traveler{num > 1 ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Tour Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Adventure', 'Cultural', 'Historical', 'Wildlife', 'Beach', 'Mountain'].map((type) => (
                    <Badge
                      key={type}
                      variant="outline"
                      className="cursor-pointer hover:bg-green-50 hover:border-green-500 hover:text-green-600"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Trip Planning */}
          {bookingType === 'trip' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Starting Point
                  </label>
                  <Input
                    placeholder="Your current location"
                    className="pl-10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Destination
                  </label>
                  <Input
                    placeholder="Where do you want to go?"
                    className="pl-10"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Start Date
                  </label>
                  <Input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    End Date
                  </label>
                  <Input
                    type="date"
                    min={date || today}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Travelers
                  </label>
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Traveler{num > 1 ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Trip Preferences
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { label: 'Adventure', color: 'orange' },
                    { label: 'Relaxation', color: 'blue' },
                    { label: 'Cultural', color: 'purple' },
                    { label: 'Family', color: 'green' },
                    { label: 'Luxury', color: 'pink' },
                    { label: 'Budget', color: 'gray' },
                    { label: 'Solo', color: 'indigo' },
                    { label: 'Group', color: 'teal' }
                  ].map(({ label, color }) => (
                    <Badge
                      key={label}
                      variant="outline"
                      className={`cursor-pointer hover:bg-${color}-50 hover:border-${color}-500 hover:text-${color}-600 text-center py-2`}
                      onClick={() => setTripType(label)}
                    >
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-8 pt-6 border-t">
            <Button
              onClick={handleSearch}
              className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Search className="w-5 h-5 mr-3" />
              Search {bookingType === 'trip' ? 'Journeys' : 'Options'}
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By proceeding, you agree to our Terms & Conditions and Privacy Policy
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;