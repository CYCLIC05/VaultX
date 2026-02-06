import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Suspense } from "react";

const GlowingSphere = ({ position, color, speed, size }: { position: [number, number, number]; color: string; speed: number; size: number }) => (
  <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
    <Sphere args={[size, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.6}
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </Sphere>
  </Float>
);

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#00ff7f" intensity={2} />
          <pointLight position={[-10, -10, -5]} color="#00cc66" intensity={1} />
          
          <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
          
          <GlowingSphere position={[-3, 2, -2]} color="#00ff7f" speed={1.5} size={0.8} />
          <GlowingSphere position={[3, -1, -3]} color="#00cc66" speed={2} size={0.5} />
          <GlowingSphere position={[1, 3, -4]} color="#00ff7f" speed={1} size={0.3} />
          <GlowingSphere position={[-2, -2, -2]} color="#33ffaa" speed={1.8} size={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
