import React from "react";
import { Background } from "../components";
import FooterContainer from "../container/footer";
import HobbiesContainer from "../container/hobbies";
import NavBarContainer from "../container/navBar";

export default function HobbiesPage() {
  return (
    <Background>
      <Background.Hobbies>
        <NavBarContainer />
        <HobbiesContainer />
        <FooterContainer />
      </Background.Hobbies>
    </Background>
  );
}
