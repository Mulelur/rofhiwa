import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 8rem 0 0;
  padding: 1rem 0 0 0rem;
  color: #2b2b2b;
`;

export const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 656px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex-basis: 100%;
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
`;

export const Text = styled.p`
  max-width: 28.125rem;
  padding-right: 1rem;
  color: #2b2b2b;
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

export const ListItem = styled.li`
  line-height: 1.8;
  font-size: 1.6rem;
`;

export const Link = styled.a`
  padding-bottom: 0.5rem;
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease;
`;
