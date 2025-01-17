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
import '@fortawesome/fontawesome-free/css/all.min.css';


const Index1 = () => {
  return (
    <main>
      <HeroSection
        title="Revolutionizing Marketing for"
        title1="Digital Advancement"
        text="ConceptRecall takes pride in helping our clients achieve massive
          success, increase revenue, and take their businesses to new heights.
          Our strategies to catapult your business are simple yet powerful. We
          enjoy a distinguished reputation as a customer-oriented marketing
          agency, boasting 95.5% happy clients."
      />
      <ServicesSection
        tittle="Award-winning"
        tittle1="Services we provide"
        text="Our services are tailor-made and we are always striving to surpass your wildest expectations!"
      />
      <AdditionalGrid />
      <AboutSection
        tittle="Us"
        tittle1="About"
        text="We are a team of seasoned creators who upgrade your business processes with modern technology and advancements. And well, these numbers speak volumes about what we have achieved on our journey so far."
      />
      <IndustriesSection
        tittle="Industries We’ve"
        tittle1="Excelled In"
        text="Our services are tailor-made, and we are always striving to surpass
            your wildest expectations!"
      />
      <CaseStudyCarousel />
      <SliderSection />
      <TestimonialsSection
        tittle="Our"
        tittle1="Testimonials"
        text="Having a satisfied client that appreciates our work is a milestone in
         itself. Our clients are our evangelists, and they love to write their
         journey and success stories with us."
      />
      <NewsletterSection
        tittle="Recent"
        tittle1="News Letter"
        text="Uncover industry trends, insights, and innovative ideas. Our blog posts are crafted to keep you informed, inspired, and ahead in your professional journey. Dive in now!"
      />
      <ContactForm
      tittle1="Contact"
      tittle="Us"
      speakTittle="Speak"
      expertTittle="to an Expert"/>
    </main>
  );
};

export default Index1;
