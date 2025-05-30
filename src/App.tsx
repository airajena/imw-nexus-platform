import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HotelBooking from "./pages/HotelBooking";
import EventVenueBooking from "./pages/EventVenueBooking";
import TransportationBooking from "./pages/TransportationBooking";
import UserDashboard from "./pages/UserDashboard";
import BookingConfirmation from "./pages/BookingConfirmation";
import About from "./pages/About";
import Program from "./pages/Program";
import Speakers from "./pages/Speakers";
import Exhibition from "./pages/Exhibition";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/venue-booking" element={<EventVenueBooking />} />
          <Route path="/transportation" element={<TransportationBooking />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
