import React from "react";
import { About } from "../components";
import aboutImg from "../assets/rofhiwa.jpeg";

export default function AboutContainer() {
  return (
    <About>
      <About.Row>
        <About.Column>
          <About.Text>A little bit</About.Text>
          <About.Title>About Me</About.Title>
          <About.Text>
            I am lufhugu Rofhiwa, a student at vaal University of Technology. I
            am doing a field of engineering which is civil engineering.
          </About.Text>
          <About.Text>
            I would love to be a civil engineer in the next 4 to 5 years and
            later on become a civil surgeon. I love drawing and designing
            building and structures.
          </About.Text>
          <About.Text>
            I am good at using CAD and I would love to see myself somewhere
            owning a big construction company going by my name. I love drawing,
            playing soccer and going out with my friends, not forgetting
            learning new designing skills whenever I get a chance to.
          </About.Text>
        </About.Column>
        <About.Column>
          <About.Image src={aboutImg} />
        </About.Column>
      </About.Row>
      <About.BottomCol></About.BottomCol>
    </About>
  );
}
