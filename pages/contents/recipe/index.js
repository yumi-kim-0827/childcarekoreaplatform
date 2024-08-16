import React, { useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
//components
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipe = async () => {
    try {
      const response = await fetch("/data/recipes.json");
      if (!response.ok) {
        throw new Error("faile fetch");
      }
      const data = await response.json();
      const recipe = data.oneyear;
      setRecipes(recipe);
      console.log(recipe);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
    console.log(recipes);
  }, []);
  console.log(recipes);
  return (
    <Layout pageName="page-recipe">
      <CardShelf>
        <Section>
          <Accordion activeIndex={0}>
            {recipes &&
              recipes.map((item, id) => {
                return (
                  <AccordionTab header={item.name} key={id}>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </AccordionTab>
                );
              })}
          </Accordion>
        </Section>
      </CardShelf>
    </Layout>
  );
};

export default Main;
