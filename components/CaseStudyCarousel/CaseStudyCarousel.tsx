"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../Button/Button";

interface CaseStudy {
  image: string;
  title: string;
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    image: "/Zexal.png",
    title: "Zexal",
    description:
      "Zexal is an innovative transportation app designed to revolutionize your travel experience. Featuring a sleek design and user-friendly interface, Zexal allows users to easily book rides, track drivers in real-time, and enjoy reliable, comfortable journeys. Whether you need a quick commute across town or a longer journey, Zexal offers an all-in-one solution for seamless and efficient travel. The app's intuitive platform ensures a hassle-free experience, making it the perfect choice for busy professionals and travelers alike.",
  },
  {
    image: "/Pendume.png",
    title: "Pendume",
    description:
      "Pendume is a versatile transportation app designed to fulfill all your travel and logistics needs, acting as your go-to agency for seamless mobility solutions. Offering everything from reliable and comfortable car rides to convenient towing and moving services, Pendume ensures an efficient experience. Whether you need a quick ride across town, assistance with a vehicle breakdown, or help with relocating items, Pendume supports your journey with expert development in transportation technology. With user-friendly features and real-time tracking, Pendume is your all-in-one solution for hassle-free transportation and logistics, making every journey smooth and stress-free.",
  },
  {
    image: "/linco.png",
    title: "Linco",
    description:
      "Shop Linco is your go-to online destination for high-quality casters, wheels, hand trucks, and dollies. Specializing in mobility solutions, we serve a variety of industries, including furniture, office, home, healthcare, and restaurant sectors. Our extensive product range features durable and versatile casters and wheels designed for optimal performance, along with efficient hand trucks and dollies for hassle-free transportation of heavy items. With a focus on customer satisfaction, Shop Linco not only delivers top-notch products but also provides expert guidance to help you choose the perfect solutions for your needs. Experience seamless operations and enhanced productivity with our reliable products tailored for every setting. Shop now for unbeatable quality and service!",
  },
  {
    image: "/tripsphere.png",
    title: "TripSphere",
    description:
      "TripSphere is a travel recommendation app that simplifies trip planning by offering personalized suggestions from friends and peers. It features a peer-to-peer sharing system for exchanging tips and favorite destinations, all viewable on an integrated map. With options for private or public profiles, users can easily tag locations and discover new spots. TripSphere enhances user experiences with improved map search and sharing capabilities, fostering community engagement and making every journey memorable.",
  },
];

const CaseStudyCarousel: React.FC = () => {
  return (
    <section className="container mx-auto py-10 md:px-32 relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={20}
        slidesPerView={1}
      >
        {caseStudies.map((study, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col md:flex-row gap-6 items-center md:items-start px-10 md:px-28 mt-20"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[450px]">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={450}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="w-full md:w-1/2 bg-zinc-900 p-6 rounded-lg text-white shadow-md">
                <h3 className="text-2xl font-bold">{study.title}</h3>
                <p className="text-gray-400 mt-4">{study.description}</p>
                <div className="mt-6 px-6 py-3">
                <Button text="View Case Study"/>
               </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute right-64 top-24 bg-orange-500 p-4 z-20 shadow-md rounded hover:bg-gray-400 transition">
        <span>&lt;</span>
      </button>
      <button className="custom-next absolute right-52 top-24 bg-orange-500 p-4 z-20 shadow-md rounded hover:bg-gray-400 transition">
        <span>&gt;</span>
      </button>
    </section>
  );
};

export default CaseStudyCarousel;
