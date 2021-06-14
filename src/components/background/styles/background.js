import styled from "styled-components/macro";
import homebgimage from "../../../assets/bgImage/ilmenskie-tree-int-bough-4.svg";
import {
  aboutBgColor,
  contactBgColor,
  expertiseBgColor,
  hobbiesBgColor,
  homeBgColor,
} from "../../../color";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
`;

export const Home = styled.div`
  width: 100vw;
  background-color: ${homeBgColor};
  // background-image: url(${homebgimage});
  // background-size: cover;
`;

export const About = styled.div`
  background-color: ${aboutBgColor};
`;

export const Expertise = styled.div`
  background-color: ${expertiseBgColor};
`;

export const Hobbies = styled.div`
  background-color: ${hobbiesBgColor};
`;

export const Contact = styled.div`
  background-color: ${contactBgColor};
`;
