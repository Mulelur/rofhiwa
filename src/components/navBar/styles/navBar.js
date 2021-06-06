import styled from "styled-components/macro";
import { navColorhover1 } from "../../../color";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-transform: capitalize;
  color: #fff;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  padding: 1.5rem;
  font-weight: 500;
  &:hover {
    color: ${navColorhover1};
  }
`;

export const NavLink = styled(ReachRouterLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
`;
