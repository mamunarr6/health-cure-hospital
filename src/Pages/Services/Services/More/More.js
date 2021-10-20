import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const More = () => {
    const { moreId } = useParams();
    const { services } = useAuth();
    const service = services.find((s) => s.id === parseInt(moreId))
    const { name, img, description } = service;
    return (
        <div className="login">
            <Container>
                <div className=" py-4">
                    <div className="d-flex justify-content-center">
                        <img className="w-50" src={img} alt="" />
                    </div>
                    <div className="ms-5">
                        <h1 className="color text-center">{name}</h1>
                        <p className="lh-lg py-3 text-center">{description}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/appoinment" className="btn-regular text-decoration-none">Make an Appoinment</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default More;