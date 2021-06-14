import React, { useState } from "react";
import { NavBar } from "../components";
import { NavIcon } from "../components/navBar/styles/navBar";
import { NavBarData } from "../data/navbar";
import navIcon from "../assets/svg/menu.svg";
import clearIcon from "../assets/svg/clear.svg";

export default function NavBarContainer() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavBar>
      <NavIcon
        onClick={(e) => {
          setShowMenu(!showMenu);
        }}
        src={navIcon}
      />
      <NavBar.Nav>
        <NavBar.List direction="row">
          {NavBarData.map((item) => {
            return (
              <NavBar.ListItem>
                <NavBar.NavLink to={item.path}>{item.title}</NavBar.NavLink>
              </NavBar.ListItem>
            );
          })}
        </NavBar.List>
      </NavBar.Nav>
      {showMenu && (
        <NavBar.Slider>
          <NavBar.ClearIcon
            onClick={(e) => {
              setShowMenu(!showMenu);
            }}
            src={clearIcon}
          />
          <NavBar.List direction="column">
            {NavBarData.map((item) => {
              return (
                <NavBar.ListItem>
                  <NavBar.NavLink to={item.path}>{item.title}</NavBar.NavLink>
                </NavBar.ListItem>
              );
            })}
          </NavBar.List>
        </NavBar.Slider>
      )}
    </NavBar>
  );
}
