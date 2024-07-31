//components
import Map from "@/src/components/map/Map";
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";

export default function Home() {
  return (
    <>
      <Layout pageCalss="main">
        <CardShelf>
          <Section>
            <div>
              <Map style={{ width: 800, height: 600 }} />
            </div>
          </Section>
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
