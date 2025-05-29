
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Star, Wifi, Car, Coffee, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HotelBooking = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const hotels = [
    {
      id: 1,
      name: "The Grand Delhi",
      rating: 5,
      price: 8500,
      originalPrice: 10000,
      distance: "2.5 km from venue",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      amenities: ["Wi-Fi", "Parking", "Breakfast", "Pool", "Gym"],
      discount: 15,
      roomsLeft: 3
    },
    {
      id: 2,
      name: "Hotel Metropolitan",
      rating: 4,
      price: 5500,
      originalPrice: 6500,
      distance: "1.8 km from venue",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
      amenities: ["Wi-Fi", "Parking", "Breakfast", "Spa"],
      discount: 15,
      roomsLeft: 7
    },
    {
      id: 3,
      name: "Business Inn Delhi",
      rating: 4,
      price: 4200,
      originalPrice: 5000,
      distance: "3.2 km from venue",
      image: "https://images.unsplash.com/photo-1549294413-26f195200c16",
      amenities: ["Wi-Fi", "Parking", "Conference Room"],
      discount: 16,
      roomsLeft: 12
    }
  ];

  const amenityOptions = ["Wi-Fi", "Parking", "Breakfast", "Pool", "Gym", "Spa", "Conference Room"];

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hotel Booking</h1>
            <p className="text-xl text-blue-100">Find the perfect accommodation for IMW 2025</p>
          </div>

          {/* Search Form */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <Input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Hotels
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-3">Price Range (per night)</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="15000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="font-semibold mb-3">Amenities</h3>
                    <div className="space-y-2">
                      {amenityOptions.map((amenity) => (
                        <label key={amenity} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedAmenities.includes(amenity)}
                            onChange={() => toggleAmenity(amenity)}
                            className="mr-2"
                          />
                          <span className="text-sm">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div>
                    <h3 className="font-semibold mb-3">Star Rating</h3>
                    <div className="space-y-2">
                      {[5, 4, 3].map((rating) => (
                        <label key={rating} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <div className="flex items-center">
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-2 text-sm">{rating} Stars</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hotel Listings */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Available Hotels</h2>
                <select className="border rounded-lg px-4 py-2">
                  <option>Sort by Price (Low to High)</option>
                  <option>Sort by Price (High to Low)</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Distance</option>
                </select>
              </div>

              <div className="space-y-6">
                {hotels.map((hotel) => (
                  <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                            <div className="flex items-center mb-2">
                              <div className="flex items-center mr-4">
                                {[...Array(hotel.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {hotel.distance}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {hotel.amenities.map((amenity) => (
                                <span key={amenity} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="mb-2">
                              <span className="text-sm text-green-600 font-semibold">
                                {hotel.discount}% OFF - IMW Special
                              </span>
                            </div>
                            <div className="mb-1">
                              <span className="text-lg text-gray-500 line-through">₹{hotel.originalPrice}</span>
                            </div>
                            <div className="mb-2">
                              <span className="text-2xl font-bold text-orange-600">₹{hotel.price}</span>
                              <span className="text-sm text-gray-600">/night</span>
                            </div>
                            <div className="text-sm text-orange-600 font-medium mb-3">
                              Only {hotel.roomsLeft} rooms left!
                            </div>
                            <Button className="w-full bg-orange-600 hover:bg-orange-700">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HotelBooking;
