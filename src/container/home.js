import React from "react";
import { Home } from "../components";
import img from "../assets/homeIcon.svg";
import cv from "../assets/cv/rofhiwa cv - Copy.pdf";
import Typewiter from "typewriter-effect";

export default function HomeContainer() {
  return (
    <Home>
      <Home.Column>
        <Home.Text>I am lufhugu Rofhiwa</Home.Text>
        <Home.Title>
          <Typewiter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewiter) => {
              typewiter
                .typeString("Welcome to my portfolio.")
                .pauseFor(2500)
                .deleteAll()
                .typeString("I'am a future civil engineer.")
                .start();
            }}
          />
        </Home.Title>
        <Home.Text>
          Whome in futures will be surveying, designing houses and malls,
          managing projects all over the world.. Lets go
        </Home.Text>
        <Home.Link href={cv} target="_blank">
          download cv
        </Home.Link>
      </Home.Column>
      <Home.Column>
        <Home.Img src={img} />
      </Home.Column>
    </Home>
  );
}
