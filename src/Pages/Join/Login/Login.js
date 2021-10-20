import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoole, handleLogin, handleEmailChange, handlePasswordChange, user, error, } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const handleGoogleLogIn = () => {
        signInUsingGoole()
            .then((result) => {
                history.push(redirect_url);
            })
    }
    return (
        <div className="login">
            <Container className=" d-flex justify-content-center">
                <Form onSubmit={handleLogin} className="col-md-6 p-3 login-form " >
                    <h2>Please Login</h2>
                    <Form.Group className="my-3 pt-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    {
                        !user?.email && <h5 className="text-danger">{error}</h5>
                    }
                    {/* ============
                            buttons
                        ================= */}
                    <button className="more border-0" type="submit">Login</button>
                    <br />
                    <p>-----------------------Or---------------------</p>
                    <div className="mb-3">
                        <button onClick={handleGoogleLogIn} className="more me-3 border-0" type="submit">Google Login
                        </button>
                        <button className="more border-0 mt-2" type="submit">Facebook Login
                        </button>
                    </div>
                    <div>
                        <p>If you don't have any account.....</p>
                        <h5>please Create Account</h5>
                        <Link to="/register" className="more" type="submit">Create</Link>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Login;