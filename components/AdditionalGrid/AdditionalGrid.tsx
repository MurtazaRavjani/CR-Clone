import React, { useEffect, useState } from "react";

const additionalGrid = [
  { title: "10+", description: "Years of Experience" },
  { title: "116+", description: "Projects Completed" },
  { title: "100+", description: "Happy Customers" },
  { title: "12M+", description: "Total Revenue" },
];

const AdditionalGrid = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    // Extract target values from titles
    const targetValues = additionalGrid.map((item) =>
      item.title.endsWith("+") ? parseInt(item.title.replace("+", "")) : 0
    );

    // Define count-up for each number
    const updateCount = (index: number, target: number) => {
      let count = 0;
      const increment = Math.ceil(target / 100); // Adjust the step size

      const interval = setInterval(() => {
        if (count < target) {
          count += increment;
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(count, target); // Ensure we don't exceed the target
            return newCounts;
          });
        } else {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = target; // Ensure final value
            return newCounts;
          });
          clearInterval(interval);
        }
      }, 20); // Adjust speed of counting
    };

    // Start counting for each item
    targetValues.forEach((target, index) => {
      updateCount(index, target);
    });

    // Cleanup intervals on unmount
    return () => {
      setCounts([0, 0, 0, 0]); // Reset counts when the component is unmounted
    };
  }, []);

  return (
    <div className="bg-zinc-800 py-8 px-48">
      <div className="text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-12">
        {additionalGrid.map((item, index) => (
          <div
            key={index}
            className={`p-4 ${index < 3 ? "sm:border-r" : ""} border-zinc-500`}
          >
            <h3 className="text-3xl md:text-4xl font-bold useclass">
              {counts[index]}{item.title.endsWith("+") ? "+" : ""}
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
