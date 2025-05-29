
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Calendar, MapPin, Clock, Users, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BookingConfirmation = () => {
  const bookingDetails = {
    type: "Hotel Booking",
    bookingRef: "IMW-HTL-001234",
    name: "The Grand Delhi",
    checkIn: "February 9, 2025",
    checkOut: "February 13, 2025",
    guests: 2,
    rooms: 1,
    amount: 34000,
    paymentMethod: "Credit Card ending in 4567",
    email: "john.doe@example.com"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Confirmation Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
            <p className="text-lg text-gray-600">
              Your booking has been successfully confirmed. You will receive a confirmation email shortly.
            </p>
          </div>

          {/* Booking Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Booking Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Booking Reference</h3>
                    <p className="text-gray-600">{bookingDetails.bookingRef}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hotel Name</h3>
                    <p className="text-gray-600">{bookingDetails.name}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Check-in Date</h3>
                    <p className="text-gray-600">{bookingDetails.checkIn}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Check-out Date</h3>
                    <p className="text-gray-600">{bookingDetails.checkOut}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Guests</h3>
                    <p className="text-gray-600">{bookingDetails.guests} guests</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Rooms</h3>
                    <p className="text-gray-600">{bookingDetails.rooms} room</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Total Amount</h3>
                    <p className="text-2xl font-bold text-orange-600">₹{bookingDetails.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Payment Method</h3>
                    <p className="text-gray-600">{bookingDetails.paymentMethod}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-orange-600">Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Please carry a valid photo ID for check-in</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Check-in time is 2:00 PM and check-out time is 12:00 PM</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Cancellation policy: Free cancellation up to 24 hours before check-in</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Breakfast is included in your booking</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Download className="w-4 h-4 mr-2" />
              Download Confirmation
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Add to Calendar
            </Button>
            <Link to="/dashboard">
              <Button variant="outline" className="w-full sm:w-auto">
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Support Information */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about your booking, please contact our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <span className="mr-2">📞</span>
                Call Support: +91-11-1234-5678
              </Button>
              <Button variant="outline">
                <span className="mr-2">✉️</span>
                Email: support@imw.org.in
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingConfirmation;
