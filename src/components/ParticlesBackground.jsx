import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
    // Determine particle count based on screen width
    const particleCount = useMemo(() => {
        return window.innerWidth < 768 ? 30 : 150;
    }, []);

    // Generate random particles with colors
    const particles = useMemo(() => {
        const colors = [
            '#FF5733',
            '#33FF57',
            '#3357FF',
            '#F333FF',
            '#33FFF5',
            '#F5FF33',
        ];

        return Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 10 + 5,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
    }, [particleCount]);

    return (
        <div
            className="particles-background"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        >
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay
                    }}
                    style={{
                        position: 'absolute',
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: p.color,
                        borderRadius: '50%',
                        willChange: 'transform, opacity',
                        filter: 'blur(0.5px)'
                    }}
                />
            ))}
        </div>
    );
};

export default ParticlesBackground;
