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
      "Zexal is an innovative transportation app designed to revolutionize your travel experience. Featuring a sleek design and user-friendly interface, Zexal allows users to easily book rides, track drivers in real-time, and enjoy reliable, comfortable journeys. Whether you need a quick commute across town or a longer journey, Zexal offers an all-in-one solution for seamless and efficient travel.",
  },
  {
    image: "/Pendume.png",
    title: "Pendume",
    description:
      "Pendume is a versatile transportation app designed to fulfill all your travel and logistics needs. Offering reliable car rides to convenient towing and moving services, Pendume ensures an efficient experience.",
  },
  {
    image: "/linco.png",
    title: "Linco",
    description:
      "Shop Linco is your go-to online destination for high-quality casters, wheels, hand trucks, and dollies. Specializing in mobility solutions, Linco ensures seamless operations and enhanced productivity.",
  },
  {
    image: "/tripsphere.png",
    title: "TripSphere",
    description:
      "TripSphere is a travel recommendation app simplifying trip planning with personalized suggestions and an integrated map for discovering new destinations.",
  },
];

const CaseStudyCarousel = () => {
  return (
    <section className="container mx-auto py-10 px-4 md:px-20">
      
  
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={20}
        slidesPerView={1}
      >
        {caseStudies.map((study, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col md:flex-row gap-4 items-center md:items-start"
          >
            <div className="flex">
            <div className="w-full md:w-1/2">
              <Image
                src={study.image}
                alt={study.title}
                width={450}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 bg-zinc-900 p-6 rounded-lg text-white shadow-md">
              <h3 className=" text-2xl font-bold">{study.title}</h3>
              <p className="text-gray-400 mt-4">{study.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 mt-6 px-6 py-3 text-white rounded-lg">
                View Case Study
              </button>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CaseStudyCarousel;
