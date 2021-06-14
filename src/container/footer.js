import React from "react";
import footerimg from "../assets/waves.svg";
import footerimg2 from "../assets/van-scene.png";
import { Footer } from "../components";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Column>
        <Footer.Image src={footerimg} />
      </Footer.Column>
      <Footer.Row>
        <Footer.ListColumn>
          <Footer.Heading3>Favourite Quote</Footer.Heading3>
          <Footer.Text>
            “The stars lighted me, the ground beneath my feet was level and the
            cold condiment of the nocturnal wind sharpened my appetite for
            potatoes” F.O’B
          </Footer.Text>
        </Footer.ListColumn>
        <Footer.ListColumn>
          <Footer.Heading3>More Work</Footer.Heading3>
          <Footer.List>
            <Footer.ListItem>Dribbble</Footer.ListItem>
            <Footer.ListItem>Behance</Footer.ListItem>
          </Footer.List>
        </Footer.ListColumn>
        <Footer.ListColumn>
          <Footer.Heading3>Contact</Footer.Heading3>
          <Footer.List>
            <Footer.ListItem>Dribbble</Footer.ListItem>
            <Footer.ListItem href="mailto:rotondwamulelu@gmail.com">
              Email
            </Footer.ListItem>
          </Footer.List>
        </Footer.ListColumn>
      </Footer.Row>
      <Footer.Column>
        <Footer.Image src={footerimg2} />
      </Footer.Column>
    </Footer>
  );
}
