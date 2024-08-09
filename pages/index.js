import React from "react";
//components
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";
import PageTitle from "@/src/components/layout/PageTitle";
import SubjectTitle from "@/src/components/layout/SubjectTitle";

const Main = () => {
  return (
    <Layout pageCalss="index">
      <CardShelf>
        <Section>ㄴㄴ</Section>
      </CardShelf>
      <CardShelf>
        <Section>
          <PageTitle pageName="홈" />
          <SubjectTitle
            title="어린이집 목록"
            script="찾으시는 지역을 선택해주세요."
          />
        </Section>
        <Section></Section>
      </CardShelf>
    </Layout>
  );
};

export default Main;
