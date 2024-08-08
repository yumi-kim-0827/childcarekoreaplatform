import React from "react";
//components
import ImgButton from "@/src/components/button/ImgButton";

const sideBarMenu = [
  { src: "", text: "추천글 쓰기" },
  { src: "", text: "연령별 키즈 레시피" },
  { src: "", text: "청소년활자원봉사" },
];

const SideBar = () => {
  return (
    <div className="top-16 left-0 w-[100px] h-[calc(100vh-4rem)] bg-main-color text-2xl font-bold">
      <div className="">
        <ul>
          <li>
            <ImgButton text="추천글 쓰기" />
          </li>

          {sideBarMenu.map((item, id) => {
            return (
              <li key={id}>
                <ImgButton src={item.src} text={item.text} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
