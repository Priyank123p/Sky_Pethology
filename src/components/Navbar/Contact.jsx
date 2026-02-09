import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Footer from '../Footer';
import { Send, User, Mail, Phone, MessageSquare, FileText } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Premium Alert UI
        Swal.fire({
            title: 'Thank You!',
            text: 'Your inquiry has been received. We will contact you shortly.',
            icon: 'success',
            confirmButtonText: 'Great!',
            confirmButtonColor: '#0077b6', // --primary-blue
            background: '#ffffff',
            backdrop: `
                rgba(0,0,123,0.1)
                left top
                no-repeat
            `,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            customClass: {
                title: 'font-weight-bold text-dark',
                popup: 'rounded-4 shadow-lg border-0'
            }
        });

        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="fade-in bg-light min-vh-100 d-flex flex-column">
            {/* Hero Section for Contact */}
            <div className="position-relative py-5 bg-primary-blue text-white overflow-hidden">
                <div className="container position-relative z-2 text-center">
                    <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
                    <p className="lead opacity-75 mb-0">We'd love to hear from you. Send us a message!</p>
                </div>
                {/* Decorative background circle */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                    style={{ background: 'radial-gradient(circle at top right, #fff 0%, transparent 60%)' }}>
                </div>
            </div>

            <div className="container py-5 my-4 flex-grow-1">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-body p-5 bg-white">
                                <div className="text-center mb-5">
                                    <h2 className="fw-bold text-dark mb-2">Inquiry Form</h2>
                                    <div className="d-flex justify-content-center">
                                        <div style={{ width: '60px', height: '4px', backgroundColor: '#fccb00', borderRadius: '2px' }}></div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        {/* Name Field */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control bg-light border-0"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    style={{ borderRadius: '10px' }}
                                                />
                                                <label htmlFor="name" className="text-muted">
                                                    <User size={18} className="me-2 text-primary" /> Full Name
                                                </label>
                                            </div>
                                        </div>

                                        {/* Email Field */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control bg-light border-0"
                                                    id="email"
                                                    name="email"
                                                    placeholder="name@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    style={{ borderRadius: '10px' }}
                                                />
                                                <label htmlFor="email" className="text-muted">
                                                    <Mail size={18} className="me-2 text-primary" /> Email Address
                                                </label>
                                            </div>
                                        </div>

                                        {/* Phone Field */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="tel"
                                                    className="form-control bg-light border-0"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    style={{ borderRadius: '10px' }}
                                                />
                                                <label htmlFor="phone" className="text-muted">
                                                    <Phone size={18} className="me-2 text-primary" /> Phone Number
                                                </label>
                                            </div>
                                        </div>

                                        {/* Subject Field */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control bg-light border-0"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    style={{ borderRadius: '10px' }}
                                                />
                                                <label htmlFor="subject" className="text-muted">
                                                    <FileText size={18} className="me-2 text-primary" /> Subject
                                                </label>
                                            </div>
                                        </div>

                                        {/* Message Field */}
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control bg-light border-0"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    name="message"
                                                    style={{ height: '150px', borderRadius: '10px' }}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                                <label htmlFor="message" className="text-muted">
                                                    <MessageSquare size={18} className="me-2 text-primary" /> Your Message
                                                </label>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="col-12 text-center mt-4">
                                            <button
                                                type="submit"
                                                className="btn btn-lg text-dark px-5 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-sm"
                                                style={{
                                                    backgroundColor: '#fccb00',
                                                    borderRadius: '50px',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(252, 203, 0, 0.3)';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }}
                                            >
                                                Send Inquiry <Send size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
