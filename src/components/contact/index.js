import React from "react";
import {
  Container,
  Heading2,
  Text,
  Img,
  Col,
  Row,
  Avatar,
  Image1,
  Mail,
  Heading1,
} from "./styles/contact";

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

Contact.Avatar = function ContactAvatar({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

Contact.Image1 = function ContactImage1({ children, ...restProps }) {
  return <Image1 {...restProps}>{children}</Image1>;
};

Contact.Heading1 = function ContactHeading1({ children, ...restProps }) {
  return <Heading1 {...restProps}>{children}</Heading1>;
};

Contact.Mail = function ContactMail({ children, ...restProps }) {
  return <Mail {...restProps}>{children}</Mail>;
};
