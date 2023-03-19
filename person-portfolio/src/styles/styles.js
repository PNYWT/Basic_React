import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background-color: whitesmoke;
`;

// Nav
export const NavBarStyle = styled.nav`
  background: #333;
  height: 50px;
`;

export const NavConStyle = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserLogo = styled(Link)`
  color: whitesmoke;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const MenuLink = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 1rem;
    a {
      color: whitesmoke;
      text-decoration: none;
    }
  }
`;

//font
export const MainFont = styled.li`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const SubFont = styled.li`
  font-size: 1.2rem;
`;

// Home
export const HomePageLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HomePageImg = styled.img`
  border-radius: 10px;
`;

//Home and About
export const ListStyleNone = styled.ul`
  list-style: none;
`;

//Footer
export const FooterLayout = styled.footer`
  padding: 0.5rem;
  text-align: center;
  background: #333;
  /* color -> Fontcolor */
  color: whitesmoke;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

//About
export const AboutPageLayout = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const AboutPageImg = styled.img`
  border-radius: 100%;
`;

export const AboutPageExperience = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
`
export const ExperienceSubView = styled.div`
    text-align: left;
    padding: 1rem;
    ul {
        list-style: none;
    }
`

export const AboutPageSkill = styled.ul`
  list-style: none;
  /* display: flex;
    justify-content: center; */
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  align-items: center;
  padding-bottom: 2rem;

  li {
    margin: 1rem;
    background: #333;
    color: whitesmoke;
    padding: 1rem;
    border-radius: 5px;

    strong {
      color: #ffc14f;
    }
  }
`;

