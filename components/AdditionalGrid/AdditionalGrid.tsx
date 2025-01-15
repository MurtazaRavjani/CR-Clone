import React, { useEffect, useState, useRef } from "react";

const additionalGrid = [
  { title: "10+", description: "Years of Experience" },
  { title: "116+", description: "Projects Completed" },
  { title: "100+", description: "Happy Customers" },
  { title: "12M+", description: "Total Revenue" },
];

const AdditionalGrid = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetValues = additionalGrid.map((item) =>
      item.title.endsWith("M+") || item.title.endsWith("+")
        ? parseInt(item.title.replace(/[M+]/g, ""))
        : 0
    );

    const updateCount = (index: number, target: number) => {
      let count = 0;
      const increment = Math.ceil(target / 100);

      const interval = setInterval(() => {
        if (count < target) {
          count += increment;
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(count, target);
            return newCounts;
          });
        } else {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = target;
            return newCounts;
          });
          clearInterval(interval);
        }
      }, 20);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        targetValues.forEach((target, index) => {
          updateCount(index, target);
        });
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.9, // Trigger when 10% of the component is visible
    });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="bg-zinc-800 py-8 px-48" ref={gridRef}>
      <div className="text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-12">
        {additionalGrid.map((item, index) => (
          <div
            key={index}
            className={`p-4 ${index < 3 ? "sm:border-r" : ""} border-zinc-500`}
          >
            <h3 className="text-3xl md:text-4xl font-bold useclass">
              {index === 3
                ? `${counts[index]}M+` // Specific logic for Total Revenue
                : `${counts[index]}${item.title.endsWith("+") ? "+" : ""}`}
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
