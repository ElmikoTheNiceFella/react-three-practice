import { useState, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useDrag } from 'react-use-gesture'

const Box = ({ setClicked }) => {

  const ref = useRef()
  const [position, setPosition] = useState([-1, 0, 0])
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const bind = useDrag(({ active, offset: [x, y] }) => {
    setClicked(active)
    setPosition([x / aspect, 0, y / aspect])
  })

  const handleHoverEnter = () => document.body.style.cursor = "grab"
  const handleHoverLeave = () => document.body.style.cursor = "auto"

  return (
    <mesh onPointerEnter={handleHoverEnter} onPointerLeave={handleHoverLeave} {...bind()} position={position} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#eb7a34'} />
    </mesh>
  )
}

export default Box