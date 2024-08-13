import React, { useState } from "react";

//components
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";
import PageTitle from "@/src/components/layout/PageTitle";
import SubjectTitle from "@/src/components/layout/SubjectTitle";
import NaverMap from "@/src/components/map/NaverMap";
import LocationTab from "@/src/components/tab/LocationTab";
import TableContainer from "@/src/components/table/TableContainer";

const Main = () => {
  //지역 선택별 어린이집 리스트 배열 상태관리
  const [list, setList] = useState([]);
  //사용자가 선택한 어린이집 정보 상태관리
  const [selectedKider, setSelectedKinder] = useState({});

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
  const handleKinderClickOnMap = (item) => {
    setSelectedKinder(item);
  };

  return (
    <Layout className="index">
      <CardShelf>
        <Section>
          <PageTitle pageName="홈" />
          <SubjectTitle
            title="지역별 어린이집 찾기"
            script="지도에서 찾아주세요"
          />
          <LocationTab onClick={handleSigunCodeClick} />
          <div>
            <NaverMap list={list} onClick={handleKinderClickOnMap} />
            <TableContainer data={selectedKider} />
          </div>
        </Section>
        <Section>
          <SubjectTitle
            title="최근 개원한 어린이집"
            script="지도에서 찾아주세요"
          />
        </Section>
        <Section>
          <SubjectTitle title="키즈카페" script="지도에서 찾아주세요" />
        </Section>
        <Section>
          <SubjectTitle
            title="오늘의 키즈 레시피"
            script="지도에서 찾아주세요"
          />
        </Section>
      </CardShelf>
      <CardShelf></CardShelf>
    </Layout>
  );
};

export default Main;
