import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={2.2}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#f2b544"
          roughness={0.15}
          metalness={0.85}
          distort={0.45}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

function Torus({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={0.55}>
        <torusKnotGeometry args={[0.7, 0.22, 128, 32]} />
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.7} />
      </mesh>
    </Float>
  );
}

export function Scene3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffd8a8" />
        <directionalLight position={[-5, -2, 3]} intensity={0.8} color="#d16ba5" />
        <Blob />
        <Torus position={[2.6, 1.4, -1]} color="#d16ba5" />
        <Torus position={[-2.8, -1.2, -1.5]} color="#8a5cf6" />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
