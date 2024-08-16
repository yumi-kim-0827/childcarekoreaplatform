import React from "react";
//components
import Header from "@/src/components/header/Header";
import { useRouter } from "next/router";

const HeaderContainer = () => {
  const router = useRouter();
  //헤더의 메뉴 데이터
  const menuItems = [
    {
      label: "어린이집",
      icon: "pi pi-shop",
      items: [
        {
          label: "지도 검색",
          items: [
            { label: "지역벌 검색", command: () => router.push("/childcare/") },
          ],
        },
        {
          label: "지역별",
          items: [{ label: "서울" }, { label: "경기" }],
        },
      ],
    },
    {
      label: "유치원",
      icon: "pi pi-shop",
      items: [
        {
          label: "지역별",
        },
        {
          label: "최근 개원한 유치원",
        },
      ],
    },
    {
      label: "키즈카페",
      icon: "pi pi-clock",
      items: [
        {
          label: "지도 검색",
          command: () => router.push("/kidscafe/"),
        },
        {
          label: "지역별",
          items: [{ label: "서울" }, { label: "경기" }, { label: "부산" }],
        },
      ],
    },
  ];
  return <Header menuItems={menuItems} />;
};

export default HeaderContainer;
