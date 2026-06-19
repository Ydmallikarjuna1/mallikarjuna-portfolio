"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingSphere({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <Float speed={2} rotationIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#7C3AED"
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>

      <ambientLight intensity={1} />

      <pointLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <FloatingSphere
        position={[-2, 1, 0]}
      />

      <FloatingSphere
        position={[2, -1, 0]}
      />

      <FloatingSphere
        position={[0, 2, -1]}
      />

    </Canvas>
  );
}