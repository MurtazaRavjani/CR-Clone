import React from "react";
import Image from "next/image";

const newsletters = [
  {
    image: "/1.png",
    title: "Reflecting on Our Unforgettable GITEX 2023 Journey",
    description:
      "As GITEX approaches this year, we at ConceptRecall can't help but look back on our incredible experience at GITEX 2023.",
  },
];

const NewsletterSection = () => {
  return (
    <section className="bg-zinc-900 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Recent Newsletters</h2>
        <p className="text-gray-400 mt-4">
          Uncover industry trends, insights, and innovative ideas. Our blog posts are crafted to keep you informed, inspired, and ahead in your professional journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {newsletters.map((news, index) => (
            <div key={index} className="bg-black p-6 rounded-lg text-white">
              <Image
                src={news.image}
                alt={news.title}
                width={300}
                height={200}
                className="rounded-t-lg object-cover"
              />
              <h3 className="mt-4 font-bold">{news.title}</h3>
              <p className="mt-2 text-gray-400">{news.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
