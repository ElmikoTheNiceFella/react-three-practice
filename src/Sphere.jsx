// import { useFrame } from "@react-three/fiber";
// import { CatmullRomCurve3, Vector3, Mesh } from "three";
// import { useRef, useState } from "react";

// export default () => {
//   const sphereRef = useRef<Mesh>(null);

//   const points = [
//     new Vector3(-5, 0, 0),
//     new Vector3(0, 5, 0),
//     new Vector3(5, 0, 0),
//     new Vector3(0, -5, 0),
//     new Vector3(-5, 0, 0),
//   ]

//   const curve = new CatmullRomCurve3(points)

//   useFrame(({ clock }) => {
//     if (sphereRef.current) {
//       const t = clock.getElapsedTime()
//       const position = curve.getPointAt((t / 2000 % 6)/6)
  
//       sphereRef.current.position.copy(position)
//     }
//   })

//   return (
//     <>
//       <bufferGeometry />
//       <mesh ref={sphereRef} position={[0,0,0]} args={[1, 1, 1]}>
//         <sphereGeometry args={[2.5, 18, 10, 0, Math.PI * 2, 0, Math.PI]} />
//         <meshStandardMaterial color="red" />
//       </mesh>
//     </>
//   )
// }