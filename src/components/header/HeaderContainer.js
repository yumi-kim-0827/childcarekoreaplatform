import React from "react";
//components
import Header from "@/src/components/header/Header";

//헤더의 메뉴 데이터
const menuItems = [
  {
    label: "시도별  찾기",
    icon: "pi pi-box",
    items: [
      [
        {
          label: "서울",
          items: [{ label: "강남구" }, { label: "광진구" }],
        },
      ],
    ],
  },
  {
    label: "어 목록",
    icon: "pi pi-mobile",
    items: [
      [
        {
          label: "Computer",
          items: [
            { label: "Monitor" },
            { label: "Mouse" },
            { label: "Notebook" },
            { label: "Keyboard" },
            { label: "Printer" },
            { label: "Storage" },
          ],
        },
      ],
    ],
  },
  {
    label: "유 목록",
    icon: "pi pi-clock",
    items: [
      [
        {
          label: "Football",
          items: [
            { label: "Kits" },
            { label: "Shoes" },
            { label: "Shorts" },
            { label: "Training" },
          ],
        },
      ],
    ],
  },
];

const HeaderContainer = () => {
  return <Header menuItems={menuItems} />;
};

export default HeaderContainer;
