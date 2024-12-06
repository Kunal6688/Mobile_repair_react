import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import ContactUs from "../components/ContactUs"
import Footer from "../components/footer";

function ContactPage() {
    return (  
        <>
            <Navbar/>
            <div>
                <h1 className="text-teal-500 mt-12 text-center text-3xl font-semibold">Contact Us</h1>
                <p className="mt-2 text-center">Any question or remarks? Just write us a message!</p>
            </div>
            <ContactUs/>
            {/* <h1 className="text-teal-500 text-3xl font-semibold text-center">Our Location</h1> */}

            <Footer/>

        </>
    );
}

export default ContactPage;