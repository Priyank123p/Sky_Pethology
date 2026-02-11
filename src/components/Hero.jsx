import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="position-relative d-flex align-items-center"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                overflow: 'hidden',
                paddingTop: '100px',
                paddingBottom: '50px'
            }}
        >
            <div
                className="position-absolute bg-primary-blue rounded-circle d-none d-lg-block"
                style={{
                    width: '500px',
                    height: '500px',
                    maxWidth: '80vw',
                    maxHeight: '80vw',
                    top: '-100px',
                    right: '-20%',
                    opacity: '0.1',
                    filter: 'blur(80px)'
                }}
            ></div>

            <Container className="position-relative z-1">
                <Row className="align-items-center flex-column-reverse flex-lg-row">
                    <Col lg={6} className="mb-5 mb-lg-0 text-center text-lg-start mt-4 mt-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="d-inline-block px-3 py-1 rounded-pill bg-white text-primary-blue fw-bold mb-3 shadow-sm">
                                🔬 Advanced Pathology Services
                            </span>
                            <h1 className="display-4 display-md-3 fw-bold mb-3" style={{ color: '#0f172a', lineHeight: '1.2' }}>
                                Trusted Diagnostic & <span style={{ color: 'var(--primary-blue)' }}>Pathology Services</span>
                            </h1>
                            <p className="lead text-secondary mb-4 mx-auto mx-lg-0" style={{ maxWidth: '90%' }}>
                                Accurate. Reliable. Fast Reports. Experience world-class diagnostics with home sample collection.
                            </p>

                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-100 w-sm-auto">
                                    <Button
                                        as="a"
                                        href="/bookappointment"
                                        size="lg"
                                        className="border-0 rounded-pill px-4 py-3 d-flex align-items-center justify-content-center gap-2 shadow w-100"
                                        style={{ backgroundColor: 'var(--primary-blue)' }}
                                    >
                                        <Calendar size={20} />
                                        Book Appointment
                                    </Button>
                                </motion.div>
                            </div>

                            <div className="mt-5 d-flex gap-4 justify-content-center justify-content-lg-start">
                                <div className="d-flex flex-column">
                                    <span className="fw-bold h4 mb-0 text-dark">10k+</span>
                                    <span className="text-muted small">Happy Patients</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fw-bold h4 mb-0 text-dark">24/7</span>
                                    <span className="text-muted small">Support</span>
                                </div>
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={6} className="text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="position-relative"
                        >
                            {/* Placeholder for standard vector illustration or similar if no 3D image */}
                            <div className="position-relative z-1 d-inline-block">
                                <div style={{
                                    width: '100%',
                                    maxWidth: '450px',
                                    aspectRatio: '1/1',
                                    background: 'radial-gradient(circle, #ffffff 0%, #e0f2fe 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 20px 50px rgba(14, 165, 198, 0.15)',
                                    margin: '0 auto'
                                }}>
                                    <img src="https://img.freepik.com/free-vector/science-lab-concept-illustration_114360-1288.jpg?w=740&t=st=1706270000~exp=1706270600~hmac=placeholder"
                                        alt="Lab Services"
                                        className="img-fluid rounded-circle"
                                        style={{ width: '90%', height: '90%', objectFit: 'cover', mixBlendMode: 'multiply' }}
                                        onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                </div>

                                {/* Floating Card Animation - Hide on very small screens to avoid clutter */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="position-absolute bg-white p-3 rounded-4 shadow-lg d-none d-sm-block bs-card-float"
                                    style={{ bottom: '10%', left: '0', maxWidth: '180px' }}
                                >
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <div className="bg-success rounded-circle p-1 d-flex"><Check size={14} color="white" /></div>
                                        <small className="fw-bold text-dark">Fast Results</small>
                                    </div>
                                    <div className="progress" style={{ height: '6px' }}>
                                        <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

import { Check } from 'lucide-react';

export default Hero;
