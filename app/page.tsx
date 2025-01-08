// pages/index.tsx
// import { createContext } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import AdditionalGrid from '../components/AdditionalGrid/AdditionalGrid';
import AboutSection from '../components/AboutSection/AboutSection';
import IndustriesSection from '../components/IndustriesSection/IndustriesSection';
import CaseStudyCarousel from '../components/CaseStudyCarousel/CaseStudyCarousel';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection';
import ContactForm from '../components/ContactForm/ContactForm';
// import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AdditionalGrid />
      <AboutSection />
      <IndustriesSection />
      <CaseStudyCarousel />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
