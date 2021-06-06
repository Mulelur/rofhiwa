import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 4rem;
  color: #2b2b2b;
`;

export const Heading2 = styled.h2`
  text-transform: capitalize;
  font-size: 1.8rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  text-transform: capitalize;
`;

export const Img = styled.img``;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 876px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  text-align: center;
`;
