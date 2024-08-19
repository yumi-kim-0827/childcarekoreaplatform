import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Accordion, AccordionTab } from "primereact/accordion";
//components
import Layout from "@/src/components/layout/Layout";
import CardShelf from "@/src/components/layout/CardShelf";
import Section from "@/src/components/layout/Section";
import SubjectTitle from "@/src/components/layout/SubjectTitle";

const Main = () => {
  const router = useRouter();

  const [oneYearRecipes, setOneYearRecipes] = useState([]);
  const [twoYearRecipes, setTwoYearRecipes] = useState([]);
  const [threeYearRecipes, setThreeYearRecipes] = useState([]);

  const fetchRecipe = async () => {
    try {
      const response = await fetch("/data/recipes.json");
      if (!response.ok) {
        throw new Error("faile fetch");
      }
      const data = await response.json();
      const recipes = data.recipes;
      setOneYearRecipes(recipes[0].oneyear);
      setTwoYearRecipes(recipes[1].twoyear);
      setThreeYearRecipes(recipes[2].threeyear);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <Layout pageName="page-recipe">
      <CardShelf>
        <Section>
          <SubjectTitle
            title="연령별 레시피"
            script="연령별 유아 레시피 보러가기"
          />
          <div className="card-group">
            <ul>
              <li
                onClick={() => {
                  return router.push("/contents/recipe/oneyears");
                }}
              >
                <div className="card-img-wrap">
                  <Image
                    src="/img/d1.png"
                    alt="유아레시피"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>만 1세 레시피</p>
              </li>
              <li>
                <div className="card-img-wrap">
                  <Image
                    src="/img/d2.png"
                    alt="유아레시피"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>만 2세 레시피</p>
              </li>
              <li>
                <div className="card-img-wrap">
                  <Image
                    src="/img/d3.png"
                    alt="유아레시피"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>만 3세 레시피</p>
              </li>
              <li>
                <div className="card-img-wrap">
                  <Image
                    src="/img/d4.png"
                    alt="유아레시피"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>만 4세 레시피</p>
              </li>
            </ul>
          </div>
        </Section>
        <Section>
          <SubjectTitle
            title="만 1세"
            script="만 1세 유아를 위한 간편 요리 레시피"
          />
          <Accordion activeIndex={0}>
            {oneYearRecipes.map((item, id) => {
              return (
                <AccordionTab header={item.name} key={id}>
                  <div className="ingredients">
                    <p>재료</p>
                    <div className="tag-wrap">
                      <ul>
                        {item.ingredients.map((item, id) => {
                          return <li key={id}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="instructions">
                    <h3>레시피</h3>
                    <ol>
                      {item.instructions.map((item, id) => {
                        return <li key={id}>{item}</li>;
                      })}
                    </ol>
                  </div>
                </AccordionTab>
              );
            })}
          </Accordion>
        </Section>
        <Section>
          <SubjectTitle
            title="만 2세"
            script="만 2세 유아를 위한 간편 요리 레시피"
          />
          <Accordion activeIndex={0}>
            {twoYearRecipes.map((item, id) => {
              return (
                <AccordionTab header={item.name} key={id}>
                  <div className="ingredients">
                    <p>재료</p>
                    <div className="tag-wrap">
                      <ul>
                        {item.ingredients.map((item, id) => {
                          return <li key={id}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="instructions">
                    <h3>레시피</h3>
                    <ol>
                      {item.instructions.map((item, id) => {
                        return <li key={id}>{item}</li>;
                      })}
                    </ol>
                  </div>
                </AccordionTab>
              );
            })}
          </Accordion>
        </Section>
        <Section>
          <SubjectTitle
            title="만 3세"
            script="만 3세 유아를 위한 간편 요리 레시피"
          />
          <Accordion activeIndex={0}>
            {threeYearRecipes.map((item, id) => {
              return (
                <AccordionTab header={item.name} key={id}>
                  <div className="ingredients">
                    <p>재료</p>
                    <div className="tag-wrap">
                      <ul>
                        {item.ingredients.map((item, id) => {
                          return <li key={id}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="instructions">
                    <h3>레시피</h3>
                    <ol>
                      {item.instructions.map((item, id) => {
                        return <li key={id}>{item}</li>;
                      })}
                    </ol>
                  </div>
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
