import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Droplet, HeartPulse, Stethoscope, Dna } from 'lucide-react';

const categories = [
    { icon: <Droplet size={30} />, name: 'Blood Test', count: '50+ Tests', color: '#ef4444' },
    { icon: <Activity size={30} />, name: 'Diabetes', count: '10+ Tests', color: '#f59e0b' },
    { icon: <HeartPulse size={30} />, name: 'Full Body Checkup', count: 'Packages', color: '#10b981' },
    { icon: <Stethoscope size={30} />, name: 'Thyroid', count: 'Comprehensive', color: '#8b5cf6' },
    { icon: <Dna size={30} />, name: 'Urine Analysis', count: 'Routine & Special', color: '#3b82f6' },
    { icon: <Activity size={30} />, name: 'Allergy', count: 'Screening', color: '#ec4899' },
];

const TestCategories = () => {
    return (
        <section id="tests" className="py-5" style={{ backgroundColor: '#f8fafc' }}>
            <Container>
                <div className="d-flex justify-content-between align-items-end mb-5">
                    <div>
                        <h6 className="text-primary-blue fw-bold text-uppercase">Our Services</h6>
                        <h2 className="fw-bold text-dark mb-0">Popular Test Categories</h2>
                    </div>
                </div>

                <Row className="g-4">
                    {categories.map((cat, index) => (
                        <Col xs={6} md={4} lg={2} key={index}>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Card className="border-0 shadow-sm h-100 text-center py-3 rounded-4 cursor-pointer category-card">
                                    <Card.Body>
                                        <div
                                            className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                                            style={{ width: '60px', height: '60px', backgroundColor: `${cat.color}20`, color: cat.color }}
                                        >
                                            {cat.icon}
                                        </div>
                                        <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.9rem' }}>{cat.name}</h6>
                                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>{cat.count}</small>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default TestCategories;
