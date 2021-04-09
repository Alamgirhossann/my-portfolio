import React from 'react';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Intro from '../Intro/Intro';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div style={{backgroundColor:'#111430'}}>
            <Intro></Intro>
            <About></About>
            <Work></Work>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;