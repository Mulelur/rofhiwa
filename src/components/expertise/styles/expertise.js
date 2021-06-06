import styled from "styled-components/macro";

export const Container = styled.div``;

export const Heading1 = styled.h1`
  font-size: 7.1rem;
  color: #fff;
`;

export const Text = styled.p`
  margin: 1.5rem;
  font-size: 1.6rem;
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 1.8rem;
`;

export const Heading2 = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  padding-bottom: 2rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  line-height: 2;
  color: #fff;
  font-size: 1.7rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  width: 45vw;
  padding: 2rem;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Matrix = styled.div`
  margin: 3rem;
  border: 1px dashed #2b2b2b;
  padding: 2.5rem;
`;

export const MatrixHeader = styled.div`
  font-size: 1.6rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #2b2b2b;
`;

export const MatrixBody = styled.div``;

export const MatrixList = styled.ul`
  list-style: none;
`;

export const MatrixListItem = styled.li`
  font-size: 1.6rem;
  padding: 1.2rem;
`;
