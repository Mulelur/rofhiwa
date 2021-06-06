import React from "react";
import { Background } from "../components";
import AboutContainer from "../container/about";
import FooterContainer from "../container/footer";
import NavBarContainer from "../container/navBar";

export default function AboutPage() {
  return (
    <Background>
      <Background.About>
        <NavBarContainer />
        <AboutContainer />
        <FooterContainer />
      </Background.About>
    </Background>
  );
}
