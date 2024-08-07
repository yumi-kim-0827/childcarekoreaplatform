import React, { useRef } from "react";
import { TabView, TabPanel } from "primereact/tabview";

const Tab = () => {
  return (
    <TabView>
      <TabPanel header="탭메뉴1">내용1</TabPanel>
      <TabPanel header="탭메뉴1">내용1</TabPanel>
      <TabPanel header="탭메뉴1">내용1</TabPanel>
    </TabView>
  );
};

export default Tab;
