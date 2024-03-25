import { useSpring, animated } from '@react-spring/three';
import { useState } from 'react';

const Capsule = () => {

  const [scale, setScale] = useState(1);
  const [color, setColor] = useState('#eb7a34')
  const [position, setPosition] = useState([0, 0.375, 0]);

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
    <animated.mesh scale={springProps.scale} position={springProps.position} onClick={handleClick}>
      <capsuleGeometry args={[0.5, 0.75, 5, 20]} />
      <animated.meshStandardMaterial color={springProps.color} />
    </animated.mesh>
  )
}

export default Capsule