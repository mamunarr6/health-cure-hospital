import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="my-4">
            <Container>

                <h1 className="text-center mb-4">About Us</h1>
                <div className="aboutus-container">
                    <div>
                        <img className="img-fluid" src="https://i.ibb.co/CPqB8dR/Doctors-and-medical-staff-wearing-surgical-masks-they-are-standing-together-coronavirus-prevention-c.jpg" alt="" />
                    </div>
                    <div>
                        {/* ======================
                            Welcome Section
                            ====================== */}
                        <h2>Welcome to Our Hospital</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content more or less normal distribution of letters opposed.</p>
                        <div>
                            <div>
                                <h3>Our Mission</h3>
                                <p>Reader will be distracted by the readable content of a page when looking at its layout the point of using more or less normal distribution.</p>
                            </div>
                            <div>
                                <h3>Our Vission</h3>
                                <p>Explain to you how all this mistaken idea of denouncing pleasure.</p>
                                <ol>
                                    <li>Idea of denouncing pleasure and praising.</li>
                                    <li>Pleasure and praising pain was complete system.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;