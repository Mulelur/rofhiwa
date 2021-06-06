import React from "react";
import { Background } from "../components";
import HomeContainer from "../container/home";
import NavBarContainer from "../container/navBar";

export default function HomePage() {
  return (
    <>
      <Background>
        <Background.Home>
          <NavBarContainer />
          <HomeContainer />
        </Background.Home>
      </Background>
    </>
  );
}
