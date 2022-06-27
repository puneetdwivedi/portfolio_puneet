import React from "react";
import "./css/Profile.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import Typical from 'react-typical';
import {Link} from "react-scroll";



function Profile(){
    return(
        <div className="Profile" id="profile">

            <div className="Profile__navbar">
                <h1>Puneet Dwivedi </h1>
                <ul className="Profile__menus">
                    <li>
                        <Link
                        activeClass="active"
                        to="profile"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                            Home 
                        </Link>
                    </li>

                    <li>
                        <Link
                        activeClass="active"
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}>
                            About Me 
                        </Link>
                    </li>

                    <li>
                        <Link
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1200}>
                            Resume 
                        </Link>
                    </li>

                    <li>
                        <Link
                        activeClass="active"
                        to="highlights"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={2000}>
                            HighLights 
                        </Link>
                    </li>

                    <li>
                        <Link
                        activeClass="active"
                        to="contactme"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={2200}>
                            Contact Me 
                        </Link>
                    </li>

                </ul>
            </div>



            <div className="Profile__home">
                <div className="Profile__homeleft">
                    <div className="Profile__socialicon">
                        <a href="https://www.linkedin.com/in/pdwivedi294/" target="_blank"><LinkedInIcon className="socialicon"/></a>
                        <a href="https://github.com/puneetdwivedi" target="_blank"><GitHubIcon className="socialicon"/></a>
                        <a href="https://twitter.com/PuneetD04165296" target="_blank"><TwitterIcon className="socialicon"/></a>
                        <InstagramIcon className="socialicon"/>
                        {/* <a href="https://linktr.ee/pdwivedi294" target="_blank"> <ListAltOutlinedIcon className="socialicon"/></a> */}
                    </div>

                    <div className="Profile__name">
                        <h2>Hello, I'm <span>Puneet</span></h2>
                    </div>
                    
                    <div className="Profile__animatedtext">
                        <Typical className="Profile__typical"
                            steps={['Competitive Programmer', 1000, 'JavaScript Developer💻',1000, 'MERN Dev🌐',1000]}
                            loop={Infinity}
                            // wrapper="p"
                        />
                    </div>

                    <div className="Profile__quote">
                        <p>A Learner.....</p>
                        <p>Knack of building applications with front and back end operations. </p>
                    </div>

                    <div className="Profile_buttons">
                        <Link
                            activeClass="active"
                            to="contactme"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000}>
                            <button className="contactme_button">
                                Contact me
                            </button>
                            </Link>
                       
                        <button className="getresume_button"> <a href="https://drive.google.com/file/d/1jJSJYnadmD_bZNEUA30W0_FqQNUjcBSL/view?usp=sharing" download="Puneet_Dwivedi_resume.pdf" target="_blank">Get Resume</a></button>
                    </div>
                </div>

                <div className="Profile__homeright"></div>

            </div>


            <div className="custom-shape-divider-bottom-1645486484">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

        </div>
        

    )
}

export default Profile;
