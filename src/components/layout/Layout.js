import React from "react";
//components
import SideBar from "@/src/components/sidebar/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <SideBar />
        <main className="main-wrap">{children}</main>
      </div>
    </>
  );
};

export default Layout;
