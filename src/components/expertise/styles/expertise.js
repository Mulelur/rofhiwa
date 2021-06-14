import styled from "styled-components/macro";
import img from "../../../assets/rofhiwa_2.jpeg";
import img1 from "../../../assets/rofhiwa_2.jpeg";

export const Container = styled.div``;

export const Heading1 = styled.h1`
  font-size: 7.1rem;
  color: #fff;
  @media (max-width) {
    font-size: 5.2rem;
  }
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
  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SubjectRow = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  padding: 2rem;
  // @media (max-width: 576px) {
  //   padding: 1.2rem;
  //   width: 100%;
  // }
`;
export const Avatar = styled.div`
  margin-top: 10rem;
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

export const Image = styled.div`
  background-image: url(${img});
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

export const Matrix = styled.div`
  width: 25rem;
  margin: 2rem;
  border: 1px dashed #ccc;
  padding: 2.5rem;
  @media (max-width: 745px) {
    width: 35rem;
  }
  @media (max-width: 420px) {
    width: 22rem;
  }
`;

export const MatrixHeader = styled.div`
  font-size: 1.6rem;
  text-align: center;
  color: #ccc;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #ccc;
`;

export const MatrixBody = styled.div``;

export const MatrixList = styled.ul`
  list-style: none;
`;

export const MatrixListItem = styled.li`
  max-width: 30rem;
  font-size: 1.6rem;
  padding: 1.2rem;
  color: #ccc;
`;

export const MatrixTitleContainer = styled.div`
  text-align: center;
`;

export const Link = styled.a``;

export const MMRow = styled.div`
  padding: 2rem;
  display: flex;
  transition: all 0.2s;
  justify-content: space-around;
  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
  }
`;
