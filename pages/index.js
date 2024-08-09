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
        <Section>
          <PageTitle pageName="홈" />
          <SubjectTitle title="어린이집 목록" script="지도에서 찾아주세요" />
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
