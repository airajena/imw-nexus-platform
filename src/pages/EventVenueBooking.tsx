
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, MapPin, Mic, Camera, Coffee, Monitor } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventVenueBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [attendees, setAttendees] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);

  const venues = [
    {
      id: 1,
      name: "Executive Conference Hall A",
      capacity: 150,
      area: "200 sqm",
      hourlyRate: 2500,
      features: ["Projector", "Sound System", "AC", "Wi-Fi", "Catering Available"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      description: "Premium conference hall with state-of-the-art facilities"
    },
    {
      id: 2,
      name: "Business Meeting Room B",
      capacity: 50,
      area: "80 sqm",
      hourlyRate: 1500,
      features: ["Smart TV", "Video Conferencing", "AC", "Wi-Fi", "Whiteboard"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      description: "Ideal for business meetings and small conferences"
    },
    {
      id: 3,
      name: "Networking Lounge C",
      capacity: 100,
      area: "150 sqm",
      hourlyRate: 2000,
      features: ["Lounge Seating", "Bar Setup", "AC", "Wi-Fi", "Background Music"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
      description: "Perfect for networking events and informal meetings"
    }
  ];

  const additionalServices = [
    { name: "Professional Catering", price: 500, unit: "per person" },
    { name: "Audio/Video Recording", price: 5000, unit: "per session" },
    { name: "Live Streaming Setup", price: 8000, unit: "per event" },
    { name: "Photography Service", price: 3000, unit: "per hour" },
    { name: "Technical Support", price: 1000, unit: "per hour" }
  ];

  const timeSlots = [
    "09:00 - 11:00", "11:00 - 13:00", "13:00 - 15:00", 
    "15:00 - 17:00", "17:00 - 19:00", "19:00 - 21:00"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Event Venue Booking</h1>
            <p className="text-xl text-blue-100">Reserve premium meeting spaces for IMW 2025</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Attendees</label>
                  <Input
                    type="number"
                    min="1"
                    value={attendees}
                    onChange={(e) => setAttendees(parseInt(e.target.value))}
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Check Availability
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Venue Options */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {venues.map((venue) => (
              <Card 
                key={venue.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedVenue === venue.id ? 'ring-2 ring-orange-500' : ''
                }`}
                onClick={() => setSelectedVenue(venue.id)}
              >
                <div className="relative">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {selectedVenue === venue.id && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Selected
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h3>
                  <p className="text-gray-600 mb-4">{venue.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      Capacity: {venue.capacity} people
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Area: {venue.area}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {venue.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-bold text-orange-600">₹{venue.hourlyRate}</span>
                    <span className="text-sm text-gray-600">/hour</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          {selectedVenue && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Additional Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {additionalServices.map((service) => (
                    <label key={service.name} className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                      <input type="checkbox" className="mr-3" />
                      <div className="flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-600">₹{service.price} {service.unit}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Booking Summary */}
          {selectedVenue && (
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Venue:</span>
                    <span className="font-semibold">
                      {venues.find(v => v.id === selectedVenue)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span className="font-semibold">{selectedDate} | {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Cost:</span>
                    <span className="font-semibold">
                      ₹{venues.find(v => v.id === selectedVenue)?.hourlyRate! * 2}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-orange-600">
                      ₹{venues.find(v => v.id === selectedVenue)?.hourlyRate! * 2}
                    </span>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 mt-4">
                    Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventVenueBooking;
