import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Facebook, Google, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                {/* ===================
                        footer top
                ===================== */}
                <div className="footer-top py-4">
                    <div>
                        <h3 className="mt-1 mb-3 color">HEALTH CURE HOSPITAL</h3>
                        <p>My kinda people, my kinda place. There's something special about this place.</p>
                        <p> Street no: 5/7 <br /> Uttara-7, Dhaka</p>
                        <p>email: healthcure@gmail.com</p>
                        <p>phone: +8801701234567</p>
                    </div>
                    <div>
                        <h3 className="mt-1 mb-3 color">Our Latest News</h3>
                        <h6>Together we can do so much</h6>
                        <h6>The Three Musketeers Surgical Team</h6>
                        <h6>Accredited surgical facility</h6>
                        <h6>Health checks for babies</h6>
                    </div>
                    <div>
                        <h3 className="mt-1 mb-3 color">Subscribe To Our Newsletter</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <input type="button" value="Subscribe" className="more border-0" />
                        </Form>
                    </div>
                </div>
            </Container>
            {/* ========================
                    footer down
            ============================ */}
            <div className="footer-down py-3">
                <Container className="footer-down-container">
                    <div className="footer-down-text">Copyright &copy; 2021  All Rights Reserved, Powered by <strong>HEALTH CURE HOSPITAL. </strong> </div>
                    <div className="footer-down-icon">
                        <Facebook className="footer-icon"></Facebook>
                        <Twitter className="footer-icon"></Twitter>
                        <Google className="footer-icon"></Google>
                        <Instagram className="footer-icon"></Instagram>
                        <Youtube className="footer-icon"></Youtube>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;