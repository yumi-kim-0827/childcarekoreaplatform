import React from "react";

const IconButton = ({ icon, text, onClick }) => {
  return (
    <button className="img-btn" onClick={onClick}>
      <i className={icon}></i>
      <p className="img-btn-text">{text}</p>
    </button>
  );
};

export default IconButton;
