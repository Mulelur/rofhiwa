import React from "react";
import {
  Container,
  ListItem,
  List,
  NavLink,
  Slider,
  Logo,
  NavIcon,
  Nav,
  ClearIcon,
} from "./styles/navBar";

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

NavBar.Slider = function NavBarSlider({ children, ...restProps }) {
  return <Slider {...restProps}>{children}</Slider>;
};

NavBar.NavIcon = function NavBar({ ...restProps }) {
  return <NavIcon {...restProps} />;
};

NavBar.Logo = function NavBarLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

NavBar.Nav = function NavBarNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

NavBar.ClearIcon = function NavBarClearIcon({ ...restProps }) {
  return <ClearIcon {...restProps} />;
};
