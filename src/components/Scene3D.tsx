import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox, Torus, Cylinder } from "@react-three/drei";
import { Suspense } from "react";
import { useTheme } from "next-themes";

// Cartoony Donut
const CartoonDonut = ({
  position,
  color,
  speed,
  scale,
  isDark
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  isDark: boolean;
}) => (
  <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.5}>
    <Torus args={[scale, scale * 0.4, 16, 32]} position={position} rotation={[0.5, 0.2, 0]}>
      <meshToonMaterial
        color={color}
        transparent
        opacity={isDark ? 0.6 : 0.5}
        emissive={color}
        emissiveIntensity={isDark ? 0.3 : 0.15}
      />
    </Torus>
  </Float>
);

// Cartoony Cube
const CartoonCube = ({
  position,
  color,
  speed,
  scale,
  isDark
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  isDark: boolean;
}) => (
  <Float speed={speed} rotationIntensity={0.8} floatIntensity={2}>
    <RoundedBox args={[scale, scale, scale]} radius={0.15} position={position}>
      <meshToonMaterial
        color={color}
        transparent
        opacity={isDark ? 0.65 : 0.55}
        emissive={color}
        emissiveIntensity={isDark ? 0.25 : 0.1}
      />
    </RoundedBox>
  </Float>
);

// Cartoony Cylinder
const CartoonCylinder = ({
  position,
  color,
  speed,
  scale,
  isDark
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  isDark: boolean;
}) => (
  <Float speed={speed} rotationIntensity={1} floatIntensity={1.8}>
    <Cylinder args={[scale * 0.4, scale * 0.4, scale * 1.2, 16]} position={position}>
      <meshToonMaterial
        color={color}
        transparent
        opacity={isDark ? 0.6 : 0.5}
        emissive={color}
        emissiveIntensity={isDark ? 0.28 : 0.12}
      />
    </Cylinder>
  </Float>
);

const Scene3D = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  // Theme-aware colors - pastel and vibrant for cartoony vibe
  const colors = isDark
    ? {
      pink: "#ff91e8",      // Bright pink
      cyan: "#5dfdff",      // Electric cyan
      purple: "#c891ff",    // Lavender
      yellow: "#ffd966",    // Soft yellow
      green: "#7bffb2",     // Mint green
      orange: "#ffb366",    // Peach
    }
    : {
      pink: "#ff5ec7",      // Deeper pink for light mode
      cyan: "#00d4ff",      // Deeper cyan
      purple: "#9d5eff",    // Deeper purple
      yellow: "#ffb300",    // Deeper yellow
      green: "#00e676",     // Deeper green
      orange: "#ff8a3d",    // Deeper orange
    };

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'transparent', zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{
          alpha: true,
          antialias: true,
          premultipliedAlpha: false,
          preserveDrawingBuffer: true,
        }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          {/* Cartoony lighting */}
          <ambientLight intensity={isDark ? 0.4 : 0.6} />
          <directionalLight position={[5, 5, 5]} intensity={isDark ? 0.8 : 1} color="#ffffff" />
          <pointLight position={[-5, -5, 2]} intensity={isDark ? 0.3 : 0.4} color={colors.cyan} />

          {/* Floating cartoony objects */}
          <CartoonDonut position={[-3, 2, -3]} color={colors.pink} speed={1.2} scale={0.6} isDark={isDark} />
          <CartoonDonut position={[3.5, -1.5, -4]} color={colors.cyan} speed={1.5} scale={0.5} isDark={isDark} />

          <CartoonCube position={[2, 2.5, -2]} color={colors.purple} speed={1.8} scale={0.8} isDark={isDark} />
          <CartoonCube position={[-2.5, -2, -3]} color={colors.yellow} speed={1.3} scale={0.6} isDark={isDark} />

          <CartoonCylinder position={[0, -3, -5]} color={colors.green} speed={1.6} scale={0.7} isDark={isDark} />
          <CartoonCylinder position={[-3.5, 1, -4]} color={colors.orange} speed={1.4} scale={0.5} isDark={isDark} />

          {/* Extra small cute shapes */}
          <CartoonCube position={[4, 0, -2.5]} color={colors.pink} speed={2} scale={0.4} isDark={isDark} />
          <CartoonDonut position={[1, -1, -2]} color={colors.green} speed={1.7} scale={0.35} isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
