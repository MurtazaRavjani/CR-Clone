import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const CaseStudyCarousel: React.FC = () => {
  const caseStudies = [
    {
      image: "/Zexal.png",
      title: "Zexal",
      description:
        "Zexal is an innovative transportation app designed to revolutionize your travel experience.",
    },
    {
      image: "/Pendume.png",
      title: "Pendume",
      description:
        "Pendume is a versatile transportation app designed to fulfill all your travel and logistics needs.",
    },
    {
      image: "/Linco.png",
      title: "Linco",
      description:
        "Shop Linco is your go-to online destination for high-quality casters, wheels, hand trucks, and dollies.",
    },
    {
      image: "/tripsphere.png",
      title: "TripSphere",
      description:
        "TripSphere is a travel recommendation app that simplifies trip planning by offering personalized suggestions.",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      spaceBetween={50}
      slidesPerView={1}
      className="case-study-carousel"
    >
      {caseStudies.map((study, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center gap-10">
            <Image src={study.image} alt={study.title} width={500} height={300} className="rounded-lg" />
            <div className="bg-zinc-900 text-white p-6 rounded-lg">
              <h3 className="text-3xl font-bold">{study.title}</h3>
              <p className="mt-4">{study.description}</p>
              <button className="bg-orange-500 mt-6 px-4 py-3 text-white rounded-lg">
                View Case Study
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseStudyCarousel;
