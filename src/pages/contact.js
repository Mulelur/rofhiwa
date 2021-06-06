import React from "react";
import { Background } from "../components";
import ContactContainer from "../container/contact";
import FooterContainer from "../container/footer";
import NavBarContainer from "../container/navBar";

export default function ContactPage() {
  return (
    <Background>
      <Background.Contact>
        <NavBarContainer />
        <ContactContainer />
        <FooterContainer />
      </Background.Contact>
    </Background>
  );
}
