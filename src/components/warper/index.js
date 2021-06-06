import React from "react";
import { Container, Main, Side } from "./styles/warper";

export default function Warper({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
}

Warper.Main = function WarperMain({ children, ...resProps }) {
  return <Main {...resProps}>{children}</Main>;
};

Warper.Side = function WarperSide({ children, ...resProps }) {
  return <Side {...resProps}>{children}</Side>;
};
