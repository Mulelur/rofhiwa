import React from "react";
import footerimg from "../assets/waves.svg";
import footerimg2 from "../assets/van-scene.png";
import { Footer } from "../components";

export default function FooterContainer() {
  return (
    <Footer>
      <div style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
        <Footer.Column>
          <Footer.Image src={footerimg} />
        </Footer.Column>
      </div>
      <div style={{ display: "flex", margin: "8rem 2rem" }}>
        <Footer.Column>
          <Footer.Heading3>Favourite Quote</Footer.Heading3>
          <Footer.Text>
            “The stars lighted me, the ground beneath my feet was level and the
            cold condiment of the nocturnal wind sharpened my appetite for
            potatoes” F.O’B
          </Footer.Text>
        </Footer.Column>
        <Footer.Column>
          <Footer.Heading3>More Work</Footer.Heading3>
          <Footer.List>
            <Footer.ListItem>Dribbble</Footer.ListItem>
            <Footer.ListItem>Behance</Footer.ListItem>
          </Footer.List>
        </Footer.Column>
        <Footer.Column>
          <Footer.Heading3>Contact</Footer.Heading3>
          <Footer.List>
            <Footer.ListItem>Dribbble</Footer.ListItem>
            <Footer.ListItem href="mailto:rotondwamulelu@gmail.com">
              Email
            </Footer.ListItem>
          </Footer.List>
        </Footer.Column>
      </div>
      <Footer.Row>
        <Footer.Column>
          <Footer.Image src={footerimg2} />
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
}
