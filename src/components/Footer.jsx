import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, Phone, MessageCircle, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/Petho_Logo.png';

const Footer = () => {
    return (
        <footer className="footer-section pt-5 pb-3">
            <Container>
                <Row className="gy-4">
                    <Col lg={4} md={12} className="text-center text-lg-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
                            <img src={logo} alt="Logo" width="80" className="me-2" />
                        </div>
                        <p className="text-secondary small mb-4 mx-auto mx-lg-0" style={{ lineHeight: '1.8', maxWidth: '300px' }}>
                            Providing world-class diagnostic services with state-of-the-art technology and a team of expert pathologists. ISO Approved.
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                            <div className="social-icon-wrapper"><Facebook size={20} /></div>
                            <div className="social-icon-wrapper"><Instagram size={20} /></div>
                            <div className="social-icon-wrapper"><Twitter size={20} /></div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <h6 className="footer-heading mb-4 text-uppercase">Contact Us</h6>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Shop+No.+201,+Second+Floor,+Elite+Green,+Opp.+Vandematram+Arcade,+New+SG+Road,+Gota.Ahemdabad+-382481"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-flex gap-3 align-items-start text-decoration-none footer-link-item"
                                >
                                    <MapPin className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                                    <span className="text-secondary small" style={{ lineHeight: '1.6' }}>
                                        Shop No. 201, Second Floor, Elite Green, Opp. Vandematram Arcade, New SG Road, Gota.Ahemdabad -382481
                                    </span>
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="tel:+919510766011"
                                    className="d-flex gap-3 align-items-center text-decoration-none footer-link-item"
                                >
                                    <Phone className="text-primary-blue flex-shrink-0" size={20} />
                                    <span className="text-secondary small font-weight-bold">+91 95107 66011</span>
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=skypathology025@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-flex gap-3 align-items-center text-decoration-none footer-link-item"
                                >
                                    <Mail className="text-primary-blue flex-shrink-0" size={20} />
                                    <span className="text-secondary small">skypathology025@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={4} md={6}>
                        <h6 className="footer-heading mb-4 text-uppercase">Locate Us</h6>
                        <div className="rounded-3 overflow-hidden map-container">
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
