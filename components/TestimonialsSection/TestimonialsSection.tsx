import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/swiper-bundle.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      image: "/Ryan_RyanFlaherty.webp",
      text: "ConceptRecall did a great job custom coding the website we needed.",
      name: "Ryan Flaherty",
      rating: "4.7",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="bg-black text-white py-10">
      <Swiper spaceBetween={10} slidesPerView={3} loop autoplay={{ delay: 2000 }}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Image src={testimonial.image} alt={testimonial.name} width={100} height={100} className="rounded-full" />
              <p className="mt-4">{testimonial.text}</p>
              <h4 className="font-bold mt-2">{testimonial.name}</h4>
              <p className="mt-1">Rating: {testimonial.rating}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
