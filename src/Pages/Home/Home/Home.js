import React from 'react';
import { Container } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';
import Service from '../../Services/Services/Service/Service';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    const { services } = useFirebase();

    return (
        <div className="home">
            <Banner></Banner>
            <div className="services">
                <Container>
                    <h1 className="text-center py-5">Our Services</h1>
                    <div className="service-container">
                        {
                            services?.slice(0, 6).map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </Container>
            </div>
            {/* ====================
                features
                ==================== */}
            <div className="features-group pb-4">
                <Container>
                    <h2 className="text-center py-4">Features</h2>
                    <div className="features">
                        <div className="feature">
                            <h3>23 Hrs Ambulance</h3>
                            <p>How all this mistaken idea denoucing pleasure and praisings pain was born complete account expound.</p>
                        </div>
                        <div className="feature">
                            <h3>Food & Dietry</h3>
                            <p>There anyone who loves or pursues or to obtain pain of itself, because it is but because occasionally.</p>
                        </div>
                        <div className="feature">
                            <h3>Special Nurses</h3>
                            <p>Pursues or desires to obtain pain itself, because is pain, because occasionally circumstances occur procure.</p>
                        </div>
                        <div className="feature">
                            <h3>Places of Worship</h3>
                            <p>Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right.</p>
                        </div>
                        <div className="feature">
                            <h3>Customer Support</h3>
                            <p>Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right.</p>
                        </div>
                        <div className="feature">
                            <h3>Very Fast Aid</h3>
                            <p>Pursues or desires to obtain pain itself, because is pain, because occasionally circumstances occur procure.</p>
                        </div>
                    </div>
                </Container>
            </div>
            {/* ==================
                what people say
                ================== */}
            <div className="patient-say">
                <Container>
                    <h2 className="text-center text-white py-5">Patients Testimonial</h2>
                    <div className="patient-say-container">
                        <div>
                            <img className="img-fluid" src="https://i.ibb.co/kgtKNZk/Handsome-mid-adult-man-with-beard-standing-with-crossed-hands-and-looking-at-camera-Mature-middle-ea.jpg" alt="" />
                            <p className="text-white  w-75 py-4 ms-5">
                                Professionals in their work, the surgery went well and I was able to go on with my life within just a few weeks. Recommended!</p>
                        </div>
                        <div>
                            <img className="img-fluid" src="https://i.ibb.co/GMkwbnB/Middle-aged-man-portrait-at-sunset.jpg" alt="" />
                            <p className="text-white  w-75 py-4 ms-5">I am deeply grateful to Dr. Chase for his expertise and care. He practices both the science and the art of cardiac surgery.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pb-4">
                        <button className="btn-regular">View More</button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;