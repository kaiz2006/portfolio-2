import { useEffect, useRef, useState } from 'react';

interface Particle {
    x: number;
    y: number;
    z: number;
    targetX: number;
    targetY: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    size: number;
    angle: number;
    speed: number;
}

interface AntigravityProps {
    count?: number;
    magnetRadius?: number;
    ringRadius?: number;
    waveSpeed?: number;
    waveAmplitude?: number;
    particleSize?: number;
    lerpSpeed?: number;
    color?: string;
    autoAnimate?: boolean;
    particleVariance?: number;
    rotationSpeed?: number;
    depthFactor?: number;
    pulseSpeed?: number;
    particleShape?: 'circle' | 'capsule' | 'square';
    fieldStrength?: number;
}

const Antigravity = ({
    count = 300,
    magnetRadius = 6,
    ringRadius = 7,
    waveSpeed = 0.4,
    waveAmplitude = 1,
    particleSize = 1.5,
    lerpSpeed = 0.05,
    color = '#FF3333',
    autoAnimate = true,
    particleVariance = 1,
    rotationSpeed = 0,
    depthFactor = 1,
    pulseSpeed = 3,
    particleShape = 'capsule',
    fieldStrength = 10,
}: AntigravityProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const timeRef = useRef(0);
    const animationRef = useRef<number>(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Initialize particles
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        const updateDimensions = () => {
            const rect = parent.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
        };

        updateDimensions();
        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(parent);

        return () => resizeObserver.disconnect();
    }, []);

    // Create particles when dimensions change
    useEffect(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return;

        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;
        const radius = Math.min(dimensions.width, dimensions.height) * 0.35 * ringRadius / 10;

        const particles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const variance = (Math.random() - 0.5) * particleVariance * 50;
            const r = radius + variance;

            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;

            particles.push({
                x,
                y,
                z: Math.random() * depthFactor,
                targetX: x,
                targetY: y,
                baseX: x,
                baseY: y,
                vx: 0,
                vy: 0,
                size: particleSize * (0.5 + Math.random() * 0.5),
                angle: angle,
                speed: 0.5 + Math.random() * 0.5,
            });
        }
        particlesRef.current = particles;
    }, [dimensions, count, ringRadius, particleVariance, depthFactor, particleSize]);

    // Animation loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const animate = () => {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            timeRef.current += 0.016;

            const centerX = dimensions.width / 2;
            const centerY = dimensions.height / 2;
            const magnetDist = magnetRadius * 20;

            particlesRef.current.forEach((particle, index) => {
                // Wave animation
                if (autoAnimate) {
                    const waveOffset = Math.sin(timeRef.current * waveSpeed + particle.angle * 3) * waveAmplitude * 20;
                    const pulseOffset = Math.sin(timeRef.current * pulseSpeed + index * 0.1) * 5;

                    particle.targetX = particle.baseX + Math.cos(particle.angle) * (waveOffset + pulseOffset);
                    particle.targetY = particle.baseY + Math.sin(particle.angle) * (waveOffset + pulseOffset);
                }

                // Rotation
                if (rotationSpeed > 0) {
                    const currentAngle = Math.atan2(particle.baseY - centerY, particle.baseX - centerX);
                    const dist = Math.sqrt(
                        Math.pow(particle.baseX - centerX, 2) + Math.pow(particle.baseY - centerY, 2)
                    );
                    const newAngle = currentAngle + rotationSpeed * 0.01;
                    particle.baseX = centerX + Math.cos(newAngle) * dist;
                    particle.baseY = centerY + Math.sin(newAngle) * dist;
                    particle.angle = newAngle;
                }

                // Mouse interaction (magnetic field)
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < magnetDist) {
                    const force = (1 - dist / magnetDist) * fieldStrength;
                    particle.targetX = particle.x - (dx / dist) * force * 10;
                    particle.targetY = particle.y - (dy / dist) * force * 10;
                }

                // Smooth movement (lerp)
                particle.x += (particle.targetX - particle.x) * lerpSpeed;
                particle.y += (particle.targetY - particle.y) * lerpSpeed;

                // Draw particle
                const depthScale = 0.5 + particle.z * 0.5;
                const size = particle.size * depthScale;
                const alpha = 0.3 + particle.z * 0.7;

                ctx.globalAlpha = alpha;
                ctx.fillStyle = color;

                if (particleShape === 'circle') {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
                    ctx.fill();
                } else if (particleShape === 'capsule') {
                    ctx.beginPath();
                    ctx.ellipse(particle.x, particle.y, size * 2, size, particle.angle, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.fillRect(particle.x - size, particle.y - size, size * 2, size * 2);
                }

                // Glow effect
                ctx.globalAlpha = alpha * 0.3;
                ctx.shadowColor = color;
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, size * 1.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            ctx.globalAlpha = 1;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [dimensions, magnetRadius, waveSpeed, waveAmplitude, lerpSpeed, color, autoAnimate, rotationSpeed, pulseSpeed, fieldStrength, particleShape]);

    // Mouse tracking
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={dimensions.width}
            height={dimensions.height}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
        />
    );
};

export default Antigravity;
