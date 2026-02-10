import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button, Spinner, Alert, Modal, ListGroup, Badge } from 'react-bootstrap';
import { CheckCircle, Info } from 'lucide-react';
import Footer from '../Footer';

const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpp_JYAhwwCsxMQYtS533OO-Mq_y9yxSeHwhHgQ-C0fgNe9cJHw3kRVjxVg-2JlRgZOwPxi1P6xtpt/pub?gid=0&single=true&output=csv';

const TestCard = ({ test }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleAddTest = () => {
        // Get existing tests
        const existingTests = JSON.parse(localStorage.getItem('marketing_selected_tests') || '[]');
        const testName = test['test-name'];

        // Check for duplicates
        if (!existingTests.includes(testName)) {
            existingTests.push(testName);
            localStorage.setItem('marketing_selected_tests', JSON.stringify(existingTests));

            // Success Toast
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
                title: 'Test added successfully'
            });
        } else {
            // Info Toast for duplicate
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
            });

            Toast.fire({
                icon: 'info',
                title: 'Test already added'
            });
        }
    };

    // Parse parameters: split by comma if available, otherwise empty array
    const parameters = test['parameter']
        ? test['parameter'].split(',').map(p => p.trim()).filter(p => p)
        : [];

    const hasParameters = parameters.length > 0;

    // Display first few parameters if there are many
    const displayParameters = parameters.slice(0, 3);
    const remainingCount = parameters.length - 3;

    return (
        <>
            <Card className="h-100 border-0 shadow-sm hover-shadow transition-all" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ height: '6px', background: 'linear-gradient(90deg, #0077b6, #00b4d8)' }}></div>
                <Card.Body className="d-flex flex-column p-4">
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '1.15rem', lineHeight: '1.4' }}>
                                {test['test-name']}
                            </h5>
                            {hasParameters && (
                                <Badge bg="light" text="primary" className="border ms-2">
                                    {parameters.length} Params
                                </Badge>
                            )}
                        </div>

                        <div className="mt-3 mb-3">
                            {hasParameters ? (
                                <ul className="list-unstyled mb-0">
                                    {displayParameters.map((param, idx) => (
                                        <li key={idx} className="d-flex align-items-start small text-muted mb-1">
                                            <CheckCircle size={14} className="text-success me-2 mt-1 flex-shrink-0" />
                                            <span style={{ fontSize: '0.9rem' }}>{param}</span>
                                        </li>
                                    ))}
                                    {remainingCount > 0 && (
                                        <li className="small text-primary fw-medium ms-4 mt-1">
                                            +{remainingCount} more parameters...
                                        </li>
                                    )}
                                </ul>
                            ) : (
                                <p className="text-muted small fst-italic mb-0">
                                    Specific parameters check details.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-auto pt-3 border-top">
                        <div className="d-flex justify-content-between align-items-end mb-3">
                            <div>
                                <span className="d-block text-muted small text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>Price</span>
                                <span className="fw-bold text-primary" style={{ fontSize: '1.5rem' }}>₹{test['price']}</span>
                            </div>
                            {hasParameters && (
                                <Button
                                    variant="link"
                                    className="p-0 text-decoration-none text-secondary d-flex align-items-center small"
                                    onClick={handleShow}
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    <Info size={14} className="me-1" /> View Details
                                </Button>
                            )}
                        </div>

                        <Button
                            className="w-100 fw-bold py-2 border-0"
                            onClick={handleAddTest}
                            style={{
                                background: 'linear-gradient(90deg, #483D8B, #6A5ACD)',
                                borderRadius: '10px',
                                color: 'white',
                                transition: 'transform 0.2s',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(72, 61, 139, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Add Now
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal for Details */}
            <Modal show={showModal} onHide={handleClose} centered scrollable size="lg">
                <Modal.Header closeButton className="border-0 pb-0">
                    <div>
                        <Modal.Title className="fw-bold text-primary h5">{test['test-name']}</Modal.Title>
                        <span className="text-muted small">Comprehensive Test Details</span>
                    </div>
                </Modal.Header>
                <Modal.Body className="pt-3 px-4">
                    <div className="d-flex align-items-center mb-4 bg-light p-3 rounded-3">
                        <div className="me-auto">
                            <span className="text-muted d-block small text-uppercase fw-bold">Total Price</span>
                            <h3 className="fw-bold text-primary mb-0">₹{test['price']}</h3>
                        </div>
                    </div>

                    <h6 className="fw-bold text-secondary mb-3 border-bottom pb-2">
                        Included Parameters <Badge bg="secondary" className="ms-1">{parameters.length}</Badge>
                    </h6>
                    <Row xs={1} md={2} className="g-2">
                        {parameters.map((param, index) => (
                            <Col key={index}>
                                <div className="p-2 border rounded-2 d-flex align-items-start bg-white h-100">
                                    <CheckCircle size={16} className="text-success me-2 mt-1 flex-shrink-0" />
                                    <span style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{param}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Modal.Body>
                <Modal.Footer className="border-0 pt-0">
                    <Button variant="outline-secondary" onClick={handleClose} size="sm" className="rounded-pill px-4">
                        Close Details
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const Tests = () => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                Papa.parse(GOOGLE_SHEET_URL, {
                    download: true,
                    header: true,
                    complete: (results) => {
                        const validData = results.data.filter(row => row['test-name'] && row['price']);
                        setTests(validData);
                        setLoading(false);
                    },
                    error: (err) => {
                        console.error('Error parsing CSV:', err);
                        setError('Failed to load test data.');
                        setLoading(false);
                    }
                });
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('An unexpected error occurred.');
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    return (
        <div className="fade-in bg-light" style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <Container className="py-2">
                <div className="text-center mb-5">
                    <Badge bg="primary-blue" className="mb-2 px-3 py-2 rounded-pill bg-opacity-10 text-white border border-primary">Our Diagnostic Services</Badge>
                    <h2 className="fw-bold display-6" style={{ color: '#2c3e50' }}>Lab Tests & Packages</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Choose from our wide range of diagnostic tests. High-quality services at affordable prices.
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-5">
                        <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <p className="mt-3 text-muted">Loading tests from database...</p>
                    </div>
                )}

                {error && (
                    <Alert variant="danger" className="text-center shadow-sm border-0 rounded-3">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        {error}
                    </Alert>
                )}

                {!loading && !error && (
                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                        {tests.map((test, index) => (
                            <Col key={index}>
                                <TestCard test={test} />
                            </Col>
                        ))}
                    </Row>
                )}

                {!loading && !error && tests.length === 0 && (
                    <div className="text-center mt-5 py-5 bg-white rounded-3 shadow-sm">
                        <h5 className="text-muted">No tests available at the moment.</h5>
                        <p className="small text-muted">Please check back later.</p>
                    </div>
                )}
            </Container>
            <Footer />
            <style jsx>{`
                .hover-shadow:hover {
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
                    transform: translateY(-5px);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
            `}</style>
        </div>
    );
};

export default Tests;
