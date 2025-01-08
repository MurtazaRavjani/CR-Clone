"use client";
import "swiper/css";
import "swiper/css/pagination";
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import AdditionalGrid from '../components/AdditionalGrid/AdditionalGrid';
import AboutSection from '../components/AboutSection/AboutSection';
import IndustriesSection from '../components/IndustriesSection/IndustriesSection';
import CaseStudyCarousel from '../components/CaseStudyCarousel/CaseStudyCarousel';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <main>
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
      <Footer />
    </div>
    </main>
  );
};

export default HomePage;

