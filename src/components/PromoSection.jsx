import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, X } from 'lucide-react';
import Swal from 'sweetalert2';

const PromoSection = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();

        Swal.fire({
            title: 'Request Submitted!',
            text: 'We have received your request. Our team will call you back shortly.',
            icon: 'success',
            confirmButtonColor: '#4b1d68',
            confirmButtonText: 'Great!',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.tenor.com/GfSX-u7VGM4AAAAC/sticker.gif")
                left top
                no-repeat
            `,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    };

    return (
        <section className="py-5" style={{ overflow: 'hidden' }}>
            <Container>
                <div
                    className="rounded-5 overflow-hidden position-relative pt-4 px-3 pb-0 pt-md-5 px-md-5" // 
                    style={{
                        background: 'linear-gradient(135deg, #4b1d68 0%, #a83258 40%, #e87b28 100%)',
                        color: 'white',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        isolation: 'isolate'
                    }}
                >
                    {/* Ray/Sunburst Pattern Overlay */}
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            background: 'repeating-conic-gradient(from 0deg at 80% 50%, rgba(255,255,255,0.03) 0deg 2deg, transparent 2deg 15deg)',
                            pointerEvents: 'none',
                            zIndex: 0
                        }}
                    ></div>

                    <Row className="align-items-end position-relative z-1">
                        <Col lg={7} className="mb-4 mb-lg-5 align-self-center text-center text-lg-start">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="display-5 fw-bold mb-3">Sky Pathology For You</h2>
                                <p className="mb-4 lead text-white-50 mx-auto mx-lg-0" style={{ maxWidth: '600px' }}>
                                    Sky Pathology as your trusted partner in total health checkup, offering quick access to lab reports, easy prescription uploads, and prompt support when you need it.
                                </p>

                                <div className="d-flex flex-column gap-3 mx-auto mx-lg-0" style={{ maxWidth: '400px' }}>
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            variant="light"
                                            size="lg"
                                            className="w-100 d-flex align-items-center justify-content-between p-3 rounded-pill"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.15)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                                color: 'white',
                                                backdropFilter: 'blur(10px)'
                                            }}
                                            onClick={handleShow}
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="rounded-circle bg-white p-2 d-flex align-items-center justify-content-center text-primary">
                                                    <Phone size={24} fill="#4b2d86" color="#4b2d86" />
                                                </div>
                                                <span className="fw-semibold fs-5">Get A Call Back</span>
                                            </div>
                                            <ArrowRight size={20} />
                                        </Button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Col>

                        <Col lg={5} className="text-center mt-4 mt-lg-0">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="position-relative">
                                    <img
                                        src="https://pngimg.com/uploads/doctor/doctor_PNG16006.png"
                                        alt="Sky Pathology Professional"
                                        className="img-fluid position-relative z-2"
                                        style={{
                                            maxHeight: '450px',
                                            width: 'auto',
                                            maxWidth: '100%',
                                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                                            marginBottom: '-10px'
                                        }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://pngimg.com/uploads/doctor/doctor_PNG15988.png";
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
            </Container>

            {/* Call Back Modal */}
            <Modal show={showModal} onHide={handleClose} centered size="lg" className="rounded-4">
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="fw-bold fs-2 text-dark">Get A Call Back</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-2">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter First Name *" className="bg-light border-0 py-3 rounded-3" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter Last Name" className="bg-light border-0 py-3 rounded-3" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="tel" placeholder="Enter Mobile Number *" className="bg-light border-0 py-3 rounded-3" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Enter Email" className="bg-light border-0 py-3 rounded-3" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Select className="bg-light border-0 py-3 rounded-3" required>
                                <option value="">Choose City *</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Surat">Surat</option>
                                <option value="Vadodara">Vadodara</option>
                                <option value="Rajkot">Rajkot</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Select className="bg-light border-0 py-3 rounded-3" required>
                                <option value="">Choose Time *</option>
                                <option value="Morning">Morning (9 AM - 12 PM)</option>
                                <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                                <option value="Evening">Evening (4 PM - 8 PM)</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Select className="bg-light border-0 py-3 rounded-3" required>
                                <option value="">Choose Test Category *</option>
                                <option value="Blood Test">Blood Test</option>
                                <option value="Full Body Checkup">Full Body Checkup</option>
                                <option value="COVID-19">COVID-19 Test</option>
                                <option value="Diabetes">Diabetes Profile</option>
                            </Form.Select>
                        </Form.Group>



                        <div className="d-flex gap-3 justify-content-between mt-4">
                            <Button
                                variant="outline-primary"
                                onClick={handleClose}
                                className="w-50 rounded-pill py-3 fw-semibold"
                                style={{ borderColor: '#4b1d68', color: '#4b1d68' }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#4b1d68';
                                    e.target.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#4b1d68';
                                }}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" className="w-50 rounded-pill py-3 fw-semibold border-0" style={{ backgroundColor: '#4b1d68' }}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default PromoSection;
