import React from "react";
import { Expertise } from "../components";
import img from "../assets/site.png";
import { Heading2 } from "../components/expertise/styles/expertise";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Row>
        <Expertise.Col>
          <Expertise.Heading1># www</Expertise.Heading1>
          <Expertise.Text>
            🌊 I spend a lot of time surfing both the ocean and the web.
            Optimising this website was an experiment to lower my online carbon
            footprint.
          </Expertise.Text>
          <Expertise.Text>
            🦶 The site was designed to be small in size and is highly
            performant (The whole site is less than 8mb).
          </Expertise.Text>
          <Expertise.Text>
            🌳 It is hosted on a green server that is run on renewable energy.
          </Expertise.Text>
          <Expertise.Text>
            🤖 I’ve tried my best to make this site as accessible as possible.
          </Expertise.Text>
          <Expertise.Text>
            🕵️‍♂️ I’m not a spy, I don't track any users. If you want to get in
            touch, say hello.
          </Expertise.Text>
        </Expertise.Col>
        <Expertise.Col>
          <Expertise.Img src={img} />
        </Expertise.Col>
      </Expertise.Row>
      <Expertise.Row>
        <Expertise.Col>
          <Heading2>## Many Thanks</Heading2>
          <Expertise.List>
            <Expertise.ListItem>These Legends</Expertise.ListItem>
            <Expertise.ListItem>CSS Tricks</Expertise.ListItem>
            <Expertise.ListItem>Web Field Manual</Expertise.ListItem>
          </Expertise.List>
        </Expertise.Col>
      </Expertise.Row>
      <Expertise.Heading2>Manegement Matrix</Expertise.Heading2>
      <Expertise.Row>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>URGENT AND IMPORTANT</Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              <Expertise.MatrixListItem>
                Getting my degree of civil engineering
              </Expertise.MatrixListItem>
              <Expertise.MatrixListItem>
                Getting a new laptop
              </Expertise.MatrixListItem>
              <Expertise.MatrixListItem>Getting a car</Expertise.MatrixListItem>
              <Expertise.MatrixListItem>
                Opening a business
              </Expertise.MatrixListItem>
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>
            URGENT BUT NOT IMPORTANT
          </Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              <Expertise.MatrixListItem>
                Getting a new cell phone
              </Expertise.MatrixListItem>
              <Expertise.MatrixListItem>
                Getting new clothes
              </Expertise.MatrixListItem>
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>
            NOT URGENT BUT IMPORTANT
          </Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              <Expertise.MatrixListItem>
                Getting married
              </Expertise.MatrixListItem>
              <Expertise.MatrixListItem>
                Getting a house
              </Expertise.MatrixListItem>
              <Expertise.MatrixListItem>Forex trading</Expertise.MatrixListItem>
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>
            NOT URGENT AND ALSO NOT IMPORTANT
          </Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              <Expertise.MatrixListItem>
                Getting famous
              </Expertise.MatrixListItem>
              <Expertise.MatrixListItem>
                Being an alcoholic person
              </Expertise.MatrixListItem>
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
      </Expertise.Row>
    </Expertise>
  );
}
