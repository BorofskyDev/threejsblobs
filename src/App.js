import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";

import "./index.css";
import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere
} from "@react-three/drei";



export default function App() {

  
  return (
    <Canvas>
      <mesh
        visible // object gets render if true
        userData={{ test: "hello" }} // An object that can be used to store custom data about the Object3d
        position={[0, 0, 0]} // The position on the canvas of the object [x,y,x]
        rotation={[0, 0, 0]} // The rotation of the object
        castShadow // Sets whether or not the object cats a shadow
      // There are many more props.....
      >
        {/* A spherical shape*/}
        <sphereGeometry attach="geometry" args={[1, 16, 200]} />
        {/* A standard mesh material*/}
        <meshStandardMaterial
          attach="material" // How the element should attach itself to its parent
          color="#ffffff" // The color of the material
          transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
          roughness={0.1} // The roughness of the material - Defaults to 1
          metalness={0.9} // The metalness of the material - Defaults to 0
        />
      </mesh>
      {/*An ambient light that creates a soft light against the object */}
      <ambientLight color="#fc1577" intensity={0.9} />
      {/*An directional light which aims form the given position */}
      <directionalLight color="#3700fd"  position={[10, 10, -5]} intensity={8} />
      {/*An point light, basically the same as directional. This one points from under */}
      <pointLight color="#00249e"  position={[-1, -10, 5]} intensity={3} />

      {/* We can use the drei Sphere which has a simple API. This sphere has a wobble material attached to it */}
      <Sphere visible position={[3, 4, -6]} args={[1, 16, 200]}>
        <MeshWobbleMaterial
          attach="material"
          color="#EB1E99"
          factor={1} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0}
        />
      </Sphere>

      {/* This sphere has a distort material attached to it */}
      <Sphere visible position={[-2, -1, 0]} args={[.5, 6, 200]}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.5} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0}
        />
      </Sphere>
    </Canvas>
  );
}


// import './App.css';
// import styled from 'styled-components'
// import { Canvas } from '@react-three/fiber';
// import { Suspense } from 'react';
// import { Earth } from './components/earth/Earth';


// const CanvasContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `

// function App() {
//   return <CanvasContainer>
//     <Canvas>
//       <Suspense fallback={null}>
//         <Earth />
//       </Suspense>
//     </Canvas>
//   </CanvasContainer>
// }

// export default App;
