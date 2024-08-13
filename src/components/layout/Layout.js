import React from "react";
//components
import SideBar from "@/src/components/sidebar/SideBar";

const Layout = ({ children, pageCalss }) => {
  return (
    <>
      <div>
        <SideBar />
        <main className={`${pageCalss} flex-1 grid gap-4`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
