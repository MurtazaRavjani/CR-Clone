import React from "react";
import Button from "../Button/Button";
import Card from "../Cards/Cards";
import Heading from "../Heading/Heading"; // Import the Heading component

const gridItems = [
  {
    imageSrc: "/education.png",
    imageAlt: "Education Icon",
    title: "Education Solution",
    description:
      "In an era where learning knows no bounds, ConceptRecall is committed to breaking down barriers with tailored digital solutions. Our aim is to make education more accessible, engaging, and impactful, ensuring that every learner has the tools they need to succeed in a rapidly evolving world.",
  },
  {
    imageSrc: "/arms.png",
    imageAlt: "Arms Icon",
    title: "Licensed Firearms Dealers",
    description:
      "Unlock the full potential of your licensed firearms dealership with ConceptRecall. We provide custom web design, development, and digital marketing solutions tailored to boost your brand visibility and drive business growth.",
  },
  {
    imageSrc: "/medical.png",
    imageAlt: "Medical Icon",
    title: "Medical Solution",
    description:
      "At ConceptRecall, we specialize in healthcare solutions that improve patient care and streamline operations. Our platforms integrate seamlessly with existing systems, enhancing everything from appointment scheduling to patient records. We offer advanced telehealth services, allowing patients to consult with doctors remotely.",
  },
  {
    imageSrc: "/rental.png",
    imageAlt: "Rental Icon",
    title: "Rental",
    description:
      "Our rental solutions simplify the management of rental properties and services. We create intuitive platforms that make it easy for users to browse, book, and manage rentals. Real-time availability and booking systems ensure a seamless experience for both renters and providers.",
  },
  {
    imageSrc: "/autoomotive.png",
    imageAlt: "Automotive Icon",
    title: "Automotive",
    description:
      "Stepping into the future, we revolutionize the automotive industry with advanced solutions that drive efficiency and innovation. Our expertise ensures your vehicles are equipped with the latest technologies, setting the standard for tomorrow.",
  },
  {
    imageSrc: "/ecommerce.png",
    imageAlt: "E-Commerce Icon",
    title: "E-Commerce",
    description:
      "Exploring the top online shopping sites reveals a few key ingredients they all share, catapulting them ahead in the digital marketplace. These sites are a hit with smartphone users thanks to their responsive design. They draw in plenty of visitors organically by making sure their pages are optimized for mobile.",
  },
];

interface IndustriesSectionProps {
  tittle: string;
  tittle1: string;
  text: string;
}

const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  tittle,
  tittle1,
  text,
}) => {
  return (
    <div className="bg-zinc-800 py-10">
      <div className="container mx-auto px-4 md:px-20">
        {/* Use Heading Component */}
        <div className="text-center mb-10">
          <Heading tittle={tittle} tittle1={tittle1} text={text} reverseOrder={false}  />
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-32">
          {gridItems.map((item, index) => (
            <Card
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={
                <span className="line-clamp-5 lg:line-clamp-[10]">
                  {item.description}
                </span>
              }
            />
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-10 text-center">
          <Button text="View all industries" />
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
