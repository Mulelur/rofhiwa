import React from "react";
import {
  Container,
  Heading1,
  Heading2,
  Text,
  List,
  ListItem,
  Col,
  Row,
  Image,
  Image1,
  Avatar,
  Matrix,
  MatrixBody,
  MatrixHeader,
  MatrixList,
  MatrixListItem,
  MatrixTitleContainer,
  SubjectRow,
  Link,
  MMRow,
} from "./styles/expertise";

export default function Expertise({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Expertise.Heading1 = function ExpertiseHeading1({ children, ...restProps }) {
  return <Heading1 {...restProps}>{children}</Heading1>;
};

Expertise.Text = function ExpertiseHeading1({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Expertise.Heading2 = function ExpertiseHeading2({ children, ...restProps }) {
  return <Heading2 {...restProps}>{children}</Heading2>;
};

Expertise.List = function ExpertiseList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Expertise.ListItem = function ExpertiseListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Expertise.Row = function ExpertiseListRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Expertise.Col = function ExpertiseCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};

Expertise.Image = function ExpertiseImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Expertise.Image1 = function ExpertiseImage1({ children, ...restProps }) {
  return <Image1 {...restProps}>{children}</Image1>;
};

Expertise.Matrix = function ExpertiseMatrix({ children, ...restProps }) {
  return <Matrix {...restProps}>{children}</Matrix>;
};

Expertise.MatrixBody = function ExpertiseMatrixBody({
  children,
  ...restProps
}) {
  return <MatrixBody {...restProps}>{children}</MatrixBody>;
};

Expertise.MatrixHeader = function ExpertiseMatrixHeader({
  children,
  ...restProps
}) {
  return <MatrixHeader {...restProps}>{children}</MatrixHeader>;
};

Expertise.MatrixList = function ExpertiseMatrixList({
  children,
  ...restProps
}) {
  return <MatrixList {...restProps}>{children}</MatrixList>;
};
Expertise.MatrixListItem = function ExpertiseMatrixListItem({
  children,
  ...restProps
}) {
  return <MatrixListItem {...restProps}>{children}</MatrixListItem>;
};

Expertise.Avatar = function ExpertiseAvatar({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

Expertise.SubjectRow = function ExpertiseSubjectRow({
  children,
  ...restProps
}) {
  return <SubjectRow {...restProps}>{children}</SubjectRow>;
};

Expertise.MatrixTitleContainer = function ExpertiseMatrixTitleContainer({
  children,
  ...restProps
}) {
  return <MatrixTitleContainer {...restProps}>{children}</MatrixTitleContainer>;
};

Expertise.Link = function ExpertiseLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Expertise.MMRow = function ExpertiseMMRow({ children, ...restProps }) {
  return <MMRow {...restProps}>{children}</MMRow>;
};
