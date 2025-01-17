"use client";
import React from "react";
import Button from "@/components/Button/Button"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


interface CaseStudySliderProps {
  projects: {
    id: number;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }[];
}

const CaseStudySlider: React.FC<CaseStudySliderProps> = ({ projects }) => {
  return (
    <div className="container m-auto my-">
      <div className="py-20 px-[10%]">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={600}
          loop={true}
          pagination={false}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="lg:container flex flex-col-reverse justify-center lg:flex-row gap-6">
                <div className="flex justify-center lg:w-1/2">
                  <Image
                    src={item.imageSrc}
                    width={500}
                    height={500}
                    alt={item.imageAlt}
                    className="rounded-lg"
                  />
                </div>
                <div className="bg-zinc-900 rounded-2xl text-white py-10 px-6 shadow-lg lg:w-1/2">
                  <div className="text-lg md:text-3xl font-bold">{item.title}</div>
                  <p className="text-xs md:text-lg my-6 line-clamp-5 md:line-clamp-[8]">
                    {item.description}
                  </p>
                  <Button text="View Case Study" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CaseStudySlider;
