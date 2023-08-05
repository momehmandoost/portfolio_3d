import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;

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
  width: 130px;
  border-radius: 5px;
`;

export const Who = () => {
  return (
    <Section>
      <Container>
        <Left>{/* 3dModel */}</Left>
        <Right>
          <Title>Think Outside Square Space</Title>
          <WhatWeDo>
            <Line src="../../public/img/line.png" />
            <Subtitle>Who We Are?</Subtitle>
          </WhatWeDo>
          <Desc>a creative group of designer and developes with a passion</Desc>
          <Button>See our portfolio</Button>
        </Right>
      </Container>
    </Section>
  );
};
