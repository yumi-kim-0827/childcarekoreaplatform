import React from "react";
import Image from "next/image";

const ImgButton = ({ src, text }) => {
  return (
    <button className="inline-block w-full min-h-[6.25rem] flex flex-col justify-between items-center gap-4">
      <Image
        src={src}
        alt="버튼 아이콘"
        width={50}
        height={50}
        className="inline-block"
      />
      <p className="text-base">{text}</p>
    </button>
  );
};

export default ImgButton;
