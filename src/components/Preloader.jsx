import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Petho_Logo.png';

const Preloader = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            if (onComplete) onComplete();
        }, 2800); // 2 seconds animation + exit

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-white"
                    style={{ zIndex: 9999 }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="mb-4"
                    >
                        <img src={logo} alt="Sky Pathology Lab Logo" style={{ width: '120px', height: 'auto' }} />
                    </motion.div>

                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-dark fw-bold mt-3"
                        style={{ letterSpacing: '1px' }}
                    >
                        Sky Pathology Lab
                    </motion.h4>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-primary-blue"
                    >
                        Precision You Can Trust
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
