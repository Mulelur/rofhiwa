import React from "react";
import { Container, Heading2, Text, Img, Col, Row } from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Heading2 = function ContactHeading2({ children, ...restProps }) {
  return <Heading2 {...restProps}>{children}</Heading2>;
};

Contact.Text = function ContactText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Contact.Img = function ContactImg({ ...restProps }) {
  return <Img {...restProps} />;
};

Contact.Row = function ContactRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Contact.Col = function ContactCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
