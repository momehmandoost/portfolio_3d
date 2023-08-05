import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
  font-weight: 400;
`;
const Desc = styled.p`
  font-size: 18px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  border: none;
  color: white;
  padding: 10px;
  font-weight: 500;
  width: 100px;
  border-radius: 5px;
`;
const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 550px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Think. Solve.</Title>
          <WhatWeDo>
            <Line src="../../public/img/line.png" />
            <Subtitle>What We Do?</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital expriences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3dModel */}
          <Img src="../../public/img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};
