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
  gap: 20px;
`;
const Title = styled.h1`
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
const Subtitle = styled.h2``;
const Desc = styled.p``;
const Button = styled.button``;
const Right = styled.div`
  flex: 3;
`;
const Img = styled.img``;

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
