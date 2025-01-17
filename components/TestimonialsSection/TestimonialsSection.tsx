"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import TestimonialCard from "./TestimonialCard"; // Import your TestimonialCard component

interface TestimonialsSectionProps {
  tittle: string;
  tittle1: string;
  text: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  tittle,
  tittle1,
  text,
}) => {
  const testimonials = [
    {
      image: "/Ryan_RyanFlaherty.webp",
      description:
        "ConceptRecall did a great job custom coding the website we needed, they followed our instructions and got the project completed successfully. ConceptRecall is recommended by us for custom WordPress and coding projects.",
      heading: "Ryan Flaherty",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star47.svg",
      rating: "4.7 Rating",
    },
    {
      image: "/CollinDreher.webp",
      description: "Consistent work. Very knowledgeable agency. Highly recommended!",
      heading: "Collin Dreher",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star47.svg",
      rating: "4.7 Rating",
    },
    {
      image: "/DaleShadbegian.webp",
      description: "Great programmers and great communication. Highly recommended.",
      heading: "Dale Shadbegian",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star46.svg",
      rating: "4.6 Rating",
    },
    {
      image: "/MarkMatatov.webp",
      description: "Concept Recall's team did a great job developing a custom web app for me.",
      heading: "Mark Matatov",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star48.svg",
      rating: "4.8 Rating",
    },
    {
      image: "/RayCoklan.webp",
      description:
        "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
      heading: "Ray Coklan",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star45.svg",
      rating: "4.5 Rating",
    },
    {
      image: "/MattMorgan.webp",
      description:
        "Design and communication were great with the CR team. They were able to accomplish every ask without too much guidance. Will definitely work with again!",
      heading: "Matt Morgan",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star49.svg",
      rating: "4.9 Rating",
    },
    {
      image: "/Shayan-Samani.webp",
      description:
        "I worked with ConceptRecall for over a year on several projects! They have very talented developers who helped me build many WordPress websites from scratch according to design specifications! I'd recommend working with them!",
      heading: "Shayan Samani",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star46.svg",
      rating: "4.6 Rating",
    },
    {
      image: "/BrettForeman.webp",
      description:
        "It was a pleasure collaborating with ConceptRecall for a few projects. Their team is thorough and communicates well. Thanks again for your help with Shopify development & design tasks.",
      heading: "Brett Foreman",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star49.svg",
      rating: "4.9 Rating",
    },
    {
      image: "/CalebHutchinson.webp",
      description:
        "ConceptRecall did a great job. They were highly responsive and communicative. ConceptRecall also made the landing pages exactly to the UX designer's specs.",
      heading: "Caleb Hutchinson",
      svgIcon: "/star.svg",
      svgIcon2: "/star.svg",
      svgIcon3: "/star.svg",
      svgIcon4: "/star.svg",
      svgIcon5: "/star45.svg",
      rating: "4.5 Rating",
    },
  ];

  return (
    <div className="bg-neutral-950 py-16">
      <div className="container mx-auto px-4">
        {/* Heading Component */}
        <div className="text-center mb-8">
          <Heading tittle={tittle} tittle1={tittle1} text={text} reverseOrder={false} />
        </div>

        {/* Swiper Section */}
        <div className="px-10 md:px-48">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides
            navigation
            className="mt-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  imageSrc={testimonial.image}
                  imageAlt={testimonial.heading}
                  description={testimonial.description}
                  heading={testimonial.heading}
                  svgIcon={testimonial.svgIcon}
                  svgIcon2={testimonial.svgIcon2}
                  svgIcon3={testimonial.svgIcon3}
                  svgIcon4={testimonial.svgIcon4}
                  svgIcon5={testimonial.svgIcon5}
                  rating={testimonial.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
