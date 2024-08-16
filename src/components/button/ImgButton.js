import React from "react";
import Image from "next/image";

const ImgButton = ({ src, text, onClick }) => {
  return (
    <button className="img-btn" onClick={onClick}>
      <Image
        src={src}
        alt="버튼 아이콘"
        width={50}
        height={50}
        className="inline-block"
      />
      <p className="img-btn-text">{text}</p>
    </button>
  );
};

export default ImgButton;
