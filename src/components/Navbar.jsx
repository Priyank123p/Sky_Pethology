import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Phone, CalendarCheck } from 'lucide-react';
import logo from '../assets/Petho_Logo.png';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false); // Track menu state

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when a link is clicked
    const closeMenu = () => setExpanded(false);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            className={`py-2 py-lg-3 transition-all ${scrolled || expanded ? 'bg-white shadow-sm' : 'bg-transparent'}`}
            style={{ transition: 'all 0.3s ease-in-out' }}
        >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Sky Pathology Logo"
                        className="d-inline-block align-top me-2"
                        style={{ height: '50px', width: 'auto', objectFit: 'contain' }} // Reduced height for mobile by default, can use media query logic if needed but 50-60 is safer
                    />
                    {/* Optional: Add text if logo doesn't have it */}
                    {/* <span className="fw-bold text-dark d-lg-none">Sky Patho</span> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-lg-center gap-2 gap-lg-3 mt-3 mt-lg-0">
                        <Nav.Link as={Link} to="/" className="fw-medium px-2" onClick={closeMenu}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="fw-medium px-2" onClick={closeMenu}>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/tests" className="fw-medium px-2" onClick={closeMenu}>Tests</Nav.Link>
                        <Nav.Link as={Link} to="/packages" className="fw-medium px-2" onClick={closeMenu}>Packages</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="fw-medium px-2" onClick={closeMenu}>Contact</Nav.Link>
                    </Nav>
                    <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
                        <Button
                            as={Link}
                            to="/bookappointment"
                            onClick={closeMenu}
                            className="d-flex align-items-center justify-content-center gap-2 rounded-pill px-4 border-0 py-2"
                            style={{ backgroundColor: 'var(--primary-blue)' }}
                        >
                            <CalendarCheck size={18} />
                            <span>Book Appointment</span>
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
