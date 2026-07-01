import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Icosahedron, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Group, Mesh } from "three";
import { useThree } from "@react-three/fiber";

function Rings() {
  const group = useRef<Group>(null);
  const { pointer } = useThree();
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x += (pointer.y * 0.4 - group.current.rotation.x) * 0.05;
    group.current.rotation.z += (pointer.x * 0.4 - group.current.rotation.z) * 0.05;
  });
  const rings = [
    { r: 1.6, tube: 0.03, color: "#f2b544", tilt: 0 },
    { r: 2.0, tube: 0.025, color: "#d16ba5", tilt: Math.PI / 3 },
    { r: 2.4, tube: 0.02, color: "#8a5cf6", tilt: Math.PI / 2 },
    { r: 2.8, tube: 0.015, color: "#4c8bf5", tilt: Math.PI / 4 },
  ];
  return (
    <group ref={group}>
      {rings.map((r, i) => (
        <mesh key={i} rotation={[r.tilt, i * 0.3, 0]}>
          <torusGeometry args={[r.r, r.tube, 32, 200]} />
          <meshStandardMaterial color={r.color} emissive={r.color} emissiveIntensity={0.6} roughness={0.2} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function Crystal() {
  const ref = useRef<Mesh>(null);
  const { pointer } = useThree();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.35;
    ref.current.rotation.x += delta * 0.2;
    ref.current.position.x += (pointer.x * 0.3 - ref.current.position.x) * 0.05;
    ref.current.position.y += (pointer.y * 0.3 - ref.current.position.y) * 0.05;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <Icosahedron ref={ref} args={[0.75, 0]}>
        <MeshTransmissionMaterial
          samples={6}
          thickness={0.6}
          roughness={0.05}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.35}
          backside
          color="#ffe4a8"
        />
      </Icosahedron>
    </Float>
  );
}

function Sparks() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y -= delta * 0.08;
  });
  const points = Array.from({ length: 40 }, (_, i) => {
    const a = (i / 40) * Math.PI * 2;
    const r = 3.2 + (i % 3) * 0.25;
    return [Math.cos(a) * r, (Math.sin(i * 1.7) * 1.5), Math.sin(a) * r] as [number, number, number];
  });
  return (
    <group ref={group}>
      {points.map((p, i) => (
        <Float key={i} speed={1 + (i % 4) * 0.3} floatIntensity={0.5}>
          <mesh position={p}>
            <sphereGeometry args={[0.03 + (i % 3) * 0.015, 8, 8]} />
            <meshStandardMaterial color="#ffd8a8" emissive="#f2b544" emissiveIntensity={2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function Scene3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffd8a8" />
        <directionalLight position={[-5, -2, 3]} intensity={0.8} color="#d16ba5" />
        <Rings />
        <Crystal />
        <Sparks />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
