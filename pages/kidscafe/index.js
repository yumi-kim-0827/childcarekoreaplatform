import React, { useEffect, useState } from "react";
//components
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";
import SubjectTitle from "@/src/components/layout/SubjectTitle";
import ListGroup from "@/src/components/list/ListGroup";

const Main = () => {
  const [gyenggiKidsCafe, setGyenggiKidsCafe] = useState([]);
  const fetchGyeonggiKidsCafeList = async () => {
    try {
      const response = await fetch("/api/getGyenggiKidsCafe");
      const data = await response.json();
      const list = data.Kidscafe.row;
      setGyenggiKidsCafe(list);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGyeonggiKidsCafeList();
  }, []);

  return (
    <Layout pageName="page-recipe">
      <CardShelf>
        <Section>
          <SubjectTitle
            title="경기도 키즈카페 목록"
            script="지도에서 찾아주세요"
          />
          {gyenggiKidsCafe && gyenggiKidsCafe.length > 0 ? (
            <ListGroup list={gyenggiKidsCafe} propertyName1="BIZPLC_NM" />
          ) : null}
        </Section>
      </CardShelf>
    </Layout>
  );
};

export default Main;
