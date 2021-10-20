import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div className="service">
            <div className="service-img">
                <img src={img} alt="" />
            </div>
            <div className="service-des ps-2 pb-2">
                <h2>{name}</h2>
                <p>{description.slice(0, 80)}</p>
                <Link to={`/more/${id}`} className="more">More</Link>
            </div>
        </div>
    );
};

export default Service;