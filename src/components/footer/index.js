import React from "react";
import {
  Container,
  Row,
  Column,
  Image,
  Heading3,
  Text,
  List,
  Link,
  ListItem,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Image = function FooterImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Footer.Heading3 = function FooterHeading3({ children, ...restProps }) {
  return <Heading3 {...restProps}>{children}</Heading3>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.List = function FooterList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Footer.ListItem = function FooterListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Footer.Link = function FooterList({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
