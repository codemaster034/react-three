import React, { useRef } from "react";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import img1 from "assets/images/1.jpg";
import img2 from "assets/images/2.jpg";
import img3 from "assets/images/3.jpg";
import img4 from "assets/images/4.jpg";
import img5 from "assets/images/5.jpg";
import img6 from "assets/images/6.jpg";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame(() => {
    //@ts-ignore
    controls.current.update();
  });

  return (
    <>
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        autoRotate={true}
        enableZoom={false}
      />
    </>
  );
};

function Box() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([img1, img3, img6, img4, img5, img2]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

const Sphere = () => {
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0);
  scene.add(cubeCamera);
  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <>
      <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
        <sphereGeometry attach="geometry" args={[2, 32, 32]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          envMap={cubeCamera.renderTarget.texture}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </>
  );
};

export default function SkyBox() {
  return (
    <>
      <CameraControls />
      <Sphere />
      <Box />
    </>
  );
}
