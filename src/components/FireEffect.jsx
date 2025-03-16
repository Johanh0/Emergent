import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// 🔥 Create Shader Material
const FireShaderMaterial = shaderMaterial(
  { time: 0 },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform float time;
  varying vec2 vUv;
  void main() {
    vec3 color = mix(vec3(1.0, 0.4, 0.0), vec3(1.0, 0.0, 0.0), sin(time + vUv.y * 10.0));
    gl_FragColor = vec4(color, 1.0);
  }
  `
);

// 🔥 **Fix: Extend the Shader Material**
extend({ FireShaderMaterial });

const Fire = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.time = clock.getElapsedTime()));

  return (
    <mesh>
      <planeGeometry args={[2, 3]} />
      <fireShaderMaterial ref={ref} />
    </mesh>
  );
};

const FireEffect = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Fire />
    </Canvas>
  );
};

export default FireEffect;
