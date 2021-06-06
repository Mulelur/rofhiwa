import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 3rem;
`;

export const Row = styled.div`
  display: flex;
  @media (max-width: 456px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div``;

export const Text = styled.p`
  color: #2b2b2b;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 2rem;
  margin-bottom: 1.8rem;
  margin-top: 4rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease;
  padding-left: 0.7rem;
  padding-right: 0.5rem;
`;

export const BottomCol = styled.div``;

export const Title = styled.h1`
  font-size: 7.1rem;
  line-height: 1;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
`;

export const Image = styled.img`
  margin-top: 4.5rem;
  overflow: hidden;
  max-width: 100%;
  height: auto;
`;
