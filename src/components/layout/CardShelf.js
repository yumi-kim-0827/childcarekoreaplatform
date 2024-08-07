import React from "react";

const CardShelf = ({ children }) => {
  return (
    <div className="p-4 rounded-2xl bg-white border border-gray-300">
      {children}
    </div>
  );
};

export default CardShelf;
