import React from "react";

interface Home {
  title: string;
  title1: string;
  paragraph: string;
}

const HeroSection = ({ title, title1, paragraph }: Home) => {
  return (
    <div
      className="min-h-[90vh] bg-cover bg-center px-6 md:px-[20rem] py-20 md:py-52"
      style={{ backgroundImage: "url('/homeBg.webp')" }}
    >
      <div className="text-center p">

        <h1 className="text-white text-3xl md:text-6xl font-bold">
          {title}
        </h1>
        <span className="text-white text-3xl md:text-6xl font-bold useclass">
          {title1}
        </span>
        <p className="mt-4 md:mt-9 text-gray-400 text-base md:text-lg px-4">
     {paragraph}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
