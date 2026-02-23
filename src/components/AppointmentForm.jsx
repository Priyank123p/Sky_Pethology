import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, Send, X } from 'lucide-react';
import Swal from 'sweetalert2';

const AppointmentForm = () => {
    const [validated, setValidated] = useState(false);
    const [selectedTests, setSelectedTests] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        gender: '',
        preferredDate: '',
        preferredTime: '',
        address: '',
        message: ''
    });

    useEffect(() => {
        const storedTests = JSON.parse(localStorage.getItem('marketing_selected_tests') || '[]');
        if (storedTests.length > 0) {
            setSelectedTests(storedTests);
        }

        // Load form data
        const storedFormData = JSON.parse(localStorage.getItem('appointment_form_data') || '{}');
        if (Object.keys(storedFormData).length > 0) {
            setFormData(prev => ({ ...prev, ...storedFormData }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        localStorage.setItem('appointment_form_data', JSON.stringify(updatedFormData));
    };

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
                confirmButtonColor: "#d4af37",
                background: "#ffffff",
                customClass: {
                    title: 'fw-bold',
                    popup: 'rounded-4'
                }
            });
            setSelectedTests([]);
            localStorage.removeItem('marketing_selected_tests');
            localStorage.removeItem('appointment_form_data');
            setFormData({
                fullName: '',
                mobileNumber: '',
                gender: '',
                preferredDate: '',
                preferredTime: '',
                address: '',
                message: ''
            });
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
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Name"
                                                        className="bg-light border-0 py-3"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Mobile Number</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="tel"
                                                        placeholder="Number"
                                                        className="bg-light border-0 py-3"
                                                        name="mobileNumber"
                                                        value={formData.mobileNumber}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Gender</Form.Label>
                                                    <Form.Select
                                                        required
                                                        className="bg-light border-0 py-3"
                                                        name="gender"
                                                        value={formData.gender}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Preferred Date</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="date"
                                                        className="bg-light border-0 py-3"
                                                        name="preferredDate"
                                                        value={formData.preferredDate}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Preferred Time</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="time"
                                                        className="bg-light border-0 py-3"
                                                        name="preferredTime"
                                                        value={formData.preferredTime}
                                                        onChange={handleChange}
                                                    />
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
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        placeholder="Address"
                                                        className="bg-light border-0 py-3"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-secondary">Message (Optional)</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        placeholder="Any specific requirements?"
                                                        className="bg-light border-0 py-3"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                    />
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
