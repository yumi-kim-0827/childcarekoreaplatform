import React, { useRef } from "react";
import { TabView, TabPanel } from "primereact/tabview";
//components
import TextButton from "@/src/components/button/TextButton";
//data
import sidoList from "@/src/data/location";

const LocationTab = ({ onClick }) => {
  return (
    <TabView>
      {sidoList.map((item, id) => {
        return (
          <TabPanel header={item.sido} key={id}>
            <ul className="tab-sigun-list">
              {item.sigungu.map((sigungu, id) => (
                <li key={id}>
                  <TextButton
                    label={sigungu.name}
                    onClick={onClick}
                    data={sigungu.code}
                  />
                </li>
              ))}
            </ul>
          </TabPanel>
        );
      })}
    </TabView>
  );
};

export default LocationTab;
