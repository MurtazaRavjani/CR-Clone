import React from "react";

const HeroSection = () => {
  return (
    <div
    className="max-h-[100vh] bg-cover bg-center px-6 md:px-[15rem] py-20 md:py-52"
    style={{ backgroundImage: "url('/homeBg.webp')" }}
  >
    <div className="text-center">
      <h1 className="text-white text-3xl md:text-6xl font-bold">
        Revolutionizing Marketing for
      </h1>
      <span className="text-white text-3xl md:text-6xl font-bold useclass">
        Digital Advancement
      </span>
      <p className="mt-4 md:mt-9 text-gray-400 text-base md:text-lg px-4">
        ConceptRecall takes pride in helping our clients achieve massive success, increase revenue, and take their businesses to new heights.
      </p>
    </div>
  </div>
  
  );
};

export default HeroSection;
