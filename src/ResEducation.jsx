import React from "react";
import "./css/ResEducation.css";

function ResEducation(){

    return(
        <div className="ResEducation">
            <div className="ResEducation__insitute">
                <div>
                    <h3>Indore Institute of Science and Technology, INDORE</h3>
                    <p> Bachelor of Technology, Information Technology</p>
                         
                </div>
                <span>2020 - Present</span>
            </div>

            <div className="ResEducation__insitute">
                <div>
                    <h3>Adarsh Vidyalaya, RAIPUR</h3>
                    <p> 
                        Class 12 <br/>
                        PCM :  92.4%
                    </p>
                         
                </div>
                <span>2019 - 2020</span>
            </div>

            <div className="ResEducation__insitute">
                <div>
                    <h3>Adarsh Vidyalaya, RAIPUR</h3>
                    <p> 
                        Class 12 <br/>
                        Result : 81.2%
                    </p>
                         
                </div>
                <span>2017 - 2018</span>
            </div>
        </div>
    );
}

export default ResEducation;