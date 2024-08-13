import React from "react";
import { TabView, TabPanel } from "primereact/tabview";

const Test = () => {
  return (
    <TabView>
      <TabPanel header="Tab 1">
        <p>Content of Tab 1</p>
      </TabPanel>
      <TabPanel header="Tab 2">
        <p>Content of Tab 2</p>
      </TabPanel>
      <TabPanel header="Tab 3">
        <p>Content of Tab 3</p>
      </TabPanel>
    </TabView>
  );
};

export default Test;
