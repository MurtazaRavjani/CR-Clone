"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    image: "/Ryan_RyanFlaherty.webp",
    text: "ConceptRecall did a great job custom coding the website we needed, they followed our instructions and got the project completed successfully. ConceptRecall is recommended by us for custom WordPress and coding projects.",
    name: "Ryan Flaherty",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star47.svg"],
    rating: "4.7 Rating",
  },
  {
    image: "/CollinDreher.webp",
    text: "Consistent work. Very knowledgeable agency. Highly recommended!",
    name: "Collin Dreher",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star47.svg"],
    rating: "4.7 Rating",
  },
  {
    image: "/DaleShadbegian.webp",
    text: "Great programmers and great communication. Highly recommended.",
    name: "Dale Shadbegian",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star46.svg"],
    rating: "4.6 Rating",
  },
  {
    image: "/MarkMatatov.webp",
    text: "Concept Recall's team did a great job developing a custom web app for me.",
    name: "Mark Matatov",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star48.svg"],
    rating: "4.8 Rating",
  },
  {
    image: "/RayCoklan.webp",
    text: "ConceptRecall is on top of their tasks always and hungry to work. A great resource and highly recommended team.",
    name: "Ray Coklan",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star45.svg"],
    rating: "4.5 Rating",
  },
  {
    image: "/MattMorgan.webp",
    text: "Design and communication were great with the CR team. They were able to accomplish every ask without too much guidance. Will definitely work with again!",
    name: "Matt Morgan",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star49.svg"],
    rating: "4.9 Rating",
  },
  {
    image: "/Shayan-Samani.webp",
    text: "I worked with ConceptRecall for over a year on several projects! They have very talented developers who helped me build many WordPress websites from scratch according to design specifications! I'd recommend working with them!",
    name: "Shayan Samani",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star46.svg"],
    rating: "4.6 Rating",
  },
  {
    image: "/BrettForeman.webp",
    text: "It was a pleasure collaborating with ConceptRecall for a few projects. Their team is thorough and communicates well. Thanks again for your help with Shopify development & design tasks.",
    name: "Brett Foreman",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star49.svg"],
    rating: "4.9 Rating",
  },
  {
    image: "/CalebHutchinson.webp",
    text: "ConceptRecall did a great job. They were highly responsive and communicative. ConceptRecall also made the landing pages exactly to the UX designer's specs.",
    name: "Club Hutchinson",
    pics: ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star45.svg"],
    rating: "4.5 Rating",
  },
  
];

const TestimonialsSection = () => {
  return (
    <div className="bg-zinc-950 py-10">
      <div className="container mx-auto text-center px-4">
        <div className="flex justify-center gap-2 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our</h2>
          <h3 className="text-3xl md:text-4xl font-bold useclass">Testimonials</h3>
        </div>
        <p className="text-gray-400 mt-4">
          Having a satisfied client that appreciates our work is a milestone in itself. Our clients are our evangelists and they love to write their journey and success stories with us.
        </p>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className="bg-black text-white p-10 rounded-lg max-w-md mx-auto shadow-md border">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="text-left mt-4 text-gray-400">{testimonial.text}</p>
                <h4 className="text-left mt-2 font-bold">{testimonial.name}</h4>
                <p className="text-left mt-1">{testimonial.rating}</p>
                <div className="flex text-left mt-2">
                  {testimonial.pics.map((pic, idx) => (
                    <Image
                      key={idx}
                      src={pic}
                      alt={`star-${idx}`}
                      width={20}
                      height={20}
                      className=""
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
