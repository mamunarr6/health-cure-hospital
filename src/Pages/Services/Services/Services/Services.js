import React from 'react';
import { Container } from 'react-bootstrap';
import useFirebase from '../../../../hooks/useFirebase';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const { services } = useFirebase();

    return (
        <div className="services">
            <Container>
                <h1>This is services.</h1>
                <div className="service-container">
                    {
                        services?.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;