/// <reference types="vite/client" />

declare module JSX {
  interface IntrinsicElements {
    group: any;
    geometry: any;
    lineBasicMaterial: any;
    mesh: any;
    octahedronGeometry: any;
    meshBasicMaterial: any;
    orbitControls: ReactThreeFiber.Object3DNode<
      OrbitControls,
      typeof OrbitControls
    >;
  }
}
