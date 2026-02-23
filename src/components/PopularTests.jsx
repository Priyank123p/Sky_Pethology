import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button, Spinner, Alert, Modal, Badge } from 'react-bootstrap';
import { CheckCircle, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpp_JYAhwwCsxMQYtS533OO-Mq_y9yxSeHwhHgQ-C0fgNe9cJHw3kRVjxVg-2JlRgZOwPxi1P6xtpt/pub?gid=0&single=true&output=csv';

const TestCard = ({ test }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleAddTest = () => {
        const existingTests = JSON.parse(localStorage.getItem('marketing_selected_tests') || '[]');
        const testName = test['test-name'];

        if (!existingTests.includes(testName)) {
            existingTests.push(testName);
            localStorage.setItem('marketing_selected_tests', JSON.stringify(existingTests));

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });

            Toast.fire({
                icon: 'success',
                title: 'Test added successfully'
            });
        } else {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'info',
                title: 'Test already added',
                showConfirmButton: false,
                timer: 2000
            });
        }
    };

    const parameters = test['parameter']
        ? test['parameter'].split(',').map(p => p.trim()).filter(p => p)
        : [];

    const hasParameters = parameters.length > 0;
    const displayParameters = parameters.slice(0, 3);
    const remainingCount = parameters.length - 3;

    return (
        <>
            <Card className="h-100 border-0 shadow-sm hover-shadow transition-all" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ height: '6px', background: 'linear-gradient(90deg, #0077b6, #00b4d8)' }}></div>

                <Card.Body className="d-flex flex-column p-4">
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="fw-bold text-dark mb-0">
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
                                            <span>{param}</span>
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
                                <span className="text-muted small text-uppercase fw-bold">Price</span>
                                <span className="fw-bold text-primary" style={{ fontSize: '1.4rem' }}>
                                    ₹{test['price']}
                                </span>
                            </div>

                            {hasParameters && (
                                <Button
                                    variant="link"
                                    className="p-0 text-decoration-none text-secondary d-flex align-items-center small"
                                    onClick={handleShow}
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
                            }}
                        >
                            Add Now
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose} centered scrollable size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{test['test-name']}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-baseline flex-wrap gap-2 mb-3">
                        <h5 className="text-primary mb-0">₹{test['price']}</h5>
                        <Badge bg="warning" text="dark" className="ms-2 py-2 px-3 rounded-pill fw-bold shadow-sm" style={{ fontSize: '0.75rem' }}>
                            <Info size={14} className="me-1" />
                            Note: Fasting 10 to 12 hours
                        </Badge>
                    </div>

                    <Row xs={1} md={2} className="g-2 mt-3">
                        {parameters.map((param, index) => (
                            <Col key={index}>
                                <div className="p-2 border rounded d-flex align-items-start">
                                    <CheckCircle size={16} className="text-success me-2 mt-1" />
                                    <span>{param}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const PopularTests = () => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        Papa.parse(GOOGLE_SHEET_URL, {
            download: true,
            header: true,
            complete: (results) => {
                const validData = results.data
                    .filter(row => row['test-name'] && row['price'])
                    .slice(0, 8);

                setTests(validData);
                setLoading(false);
            },
            error: () => {
                setError('Failed to load test data.');
                setLoading(false);
            }
        });
    }, []);

    return (
        <section className="py-5">
            <Container>
                <div className="mb-4">
                    <h2 className="fw-bold text-dark">Popular Blood Tests</h2>
                </div>

                {loading && (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-3 text-muted">Loading popular tests...</p>
                    </div>
                )}

                {error && (
                    <Alert variant="danger" className="text-center">
                        {error}
                    </Alert>
                )}

                {!loading && !error && (
                    <>
                        <Row className="g-4">
                            {tests.map((test, index) => (
                                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                    <TestCard test={test} />
                                </Col>
                            ))}
                        </Row>

                        {/* View All Tests Button */}
                        <div className="text-center mt-5">
                            <Button
                                size="lg"
                                className="px-5 py-2 fw-bold border-0"
                                onClick={() => navigate('/tests')}
                                style={{
                                    background: 'linear-gradient(90deg, #0077b6, #00b4d8)',
                                    borderRadius: '30px',
                                }}
                            >
                                View All Tests
                            </Button>
                        </div>
                    </>
                )}
            </Container>

            <style jsx>{`
                .hover-shadow:hover {
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
                    transform: translateY(-5px);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default PopularTests;