import React from 'react';
import './Intro.css'
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import brandPic from '../../images/brand pic.jpg'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
    return (
        <div className=" animateStyle" >
            <div>
                <figure className="text-center mt-5">
                    <img className="img-fluid" style={{ height: "300px", width: "300px", borderRadius: "50%" }} src={brandPic} alt="img" />
                </figure>
            </div>
            <h1 className="text-white text-center textH1">I AM <span style={{color:"#0AB6FA"}}>ALAMGIR HOSSAN</span></h1>
            <div className="d-flex justify-content-center align-items-center">
            
                <h3 className="text-white">
                    {''}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'A Front End Web Developer',
                            10000,
                        ]}
                    />
                </h3>
            </div>

            <div className="text-white d-flex justify-content-center mt-5 icons">
                <a href="https://www.facebook.com/alamgir.hossan.545"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.linkedin.com/in/alamgir-hossan-bb640a1a3/"><FontAwesomeIcon className="mx-5" icon={faLinkedin} /></a>
                <a href="https://github.com/Alamgirhossann"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    );
};

export default Intro;