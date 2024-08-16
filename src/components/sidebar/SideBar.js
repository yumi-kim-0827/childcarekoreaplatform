import React from "react";
//components
import ImgButton from "@/src/components/button/ImgButton";

const sideBarMenu = [
  { src: "/img/ic_comment.svg", text: "추천글 쓰기" },
  { src: "/img/ic_cook.svg", text: "키즈 레시피" },
  { src: "/img/ic_love.svg", text: "연령별 유아 케어" },
  { src: "/img/ic_memo.svg", text: "청소년 봉사활동 조회" },
];

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="best-menu">
        <ul className="best-menu-list">
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
