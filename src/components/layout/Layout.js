import React from "react";
//components
import SideBar from "@/src/components/sidebar/SideBar";

const Layout = ({ pageName, children }) => {
  return (
    <>
      <div className="layout">
        <SideBar />
        <main className={`main-wrap ${pageName}`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
