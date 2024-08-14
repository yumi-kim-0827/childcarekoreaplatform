import React, { useState, useEffect } from "react";
//components
import Map from "@/src/components/map/Map";
import NaverMap from "@/src/components/map/NaverMap";
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";
import LocationTab from "@/src/components/tab/LocationTab";
import TableContainer from "@/src/components/table/TableContainer";
import SubjectTitle from "@/src/components/layout/SubjectTitle";

export default function Home() {
  //지역 선택별 어린이집 리스트 배열 상태관리
  const [list, setList] = useState([]);
  //사용자가 선택한 어린이집 정보 상태관리
  const [selectedCare, setSelectedCare] = useState({});

  //사용자가 시군구를 클릭하면 해당 시군구 코드를 업데이트
  const handleSigunCodeClick = (sigunCode) => {
    fetchKinderList(sigunCode);
  };

  const fetchKinderList = async (sigunCode) => {
    try {
      const response = await fetch(`/api/getTotalKdList?arcode=${sigunCode}`);
      const data = await response.json();
      setList(data.response.item);

      // setList(data.response.item);
    } catch (error) {
      console.error(error);
    }
  };

  //사용자가 선택한 어린이집 객체 정보 업데이트
  const handleKCareClickOnMap = (item) => {
    setSelectedCare(item);
  };

  return (
    <>
      <Layout pageName="page-cildcare-index">
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
            <SubjectTitle
              title="지역별"
              script="찾으시는 지역을 선택해주세요."
            />
            <LocationTab onClick={handleSigunCodeClick} />
            <div>
              <NaverMap list={list} onClick={handleKCareClickOnMap} />
            </div>
          </Section>
          <Section>
            <TableContainer data={selectedCare} />
          </Section>
        </CardShelf>
      </Layout>
    </>
  );
}
