/* eslint-disable react/no-unknown-property */
import React, { lazy } from "react";
import { Canvas } from "@react-three/fiber";

import "./App.css";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 30] }}
        gl={{ pixelRatio: window.devicePixelRatio }}
      >
        <Home />
      </Canvas>
    </div>
  );
}

export default App;
