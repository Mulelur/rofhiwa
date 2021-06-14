import styled from "styled-components/macro";
import { textColor1 } from "../../../color";

export const Container = styled.div`
  width: 100wv;
  margin-top: 8rem;
  padding: 2rem;
  padding-bottom: 0;
  color: ${({ footer }) => footer && "#ccc"};
  color: ${({ contact }) => contact && textColor1};
  @media (max-width: 560px) {
    margin-top: 7.2rem;
    padding: 0.7rem;
    padding-bottom: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  @media (max-width: 656px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  max-width: 100%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Heading3 = styled.h3`
  font-size: 2.5rem;
  font-family: Canela Web, serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  @media (max-width: 760px) {
    font-size: 1.9rem;
    // margin-top: 1.5rem;
  }
`;

export const Text = styled.p`
  max-width: 28.125rem;
  padding-right: 1rem;

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 1.8rem;
  padding-rigth: 2.3rem;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
`;

export const ListColumn = styled.div`
  padding: 3rem;
  @media (max-width: 760px) {
    padding: 2rem;
  }
`;

export const ListItem = styled.li`
  line-height: 1.8;
  font-size: 1.6rem;
  min-width: 12rem;
  padding: 1rem;
  color: ${({ color }) => color};
`;

export const Link = styled.a`
  padding-bottom: 0.5rem;
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease;
`;
