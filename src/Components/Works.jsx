import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { styled } from "styled-components";
import { Apple } from "./Apple";

const Data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;

  color: #d3d3d3;
  position: relative;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #6122cf;
  }
`;

const Right = styled.div`
  flex: 1;
`;

export const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {Data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <Canvas camera={{ position: [1, 1, 1], fov: 105 }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={3} />
              <directionalLight position={[1, 2, 3]} />
              <Apple />
            </Suspense>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};
