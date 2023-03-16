import React, { useContext } from "react";
import { DataContext } from "../App";
import { AboutPageImg, AboutPageLayout, Container, ListStyleNone, MainFont, AboutPageSkill } from "../styles/styles";

function AboutPage() {
  const dataJson = useContext(DataContext);

  return (
    <Container>
      <h1>About me</h1>
      <hr></hr>
      <AboutPageLayout>
        <AboutPageImg
          src={dataJson.basics?.picture}
          alt={dataJson.basics?.name}
          width="200px"
        ></AboutPageImg>
        <ListStyleNone>
          <MainFont>Name: {dataJson.basics?.name}</MainFont>
          <li>{dataJson.basics?.headline}</li>
          <li>{dataJson.basics?.summary}</li>
          <li>{dataJson.basics?.region}</li>
          <li>
            My Github:{" "}
            <a
              href={dataJson.basics?.profiles[1]?.url}
              target="_blank"
              rel="noreferrer"
            >
              {dataJson.basics?.profiles[1].url}
            </a>
          </li>
        </ListStyleNone>
        <hr></hr>
        <h3>My Skill</h3>
        <AboutPageSkill>
          {dataJson.skills?.map((val, idx) => (
            <li key={idx}>
              <strong>{val.name}</strong>
              <br />
              Level: {val.level}
            </li>
          ))}
        </AboutPageSkill>
      </AboutPageLayout>
    </Container>
  );
}

export default AboutPage;
