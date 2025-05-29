
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, MapPin, Clock, Users, Star, Download, 
  Edit, Trash2, Plus, Hotel, Car, Plane, Building 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const bookings = {
    hotels: [
      {
        id: 1,
        name: "The Grand Delhi",
        checkIn: "2025-02-09",
        checkOut: "2025-02-13",
        rooms: 1,
        guests: 2,
        amount: 34000,
        status: "Confirmed",
        bookingRef: "HTL001234"
      }
    ],
    venues: [
      {
        id: 1,
        name: "Executive Conference Hall A",
        date: "2025-02-11",
        time: "14:00 - 16:00",
        attendees: 50,
        amount: 5000,
        status: "Confirmed",
        bookingRef: "VEN001234"
      }
    ],
    transport: [
      {
        id: 1,
        type: "Airport Transfer",
        service: "Premium Sedan",
        date: "2025-02-09",
        time: "10:00",
        passengers: 2,
        amount: 1200,
        status: "Confirmed",
        bookingRef: "TRN001234"
      }
    ]
  };

  const upcomingEvents = [
    {
      title: "Registration Desk Opens",
      date: "2025-02-10",
      time: "08:00",
      location: "Main Entrance"
    },
    {
      title: "Opening Ceremony",
      date: "2025-02-10",
      time: "10:00",
      location: "Main Auditorium"
    },
    {
      title: "Manufacturing Innovation Summit",
      date: "2025-02-11",
      time: "14:00",
      location: "Conference Hall A"
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Hotel className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold text-gray-900">{bookings.hotels.length}</div>
            <div className="text-sm text-gray-600">Hotel Bookings</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Building className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold text-gray-900">{bookings.venues.length}</div>
            <div className="text-sm text-gray-600">Venue Bookings</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Car className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <div className="text-2xl font-bold text-gray-900">{bookings.transport.length}</div>
            <div className="text-sm text-gray-600">Transport Bookings</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold text-gray-900">{upcomingEvents.length}</div>
            <div className="text-sm text-gray-600">Upcoming Events</div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date} at {event.time}
                    <MapPin className="w-4 h-4 ml-4 mr-1" />
                    {event.location}
                  </div>
                </div>
                <Button variant="outline" size="sm">Add to Calendar</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBookings = (type: 'hotels' | 'venues' | 'transport') => {
    const data = bookings[type];
    const icons = {
      hotels: Hotel,
      venues: Building,
      transport: Car
    };
    const Icon = icons[type];

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 capitalize">{type} Bookings</h2>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="w-4 h-4 mr-2" />
            New Booking
          </Button>
        </div>

        {data.map((booking: any) => (
          <Card key={booking.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Icon className="w-6 h-6 mr-3 text-orange-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{booking.name || booking.service}</h3>
                    <p className="text-sm text-gray-600">Booking Ref: {booking.bookingRef}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {type === 'hotels' && (
                  <>
                    <div>
                      <span className="text-sm text-gray-600">Check-in</span>
                      <div className="font-medium">{booking.checkIn}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Check-out</span>
                      <div className="font-medium">{booking.checkOut}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Guests</span>
                      <div className="font-medium">{booking.guests} guests, {booking.rooms} room(s)</div>
                    </div>
                  </>
                )}

                {type === 'venues' && (
                  <>
                    <div>
                      <span className="text-sm text-gray-600">Date</span>
                      <div className="font-medium">{booking.date}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Time</span>
                      <div className="font-medium">{booking.time}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Attendees</span>
                      <div className="font-medium">{booking.attendees} people</div>
                    </div>
                  </>
                )}

                {type === 'transport' && (
                  <>
                    <div>
                      <span className="text-sm text-gray-600">Service</span>
                      <div className="font-medium">{booking.type}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Date & Time</span>
                      <div className="font-medium">{booking.date} at {booking.time}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Passengers</span>
                      <div className="font-medium">{booking.passengers} people</div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-orange-600">
                  Total: ₹{booking.amount.toLocaleString()}
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Modify
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Dashboard</h1>
            <p className="text-xl text-blue-100">Manage your IMW 2025 bookings and schedule</p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'hotels', label: 'Hotels' },
              { id: 'venues', label: 'Venues' },
              { id: 'transport', label: 'Transport' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'hotels' && renderBookings('hotels')}
          {activeTab === 'venues' && renderBookings('venues')}
          {activeTab === 'transport' && renderBookings('transport')}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserDashboard;
