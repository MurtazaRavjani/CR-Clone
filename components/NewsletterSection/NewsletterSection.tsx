import React from "react";
import Image from "next/image";
import Button from "../Button/Button";

const newsletters = [
  {
    image: "/1.png",
    title: "Reflecting on Our Unforgettable GITEX 2023 Journey",
    description:
      "As GITEX approaches this year, we at ConceptRecall can't help but look back on our incredible experience at GITEX 2023.",
  },
  {
    image: "/2.png",
    title: "A Game-Changing Partnership Between ConceptRecall and IIFYMc",
    description:
      "ConceptRecall is excited to announce a new venture with IIFYM (If It Fits Your Macros) to develop a cutting-edge meal-planning app. This collaboration aims to bring users a seamless experience through mobile and web platforms.",
  },
  {
    image: "/3.png",
    title: "Tailored Custom Software Development Solutions for Your Unique Needs",
    description:
      "Every business has unique challenges and requirements, which is why we offer custom software development services at ConceptRecall. Our team of experts works closely with you to understand your specific needs and develop software solutions that address them.",
  },
];

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-10">
      <div className="container mx-auto text-center px-48">
        {/* Section Header */}
        <div className="flex justify-center gap-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Recent</h2>
          <h3 className="text-3xl md:text-4xl font-bold useclass">News Letter</h3>
        </div>
        <p className="text-gray-400 mt-4 text-center px-60">
          Uncover industry trends, insights, and innovative ideas. Our blog posts are crafted to keep you informed, inspired, and ahead in your professional journey. Dive in now!
        </p>

        {/* Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-[1150px]">
          {newsletters.map((news, index) => (
            <div
              key={index}
              className="bg-black rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image Wrapper */}
              <div className="w-full h-[200px] relative">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill // Makes the image fill the parent container
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-[350px]">
  <div>
    <h3 className="text-lg text-left font-bold text-white">{news.title}</h3>
    <p className="text-gray-400 text-left mt-2">{news.description}</p>
  </div>
  
  <div className="flex justify-between items-center mt-4">
    <span className="useclass">Get more Info</span>
    <Image
      className="flex items-center justify-center"
      src={"/arrowright.svg"}
      width={20}
      height={20}
      alt="Arrow Right"
    />
  </div>
</div>



            </div>
          ))}
        </div>
      </div>

      {/* View All Button (outside the loop) */}
      <div className="flex justify-center pb-10 mt-10">
        <Button text="View all Blogs"/>
        </div>  
        
    </section>
  );
};

export default NewsletterSection;
