import React from "react";
import { MegaMenu } from "primereact/megamenu";

const Header = ({ menuItems }) => {
  return (
    <header className="flex flex-col justify-center w-screen h-16 border border-gray-300 bg-white">
      <MegaMenu model={menuItems} breatkpoint="960px" className="bg-white" />
    </header>
  );
};

export default Header;
