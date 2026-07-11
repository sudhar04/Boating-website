import React from "react";

import AboutSection from '../components/AboutSection'
import BookingFlowClone from '../components/BookingFlowClone'


import GallerySectionClone from '../components/GallerySectionClone'

import HeroSection from '../components/HeroSection'

import PremiumOffersSection from '../components/PremiumOffersSection'
import ProfessionalBookingFlow from '../components/ProfessionalBookingFlow'
import RideTypeSection from '../components/RideTypeSection'
import SafetySectionClone from '../components/SafetySectionClone'
import TestimonialsClone from '../components/TestimonialsClone'

export default function Home() {
  return (
    <>
    
    <HeroSection />
    <AboutSection />
    <RideTypeSection />
    <BookingFlowClone />
    <ProfessionalBookingFlow />
    <PremiumOffersSection />
    <SafetySectionClone />
    <TestimonialsClone />
    <GallerySectionClone />
    
    </>
  );
}
