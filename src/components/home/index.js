import React from "react";
import { Column, Container, Text, Title, Link, Img } from "./styles/home";

export default function Home({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Home.Column = function HomeColumn({ children, ...restprops }) {
  return <Column {...restprops}>{children}</Column>;
};

Home.Text = function HomeText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};

Home.Title = function HomeTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Home.Link = function HomeLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};

Home.Img = function HomeImg({ ...restprops }) {
  return <Img {...restprops} />;
};
