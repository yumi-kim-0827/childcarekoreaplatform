import React from "react";
import { useRouter } from "next/router";
//components
import ImgButton from "@/src/components/button/ImgButton";

const SideBar = () => {
  const router = useRouter();

  const sideBarMenu = [
    { src: "/img/ic_comment.svg", text: "추천글 쓰기" },
    {
      src: "/img/ic_cook.svg",
      text: "키즈 레시피",
      onClick: () => {
        return router.push("/contents/recipe/");
      },
    },
    { src: "/img/ic_love.svg", text: "연령별 유아 케어" },
    { src: "/img/ic_memo.svg", text: "청소년 봉사활동 조회" },
  ];

  return (
    <div className="side-bar">
      <div className="best-menu">
        <ul className="best-menu-list">
          {sideBarMenu.map((item, id) => {
            return (
              <li key={id}>
                <ImgButton
                  src={item.src}
                  text={item.text}
                  onClick={item.onClick}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
