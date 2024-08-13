import React from "react";
import { MegaMenu } from "primereact/megamenu";

const Header = ({ menuItems }) => {
  return (
    <header className="header">
      <MegaMenu model={menuItems} breatkpoint="960px" className="bg-white" />
    </header>
  );
};

export default Header;
