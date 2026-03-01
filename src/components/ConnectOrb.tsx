import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, Html, Environment } from "@react-three/drei";
import type { Mesh } from "three";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const AnimatedKnot = ({ text = "CONNECT" }: { text?: string }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.8;
      meshRef.current.rotation.y += delta * 1.2;

      // Hover scale animation: small when idle, full size on hover
      const targetScale = hovered ? 1.1 : 0.7;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
    }
  });

  return (
    <group 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <TorusKnot 
        ref={meshRef}
        args={[1, 0.4, 128, 32]} 
        scale={1.2}
      >
        <meshStandardMaterial 
          color="#e5e5e5"
          roughness={0.45}
          metalness={0.35}
          transparent
          opacity={0.7}
        />
      </TorusKnot>

      <Html center className="pointer-events-none">
        <div 
          className="font-semibold text-white/95 text-[11px] sm:text-sm tracking-[0.18em] whitespace-nowrap drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] transition-all duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {text}
        </div>
      </Html>
    </group>
  );
};

export const ConnectOrb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { icon: Github, href: "https://github.com/kaiz2006", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aaryan-kumar-thakur-9a4783206/", label: "LinkedIn" },
    { icon: FileText, href: "/resume.pdf", label: "Resume" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-4 flex gap-2 sm:gap-4 p-2 sm:p-3 rounded-full glass border border-white/20 shadow-lg bg-black/40 backdrop-blur-md"
          >
            {contacts.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full text-white/70 hover:text-white hover:bg-white/20 hover:scale-110 transition-all cursor-pointer"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle contact menu"
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/50 bg-white/20 flex items-center justify-center cursor-pointer overflow-hidden hover:border-white/70 hover:bg-white/50 transition-colors focus:outline-none"
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="relative w-full h-full pointer-events-none"
        >
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2.2} />
          <pointLight position={[-10, -10, -10]} intensity={1.1} color="#999999" />
          <Environment preset="city" />
          <AnimatedKnot text={isOpen ? "CLOSE" : "CONNECT"} />
        </Canvas>
      </button>
    </div>
  );
};
