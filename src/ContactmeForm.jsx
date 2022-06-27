import React ,{useRef, useState}from "react";
import "./css/Contactmeform.css"
import emailjs from '@emailjs/browser';
import Modaloncontactformsubmit from "./Modaloncontactformsubmit";
// import { useState } from "react";



function ContactmeForm(){
    const [uname, setuname] = useState("");
    const [uemail, setuemail] = useState("");
    const [umsg, setumsg] = useState("");
    const [showmodal, setshowmodal] = useState(false);
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        
      setshowmodal(true);

        if(uname !== "" && uemail !== "" && umsg !== "" ){
            emailjs.sendForm('service_h54j1om', 'template_2uwt5x5', form.current, 'IAWeWf3aO6VVAoGUx')
            .then((result) => {
                console.log(result.text);
                setumsg("");
                setuemail("");
                setuname("");
                
            }, (error) => {
                console.log(error.text);
                setumsg("");
                setuemail("");
                setuname("");
                alert("Due to some technical issue, unable to send message");
            });
        }
      
    };
  
    return (
        <div className="Contactme__contactmeform">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name"  
                    onChange={event => setuname(event.target.value)}
                    value={uname}/>
                <label>Email</label>
                <input type="email" name="user_email" 
                    onChange={event => setuemail(event.target.value)}
                    value={uemail}/>
                <label>Message</label>
                <textarea name="user_message" 
                    onChange={event => setumsg(event.target.value)}
                    value={umsg}/>
                <input type="submit" value="Send" />
            </form>
            {showmodal && <Modaloncontactformsubmit 
            usemail={uemail}
            usname={uname}
            usmessage={umsg}
            setshowmodal= {setshowmodal} />}
      </div>
    );
}

export default ContactmeForm;

