import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Appoinment = () => {
    const appoinment = e => { e.preventDefault() }
    return (
        <div>
            <Container>
                <h1 className="my-3">Book an Appoinment</h1>
                <Form onSubmit={appoinment}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Select aria-label="Default select example">
                                <option>Select Department</option>
                                <option value="Blood Bank">Blood Bank</option>
                                <option value="Orthology">Orthology</option>
                                <option value="Metalogy">Metalogy</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Control type="text" placeholder="Enter Doctor's Name" />
                        </Form.Group>
                    </Row>
                    {/* ================================================
                                    name,email,password
                    ================================================== */}
                    <Row>
                        <Col>
                            <Form.Label>First name:</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last name:</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>
                    {/* =======================================
                                    address
                    ======================================== */}
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control placeholder="Address" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose State">
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Rajshahi</option>
                                <option>Barishal</option>
                                <option>Sylhet</option>
                                <option>Rangpur</option>
                                <option>Khulna</option>
                                <option>Mymenshing</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                    {/* ============
                        others
                        =========== */}
                    <Form.Group>
                        <Form.Label>Gender:</Form.Label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">Others</label>
                        </div>
                    </Form.Group>
                    <button className="more border-0 mt-3" type="submit"> Submit</button>
                </Form>
                <br />
            </Container>
        </div>
    );
};

export default Appoinment;