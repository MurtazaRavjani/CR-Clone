import React from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  padding?: string; // Added padding prop
  gap?: string;     // Added gap prop
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  padding = "py-3 px-6",  // Default padding
  gap = "gap-2",          // Default gap
}) => {
  return (
    <div className="group inline-block">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-400 transition-all duration-900 text-center text-white ${padding} ${gap} rounded-xl text-[16px] font-semibold ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
