import React from "react";
import { Container, ListItem, List, NavLink } from "./styles/navBar";

export default function NavBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

NavBar.List = function NavBarList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

NavBar.ListItem = function NavBarListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

NavBar.NavLink = function NavBarNavLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};
