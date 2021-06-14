import React from "react";
import { About } from "../components";
import cv from "../assets/cv/rofhiwa cv - Copy.pdf";
import letter from "../assets/cv/rofhiwa letter.pdf";

export default function AboutContainer() {
  return (
    <About>
      <About.Row>
        <About.Column>
          <About.Text>A little bit</About.Text>
          <About.Title>About Me</About.Title>
          <About.Text>
            I am lufhugu Rofhiwa, a student at vaal University of Technology. I
            am doing a field of engineering which is civil engineering
          </About.Text>
          <About.Text>
            I would love to be a civil engineer in the next 4 to 5 years and
            later on become a civil surgeon.
          </About.Text>

          <About.Text>
            <About.Link href={cv} target="_blank">
              Dawonload cv
            </About.Link>
            <About.Link href={letter} target="_blank">
              Download cover letter
            </About.Link>
          </About.Text>
        </About.Column>
        <About.Column>
          <About.Avatar>
            <About.Img></About.Img>
          </About.Avatar>
        </About.Column>
      </About.Row>
      <About.BottomCol></About.BottomCol>
    </About>
  );
}
