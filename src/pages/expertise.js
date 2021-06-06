import React from "react";
import { Background } from "../components";
import ExpertiseContainer from "../container/expertise";
import FooterContainer from "../container/footer";
import NavBarContainer from "../container/navBar";

export default function ExpertisePage() {
  return (
    <Background>
      <Background.Expertise>
        <NavBarContainer />
        <ExpertiseContainer />
        <FooterContainer />
      </Background.Expertise>
    </Background>
  );
}
