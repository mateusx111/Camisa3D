import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const { shadows } = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      frames={70}
      alphaTest={0.85}
      scale={1}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        ambient={0.45}
        intensity={4}
        position={[5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
