"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import '../styles/globals.css'; // Ensure this includes Tailwind or custom global styles
import 'swiper/css'; // Swiper styles for all components
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const testimonials = [
  {
    image: "/Ryan_RyanFlaherty.webp",
    text:
      "ConceptRecall did a great job custom coding the website we needed, they followed our instructions and got the project completed successfully. ConceptRecall is recommended by us for custom WordPress and coding projects.",
    name: "Ryan Flaherty",
    rating: "4.7",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-zinc-950 py-10">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Testimonials</h2>
        <p className="text-gray-400 mt-4">
          Having a satisfied client that appreciates our work is a milestone in itself. Our clients are our evangelists and they love to write their journey and success stories with us.
        </p>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2000 }}
          className="mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className="bg-black text-white p-6 rounded-lg max-w-md mx-auto shadow-md">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                />
                <p className="mt-4 text-gray-400">{testimonial.text}</p>
                <h4 className="mt-2 font-bold">{testimonial.name}</h4>
                <p className="text-orange-500 mt-1">{testimonial.rating} Rating</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
