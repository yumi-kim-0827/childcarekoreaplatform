import React from "react";
//components
import SideBar from "@/src/components/sidebar/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex gap-base">
        <SideBar />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
};

export default Layout;
