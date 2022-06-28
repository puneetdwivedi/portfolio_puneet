import React from "react";
import "./css/AboutMe.css";
import { Link } from "react-scroll";


function AboutMe() {

    return (
        <div className="AboutMe" id="aboutme">
            <div className="AboutMe__left">
                <img src="" alt="" />
            </div>
            <div className="AboutMe__right">
                <h2>Puneet Dwivedi</h2>
                <h3>Competitive Programmer || Web Developer </h3>
                <p>Hello I am Puneet Dwivedi. A 2024 undergraduate, pursuing Bachelor of Technology.</p>
                <p>I am a passionate to solve algorithmic problems. I am 4* Competitive Programmer at
                     codechef and pupil at Codeforces. Apart from these I am also a MERN stack developer.
                </p>
                <Link
                    activeClass="active"
                    to="contactme"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}>
                    <button>Get In Touch</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutMe;