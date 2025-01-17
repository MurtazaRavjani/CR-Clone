import React from "react";
import Button from "../Button/Button";
import Card from "../Cards/Cards";
import Heading from "../Heading/Heading";

const services = [
  {
    imageSrc: "/Web (4).png",
    imageAlt: "image",
    title: "Tailored Mobile",
    description:
      "In a digital-first world, our tailored mobile app solutions are your gateway to engaging your audience like never before. We combine cutting-edge technology with user-centric design to create apps that not only look great but also perform flawlessly across iOS and Android.",
  },
  {
    imageSrc: "/Web (3).png",
    imageAlt: "image",
    title: "Customized Web",
    description:
      "Our web app development offerings are designed to provide seamless, robust, and scalable solutions tailored to your unique business needs. We leverage the latest technologies to build web applications that offer engaging user experiences, streamline operations, and more.",
  },
  {
    imageSrc: "/Web (2).png",
    imageAlt: "image",
    title: "E-Commerce",
    description:
      "Transform your online store with our cutting-edge e-commerce development solutions. Our team specializes in creating intuitive and responsive websites that provide a seamless shopping experience on both desktops and mobile devices.",
  },
  {
    imageSrc: "/Web (1).png",
    imageAlt: "image",
    title: "UI/UX",
    description:
      "Our UI/UX design solutions are crafted to provide exceptional user experiences. We focus on creating intuitive interfaces that engage users and enhance their interaction with your app or website.",
  },
];

interface ServicesSectionProps {
  tittle: string;
  tittle1: string;
  text: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  tittle,
  tittle1,
  text,
}) => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="flex justify-center">
        <Heading tittle={tittle} tittle1={tittle1} text={text} />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-48 mt-10">
        {services.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            description={
              <span className="line-clamp-5 lg:line-clamp-[10]">
                {card.description}
              </span>
            }
          />
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
