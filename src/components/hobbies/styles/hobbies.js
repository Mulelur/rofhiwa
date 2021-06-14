import styled from "styled-components/macro";
import img1 from "../../../assets/rofhiwa_3.jpeg";

export const Container = styled.div``;

export const Img = styled.img``;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Col = styled.div``;

export const Heading2 = styled.h2`
  font-size: 2.4rem;
  letter-spacing: 1px;
  position: relative;

  margin: 2rem 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  flex-direction: column;
`;

export const ListItem = styled.li`
  font-size: 1.6rem;
  padding: 1.4rem;
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
  @media (max-width) {
    font-size: 5.2rem;
  }
`;

export const Header = styled.div``;

export const Body = styled.div``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyHobbies = styled.div`
  display: flex;

  padding: 1.9rem;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
