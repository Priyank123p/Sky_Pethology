import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Phone, CalendarCheck } from 'lucide-react';
import logo from '../assets/Petho_Logo.png';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`py-3 transition-all ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
            style={{ transition: 'all 0.3s ease-in-out' }}
        >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Sky Pathology Logo"
                        className="d-inline-block align-top me-2"
                        style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
                    />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-3">
                        <Nav.Link as={Link} to="/" className="fw-medium">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="fw-medium">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/tests" className="fw-medium">Tests</Nav.Link>
                        <Nav.Link as={Link} to="/packages" className="fw-medium">Packages</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="fw-medium">Contact</Nav.Link>

                        <Button
                            as={Link}
                            to="/contact"
                            className="d-flex align-items-center gap-2 rounded-pill px-4 border-0"
                            style={{ backgroundColor: 'var(--primary-blue)' }}
                        >
                            <CalendarCheck size={18} />
                            <span>Book Appointment</span>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
