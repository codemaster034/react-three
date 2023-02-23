import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import * as THREE from "three";

import { Star, Box } from "components";

function ShootingStar() {
  const ref = useRef<any>();
  useFrame((state) => {
    const { mouse, viewport } = state;
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    ref.current.position.x = x;
    ref.current.position.y = y;
  });
  return (
    <Trail
      width={5}
      length={8}
      color={new THREE.Color(2, 1, 10)}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  );
}

function Home() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#fff" />
      <ShootingStar />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
    </>
  );
}

export default function HomeWrapper() {
  return (
    <>
      <Box
        position="fixed"
        left={0}
        top={0}
        width="100vw"
        height="100vh"
        style={{ color: "white" }}
      >
        <Canvas
          camera={{ position: [0, 0, 30] }}
          gl={{ pixelRatio: window.devicePixelRatio }}
        >
          <Home />
        </Canvas>
      </Box>
    </>
  );
}
