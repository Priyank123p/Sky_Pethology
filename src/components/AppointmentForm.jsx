import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, Send, X } from 'lucide-react';
import Swal from 'sweetalert2';

const AppointmentForm = () => {
    const [validated, setValidated] = useState(false);
    const [selectedTests, setSelectedTests] = useState([]);

    useEffect(() => {
        const storedTests = JSON.parse(localStorage.getItem('marketing_selected_tests') || '[]');
        if (storedTests.length > 0) {
            setSelectedTests(storedTests);
        }
    }, []);



    const removeTest = (testToRemove) => {
        const updatedTests = selectedTests.filter(test => test !== testToRemove);
        setSelectedTests(updatedTests);
        localStorage.setItem('marketing_selected_tests', JSON.stringify(updatedTests));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false || selectedTests.length === 0) {
            event.stopPropagation();
            setValidated(true);
        } else {
            Swal.fire({
                title: "Success!",
                text: "Request received! We will call you shortly.",
                icon: "success",
                confirmButtonColor: "#d4af37", // approximate gold color
                background: "#ffffff",
                customClass: {
                    title: 'fw-bold',
                    popup: 'rounded-4'
                }
            });
            setSelectedTests([]); // Reset
            localStorage.removeItem('marketing_selected_tests'); // Clear storage
            form.reset();
            setValidated(false);
        }
    };

    return (
        <section id="book" className="py-5 bg-white position-relative">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} xl={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                                <Card.Header className="sky-form-header text-center py-4 border-0">
                                    <h3 className="fw-bold mb-1">Book an Appointment</h3>
                                    <p className="mb-0 text-white-50">Get tested at home or visit our lab</p>
                                </Card.Header>
                                <Card.Body className="p-4 p-md-5">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="g-3">
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Full Name</Form.Label>
                                                    <Form.Control required type="text" placeholder="Name" className="bg-light border-0 py-3" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Mobile Number</Form.Label>
                                                    <Form.Control required type="tel" placeholder="Number" className="bg-light border-0 py-3" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Preferred Date</Form.Label>
                                                    <Form.Control required type="date" className="bg-light border-0 py-3" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Test Type</Form.Label>
                                                    <div className="p-3 bg-light rounded-3">
                                                        {selectedTests.length > 0 ? (
                                                            <div className="d-flex flex-wrap gap-2 mb-2">
                                                                {selectedTests.map((test, index) => (
                                                                    <Badge
                                                                        key={index}
                                                                        bg="primary"
                                                                        className="d-flex align-items-center gap-2 py-2 px-3 rounded-pill fw-normal shadow-sm"
                                                                        style={{ fontSize: '0.9rem', backgroundColor: '#0077b6' }}
                                                                    >
                                                                        {test}
                                                                        <X
                                                                            size={16}
                                                                            className="cursor-pointer hover-scale"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                removeTest(test);
                                                                            }}
                                                                        />
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="text-muted small fst-italic mb-2">
                                                                No tests selected. Please add tests from the Tests page.
                                                            </div>
                                                        )}

                                                        <Link to="/tests" className="text-decoration-none small fw-bold text-primary">
                                                            + Add More Tests
                                                        </Link>
                                                    </div>
                                                    {validated && selectedTests.length === 0 && (
                                                        <div className="text-danger small mt-1">Please add at least one test to proceed.</div>
                                                    )}
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Address</Form.Label>
                                                    <Form.Control as="textarea" rows={3} placeholder="Address" className="bg-light border-0 py-3" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Message (Optional)</Form.Label>
                                                    <Form.Control as="textarea" rows={3} placeholder="Any specific requirements?" className="bg-light border-0 py-3" />
                                                </Form.Group>
                                            </Col>

                                            <Col md={12} className="mt-4">
                                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                    <Button
                                                        type="submit"
                                                        className="w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2 rounded-3 border-0 btn-soft-gold"
                                                    >
                                                        <CalendarCheck size={20} />
                                                        Confirm Booking
                                                    </Button>
                                                </motion.div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default AppointmentForm;
