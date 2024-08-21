import React from "react";

const IconButton = ({ icon, color, text, onClick }) => {
  return (
    <button className="img-btn" onClick={onClick}>
      <i className={`pi ${icon}`} style={{ color: color }}></i>
      <p className="img-btn-text">{text}</p>
    </button>
  );
};

export default IconButton;
