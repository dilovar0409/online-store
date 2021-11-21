import React from 'react';
import aboutImg from '../Assets/logo.png';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-center">
                <div className="about-img">
                    <img src={aboutImg} alt="Logo" />
                </div>
                <div className="about-details">
                    <p><b>C</b>lothes is a net store which has been created in oreder to provide you the best
                        service and quality in the best price. It cooperates with many famous companies and provides
                        all the benafits that you gain from this store. we are the only one who bridgs clothes
                        directly from factories.</p>
                </div>
            </div>
        </div>
    )
}

export default About
