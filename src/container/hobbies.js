import React from "react";
import { Hobbies } from "../components";
import img from "../assets/rofhiwa_2.jpeg";

export default function HobbiesContainer() {
  return (
    <Hobbies>
      <Hobbies.Row>
        <Hobbies.Img src={img} />
      </Hobbies.Row>
      <Hobbies.Row>
        <Hobbies.Col>
          <Hobbies.Heading2>🎧 Listening</Hobbies.Heading2>
          <Hobbies.Heading2>📘 Reading</Hobbies.Heading2>
          <Hobbies.Heading2>📺 Watching</Hobbies.Heading2>
        </Hobbies.Col>
      </Hobbies.Row>
    </Hobbies>
  );
}
