import React from 'react';
import { Facebook, Twitter } from 'react-bootstrap-icons';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, title, speciality, img, des, phone, email } = doctor;
    return (
        <div className="doctor">
            <div className="doctor-img">
                <img src={img} alt="" />
            </div>
            <div className="doctor-des">
                <h3>{name}</h3>
                <h6>{title}</h6>
                <p className="speciality">{speciality}</p>
                <p>{des}</p>
                <div className="doctors-contact">
                    <p className="phone">
                        <span> phone:</span> {phone}
                    </p>
                    <p className="email">
                        <span>email: </span> {email}
                    </p>
                    <p className="icons">
                        <Facebook className="icon-one icon" />
                        <Twitter className="icon-two icon" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;