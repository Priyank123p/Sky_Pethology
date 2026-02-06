import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Dropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CalendarCheck, Send } from 'lucide-react';
import Swal from 'sweetalert2';

const AppointmentForm = () => {
    const [validated, setValidated] = useState(false);
    const [selectedTests, setSelectedTests] = useState([]);

    const tests = [
        "Full Body Checkup", "Blood Test", "Thyroid Profile",
        "Diabetes Screening", "Vitamin D Test", "Cholesterol Test", "Other"
    ];

    const handleTestSelection = (test) => {
        if (selectedTests.includes(test)) {
            setSelectedTests(selectedTests.filter(t => t !== test));
        } else {
            setSelectedTests([...selectedTests, test]);
        }
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
                                                    <Dropdown autoClose="outside" className="d-block">
                                                        <Dropdown.Toggle
                                                            variant="light"
                                                            className={`w-100 text-start border-0 py-3 d-flex align-items-center justify-content-between ${validated && selectedTests.length === 0 ? 'is-invalid border border-danger' : ''}`}
                                                            style={{ backgroundColor: 'var(--bs-light)' }}
                                                        >
                                                            <span className={selectedTests.length === 0 ? 'text-muted' : ''}>
                                                                {selectedTests.length > 0 ? selectedTests.join(', ') : 'Select a Test...'}
                                                            </span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="w-100 border-0 shadow-sm" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                                            {tests.map((test) => (
                                                                <Dropdown.Item as="div" key={test} onClick={(e) => e.stopPropagation()}>
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        id={`check-${test}`}
                                                                        label={test}
                                                                        checked={selectedTests.includes(test)}
                                                                        onChange={() => handleTestSelection(test)}
                                                                    />
                                                                </Dropdown.Item>
                                                            ))}
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    {validated && selectedTests.length === 0 && (
                                                        <div className="text-danger small mt-1">Please select at least one test.</div>
                                                    )}
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
