import React from "react";
import {
  Container,
  Home,
  About,
  Expertise,
  Hobbies,
  Contact,
} from "./styles/background";

export default function Background({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Background.Home = function BackgroundHome({ children, ...restProps }) {
  return <Home {...restProps}>{children}</Home>;
};

Background.About = function BackgroundAbout({ children, ...restProps }) {
  return <About {...restProps}>{children}</About>;
};

Background.Expertise = function BackgroundExpertise({
  children,
  ...restProps
}) {
  return <Expertise {...restProps}>{children}</Expertise>;
};

Background.Hobbies = function BackgroundHobbies({ children, ...restProps }) {
  return <Hobbies {...restProps}>{children}</Hobbies>;
};

Background.Contact = function BackgroundContact({ children, ...restProps }) {
  return <Contact {...restProps}>{children}</Contact>;
};
