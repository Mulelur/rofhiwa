import React from "react";
import { NavBar } from "../components";
import { NavBarData } from "../data/navbar";

export default function NavBarContainer() {
  return (
    <NavBar>
      <NavBar.List>
        {NavBarData.map((item) => {
          return (
            <NavBar.ListItem>
              <NavBar.NavLink to={item.path}>{item.title}</NavBar.NavLink>
            </NavBar.ListItem>
          );
        })}
      </NavBar.List>
    </NavBar>
  );
}
