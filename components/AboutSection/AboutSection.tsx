import React from "react";
// import Link from "next/link";
import Button from "../Button/Button";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-6 md:px-[8rem] py-10 md:py-20 text-center">
      <div className="flex justify-center gap-2">
        <h2 className="text-2xl md:text-4xl font-bold useclass">About</h2>
        <h3 className="text-2xl md:text-4xl font-bold text-white">Us</h3>
      </div>
      <p className="text-sm md:text-base text-gray-400 mt-4 px-4 md:px-40">
      We are a team of seasoned creators who upgrade your business processes with modern technology and advancements. And well, these numbers speak volumes about what we have achieved on our journey so far.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-10 h-72 px-20">
        <div className="max-h-[290px] md:w-1/2  overflow-hidden rounded-xl relative">
          
          <video className="object-cover opacity-50"
            muted
            autoPlay
            loop
            src="/myvideo.mp4"
          >

          </video>
        </div>
        <div className="w-full md:w-1/2 text-left items-center mt-20">
          <p className="text-sm md:text-sm text-gray-400">
          We believe in surpassing expectations and satisfying our clientele to form lasting alliances. What makes this target attainable is thinking out of the box and gladly, our personnel does just that! We fuse creativity with technical expertise to foster impactful results and never fail to surprise our clients with it!
          </p>
        <div className="mt-4">
        <Button text="Contact us"/>
        </div>
          </div>
        
      </div>
      
    </div>
  );
};

export default AboutSection;
