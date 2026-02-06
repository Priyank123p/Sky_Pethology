import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, Phone, MessageCircle, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/Petho_Logo.png';

const Footer = () => {
    return (
        <footer className="bg-white border-top pt-5 pb-3">
            <Container>
                <Row className="gy-4">
                    <Col lg={4} md={12}>
                        <div className="d-flex align-items-center mb-3">
                            <img src={logo} alt="Logo" width="50" className="me-2" />
                            <div>
                                <h5 className="fw-bold text-dark mb-0">Sky Pathology Lab</h5>
                                <small className="text-muted">Precision You Can Trust</small>
                            </div>
                        </div>
                        <p className="text-secondary small mb-4">
                            Providing world-class diagnostic services with state-of-the-art technology and a team of expert pathologists. ISO Approved.
                        </p>
                        <div className="d-flex gap-3">
                            <div className="bg-light p-2 rounded-circle text-primary-blue"><Facebook size={20} /></div>
                            <div className="bg-light p-2 rounded-circle text-primary-blue"><Instagram size={20} /></div>
                            <div className="bg-light p-2 rounded-circle text-primary-blue"><Twitter size={20} /></div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <h6 className="fw-bold text-dark mb-4 text-uppercase ls-1">Contact Us</h6>
                        <ul className="list-unstyled">
                            <li className="d-flex gap-3 mb-3">
                                <MapPin className="text-primary-blue flex-shrink-0" size={20} />
                                <span className="text-secondary small">
                                    Shop No. 201, Second Floor, Elite Green, Opp. Vandematram Arcade, New SG Road, Gota.Ahemdabad -382481
                                </span>
                            </li>
                            <li className="d-flex gap-3 mb-3">
                                <Phone className="text-primary-blue flex-shrink-0" size={20} />
                                <span className="text-secondary small">+91 95107 66011</span>
                            </li>
                            <li className="d-flex gap-3 mb-3">
                                <Mail className="text-primary-blue flex-shrink-0" size={20} />
                                <span className="text-secondary small">skypathology025@gmail.com</span>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={4} md={6}>
                        <h6 className="fw-bold text-dark mb-4 text-uppercase ls-1">Locate Us</h6>
                        <div className="rounded-3 overflow-hidden shadow-sm border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.5420328108273!2d72.5460618717615!3d23.095399673820307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830008055d75%3A0xc5322677cd1c4ae!2sElite%20Greens!5e1!3m2!1sen!2sin!4v1770355227627!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </Col>
                </Row>

                <div className="border-top mt-5 pt-3 text-center">
                    <p className="text-muted small mb-0">© {new Date().getFullYear()} Sky Pathology Lab. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
