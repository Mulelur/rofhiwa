import React from "react";
import { Expertise } from "../components";
import { Heading2 } from "../components/expertise/styles/expertise";
import { highSchool, vut } from "../components/expertise/data/subjectsData";
import {
  NOTURGENTANDALSONOTIMPORTANT,
  NOTURGENTBUTIMPORTANT,
  URGENTANDIMPORTANT,
  URGENTBUTNOTIMPORTANT,
} from "../components/expertise/data/manegementMatrixData";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Row>
        <Expertise.Col>
          <Expertise.Heading1># what i do</Expertise.Heading1>
          <Expertise.Text>
            Currently I am still a student who is busy studying a course of
            civil engineering at vaal University of technology but on my free
            time I tend to get busy with designing houses, malls and roads even
            selling house plans.
          </Expertise.Text>
          <Expertise.Text></Expertise.Text>
        </Expertise.Col>
        <Expertise.Col>
          {/* <Expertise.Avatar>
            <Expertise.Image></Expertise.Image>
          </Expertise.Avatar> */}
          <Expertise.Avatar>
            <Expertise.Image1></Expertise.Image1>
          </Expertise.Avatar>
        </Expertise.Col>
      </Expertise.Row>
      <Expertise.SubjectRow>
        <Expertise.Col>
          <Heading2>## High school</Heading2>
          <Expertise.List>
            {highSchool.map((item) => {
              return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
            })}
          </Expertise.List>
        </Expertise.Col>
        <Expertise.Col>
          <Heading2>## Modules</Heading2>
          <Expertise.List>
            {vut.map((item) => {
              return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
            })}
          </Expertise.List>
        </Expertise.Col>
      </Expertise.SubjectRow>
      <Expertise.MatrixTitleContainer>
        <Expertise.Heading2>Manegement Matrix</Expertise.Heading2>
      </Expertise.MatrixTitleContainer>
      <Expertise.MMRow>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>URGENT AND IMPORTANT</Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {URGENTANDIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>
            URGENT BUT NOT IMPORTANT
          </Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {URGENTBUTNOTIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
      </Expertise.MMRow>
      <Expertise.MMRow>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>URGENT AND IMPORTANT</Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {NOTURGENTBUTIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>
            URGENT BUT NOT IMPORTANT
          </Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {NOTURGENTANDALSONOTIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
      </Expertise.MMRow>
    </Expertise>
  );
}
