import React from "react";
import {
  Container,
  Column,
  Text,
  Link,
  BottomCol,
  Title,
  Image,
  Row,
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

About.Image = function AboutImage({ ...restProps }) {
  return <Image {...restProps} />;
};

About.Row = function AboutRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
