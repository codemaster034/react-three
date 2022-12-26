import React from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

import spaceImg from "assets/images/space.jpg";
import planetImg from "assets/images/planet.jpg";

import { Star, SkyBox } from "components";

export default function Home() {
  const [spaceTexture, planetTexture] = useLoader(TextureLoader, [
    spaceImg,
    planetImg,
  ]);

  const { scene } = useThree();
  spaceTexture.encoding = THREE.sRGBEncoding;
  scene.background = spaceTexture;

  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} color="#fff" />
      {/* {Array(250)
        .fill(1)
        .map((_, i) => {
          return (
            <Star
              position={Array(3)
                .fill(1)
                .map(() => THREE.MathUtils.randFloatSpread(100))}
              key={i}
            />
          );
        })} */}
      <SkyBox />
      {/* <mesh>
        <torusGeometry args={[10, 3, 16, 100]} />
        <meshStandardMaterial color="#ff6347" />
      </mesh>
      <mesh position={[-5, 0, 20]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial map={planetTexture} />
      </mesh> */}
    </>
  );
}
