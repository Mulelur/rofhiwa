import styled from "styled-components/macro";
import { homeBgColor, navColorhover1, textColor1 } from "../../../color";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-transform: capitalize;
  color: #fff;
  @media (max-width: 515px) {
    justify-content: flex-end;
    align-items: center;
  }
  position: relative;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

export const ListItem = styled.li`
  font-size: 1.6rem;
  padding: 1.5rem;
  font-weight: 800;
  line-height: 1.5;
  &:hover {
    color: ${navColorhover1};
  }
`;

export const NavLink = styled(ReachRouterLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
  position: relative;
  transition: all 0.2s ease;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 4px;
    white-space: nowrap;
    content: attr(data-text) attr(data-text);
    color: transparent;
    line-height: 2;
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: #fff;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 515px) {
    display: none;
  }
`;

export const Slider = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  display: none;
  background-color: ${homeBgColor};
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  @media (max-width: 515px) {
    display: block;
  }
  z-index: 999;
`;

// export const

export const NavIcon = styled.img`
  display: none;
  width: 4rem;
  margin: 1rem;
  fill: ${textColor1};
  @media (max-width: 515px) {
    display: block;
  }
`;

export const Logo = styled.img``;

export const ClearIcon = styled.img`
  width: 3rem;
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;
`;
