import React from "react";
import footerimg from "../assets/waves.svg";
import footerimg2 from "../assets/van-scene.png";
import { Footer } from "../components";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Column>
        <Footer.Image src={footerimg2} />
      </Footer.Column>
    </Footer>
  );
}
