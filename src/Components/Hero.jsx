import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  color: white;
  background-color: red;
  scroll-snap-align: center;
`;

export const Hero = () => {
  return <Section>Hero</Section>;
};
