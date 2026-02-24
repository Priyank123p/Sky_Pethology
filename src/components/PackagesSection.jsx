import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button, Spinner, Alert, Badge, Modal, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CheckCircle, Info, ShoppingCart, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZhd9xFgTpJmvcVDAUDHwpMi3rbBpCGT2x5_614oNGtBdTmeKWy6MqWvO3QoZj4Se0iZLfLBemzo_u/pub?gid=0&single=true&output=csv';

const PackageCard = ({ data, index }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleAddPackage = () => {
        const existingItems = JSON.parse(localStorage.getItem('marketing_selected_tests') || '[]');
        const packageName = data['Packages-Name'];

        if (!existingItems.includes(packageName)) {
            existingItems.push(packageName);
            localStorage.setItem('marketing_selected_tests', JSON.stringify(existingItems));

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });

            Toast.fire({
                icon: 'success',
                title: 'Package added successfully'
            });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
            });

            Toast.fire({
                icon: 'info',
                title: 'Package already added'
            });
        }
    };

    const originalPrice = parseFloat(data['Price']) || 0;
    const discountPercent = parseFloat(data['Discount']?.replace('%', '')) || 0;
    const hasDiscount = discountPercent > 0;

    const finalPrice = hasDiscount
        ? Math.round(originalPrice - (originalPrice * discountPercent / 100))
        : originalPrice;

    const testList = data['Test-Name'] ? data['Test-Name'].split(',').map(t => t.trim()).filter(t => t) : [];

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-100"
            >
                <Card className="h-100 shadow-sm border-0 overflow-hidden package-card hover-lift" style={{ borderRadius: '15px' }}>
                    <div className="position-relative" style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Img
                            variant="top"
                            src={data['Img']}
                            alt={data['Packages-Name']}
                            style={{ height: '180px', objectFit: 'contain', padding: '10px', borderRadius: '15px' }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/400x180?text=Sky+Pathology';
                            }}
                        />
                        <div
                            className="position-absolute"
                            style={{
                                bottom: '10px',
                                right: '0',
                                backgroundColor: '#F37021',
                                color: 'white',
                                padding: '5px 15px',
                                borderRadius: '20px 0 0 20px',
                                fontWeight: 'bold',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '0.85rem',
                                boxShadow: '-2px 2px 8px rgba(0,0,0,0.1)'
                            }}
                        >
                            Sky
                        </div>
                        {hasDiscount && (
                            <div
                                className="position-absolute"
                                style={{
                                    top: '10px',
                                    left: '10px',
                                }}
                            >
                                <Badge bg="danger" className="py-1 px-2 rounded-pill shadow-sm fw-bold" style={{ fontSize: '0.75rem' }}>
                                    {discountPercent}% OFF
                                </Badge>
                            </div>
                        )}
                    </div>
                    <Card.Body className="p-3 d-flex flex-column" style={{ backgroundColor: '#ffffff' }}>
                        <div className="mb-2">
                            <Card.Title className="mb-1 text-center" style={{ fontSize: '1.1rem', fontWeight: '800', textTransform: 'uppercase', color: '#2c3e50', letterSpacing: '0.5px' }}>
                                {data['Packages-Name']}
                            </Card.Title>

                            <div className="d-flex justify-content-center mb-2">
                                <span className="badge bg-light text-secondary border px-2 py-1 rounded-pill d-flex align-items-center" style={{ fontSize: '0.75rem' }}>
                                    <Activity size={12} className="me-1 text-primary" />
                                    <span className="text-primary fw-bold">All Days</span>
                                </span>
                            </div>
                        </div>

                        <div className="mb-2 text-center">
                            <div className="p-2 rounded-3" style={{ backgroundColor: '#f8f9fa', border: '1px dashed #dee2e6' }}>
                                <p className="mb-0 text-primary fw-bold d-flex align-items-center justify-content-center" style={{ fontSize: '0.9rem' }}>
                                    <span className="fw-bold me-1" style={{ fontSize: '1.4rem', color: '#4834d4' }}>
                                        {data['Parameters-Number']}
                                    </span>
                                    <span className="text-muted small text-uppercase" style={{ letterSpacing: '0.5px', fontSize: '0.7rem' }}>Parameters</span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-auto pt-2 border-top border-light">
                            <div className="d-flex justify-content-center align-items-center mb-2 flex-column">
                                {hasDiscount && (
                                    <span className="text-muted text-decoration-line-through mb-0" style={{ fontSize: '0.85rem' }}>
                                        ₹ {originalPrice}
                                    </span>
                                )}
                                <h3 className="mb-0 text-center" style={{ color: '#F37021', fontWeight: '800', fontSize: '1.4rem' }}>
                                    ₹ {finalPrice}
                                </h3>
                            </div>
                            <div className="d-flex gap-2">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="rounded-pill fw-bold d-flex align-items-center justify-content-center py-1 flex-grow-1"
                                    onClick={handleAddPackage}
                                    style={{ background: 'linear-gradient(90deg, #4834d4, #686de0)', border: 'none', boxShadow: '0 2px 8px rgba(72, 52, 212, 0.2)' }}
                                >
                                    <ShoppingCart size={16} className="me-2" /> Add Now
                                </Button>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    className="rounded-pill fw-bold d-flex align-items-center justify-content-center py-1 border-0 bg-light text-dark flex-grow-1"
                                    onClick={handleShow}
                                >
                                    <Info size={16} className="me-2 text-muted" /> View Details
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </motion.div>

            {/* Modal for Details */}
            <Modal show={showModal} onHide={handleClose} centered scrollable size="lg">
                <Modal.Header closeButton className="border-0 pb-0">
                    <div>
                        <Modal.Title className="fw-bold text-primary h5">{data['Packages-Name']}</Modal.Title>
                        <span className="text-muted small">Package Details & Tests</span>
                    </div>
                </Modal.Header>
                <Modal.Body className="pt-3 px-4">
                    <div className="d-flex align-items-center mb-4 bg-light p-3 rounded-3">
                        <div className="me-auto">
                            <span className="text-muted d-block small text-uppercase fw-bold">Package Price</span>
                            <div className="d-flex align-items-baseline flex-wrap gap-2">
                                <h3 className="fw-bold text-primary mb-0">₹{finalPrice}</h3>
                                {hasDiscount && (
                                    <span className="text-muted text-decoration-line-through small">₹{originalPrice}</span>
                                )}
                                <Badge bg="warning" text="dark" className="ms-2 py-2 px-3 rounded-pill fw-bold shadow-sm" style={{ fontSize: '0.75rem' }}>
                                    <Info size={14} className="me-1" />
                                    Note: Fasting 10 to 12 hours
                                </Badge>
                            </div>
                        </div>
                        {hasDiscount && (
                            <Badge bg="success" className="px-3 py-2 rounded-pill">
                                {discountPercent}% Savings
                            </Badge>
                        )}
                    </div>

                    <h6 className="fw-bold text-secondary mb-3 border-bottom pb-2">
                        Included Tests <Badge bg="secondary" className="ms-1">{testList.length || 1}</Badge>
                    </h6>

                    {testList.length > 0 ? (
                        <ListGroup variant="flush">
                            {testList.map((test, idx) => (
                                <ListGroup.Item key={idx} className="border-0 px-0 py-2 d-flex align-items-start">
                                    <CheckCircle size={18} className="text-success me-2 mt-1 flex-shrink-0" />
                                    <span className="fw-medium text-dark">{test}</span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p className="text-muted">
                            <CheckCircle size={18} className="text-success me-2" />
                            {data['Test-Name']}
                        </p>
                    )}

                    <div className="mt-4 p-3 bg-opacity-10 bg-info rounded border border-info">
                        <small className="text-muted d-flex align-items-center">
                            <Info size={16} className="me-2 text-info" />
                            This package includes <strong>{data['Parameters-Number']}</strong> comprehensive parameters to fully evaluate your health status.
                        </small>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 pt-0">
                    <Button variant="secondary" onClick={handleClose} className="rounded-pill px-4">
                        Close
                    </Button>
                    <Button
                        onClick={() => { handleAddPackage(); handleClose(); }}
                        className="rounded-pill px-4"
                        style={{ background: 'linear-gradient(90deg, #4834d4, #686de0)', border: 'none' }}
                    >
                        Add Package Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const PackagesSection = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPackages = () => {
            Papa.parse(GOOGLE_SHEET_URL, {
                download: true,
                header: true,
                complete: (results) => {
                    const validData = results.data
                        .filter(pkg => pkg['Id'] && pkg['Packages-Name'])
                        .slice(0, 4);

                    setPackages(validData);
                    setLoading(false);
                },
                error: (err) => {
                    console.error('Error fetching packages:', err);
                    setError('Failed to load packages.');
                    setLoading(false);
                }
            });
        };

        fetchPackages();
    }, []);

    if (loading) {
        return (
            <section className="section-padding mt-5 text-center">
                <Container>
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
                        <p className="mt-3 text-muted fw-bold">Loading Best Packages for you...</p>
                    </div>
                </Container>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-padding mt-5 text-center">
                <Container>
                    <Alert variant="danger">{error}</Alert>
                </Container>
            </section>
        );
    }

    return (
        <section className="section-padding mt-5 position-relative" style={{
            backgroundColor: '#fff',
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.79)), url('')`,
            backgroundSize: '400px',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            zIndex: 0
        }}>
            <Container>
                <div className="text-center mb-5">
                    <h6 className="text-primary text-uppercase fw-bold ls-2">Our Packages</h6>
                    <h2 className="fw-bold display-5 mb-4">Choose The Best <span style={{ color: '#F37021' }}>Health Packages</span></h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                        We offer a wide range of health packages to suit your needs. Choose from our comprehensive list of packages to ensure your well-being.
                    </p>
                </div>
                <Row>
                    {packages.map((pkg, index) => (
                        <Col key={index} lg={3} md={6} xs={12} className="mb-4">
                            <PackageCard data={pkg} index={index} />
                        </Col>
                    ))}
                </Row>

                <div className="d-flex justify-content-center mt-5 mb-4">
                    <Button
                        size="lg"
                        className="px-5 py-2 fw-bold border-0"
                        onClick={() => navigate('/packages')}
                        style={{
                            background: 'linear-gradient(90deg, #0077b6, #00b4d8)',
                            borderRadius: '30px',
                        }}
                    >
                        View All Packages
                    </Button>
                </div>
            </Container>
            <style jsx>{`
                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
                }
            `}</style>
        </section>
    );
};

export default PackagesSection;
