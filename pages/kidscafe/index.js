import React, { useEffect, useState } from "react";
//components
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";
import SubjectTitle from "@/src/components/layout/SubjectTitle";
import ListGroup from "@/src/components/list/ListGroup";
import LocationTab from "@/src/components/tab/LocationTab";

const Main = () => {
  const [gyenggiKidsCafe, setGyenggiKidsCafe] = useState([]);
  const [BusanKidsCafe, setBusanKidsCafe] = useState([]);

  //경기 키즈카페 리스트 fetch
  const fetchGyeonggiKidsCafeList = async () => {
    try {
      const response = await fetch("/api/getGyenggiKidsCafe");
      const data = await response.json();
      const list = data.Kidscafe.row;
      console.log(list);
      setGyenggiKidsCafe(list);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGyeonggiKidsCafeList();
  }, []);

  //부산 키즈카페 리스트 fetch
  const fetchBusanKidsCafeList = async () => {
    try {
      const response = await fetch("/api/getBusanKidsCafe");
      const data = await response.json();
      const items = data.response.body[0].items[0].item;
      setBusanKidsCafe(items);
    } catch (error) {}
  };

  useEffect(() => {
    fetchBusanKidsCafeList();
  }, []);

  return (
    <Layout pageName="page-recipe">
      <CardShelf>
        <Section>
          <SubjectTitle
            title="경기도 키즈카페 목록"
            script="경기도에 위치한 키즈카페입니다."
          />
          <LocationTab sidoName="경기도" sodiListIdx={4} />
          {gyenggiKidsCafe && gyenggiKidsCafe.length > 0 ? (
            <ListGroup
              list={gyenggiKidsCafe}
              propertyName1="BIZPLC_NM"
              propertyName2="REFINE_LOTNO_ADDR"
              propertyName3="BSN_STATE_NM"
            />
          ) : null}
        </Section>
        <Section>
          <SubjectTitle
            title="부산 키즈카페 목록"
            script="부산에 위치한 키즈카페입니다."
          />
          {BusanKidsCafe && BusanKidsCafe.length > 0 ? (
            <ListGroup
              list={BusanKidsCafe}
              propertyName1="cafe_nm"
              propertyName2="road_nm"
              propertyName3="tel_no"
            />
          ) : null}
        </Section>
      </CardShelf>
    </Layout>
  );
};

export default Main;
