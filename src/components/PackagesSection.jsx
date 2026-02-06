import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const packagesData = [
    {
        id: 1,
        title: "SKY DIAMOND @ SKY",
        availability: "Sat, Sun",
        parameters: 93,
        price: 2700,
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "SKY PLATINUM @ SKY",
        availability: "Sat, Sun",
        parameters: 82,
        price: 2300,
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "SKY GOLD @ SKY",
        availability: "Sat, Sun",
        parameters: 78,
        price: 1700,
        img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "SKY SILVER @ SKY",
        availability: "Sat, Sun",
        parameters: 74,
        price: 1500,
        img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
    }
];

const PackagesSection = () => {
    return (
        <section className="section-padding bg-light mt-5">
            <Container>
                <Row>
                    {packagesData.map((pkg, index) => (
                        <Col key={pkg.id} lg={3} md={6} xs={12} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-100 shadow-sm border-0 overflow-hidden package-card" style={{ borderRadius: '15px' }}>
                                    <div className="position-relative">
                                        <Card.Img
                                            variant="top"
                                            src={pkg.img}
                                            alt={pkg.title}
                                            style={{ height: '200px', objectFit: 'cover' }}
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
                                                fontFamily: 'Montserrat',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            Sky
                                        </div>
                                    </div>
                                    <Card.Body className="p-4" style={{ backgroundColor: '#F0F0F0' }}>
                                        <Card.Title className="mb-3" style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', minHeight: '50px' }}>
                                            {pkg.title}
                                        </Card.Title>

                                        <div className="mb-2">
                                            <small className="text-muted fw-bold">Available on <span style={{ color: '#F37021' }}>{pkg.availability}</span></small>
                                        </div>

                                        <div className="mb-3">
                                            <p className="mb-0" style={{ color: '#4834d4', fontWeight: '600' }}>
                                                {pkg.parameters} Parameters included
                                            </p>
                                        </div>

                                        <h3 className="mb-0" style={{ color: '#F37021', fontWeight: '500', fontSize: '1.3rem' }}>
                                            ₹ {pkg.price}
                                        </h3>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>

        </section>
    );
};

export default PackagesSection;
