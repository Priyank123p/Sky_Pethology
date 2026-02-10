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
                paddingTop: '100px', // Reduced from 120
                paddingBottom: '50px'
            }}
        >
            {/* Decorative Blur - Hidden on mobile to improve performance/layout */}
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
                <Row className="align-items-center flex-column-reverse flex-lg-row"> {/* Reverse column order on mobile: Text below image or standard stacking */}
                    {/* Actually, usually Text first then Image is better on Desktop. On mobile, Image first then Text? Or Text then Image? 
                       Bootstrap 'flex-column-reverse' on Row makes the *last* col appear *first*. 
                       If we want Text (Co1 1) -> Image (Col 2) on Desktop, and Image (Col 2) -> Text (Col 1) on Mobile, we need flex-column-reverse. 
                       But usually standard is fine: Text then Image. Let's stick to standard stacking: Text then Image.
                       If we want Image top on mobile: use order classes. 
                       Let's keep text on top for now as it's the H1.
                    */}
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

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-100 w-sm-auto">
                                    <Button
                                        size="lg"
                                        variant="success"
                                        className="border-0 rounded-pill px-4 py-3 d-flex align-items-center justify-content-center gap-2 shadow w-100"
                                        style={{ backgroundColor: '#25D366' }}
                                        href="https://wa.me/919510766011"
                                        target="_blank"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" color="white">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                        </svg>
                                        WhatsApp Now
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
                                    maxWidth: '450px', // Slightly reduced max-width
                                    aspectRatio: '1/1',
                                    background: 'radial-gradient(circle, #ffffff 0%, #e0f2fe 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 20px 50px rgba(14, 165, 198, 0.15)',
                                    margin: '0 auto'  // Center on mobile
                                }}>
                                    {/* Visual representation - using Logo for now as placeholder for "Lab Image" or generic medical illustration */}
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

// Icon import helper
import { Check } from 'lucide-react';

export default Hero;
