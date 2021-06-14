import React from "react";
import {
  Col,
  Container,
  Row,
  List,
  ListItem,
  Heading2,
  Img,
  Heading1,
  Image1,
  Header,
  Body,
  Item,
  MyHobbies,
  Avatar,
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

Hobbies.Heading1 = function HobbiesHeading1({ children, ...restProps }) {
  return <Heading1 {...restProps}>{children}</Heading1>;
};

Hobbies.Image1 = function HobbiesImage1({ children, ...restProps }) {
  return <Image1 {...restProps}>{children}</Image1>;
};

Hobbies.Avatar = function HobbiesAvatar({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

Hobbies.Header = function HobbiesHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Hobbies.Body = function HobbiesBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Hobbies.Item = function HobbiesItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Hobbies.MyHobbies = function HobbiesMyHobbies({ children, ...restProps }) {
  return <MyHobbies {...restProps}>{children}</MyHobbies>;
};
