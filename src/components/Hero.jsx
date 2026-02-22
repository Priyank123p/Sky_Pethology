import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Calendar, Activity, FlaskConical, Microscope, Dna, CheckCircle2 } from 'lucide-react';
import modernLabImg from '../assets/modern_lab.png'; // Importing the lab image

const Hero = () => {
    return (
        <section
            id="home"
            className="position-relative d-flex align-items-center overflow-hidden"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #dbeafe 100%)',
                paddingTop: '100px',
                paddingBottom: '50px'
            }}
        >
            {/* Background Abstract Elements (Lab/Tech Feel) */}
            <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden" style={{ zIndex: 0 }}>
                {/* Grid Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.1
                }}></div>
            </div>

            <Container className="position-relative" style={{ zIndex: 1 }}>
                <Row className="align-items-center flex-column-reverse flex-lg-row">
                    <Col lg={6} className="mb-5 mb-lg-0 text-center text-lg-start mt-4 mt-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="d-inline-flex align-items-center px-3 py-1 rounded-pill bg-white border border-info mb-4 shadow-sm"
                            >
                                <Activity size={16} className="text-info me-2" />
                                <span className="text-info fw-bold small text-uppercase tracking-wider">World-Class Pathology Lab</span>
                            </motion.div>

                            <h1 className="display-4 fw-bold mb-3 text-dark" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                                Precision in Every <br />
                                <span className="text-transparent bg-clip-text" style={{
                                    backgroundImage: 'linear-gradient(to right, #0284c7, #0ea5e9)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>Test Result</span>
                            </h1>

                            <p className="lead text-muted mb-4 mx-auto mx-lg-0" style={{ maxWidth: '90%' }}>
                                Advanced diagnostic technology meets expert care. Get accurate reports from our NABL accredited automated laboratory.
                            </p>

                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        as="a"
                                        href="/bookappointment"
                                        size="lg"
                                        className="rounded-pill px-5 py-3 d-flex align-items-center gap-2 shadow-lg border-0"
                                        style={{ background: 'linear-gradient(to right, #0284c7, #0ea5e9)' }}
                                    >
                                        <Calendar size={20} />
                                        <span>Book Home Visit</span>
                                    </Button>
                                </motion.div>

                            </div>

                            <div className="d-flex gap-4 justify-content-center justify-content-lg-start border-top pt-4 border-2" style={{ borderColor: 'rgba(226, 232, 240, 0.8)' }}>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="p-2 rounded-circle bg-green-100 text-success" style={{ background: '#dcfce7' }}>
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div className="d-flex flex-column text-start">
                                        <span className="fw-bold text-dark small">100% Accurate</span>
                                        <span className="text-muted" style={{ fontSize: '12px' }}>IS0 Certified</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="p-2 rounded-circle bg-blue-100 text-primary" style={{ background: '#dbeafe' }}>
                                        <Microscope size={20} />
                                    </div>
                                    <div className="d-flex flex-column text-start">
                                        <span className="fw-bold text-dark small">Latest Tech</span>
                                        <span className="text-muted" style={{ fontSize: '12px' }}>Fully Automated</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={6} className="text-center position-relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="position-relative d-inline-block"
                        >
                            {/* Main Circle Background */}
                            <div style={{
                                width: '100%',
                                maxWidth: '500px',
                                aspectRatio: '1/1',
                                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 25px 60px -12px rgba(2, 132, 199, 0.25)',
                                border: '10px solid rgba(255, 255, 255, 0.6)',
                                position: 'relative'
                            }}>
                                <img
                                    src={modernLabImg}
                                    alt="Modern Laboratory"
                                    className="img-fluid rounded-circle p-2"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none'; // Fallback if image fails
                                    }}
                                />

                                {/* Floating Orbit Elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="position-absolute w-100 h-100 top-0 start-0 border border-primary border-opacity-10 rounded-circle"
                                    style={{ transform: 'scale(1.1)' }}
                                >
                                    <div className="position-absolute bg-info rounded-circle" style={{ width: '12px', height: '12px', top: '10%', left: '50%' }}></div>
                                </motion.div>
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="position-absolute bg-white p-3 rounded-4 shadow-lg d-none d-sm-block text-start border border-light"
                                style={{ bottom: '15%', left: '-5%', maxWidth: '200px', backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.9)' }}
                            >
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <div className="bg-primary text-white p-1 rounded"><Activity size={16} /></div>
                                    <span className="fw-bold small text-dark">Live Analysis</span>
                                </div>
                                <div className="d-flex align-items-end gap-2">
                                    <h3 className="h4 fw-bold text-primary mb-0">99.9%</h3>
                                    <small className="text-muted mb-1">Accuracy</small>
                                </div>
                            </motion.div>

                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
