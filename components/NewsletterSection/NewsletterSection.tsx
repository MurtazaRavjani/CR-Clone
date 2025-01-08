import React from "react";
import Image from "next/image";

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Recent Newsletters</h2>
        <p className="text-gray-400 mt-4">Stay updated with our latest news and insights.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-black p-6 rounded-lg">
              <Image src={`/image-${item}.png`} alt={`News ${item}`} width={500} height={300} />
              <h3 className="mt-4 text-xl font-semibold">Newsletter {item}</h3>
              <p className="text-gray-400 mt-2">Short description of newsletter {item}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
