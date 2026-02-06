import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Activity } from 'lucide-react';

const stats = [
    { icon: <Award size={40} />, count: 'ISO', label: '9001:2015 Approved' },
    { icon: <Users size={40} />, count: '10k+', label: 'Happy Patients' },
    { icon: <Activity size={40} />, count: '2M+', label: 'Tests Conducted' },
];

const TrustSection = () => {
    return (
        <section className="py-5 text-white" style={{ background: 'linear-gradient(45deg, #0f172a 0%, #1e293b 100%)' }}>
            <Container>
                <Row className="g-5 justify-content-center text-center">
                    {stats.map((stat, index) => (
                        <Col xs={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="d-flex flex-column align-items-center"
                            >
                                <div className="mb-3 text-soft-gold">{stat.icon}</div>
                                <h2 className="fw-bold display-5 mb-1">{stat.count}</h2>
                                <p className="text-white-50 mb-0">{stat.label}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default TrustSection;
