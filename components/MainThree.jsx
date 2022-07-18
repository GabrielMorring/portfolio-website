import { PerspectiveCamera, OrbitControls, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

import { degreesToRadians } from "../utils/angle";

const MainThree = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 10]} />
      <OrbitControls enableZoom={false} autoRotate />

      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>

      <ambientLight color="#ffffff" />
    </>
  );
};

export default MainThree;
