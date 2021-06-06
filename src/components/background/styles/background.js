import styled from "styled-components/macro";
import { aboutBgColor, expertiseBgColor, homeBgColor } from "../../../color";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = styled.div`
  background-color: ${homeBgColor};
`;

export const About = styled.div`
  background-color: ${aboutBgColor};
`;

export const Expertise = styled.div`
  background-color: ${expertiseBgColor};
`;

export const Hobbies = styled.div`
  background-color: ${homeBgColor};
`;

export const Contact = styled.div`
  background-color: ${homeBgColor};
`;
