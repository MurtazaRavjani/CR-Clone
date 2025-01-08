import React from "react";
// import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
<div className="container mx-auto px-6 md:px-[8rem] py-10 md:py-20 text-center bg-zinc-800">
  <div className="text-center">
    <h2 className="text-2xl md:text-4xl font-bold useclass">About</h2>
    <h3 className="text-2xl md:text-4xl font-bold text-white">Us</h3>
  </div>
  <p className="text-sm md:text-lg text-gray-400 mt-4 px-4 md:px-40">
    We are a team of seasoned creators who upgrade your business processes
    with modern technology and advancements.
  </p>
  <div className="flex flex-col md:flex-row gap-6 mt-10">
    <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-xl relative">
      <video
        className="w-full h-full object-cover opacity-50"
        muted
        autoPlay
        loop
        src="/player1.mp4"
      ></video>
    </div>
    <div className="w-full md:w-1/2 text-left">
      <p className="text-sm md:text-lg text-gray-400">
        We believe in surpassing expectations and satisfying our clientele to form lasting alliances.
      </p>
      <Link href="">
        <button className="bg-orange-500 mt-5 px-6 py-3 font-bold text-base text-white rounded-lg hover:bg-useclass transition">
          Contact Us
        </button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default AboutSection;
