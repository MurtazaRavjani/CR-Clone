"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SliderSection: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-10">
      <Swiper
        slidesPerView={5} // Show 5 slides at a time
        spaceBetween={10} // Adjust space between slides
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 0, // Continuous autoplay with no pause
          disableOnInteraction: false, // Keep autoplay even after user interaction
        }}
        speed={1000} // Adjust transition speed to 800ms for a smoother transition
        freeMode={true} // Allow free scrolling without snapping to slides
        modules={[Autoplay]} // Enable Autoplay module
        
      >
        <SwiperSlide>
          <div>
            <Image
              width={200}
              height={100}
              src="/client1.webp"
              alt="Client 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={200}
              height={100}
              src="/client2.webp"
              alt="Client 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={200}
              height={100}
              src="/client3.webp"
              alt="Client 3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={200}
              height={100}
              src="/client4.webp"
              alt="Client 4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={200}
              height={100}
              src="/client5.webp"
              alt="Client 5"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={200}
              height={100}
              src="/client6.webp"
              alt="Client 6"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SliderSection;
