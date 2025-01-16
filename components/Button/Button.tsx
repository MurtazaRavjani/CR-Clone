import React from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <div className="group inline-block">

    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-400 transition-all duration-900 text-center text-white px-6 py-3 rounded-xl text-[16px] font-semibold ${className}`}
    >
      {text}
    </button>
    </div>
  );
};

export default Button;
