import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand as={Link} to="/home">HEALTH CURE HOSPITAL</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/appoinment">Appoinment</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/aboutus">About us</Nav.Link>

                        {
                            user ?
                                <div className="d-flex align-items-center">
                                    <span className="user-header">{user.displayName}</span>
                                    <span className="me-3">
                                        <PersonCircle className="personIcon" />
                                    </span>
                                    <Nav.Link as={Link} type="submit" className="text-white logout" to="/login" onClick={logOut}>Logout</Nav.Link>
                                </div> :
                                <Nav.Link as={Link} className="text-white" to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;