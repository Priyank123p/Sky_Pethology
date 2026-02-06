import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PageHeader = () => {
    const location = useLocation();
    const path = location.pathname;

    // Configuration for each page
    const pageDetails = {
        '/about': {
            title: 'About Us',
            description: 'Learn more about our mission, vision, and dedicated team.'
        },
        '/tests': {
            title: 'Diagnostic Tests',
            description: 'Explore our wide range of precise and reliable diagnostic tests.'
        },
        '/packages': {
            title: 'Health Packages',
            description: 'Comprehensive health checkup packages tailored for your well-being.'
        },
        '/contact': {
            title: 'Contact Us',
            description: 'Get in touch with us for appointments, queries, or home collection.'
        }
    };

    // Don't render on Home page or if path not found
    if (path === '/' || !pageDetails[path]) {
        return null;
    }

    const { title, description } = pageDetails[path];

    return (
        <div className="page-header position-relative" style={{ marginTop: '7%' }}>
            {/* Background with overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                    zIndex: -1
                }}
            ></div>

            <Container className="py-5 text-center text-white">
                <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {title}
                </h1>
                <p className="lead opacity-75 mb-0" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {description}
                </p>

                {/* Decorative Element */}
                <div
                    className="mx-auto mt-4"
                    style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: 'var(--primary-blue, #0d6efd)',
                        borderRadius: '2px'
                    }}
                ></div>
            </Container>
        </div>
    );
};

export default PageHeader;
