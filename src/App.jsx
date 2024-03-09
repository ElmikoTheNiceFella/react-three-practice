import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import Box from './Box';

function App() {
  const [scale, setScale] = useState(1);
  const [color, setColor] = useState('#eb7a34')
  const [position, setPosition] = useState([0, 0.375, 0]);

  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    setScale(scale === 1 ? 1.5 : 1);
    setColor(color === '#eb7a34' ? '#34ebe8' : '#eb7a34');
    setPosition(position[1] == 0.375 ? [0, 0.8, 0] : [0, 0.375, 0]);
  };

  const springProps = useSpring({
    scale: [scale, scale, scale],
    position,
    color,
    config: { mass: 1, tension: 500, friction: 60, precision: 0.01 },
  });

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-1, 5, 10]} rotation={[-Math.PI / 6, 0, 0]} args={[45, 16, 1, 100]} />
      <pointLight position={[50, 50, 50]} decay={0.1} />
      <ambientLight intensity={0.5} />
      <animated.mesh scale={springProps.scale} position={springProps.position} onClick={handleClick}>
        <capsuleGeometry args={[0.5, 0.75, 5, 20]} />
        <animated.meshStandardMaterial color={springProps.color} />
      </animated.mesh>
      <Box setClicked={setIsDragging} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[50, 50, 1, 1]} />
      </mesh>
      <OrbitControls enabled={!isDragging} />
    </Canvas>
  );
}

export default App;