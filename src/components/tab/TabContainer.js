import React from "react";
//components
import Tab from "@/src/components/tab/Tab";

const TabContainer = (data) => {
  return (
    <div>
      <Tab items={data} />
    </div>
  );
};

export default TabContainer;
