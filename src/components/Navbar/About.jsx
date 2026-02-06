import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CheckCircle, Award, ShieldCheck, Microscope, Target, Eye } from 'lucide-react';
import Footer from '../Footer';
import labImage from '../../assets/modern_lab.png';

const About = () => {
    return (
        <div className="pt-5" style={{ backgroundColor: '#f8fafc', overflowX: 'hidden' }}>
            <Container className="py-5">
                {/* Main About Section */}
                <Row className="align-items-center mb-5 g-5">
                    {/* Left Side - Image */}
                    <Col lg={6}>
                        {/* Simple Image Render */}
                        <div className="p-2 bg-white rounded-4 shadow-sm">
                            <img
                                src={labImage}
                                alt="Sky Pathology Lab"
                                className="img-fluid rounded-3 w-100"
                                style={{ objectFit: 'cover', minHeight: '300px' }}
                            />
                        </div>
                    </Col>

                    {/* Right Side - Content */}
                    <Col lg={6}>
                        <h5 className="text-uppercase fw-bold mb-3 text-primary" style={{ letterSpacing: '2px' }}>
                            About Sky Pathology Lab
                        </h5>
                        <h1 className="display-5 fw-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#1e293b' }}>
                            Precision Diagnostics. <br />
                            <span className="text-primary">Trusted Care.</span>
                        </h1>
                        <p className="lead text-muted mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Sky Pathology Lab is a trusted diagnostic and pathology service provider committed to delivering accurate, reliable, and timely medical test results.
                        </p>
                        <p className="text-muted mb-4">
                            With advanced laboratory technology and experienced medical professionals, we ensure the highest standards of quality and precision in every test we perform.
                        </p>

                        {/* Mission & Vision - Simplified */}
                        <div className="d-flex gap-4 flex-wrap">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Our Mission</h6>
                                    <small className="text-muted">Accurate & Timely</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                                    <Eye size={24} />
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Our Vision</h6>
                                    <small className="text-muted">Reliability & Innovation</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Why Choose Us Section - Grid */}
                <div className="py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Choose Us?</h2>
                        <div className="mx-auto mt-3 bg-primary" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></div>
                    </div>

                    <Row className="g-4">
                        {[
                            { text: "Advanced Technology", icon: <Microscope size={24} /> },
                            { text: "Experienced Team", icon: <Award size={24} /> },
                            { text: "Fast Reports", icon: <CheckCircle size={24} /> },
                            { text: "Hygienic Collection", icon: <ShieldCheck size={24} /> },
                            { text: "Home Collection", icon: <CheckCircle size={24} /> },
                            { text: "Trusted Brand", icon: <Award size={24} /> }
                        ].map((item, index) => (
                            <Col md={4} key={index}>
                                <div className="d-flex align-items-center p-4 bg-white rounded-3 shadow-sm h-100 border border-light">
                                    <div className="p-2 bg-primary bg-opacity-10 text-primary rounded-circle me-3">
                                        {item.icon}
                                    </div>
                                    <h6 className="mb-0 fw-bold">{item.text}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
            <Footer />
        </div >
    );
};

export default About;
