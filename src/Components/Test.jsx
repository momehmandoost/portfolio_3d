import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <color attach="background" args={["pink"]} />
              <Text fontsize={3} color="#555">
                hello
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
};

export default Test;
