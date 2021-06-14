import styled from "styled-components/macro";
import img1 from "../../../assets/rofhiwa_1.jpeg";

export const Container = styled.div`
  margin: 4rem;
  color: #2b2b2b;
`;

export const Heading2 = styled.h2`
  text-transform: capitalize;
  font-size: 1.8rem;
`;

export const Text = styled.p`
  padding: 1.9rem;
  font-size: 1.6rem;
  text-transform: capitalize;
`;

export const Img = styled.img``;

export const Row = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 876px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  text-align: center;
  width: 25rem;
`;

export const Avatar = styled.div`
  @media (max-width: 768px) {
    min-width: 200px;
    min-height: 200px;
  }
  @media (max-width: 1040px) {
    margin-bottom: 30px;
  }

  min-width: 300px;
  min-height: 300px;
  position: relative;
  border-radius: 100%;
`;

export const Image1 = styled.div`
  background-image: url(${img1});
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: morph 8s ease-in-out infinite 1s;
  background-blend-mode: multiply;
  box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;

export const Heading1 = styled.h1`
  font-size: 7.1rem;
  color: #fff;
  @media (max-width: 445px) {
    font-size: 4.7rem;
  }
  @media (max-width: 350px) {
    font-size: 3.5rem;
  }
`;

export const Mail = styled.a`
  padding: 1.9rem;
  font-size: 1.6rem;
  text-transform: capitalize;
  text-decoration: none;
  color: inherit;
`;
