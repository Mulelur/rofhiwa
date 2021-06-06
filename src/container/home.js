import React from "react";
import { Home } from "../components";
import HomeIcon from "../icons";
import img from "../assets/homeIcon.svg";
import cv from "../assets/cv/rofhiwa cv - Copy.pdf";

export default function HomeContainer() {
  return (
    <Home>
      <Home.Column>
        <Home.Text>Hi, I'm Rofhiwa Luvhugu</Home.Text>
        <Home.Title>
          A Digital Designer and Softwer Developer from the South.
        </Home.Title>
        <Home.Text>
          Welcome to my portfolio I'am a future civil engineer Whome in futures
          will be surveying, designing houses and malls, managing projects all
          over the world.. Lets go!
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
