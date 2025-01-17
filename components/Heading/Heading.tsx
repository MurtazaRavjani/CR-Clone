import React from "react";

interface HeadingProps {
  tittle?: string;
  tittle1?: string;
  text?: string;
  reverseOrder?: boolean;  // Prop to reverse order of titles
}

const Heading: React.FC<HeadingProps> = ({ tittle, tittle1, text, reverseOrder }) => {
  return (
    <div className="text-center">
      <div className="flex items-center gap-2 justify-center">
        {/* If reverseOrder is true, display tittle1 first */}
        {reverseOrder && tittle1 && (
          <h2 className="sm:text-3xl md:text-3xl lg:text-3xl useclass font-bold">
            {tittle1}
          </h2>
        )}
        {tittle && (
          <h1 className="sm:text-3xl md:text-3xl lg:text-3xl text-white font-bold">
            {tittle}
          </h1>
        )}
        {/* If reverseOrder is false or undefined, display tittle1 second */}
        {!reverseOrder && tittle1 && (
          <h2 className="sm:text-3xl md:text-3xl lg:text-3xl useclass font-bold">
            {tittle1}
          </h2>
        )}
      </div>
      {/* Optional Text */}
      {text && (
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-2 px-40">
          {text}
        </p>
      )}
    </div>
  );
};

export default Heading;
