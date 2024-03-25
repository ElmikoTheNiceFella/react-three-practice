import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Box from './Box';
import Cup from './Cup';
import Capsule from './Capsule';
// import Sphere from './Sphere';

function App() {

  const [isDragging, setIsDragging] = useState(false);

  return (
    <Canvas>
      {/* Camera + Lights */}
      <PerspectiveCamera makeDefault position={[-1, 5, 10]} rotation={[-Math.PI / 6, 0, 0]} args={[45, 16, 1, 100]} />
      <pointLight position={[50, 50, 50]} decay={0.1} />
      <ambientLight intensity={0.5} />
      
      {/* Objects */}
      <Capsule />
      <Cup />
      <Box setClicked={setIsDragging} />
      {/* <Sphere/> */}

      {/* Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[50, 50, 1, 1]} />
      </mesh>

      {/* Controls */}
      <OrbitControls enabled={!isDragging} />
    </Canvas>
  );
}

export default App;