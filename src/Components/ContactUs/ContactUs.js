import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

const ContactUs = () => {

    const contactus = {
        paddingTop:"100px",
    }
    return (
        <div style={{background:"#111430", height:"auto"}}>
            <div style={contactus}>
            <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactUs;