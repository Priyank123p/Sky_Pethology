import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PageHeader = () => {
    const location = useLocation();
    const path = location.pathname;

    // Configuration for each page
    const pageDetails = {
        '/about': {
            title: 'About Us',
            description: 'Learn more about our mission, vision, and dedicated team.'
        },
        '/tests': {
            title: 'Diagnostic Tests',
            description: 'Explore our wide range of precise and reliable diagnostic tests.'
        },
        '/packages': {
            title: 'Health Packages',
            description: 'Comprehensive health checkup packages tailored for your well-being.'
        },
        '/contact': {
            title: 'Contact Us',
            description: 'Get in touch with us for appointments, queries, or home collection.'
        }
    };

    // Generate random particles
    // Memoize to prevent re-generation on every render (though they are random, we want them consistent while viewing)
    const particles = useMemo(() => {
        return Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 7 + 6,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
    }, []);

    // Don't render on Home page or if path not found
    if (path === '/' || !pageDetails[path]) {
        return null;
    }

    const { title, description } = pageDetails[path];

    return (
        <div className="page-header position-relative overflow-hidden" style={{ marginTop: '7%' }}>
            {/* Background with overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                    zIndex: -2
                }}
            ></div>

            {/* Application of Particles */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1, pointerEvents: 'none' }}>
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
                            y: [0, -20, 0], // Float up and down slowly
                            x: [0, 15, 0],  // Drift sideways
                            opacity: [0.1, 0.4, 0.1],
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
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            boxShadow: `0 0 ${p.size * 2}px rgba(255, 255, 255, 0.5)`,
                            borderRadius: '50%',
                        }}
                    />
                ))}
            </div>

            <Container className="py-5 text-center text-white position-relative" style={{ zIndex: 1 }}>
                <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {title}
                </h1>
                <p className="lead opacity-75 mb-0" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {description}
                </p>

                {/* Decorative Element */}
                <div
                    className="mx-auto mt-4"
                    style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: 'var(--primary-blue, #0d6efd)',
                        borderRadius: '2px'
                    }}
                ></div>
            </Container>
        </div>
    );
};

export default PageHeader;
