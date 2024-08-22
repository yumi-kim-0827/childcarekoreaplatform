import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
//components
import TextButton from "@/src/components/button/TextButton";
//data
import sidoList from "@/src/data/location";

const LocationTab = ({ sidoName, sodiListIdx, onClick }) => {
  return (
    <TabView>
      {sidoName && sodiListIdx ? (
        // 특정 시도의 시군구
        <TabPanel header={sidoName}>
          <ul className="tab-sigun-list">
            {sidoList[sodiListIdx].sigungu.map((sigungu, id) => (
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
      ) : (
        // 전체 시도 시군구
        <>
          {sidoList.map((item, id) => (
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
          ))}
        </>
      )}
    </TabView>
  );
};

export default LocationTab;
