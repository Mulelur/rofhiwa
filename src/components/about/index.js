import React from "react";
import {
  Container,
  Column,
  Text,
  Link,
  BottomCol,
  Title,
  Avatar,
  Row,
  Img,
} from "./styles/about";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Column = function AboutColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

About.Text = function AboutText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

About.Link = function AboutLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

About.BottomCol = function AboutBottomCol({ children, ...restProps }) {
  return <BottomCol {...restProps}>{children}</BottomCol>;
};

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

About.Avatar = function AboutImage({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

About.Row = function AboutRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

About.Img = function AboutImage({ children, ...restProps }) {
  return <Img {...restProps}>{children}</Img>;
};

About.Link = function AboutLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
