import React from "react";
import {
  Col,
  Container,
  Row,
  List,
  ListItem,
  Heading2,
  Img,
} from "./styles/hobbies";

export default function Hobbies({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hobbies.Row = function HobbiesRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Hobbies.Col = function HobbiesCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};

Hobbies.Heading2 = function HobbiesHeading2({ children, ...restProps }) {
  return <Heading2 {...restProps}>{children}</Heading2>;
};

Hobbies.List = function HobbiesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Hobbies.ListItem = function HobbiesListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Hobbies.Img = function HobbiesImg({ ...restProps }) {
  return <Img {...restProps} />;
};
