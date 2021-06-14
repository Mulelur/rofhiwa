import React from "react";
import { Hobbies } from "../components";
import img from "../assets/about.png";

export default function HobbiesContainer() {
  return (
    <Hobbies>
      <Hobbies.Row>
        <Hobbies.Avatar>
          <Hobbies.Image1></Hobbies.Image1>
        </Hobbies.Avatar>
      </Hobbies.Row>
      <Hobbies.Row>
        <Hobbies.Heading1>Hobbies</Hobbies.Heading1>
      </Hobbies.Row>
      <Hobbies.Row>
        <Hobbies.Col>
          <Hobbies.MyHobbies>
            <Hobbies.Item>
              <Hobbies.Header>
                <Hobbies.Heading2>🎧 Listening To Music</Hobbies.Heading2>
              </Hobbies.Header>
            </Hobbies.Item>
            <Hobbies.Item>
              <Hobbies.Header>
                <Hobbies.Heading2>📘 Reading Books</Hobbies.Heading2>
              </Hobbies.Header>
            </Hobbies.Item>
            <Hobbies.Item>
              <Hobbies.Header>
                <Hobbies.Heading2>📺 Watching TV</Hobbies.Heading2>
              </Hobbies.Header>
            </Hobbies.Item>
            <Hobbies.Item>
              <Hobbies.Header>
                <Hobbies.Heading2>⚽ Playing Soccer</Hobbies.Heading2>
              </Hobbies.Header>
            </Hobbies.Item>
          </Hobbies.MyHobbies>
        </Hobbies.Col>
      </Hobbies.Row>
    </Hobbies>
  );
}
