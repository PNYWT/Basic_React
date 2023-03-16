import React from "react";
import { Link } from "react-router-dom";

import { MenuLink, UserLogo ,Container, NavBarStyle, NavConStyle } from "../styles/styles";

function NavBar() {
  return (
    <NavBarStyle>
      <Container>
        <NavConStyle>
        <div>
          <UserLogo to="/">Punyawat Profile</UserLogo>
        </div>
        <MenuLink>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
        </MenuLink>
        </NavConStyle>
      </Container>
    </NavBarStyle>
  );
}

export default NavBar;
