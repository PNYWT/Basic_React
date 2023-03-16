import React, { useContext } from "react";
import { DataContext } from "../App";
import {
  AboutPageImg,
  AboutPageLayout,
  Container,
  ListStyleNone,
  MainFont,
  AboutPageSkill,
  AboutPageExperience,
  ExperienceSubView,
} from "../styles/styles";

function AboutPage() {
  const dataJson = useContext(DataContext);

  const myExperience = dataJson.work?.map((val) => {
    if (val.endDate === "" && val.isCurrentRole === true) {
      let regex = /[.]/;
      let str = val.summary;
      let subst = "$&\n";
      let resultNewline = str.replace(regex, subst);
      return (
        <ExperienceSubView key={val.id}>
          <ul>
            <li>
              <strong>Company:</strong> {val.name}{" "}
            </li>
            <li>
              <strong>Location:</strong> {val.location}{" "}
            </li>
            <li>
              <strong>Position:</strong> {val.position}
            </li>
            <li>
              <strong>Startdate:</strong> {val.startDate}
            </li>
            <li>
              <strong>CurrentRole:</strong> True
            </li>
          </ul>
          <h4>Summary Job Description</h4>
          {/* <p>{val.summary}</p> */}
          <p>
            {resultNewline}
          </p>
        </ExperienceSubView>
      );
    } else {
      return (
        <ExperienceSubView key={val.id}>
          <ul>
            <li>
              <strong>Company:</strong> {val.name}{" "}
            </li>
            <li>
              <strong>Location:</strong> {val.location}{" "}
            </li>
            <li>
              <strong>Position:</strong> {val.position}
            </li>
            <li>
              <strong>Startdate:</strong> {val.startDate} -{" "}
              <strong> Enddate:</strong> {val.endDate}
            </li>
            <br></br>
          </ul>
          <h4>Summary Job Description</h4>
          <p>{val.summary}</p>
        </ExperienceSubView>
      );
    }
  });

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
        <h3>Experience</h3>
        <AboutPageExperience>{myExperience}</AboutPageExperience>
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
