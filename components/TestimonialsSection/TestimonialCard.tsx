import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  heading: string;
  svgIcon: string;
  svgIcon2: string;
  svgIcon3: string;
  svgIcon4: string;
  svgIcon5: string;
  rating: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  imageAlt,
  description,
  heading,
  svgIcon,
  svgIcon2,
  svgIcon3,
  svgIcon4,
  svgIcon5,
  rating
}) => {
  return (
    <div className="">
      <div className="">
        <div className="text-white border-[0.5px] mt-10 px-5">
          <Image
            className="flex my-6 rounded-full object-cover"
            src={imageSrc}
            alt={imageAlt}
            width={100}
            height={100}
          />
          <p className="overflow-hidden text-ellipsis line-clamp-6 text-stone-400">
            {description}
          </p>
          <h2 className="text-lg font-bold flex my-3">{heading}</h2>
          <div className="flex space-x-2">
            <Image className="" src={svgIcon} alt={imageAlt} width={20} height={40} />
            <Image className="" src={svgIcon2} alt={imageAlt} width={20} height={40} />
            <Image className="" src={svgIcon3} alt={imageAlt} width={20} height={40} />
            <Image className="" src={svgIcon4} alt={imageAlt} width={20} height={40} />
            <Image className="" src={svgIcon5} alt={imageAlt} width={20} height={40} />
          </div>
          <div className="my-4 pb-10 font-medium">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
