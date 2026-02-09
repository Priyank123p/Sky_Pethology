import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const tests = [
    { name: 'CBC (HO)', parameters: '22 Parameters', price: 350 },
    { name: 'ESR 1 HOUR', parameters: '1 Parameter', price: 100 },
    { name: 'ESR 2 HOUR', parameters: '1 Parameter', price: 100 },
    { name: 'LIPID PROFILE', parameters: '8 Parameters', price: 700 },
    { name: 'CHOLESTEROL', parameters: '1 Parameter', price: 250 },
    { name: 'CHOLESTEROL', parameters: '1 Parameter', price: 250 },
    { name: 'CHOLESTEROL', parameters: '1 Parameter', price: 250 },
    { name: 'CHOLESTEROL', parameters: '1 Parameter', price: 250 },
];

const PopularTests = () => {
    return (
        <section className="py-5 bg-white">
            <Container>
                {/* Title Section - No View All Button */}
                <div className="mb-4">
                    <h2 className="fw-bold text-dark">Popular Blood Tests</h2>
                </div>

                <Row className="g-4">
                    {tests.map((test, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}> {/* Adjusted grid for responsiveness */}
                            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                <Card className="border-0 shadow-sm h-100 rounded-4" style={{ backgroundColor: '#f9f9f9' }}>
                                    <Card.Body className="p-4 d-flex flex-column h-100">
                                        <h5 className="fw-bold text-dark mb-3">{test.name}</h5>

                                        <p className="text-secondary small mb-4">{test.parameters}</p>

                                        <div className="mt-auto">
                                            <h4 className="fw-bold text-orange mb-3" style={{ color: '#ff7f00' }}>₹{test.price}</h4>
                                            <Button
                                                className="w-100 rounded-pill fw-semibold py-2"
                                                variant="primary"
                                                style={{ backgroundColor: '#4b2d86', borderColor: '#4b2d86' }}
                                            >
                                                Book Now
                                            </Button>
                                        </div>
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

export default PopularTests;
