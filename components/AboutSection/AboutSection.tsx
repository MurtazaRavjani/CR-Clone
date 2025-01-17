import React from "react";
import Heading from "../Heading/Heading"; // Import the Heading component
import Button from "../Button/Button";

interface AboutProps {
  tittle: string;
  tittle1: string;
  text: string;
}

const AboutSection: React.FC<AboutProps> = ({ tittle, tittle1, text }) => {
  return (
    <div className="container mx-auto px-6 md:px-[8rem] py-10 md:py-20 text-center">
      {/* Using Heading Component with reverseOrder set to true */}
      <Heading
        tittle={tittle}
        tittle1={tittle1}
        text={text}
        reverseOrder={true}  // Only reverse order for AboutSection
      />
      
      <div className="flex flex-col md:flex-row gap-6 mt-10 h-72 px-20">
        <div className="max-h-[290px] md:w-1/2 overflow-hidden rounded-xl relative">
          <video
            className="object-cover opacity-50"
            muted
            autoPlay
            loop
            src="/myvideo.mp4"
          />
        </div>
        <div className="w-full md:w-1/2 text-left items-center mt-20">
          <p className="text-sm md:text-sm text-gray-400">
            We believe in surpassing expectations and satisfying our clients to form lasting alliances. What makes this target attainable is thinking out of the box and gladly, our personnel does just that! We fuse creativity with technical expertise to foster impactful results and never fail to surprise our clients with it!
          </p>
          <div className="mt-4">
            <Button text="Contact us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
