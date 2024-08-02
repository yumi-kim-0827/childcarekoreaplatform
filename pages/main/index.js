import React, { useState, useEffect } from "react";
//components
import Map from "@/src/components/map/Map";
import NaverMap from "@/src/components/map/NaverMap";
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";
import LocationTab from "@/src/components/tab/LocationTab";

export default function Home() {
  const [list, setList] = useState([]);

  //사용자가 시군구를 클릭하면 해당 시군구 코드를 업데이트
  const onClickHandler = (sigunCode) => {
    fetchGetData(sigunCode);
  };

  const fetchGetData = async (sigunCode) => {
    try {
      const response = await fetch(`/api/getTotalKdList?arcode=${sigunCode}`);
      const data = await response.json();
      setList(data.response.item);

      // setList(data.response.item);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout pageCalss="main">
        <CardShelf>
          <Section>
            {/* <ul>
              {list?.map((item, id) => {
                return <li key={id}>{item.craddr}</li>;
              })}
            </ul> */}
          </Section>
        </CardShelf>
        <CardShelf>
          <Section>
            <LocationTab onClick={onClickHandler} />
            <div>
              <NaverMap list={list} />
            </div>
          </Section>
        </CardShelf>
      </Layout>
    </>
  );
}
