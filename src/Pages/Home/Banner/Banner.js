import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className={{ height: "100px" }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img img-fluid"
                        src="https://i.ibb.co/ZVDJLQc/national-cancer-institute-1c8sj2-IO2-I4-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Get Better Care For Your Health</h3>
                        <p>Medical services that you can trust</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  banner-img"
                        src="https://i.ibb.co/868PWZT/piron-guillaume-y5h-QCIn1c6o-unsplash.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Get Better Care Like Home</h3>
                        <p>Medical excellence every day.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  banner-img"
                        src="https://i.ibb.co/c8HLVHr/sammy-williams-38-Un6-Oi5be-E-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Get The Best Care For Your Family</h3>
                        <p>Exceptional people.Exceptional care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;