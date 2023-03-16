import React, { useContext } from "react";
import { DataContext } from "../App";

//Style
import { Container, HomePageLayout, HomePageImg, ListStyleNone, MainFont, SubFont } from "../styles/styles";

function HomePage() {
  const dataJson = useContext(DataContext);
//   console.log(dataJson)

  return(
  <Container>
    <h1>Home</h1>
    <HomePageLayout>
        <HomePageImg src={dataJson.basics?.picture} alt={dataJson.basics?.name}></HomePageImg>
        <ListStyleNone>
            <MainFont ><strong>Name</strong> : {dataJson.basics?.name}</MainFont>
            <SubFont><strong>Headline</strong> : {dataJson.basics?.headline}</SubFont>
        </ListStyleNone>
    </HomePageLayout>
  </Container>
  )
}

export default HomePage;
