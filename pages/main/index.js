import React, { useEffect } from "react";
//components
import Map from "@/src/components/map/Map";
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";

export default function Home() {
  const fetchGetData = async () => {
    try {
      const response = await fetch("../api/getSeoulKdList");
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchGetData();
  }, []);

  return (
    <>
      <Layout pageCalss="main">
        <CardShelf>
          <Section></Section>
        </CardShelf>
        <CardShelf>
          <Section>
            <div>
              <Map style={{ width: "100%", height: 600 }} />
            </div>
          </Section>
        </CardShelf>
      </Layout>
    </>
  );
}
