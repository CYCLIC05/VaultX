import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox, Torus, Cylinder, Sphere, useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import * as THREE from "three";

// Cartoony Vault Safe
const CartoonVault = ({ position, isDark }: { position: [number, number, number]; isDark: boolean }) => {
    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
            <group position={position}>
                {/* Main vault body - rounded box */}
                <RoundedBox args={[1.5, 1.8, 1.2]} radius={0.15}>
                    <meshToonMaterial
                        color={isDark ? "#00ff7f" : "#00cc66"}
                        transparent
                        opacity={0.9}
                        emissive={isDark ? "#00ff7f" : "#00cc66"}
                        emissiveIntensity={0.2}
                    />
                </RoundedBox>

                {/* Vault door - darker color */}
                <RoundedBox args={[1.3, 1.5, 0.3]} radius={0.1} position={[0, 0, 0.7]}>
                    <meshToonMaterial
                        color={isDark ? "#00cc66" : "#00994d"}
                        transparent
                        opacity={0.95}
                    />
                </RoundedBox>

                {/* Circular lock */}
                <Torus args={[0.35, 0.08, 16, 32]} position={[0, 0, 1]} rotation={[0, 0, 0]}>
                    <meshToonMaterial
                        color={isDark ? "#ffd700" : "#ffaa00"}
                        emissive="#ffd700"
                        emissiveIntensity={0.4}
                    />
                </Torus>

                {/* Lock center */}
                <Cylinder args={[0.15, 0.15, 0.1, 16]} position={[0, 0, 1.05]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshToonMaterial
                        color={isDark ? "#ff0" : "#ffaa00"}
                        emissive="#ffd700"
                        emissiveIntensity={0.3}
                    />
                </Cylinder>
            </group>
        </Float>
    );
};

// Cartoony Credit Card
const CartoonCard = ({ position, isDark }: { position: [number, number, number]; isDark: boolean }) => {
    return (
        <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
            <group position={position} rotation={[0, 0.3, 0.1]}>
                <RoundedBox args={[2, 1.3, 0.1]} radius={0.1}>
                    <meshToonMaterial
                        color={isDark ? "#5dfdff" : "#00d4ff"}
                        transparent
                        opacity={0.9}
                        emissive={isDark ? "#5dfdff" : "#00d4ff"}
                        emissiveIntensity={0.25}
                    />
                </RoundedBox>

                {/* Chip */}
                <RoundedBox args={[0.4, 0.3, 0.08]} radius={0.05} position={[-0.5, 0.2, 0.08]}>
                    <meshToonMaterial
                        color="#ffd700"
                        emissive="#ffd700"
                        emissiveIntensity={0.3}
                    />
                </RoundedBox>

                {/* Stripe */}
                <RoundedBox args={[1.8, 0.15, 0.08]} radius={0.02} position={[0, -0.3, 0.08]}>
                    <meshToonMaterial
                        color={isDark ? "#00cc99" : "#00aa88"}
                        opacity={0.8}
                    />
                </RoundedBox>
            </group>
        </Float>
    );
};

// Cartoony Coins Stack
const CartoonCoins = ({ position, isDark }: { position: [number, number, number]; isDark: boolean }) => {
    return (
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={1.2}>
            <group position={position}>
                {[0, 0.15, 0.3, 0.45].map((offset, i) => (
                    <Cylinder
                        key={i}
                        args={[0.4, 0.4, 0.1, 32]}
                        position={[0, offset, 0]}
                        rotation={[0, i * 0.3, 0]}
                    >
                        <meshToonMaterial
                            color={i % 2 === 0 ? (isDark ? "#ffd700" : "#ffaa00") : (isDark ? "#ff0" : "#cc8800")}
                            emissive="#ffd700"
                            emissiveIntensity={0.3}
                        />
                    </Cylinder>
                ))}
            </group>
        </Float>
    );
};

// Cartoony Character (round robot)
const CartoonCharacter = ({ position, isDark }: { position: [number, number, number]; isDark: boolean }) => {
    return (
        <Float speed={1.3} rotationIntensity={0.5} floatIntensity={2}>
            <group position={position}>
                {/* Body - large sphere */}
                <Sphere args={[0.8, 32, 32]}>
                    <meshToonMaterial
                        color={isDark ? "#00ff7f" : "#00cc66"}
                        emissive={isDark ? "#00ff7f" : "#00cc66"}
                        emissiveIntensity={0.2}
                    />
                </Sphere>

                {/* Eyes - two small spheres */}
                <Sphere args={[0.15, 16, 16]} position={[-0.25, 0.3, 0.7]}>
                    <meshToonMaterial color="#000" />
                </Sphere>
                <Sphere args={[0.15, 16, 16]} position={[0.25, 0.3, 0.7]}>
                    <meshToonMaterial color="#000" />
                </Sphere>

                {/* Eye highlights */}
                <Sphere args={[0.06, 8, 8]} position={[-0.22, 0.35, 0.78]}>
                    <meshToonMaterial color="#fff" emissive="#fff" emissiveIntensity={1} />
                </Sphere>
                <Sphere args={[0.06, 8, 8]} position={[0.28, 0.35, 0.78]}>
                    <meshToonMaterial color="#fff" emissive="#fff" emissiveIntensity={1} />
                </Sphere>

                {/* Vault door on chest */}
                <Torus args={[0.25, 0.05, 16, 32]} position={[0, -0.1, 0.75]}>
                    <meshToonMaterial
                        color={isDark ? "#ffd700" : "#ffaa00"}
                        emissive="#ffd700"
                        emissiveIntensity={0.4}
                    />
                </Torus>
            </group>
        </Float>
    );
};

// Main Interactive 3D Scene Component
interface Interactive3DSceneProps {
    elements?: ('vault' | 'card' | 'coins' | 'character')[];
    className?: string;
}

const Interactive3DScene = ({
    elements = ['vault', 'card', 'coins', 'character'],
    className = ""
}: Interactive3DSceneProps) => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDark = currentTheme === "dark";

    const elementPositions: Record<string, [number, number, number]> = {
        vault: [-2, 0, -2],
        card: [2, 1, -3],
        coins: [2, -1, -2],
        character: [-2, 1.5, -3],
    };

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 1 }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                gl={{
                    alpha: true,
                    antialias: true,
                }}
                style={{ background: 'transparent' }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={isDark ? 0.5 : 0.7} />
                    <directionalLight position={[5, 5, 5]} intensity={isDark ? 0.8 : 1} color="#ffffff" />
                    <pointLight position={[-5, -5, 2]} intensity={isDark ? 0.4 : 0.5} color="#00ff7f" />

                    {elements.includes('vault') && <CartoonVault position={elementPositions.vault} isDark={isDark} />}
                    {elements.includes('card') && <CartoonCard position={elementPositions.card} isDark={isDark} />}
                    {elements.includes('coins') && <CartoonCoins position={elementPositions.coins} isDark={isDark} />}
                    {elements.includes('character') && <CartoonCharacter position={elementPositions.character} isDark={isDark} />}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Interactive3DScene;
