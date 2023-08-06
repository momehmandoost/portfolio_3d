import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Cube from "./Cube";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
  return (
    <Container>
      <Canvas camera={{ position: [2, 2, 2], fov: 25 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} />
        <Cube />
      </Canvas>
    </Container>
  );
};

export default Test;
