import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
const services = [
  {
    title: "Tailored Mobile",
    description:
      "In a digital-first world, our tailored mobile app solutions are your gateway to engaging your audience like never before. We combine cutting-edge technology with user-centric design to create apps that not only look great but also perform flawlessly across iOS and Android.",
    image: "/Web (4).png",
  },
  {
    title: "Customized Web",
    description:
      "Our web app development offerings are designed to provide seamless, robust, and scalable solutions tailored to your unique business needs. We leverage the latest technologies to build web applications that offer engaging user experiences, streamline operations, and more.",
    image: "/Web (3).png",
  },
  {
    title: "E-Commerce",
    description:
      "Transform your online store with our cutting-edge e-commerce development solutions. Our team specializes in creating intuitive and responsive websites that provide a seamless shopping experience on both desktops and mobile devices.",
    image: "/Web (2).png",
  },
  {
    title: "UI/UX",
    description:
      "Our UI/UX design solutions are crafted to provide exceptional user experiences. We focus on creating intuitive interfaces that engage users and enhance their interaction with your app or website.",
    image: "/Web (1).png",
  },
];

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-10 bg-neutral-900">
      {/* Header Section */}
      
      <div className="justify-center flex gap-2">
        <h1 className="text-4xl font-bold text-white">Award-winning</h1>
        <h2 className="text-4xl font-semibold useclass">
          Services we provide
        </h2>
        </div>
      
        
        <p className="text-gray-400 text-base md:text-lg mt-4 px-6 md:px-40 text-center">
          Our services are tailor-made and we are always striving to surpass your wildest expectations!
        </p>
      

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-48 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 shadow rounded-lg hover:shadow-2xl hover:bg-zinc-700 transition duration-300"
          >
            <Image
              className="mb-4"
              width={40}
              height={45}
              src={service.image}
              alt={service.title}
            />
            <h2 className="text-lg md:text-xl font-semibold text-white">
              {service.title}
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center mt-8">
        <Button text="View all services" />
      </div>
    </div>
  );
};

export default ServicesSection;
