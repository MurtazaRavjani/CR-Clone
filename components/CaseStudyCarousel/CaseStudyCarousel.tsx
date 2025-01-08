"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const caseStudies = [
  {
    image: "/Zexal.png",
    title: "Zexal",
    description:
      "Zexal is an innovative transportation app designed to revolutionize your travel experience. Featuring a sleek design and user-friendly interface, Zexal allows users to easily book rides, track drivers in real-time, and enjoy reliable, comfortable journeys. Whether you need a quick commute across town or a longer journey, Zexal offers an all-in-one solution for seamless and efficient travel. The app’s intuitive platform ensures a hassle-free experience, making it the perfect choice for busy professionals and travelers alike.",
  },
  {
    image: "/Pendume.png",
    title: "Pendume",
    description:
      "Pendume is a versatile transportation app designed to fulfill all your travel and logistics needs, acting as your go-to agency for seamless mobility solutions. Offering everything from reliable and comfortable car rides to convenient towing and moving services, Pendume ensures an efficient experience. Whether you need a quick ride across town, assistance with a vehicle breakdown, or help with relocating items, Pendume supports your journey with expert development in transportation technology.",
  },
];

const CaseStudyCarousel = () => {
  return (
    <section className="container mx-auto py-10 px-4 md:px-20">
      <Swiper
        className="case-study-carousel"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={10}
        slidesPerView={1}
      >
        {caseStudies.map((study, index) => (
          <SwiperSlide key={index} className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              src={study.image}
              alt={study.title}
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
            <div className="bg-zinc-900 p-6 rounded-lg text-white max-w-lg shadow-md">
              <h3 className="text-2xl font-bold">{study.title}</h3>
              <p className="text-gray-400 mt-4">{study.description}</p>
              <button className="bg-orange-500 mt-6 px-6 py-3 text-white rounded-lg">
                View Case Study
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CaseStudyCarousel;
