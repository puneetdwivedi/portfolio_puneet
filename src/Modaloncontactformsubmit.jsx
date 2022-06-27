import React from "react";
import "./css/Modaloncontactformsubmit.css"


function Modaloncontactformsubmit({usemail, usname, usmessage,setshowmodal}){
    let message = "";
    if(usname === "" || usemail === "" || usmessage === ""){
        message = `All fields are mandatory`;
    } 
    else{
        message = `Hey thanks for contacting me. I will get you back soon....`;
    }
        return (
            <div className="Modaloncontactformsubmit">
                <div className="modalcontainer">
                    <button onClick={()=>{setshowmodal(false)}}>X</button>
                    <p>{message}</p>
                </div>
            </div>
    
        );
}

export default Modaloncontactformsubmit;