import React from "react";

const additionalGrid = [
  { title: "10+", description: "Years of Experience" },
  { title: "116+", description: "Projects Completed" },
  { title: "100+", description: "Happy Customers" },
  { title: "10M+", description: "Total Revenue" },
];

const AdditionalGrid = () => {
  return (
    <div className="bg-zinc-800 py-8 px-48">
      <div className=" text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-12">
        {additionalGrid.map((item, index) => (
          <div
            key={index}
            className={`p-4 ${
              index < 3 ? "sm:border-r" : "" // Add border-right for the first three items
            } border-zinc-500`}
          >
            <h3 className="text-3xl md:text-4xl font-bold useclass">
              {item.title}
            </h3>
            <p className="text-sm md:text-lg text-white mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalGrid;
