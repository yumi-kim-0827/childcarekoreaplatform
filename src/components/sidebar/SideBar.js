import React from "react";
import { useRouter } from "next/router";
//components
import IconButton from "@/src/components/button/IconButton";

const SideBar = () => {
  const router = useRouter();

  const sideBarMenu = [
    { icon: "pi-pen-to-square", text: "추천글 쓰기" },
    {
      icon: "pi-sparkles",
      text: "키즈 레시피",
      onClick: () => {
        return router.push("/contents/recipe/");
      },
    },
    { icon: "pi-heart-fill", text: "연령별 유아 케어" },
    { icon: "pi-thumbs-up-fill", text: "청소년 봉사활동 조회" },
  ];

  return (
    <div className="side-bar">
      <div className="best-menu">
        <ul className="best-menu-list">
          {sideBarMenu.map((item, id) => {
            return (
              <li key={id}>
                <IconButton
                  icon={item.icon}
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
