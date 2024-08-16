import React from "react";
import Image from "next/image";

const ImgButton = ({ src, text }) => {
  return (
    <button className="img-btn">
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
