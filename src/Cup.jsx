import React from 'react'
import { DoubleSide } from 'three'

const Cup = ({ position = [2, 0, 0], scale = [1, 2, 1], color = "red", solutionColor = "blue", solutionVolume = 1, solutionTransparency = 0.9, transparency = 0.5, baseHeight = 0.05, sideLength = 0.95 }) => {

  const adjustedVolume = solutionVolume - baseHeight * 2;

  return (
    <group scale={scale} position={[position[0], -0.5 + position[1], position[2]]}>
      {/* Outer Cylinder */}
      <mesh position={[0, 0.5 + baseHeight, 0]}>
        <cylinderGeometry args={[1, 1, 1, 20, 1, true, 0, Math.PI * 2]} />
        <meshStandardMaterial opacity={transparency} transparent={true} side={DoubleSide} color={color} />
      </mesh>
      {/* Inner Cylinder */}
      <mesh position={[0, 0.5 + baseHeight, 0]}>
        <cylinderGeometry args={[sideLength, sideLength, 1, 20, 1, true, 0, Math.PI * 2]} />
        <meshStandardMaterial opacity={transparency} transparent={true} side={DoubleSide} color={color} />
      </mesh>
      {/* Extrusion */}
      <mesh position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[sideLength, 1, 20, 1, 0, Math.PI * 2]} />
        <meshStandardMaterial opacity={transparency + 0.3} transparent={true} color={color} />
      </mesh>
      {/* Base */}
      <mesh position={[0, baseHeight / 2, 0]}>
        <cylinderGeometry args={[1, 1, baseHeight, 20, 1, false, 0, Math.PI * 2]} />
        <meshStandardMaterial opacity={transparency + 0.3} transparent={true} color={color} />
      </mesh>
      {/* Solution */}
      <mesh position={[0, baseHeight + adjustedVolume / 2 - 0.001, 0]}>
        <cylinderGeometry args={[sideLength, sideLength, adjustedVolume, 20, 1, false, 0, Math.PI * 2]} />
        <meshStandardMaterial transparent={true} opacity={solutionTransparency} side={DoubleSide} color={solutionColor} />
      </mesh>
    </group>
  )
}

export default Cup