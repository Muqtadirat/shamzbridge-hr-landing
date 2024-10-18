import React from "react";

interface PrimaryButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 text-white text-sm font-semibold px-6 py-3 rounded-lg bg-primary-blue hover:bg-primary-slate transition-colors duration-300 ease-in-out"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
