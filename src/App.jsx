import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedSection from './components/TrustedSection';
import Step from './components/Step';
import Footer from './components/Footer';
import TestimonialSection from './components/TestimonialSection';
import SecuritySection from './components/SecuritySection';
import Platform from './components/Platfrom';
import Collaborative from './components/Collaborative';


function App() {
  return (
    <div className="bg-white ">
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <Step />
      <Platform />
      <Collaborative />
      <SecuritySection />
      <TestimonialSection />
      <Footer />
      


      
     </div>
   
  );
}

export default App;