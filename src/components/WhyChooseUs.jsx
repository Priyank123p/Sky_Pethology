import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ThumbsUp, FlaskConical, ShieldCheck, Award, TestTube, Home } from 'lucide-react';
import coupleImage from '../assets/why_choose_us_couple_blue_bg.png';

const features = [
    {
        icon: <ThumbsUp size={32} className="text-warning" />,
        title: 'Quality Services',
        desc: 'Delivers quality and reliable pathology services since 2025.'
    },
    {
        icon: <FlaskConical size={32} className="text-success" />,
        title: 'Large Test Menu',
        desc: 'Broad range of approximately 3000 clinical laboratory tests.'
    },
    {
        icon: <ShieldCheck size={32} className="text-warning" />,
        title: 'Quality Assurance',
        desc: 'NABL accreditation.'
    },
    {
        icon: <Home size={32} className="text-success" />,
        title: 'Home Collection',
        desc: 'Safe and hygienic sample collection at your doorstep.'
    },
    // Network Strength removed as requested
    {
        icon: <Award size={32} className="text-warning" />,
        title: 'Renowned Brand',
        desc: 'Well-recognized brand of Western India.'
    },
    {
        icon: <TestTube size={32} className="text-success" />,
        title: 'Tests Performed',
        desc: 'Conducts more than 1 crore tests annually.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-5 overflow-hidden" style={{ backgroundColor: '#fff' }}>
            <Container fluid className="p-0">
                <div
                    className="position-relative py-5 ps-lg-5 pe-0"
                    style={{
                        backgroundColor: '#1a237e',
                        borderTopLeftRadius: '50px',
                        borderBottomLeftRadius: '50px',
                        marginLeft: 'auto',
                        width: '95%',
                        minHeight: '600px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={7} className="text-white py-4 pe-lg-5">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="fw-bold mb-4 display-5">Why Sky Pathology?</h2>
                                    <p className="mb-5 lead opacity-75" style={{ fontSize: '1.1rem' }}>
                                        Our laboratory is ISO certified, ensuring reliable, accurate testing through internationally recognized quality standards.
                                    </p>

                                    <Row className="g-4">
                                        {features.map((feature, index) => (
                                            <Col md={6} key={index}>
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="p-2 rounded bg-white bg-opacity-10 flex-shrink-0">
                                                        {feature.icon}
                                                    </div>
                                                    <div>
                                                        <h5 className="fw-bold mb-1 text-warning ">{feature.title}</h5>
                                                        <p className="small mb-0 text-white-50">{feature.desc}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </motion.div>
                            </Col>

                            <Col lg={5} className="d-none d-lg-block position-relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="position-relative"
                                    style={{
                                        height: '100%',
                                        minHeight: '500px',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {/* Image positioned to overflow slightly or sit nicely */}
                                    <img
                                        src={coupleImage}
                                        alt="Happy Couple"
                                        className="img-fluid"
                                        style={{
                                            maxHeight: '600px',
                                            objectFit: 'contain',
                                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                                        }}
                                    />
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
