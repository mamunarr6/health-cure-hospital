import React from 'react';
import { Container } from 'react-bootstrap';
import useFirebase from '../../../../hooks/useFirebase';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const { doctors } = useFirebase();
    return (
        <div className="doctors">
            <Container>
                <div>
                    {
                        doctors?.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Doctors;