/* eslint-disable react/no-unknown-property */
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Star({ ...props }: any) {
  return (
    <>
      <mesh {...props}>
        <sphereGeometry args={[0.25]} />
        <meshStandardMaterial color={0xffffff} />
      </mesh>
    </>
  );
}
