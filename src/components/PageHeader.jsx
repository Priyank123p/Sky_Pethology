import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import dnaVideo from '../assets/141412-777708076_medium.mp4';


const PageHeader = () => {
    const location = useLocation();
    const path = location.pathname;

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
        },
        '/bookappointment': {
            title: 'Book Appointment',
            description: 'Get in touch with us for appointments or home collection.'
        }
    };



    if (path === '/' || !pageDetails[path]) {
        return null;
    }

    const { title, description } = pageDetails[path];

    return (
        <div className="page-header position-relative overflow-hidden page-header-spacing d-flex align-items-center justify-content-center" style={{ minHeight: '450px' }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: 'cover', zIndex: -2 }}
            >
                <source src={dnaVideo} type="video/mp4" />
            </video>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.86)', zIndex: -1 }}></div>

            <Container className="py-5 text-center text-white position-relative" style={{ zIndex: 1 }}>
                <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {title}
                </h1>
                <p className="lead opacity-75 mb-0" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {description}
                </p>
            </Container>
        </div>
    );
};

export default PageHeader;
