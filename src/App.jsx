/* import './App.css'
import AboutSection from './components/AboutSection'
import BookingFlowClone from './components/BookingFlowClone'
import ContactSectionClone from './components/ContactSectionClone'
import FooterClone from './components/FooterClone'
import GallerySectionClone from './components/GallerySectionClone'
import HeaderNavbar from './components/HeaderNavbar'
import HeroSection from './components/HeroSection'
import LocationSectionClone from './components/LocationSectionClone'
import PremiumOffersSection from './components/PremiumOffersSection'
import ProfessionalBookingFlow from './components/ProfessionalBookingFlow'
import RideTypeSection from './components/RideTypeSection'
import SafetySectionClone from './components/SafetySectionClone'
import TestimonialsClone from './components/TestimonialsClone'


function App() {
  

  return (
    <>
      <HeaderNavbar />
      <HeroSection />
      <AboutSection />
      <RideTypeSection />
      <BookingFlowClone />
      <ProfessionalBookingFlow />
      <PremiumOffersSection />
      <SafetySectionClone />
      <TestimonialsClone />
      <GallerySectionClone />
      <LocationSectionClone />
      <ContactSectionClone />
      <FooterClone />
    </>
  )
}

export default App */



import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import HeaderNavbar from "./components/HeaderNavbar";
import FooterClone from "./components/FooterClone";
import Rides from "./pages/Rides";
import Booking from "./pages/Booking";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <HeaderNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FooterClone />
    </>
  );
}

export default App;

