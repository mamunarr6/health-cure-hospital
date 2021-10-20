import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {

    const { handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange } = useAuth();

    return (
        <div className="register">
            <Container className="d-flex justify-content-center">
                <Form onSubmit={handleRegistration} className="col-md-6 register-form">
                    <h4 className="my-3">Register And Take The Best Quality Of Service</h4>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Your Name" required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter Email" required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Agree to All Terms and Conditions" required />
                    </Form.Group>
                    <Button className="more border-0" type="submit">Register</Button>
                    <p className="py-3">Have account? <Link to="/login" className="more">Login</Link> </p>
                </Form>
            </Container>
        </div>
    );
};

export default Register;