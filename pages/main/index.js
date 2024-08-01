import React, { useState, useEffect } from "react";
//components
import Map from "@/src/components/map/Map";
import NaverMap from "@/src/components/map/NaverMap";
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";

export default function Home() {
  const [list, setList] = useState([]);

  const fetchGetData = async () => {
    try {
      const response = await fetch("/api/getSeoulKdList");
      const data = await response.json();
      setList(data.response.item);
    } catch (error) {}
  };

  useEffect(() => {
    fetchGetData();
  }, []);

  return (
    <>
      <Layout pageCalss="main">
        <CardShelf>
          <Section>
            <ul>
              {list.map((item, id) => {
                return <li key={id}>{item.craddr}</li>;
              })}
            </ul>
          </Section>
        </CardShelf>
        <CardShelf>
          <Section>
            <div>
              <Map style={{ width: "100%", height: 600 }} />
            </div>
            <div>
              <NaverMap />
            </div>
          </Section>
        </CardShelf>
      </Layout>
    </>
  );
}
