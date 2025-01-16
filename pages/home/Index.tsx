"use client";
import "swiper/css";
import "swiper/css/pagination";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import AdditionalGrid from "../../components/AdditionalGrid/AdditionalGrid";
import AboutSection from "../../components/AboutSection/AboutSection";
import IndustriesSection from "../../components/IndustriesSection/IndustriesSection";
import CaseStudyCarousel from "../../components/CaseStudyCarousel/CaseStudyCarousel";
import SliderSection from "../../components/SliderSection/SliderSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import NewsletterSection from "../../components/NewsletterSection/NewsletterSection";
import ContactForm from "../../components/ContactForm/ContactForm";


const index = () => {
  return (
    <main>
      <HeroSection
        title="Revolutionizing Marketing for"
        title1="Digital Advancement"
        paragraph="ConceptRecall takes pride in helping our clients achieve massive
          success, increase revenue, and take their businesses to new heights.
          Our strategies to catapult your business are simple yet powerful. We
          enjoy a distinguished reputation as a customer-oriented marketing
          agency, boasting 95.5% happy clients."
      />
      <ServicesSection />
      <AdditionalGrid />
      <AboutSection />
      <IndustriesSection />
      <CaseStudyCarousel />
      <SliderSection />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactForm />
      
    </main>
  );
};

export default index;
