
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Car, Bus, MapPin, Clock, Users, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TransportationBooking = () => {
  const [activeTab, setActiveTab] = useState('airport');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [passengers, setPassengers] = useState(1);

  const airportTransfers = [
    {
      id: 1,
      type: "Premium Sedan",
      capacity: 4,
      price: 1200,
      duration: "45 mins",
      features: ["AC", "Wi-Fi", "Water Bottles", "Professional Driver"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"
    },
    {
      id: 2,
      type: "Luxury SUV",
      capacity: 6,
      price: 1800,
      duration: "45 mins",
      features: ["AC", "Wi-Fi", "Refreshments", "Premium Interiors"],
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
    },
    {
      id: 3,
      type: "Shared Shuttle",
      capacity: 12,
      price: 400,
      duration: "60 mins",
      features: ["AC", "Wi-Fi", "Multiple Stops"],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e"
    }
  ];

  const carRentals = [
    {
      id: 1,
      model: "Toyota Innova",
      type: "7-Seater MPV",
      pricePerDay: 2500,
      features: ["AC", "GPS", "Full Insurance", "24/7 Support"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"
    },
    {
      id: 2,
      model: "Honda City",
      type: "4-Seater Sedan",
      pricePerDay: 1800,
      features: ["AC", "GPS", "Full Insurance", "Fuel Efficient"],
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
    },
    {
      id: 3,
      model: "Mahindra Scorpio",
      type: "7-Seater SUV",
      pricePerDay: 3200,
      features: ["AC", "GPS", "Full Insurance", "High Ground Clearance"],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e"
    }
  ];

  const localTransport = [
    {
      id: 1,
      name: "Event Shuttle Service",
      route: "Hotel ↔ Event Venue",
      frequency: "Every 30 minutes",
      price: 0,
      features: ["Free for IMW attendees", "AC", "Direct Route"],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e"
    },
    {
      id: 2,
      name: "City Tour Package",
      route: "Delhi Sightseeing",
      duration: "8 hours",
      price: 1500,
      features: ["Guide Included", "Lunch", "Entry Tickets", "AC Vehicle"],
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0"
    }
  ];

  const renderAirportTransfer = () => (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Airport Transfer Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
              <Input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Time</label>
              <Input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
              <Input
                type="number"
                min="1"
                max="8"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value))}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {airportTransfers.map((transfer) => (
          <Card key={transfer.id} className="hover:shadow-lg transition-shadow">
            <img
              src={transfer.image}
              alt={transfer.type}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{transfer.type}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  Up to {transfer.capacity} passengers
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {transfer.duration} to venue
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {transfer.features.map((feature) => (
                  <span key={feature} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-orange-600">₹{transfer.price}</span>
                  <span className="text-sm text-gray-600">/trip</span>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700">Book Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCarRental = () => (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Car Rental Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Airport</option>
                <option>Hotel</option>
                <option>Event Venue</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {carRentals.map((car) => (
          <Card key={car.id} className="hover:shadow-lg transition-shadow">
            <img
              src={car.image}
              alt={car.model}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">{car.model}</h3>
              <p className="text-gray-600 mb-4">{car.type}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {car.features.map((feature) => (
                  <span key={feature} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-orange-600">₹{car.pricePerDay}</span>
                  <span className="text-sm text-gray-600">/day</span>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700">Book Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderLocalTransport = () => (
    <div className="grid lg:grid-cols-2 gap-6">
      {localTransport.map((transport) => (
        <Card key={transport.id} className="hover:shadow-lg transition-shadow">
          <img
            src={transport.image}
            alt={transport.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{transport.name}</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {transport.route}
              </div>
              {'frequency' in transport && (
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {transport.frequency}
                </div>
              )}
              {'duration' in transport && (
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {transport.duration}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
              {transport.features.map((feature) => (
                <span key={feature} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div>
                {transport.price === 0 ? (
                  <span className="text-2xl font-bold text-green-600">Free</span>
                ) : (
                  <>
                    <span className="text-2xl font-bold text-orange-600">₹{transport.price}</span>
                    <span className="text-sm text-gray-600">/person</span>
                  </>
                )}
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700">
                {transport.price === 0 ? 'Register' : 'Book Now'}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Transportation Services</h1>
            <p className="text-xl text-blue-100">Seamless travel solutions for IMW 2025</p>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setActiveTab('airport')}
                className={`px-6 py-3 flex items-center space-x-2 ${
                  activeTab === 'airport' 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Plane className="w-5 h-5" />
                <span>Airport Transfer</span>
              </button>
              <button
                onClick={() => setActiveTab('rental')}
                className={`px-6 py-3 flex items-center space-x-2 ${
                  activeTab === 'rental' 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Car className="w-5 h-5" />
                <span>Car Rental</span>
              </button>
              <button
                onClick={() => setActiveTab('local')}
                className={`px-6 py-3 flex items-center space-x-2 ${
                  activeTab === 'local' 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Bus className="w-5 h-5" />
                <span>Local Transport</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'airport' && renderAirportTransfer()}
          {activeTab === 'rental' && renderCarRental()}
          {activeTab === 'local' && renderLocalTransport()}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportationBooking;
