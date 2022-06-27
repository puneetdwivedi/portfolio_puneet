import React from "react";
import "./css/Contactme.css";
import ContactmeForm from "./ContactmeForm";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// import Phone from "@material-ui/icons/Phone";

function Contactme(){

    return(
        <div className="App__Contactme" id="contactme">
            <h1><u>Contact me</u></h1>
            <div className="Contactme_container">
                <div className="contactme_left">
                    <div className="contactleft_contacticons">
                         <a href="tel:+919301042640"><PhoneIcon className="contactlefticons"/>9301042640</a>
                    </div>
                    <div className="contactleft_contacticons">
                         <a href="mailto:pdwivedi294@gmail.com"><EmailIcon className="contactlefticons"/> pdwivedi294@gmail.com</a>
                    </div>
                    <div className="contactleft_contacticons">
                        <a href="https://www.linkedin.com/in/pdwivedi294/" target="_blank"><LinkedInIcon className="contactlefticons"/>LinkedIn</a>
                    </div>
                    <div className="contactleft_contacticons">
                        <a href="https://www.google.com/maps/dir//Indore,+Madhya+Pradesh+453331/@22.6256612,75.8108178,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fbde044b5545:0x25cc5c825121e9e1!2m2!1d75.812234!2d22.6255549" target="_blank"> <LocationOnIcon className="contactlefticons"/>Indore, MP India</a>
                    </div>

                </div>
                <div className="contactme_right">
                    <div style={{backgroundColor : "#30336b", padding:"10px", borderRadius:"7px", marginBottom:"2%"}}><h3>Get In Touch : Write me</h3></div>
                    <ContactmeForm />
                </div>
            </div>
        </div>
    );
}


export default Contactme;