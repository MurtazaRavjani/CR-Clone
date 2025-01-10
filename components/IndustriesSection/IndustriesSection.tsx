import React from "react";
import Image from "next/image";
import Button from "../Button/Button";

const gridItems = [
  {
    icon: "/education.png",
    title: "Education Solution",
    description:
      "In an era where learning knows no bounds, ConceptRecall is committed to breaking down barriers with tailored digital solutions. Our aim is to make education more accessible, engaging, and impactful, ensuring that every learner has the tools they need to succeed in a rapidly evolving world.",
  },
  {
    icon: "/arms.png",
    title: "Licensed Firearms Dealers",
    description:
      "Unlock the full potential of your licensed firearms dealership with ConceptRecall. We provide custom web design, development, and digital marketing solutions tailored to boost your brand visibility and drive business growth.",
  },
  {
    icon: "/medical.png",
    title: "Medical Solution",
    description:
      "At ConceptRecall, we specialize in healthcare solutions that improve patient care and streamline operations. Our platforms integrate seamlessly with existing systems, enhancing everything from appointment scheduling to patient records. We offer advanced telehealth services, allowing patients to consult with doctors remotely.",
  },
  {
    icon: "/rental.png",
    title: "Rental",
    description:
      "Our rental solutions simplify the management of rental properties and services. We create intuitive platforms that make it easy for users to browse, book, and manage rentals. Real-time availability and booking systems ensure a seamless experience for both renters and providers.",
  },
  {
    icon: "/autoomotive.png",
    title: "Automotive",
    description:
      "Stepping into the future, we revolutionize the automotive industry with advanced solutions that drive efficiency and innovation. Our expertise ensures your vehicles are equipped with the latest technologies, setting the standard for tomorrow.",
  },
  {
    icon: "/ecommerce.png",
    title: "E-Commerce",
    description:
      "Exploring the top online shopping sites reveals a few key ingredients they all share, catapulting them ahead in the digital marketplace. These sites are a hit with smartphone users thanks to their responsive design. They draw in plenty of visitors organically by making sure their pages are optimized for mobile.",
  },
];

const IndustriesSection = () => {
  return (
    <div className="bg-zinc-800 py-10">
      <div className="container mx-auto px-4 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Industries We’ve <span className="useclass">Excelled In</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base md:text-lg px-2 md:px-48">
            Our services are tailor-made, and we are always striving to surpass
            your wildest expectations!
          </p>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-32">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-900 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-neutral-600 transition"
            >
              <div className=" mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400 mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
        <Button text="View all industries"/>
        
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
