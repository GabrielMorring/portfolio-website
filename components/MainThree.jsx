import React from "react";

const MainThree = () => {
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    </>
  );
};

export default MainThree;
