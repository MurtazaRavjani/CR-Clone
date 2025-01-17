import React from "react";
import Heading from "../Heading/Heading";

interface Home {
  title: string;
  title1: string;
  text: string;
}

const HeroSection = ({ title, title1, text }: Home) => {
  return (
    <div
      className="min-h-[90vh] bg-cover bg-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 md:py-40 lg:py-52"
      style={{ backgroundImage: "url('/homeBg.webp')" }}
    >
      <div className="text-center justify-center items-center flex flex-col">
        {/* Use Heading component, but override font-size, flex, and padding */}
        <Heading/>

        {/* Override the styling of the Heading component directly */}
        <h1 className=" text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <h2 className=" text-5xl md:text-6xl font-semibold mb-4 useclass">
          {title1}
        </h2>
        <p className="text-lg md:text-lg px-6 md:px-24">{text}</p>
      </div>
    </div>
  );
};

export default HeroSection;
