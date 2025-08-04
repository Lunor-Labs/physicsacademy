import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TestRankings from '../components/TestRankings';
import Testimonials from '../components/Testimonials';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TestRankings />
      <Testimonials />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default LandingPage;