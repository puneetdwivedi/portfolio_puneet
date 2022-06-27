import React from "react";
import "./css/Resume.css";
import ResAchivements from "./ResAchivements";
import ResCoding from "./ResCoding";
import ResProjects from "./ResProjects";
import ResSkills from "./ResSkills";
import ResEducation from "./ResEducation"
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ComputerIcon from '@material-ui/icons/Computer';
import RestoreIcon from '@material-ui/icons/Restore';
import BarChartIcon from '@material-ui/icons/BarChart';
import CodeIcon from '@material-ui/icons/Code';
// import {Link} from "react-scroll";
// import {HashLink as Link} from "react-router-hash-link";
 import {Routes, Route, NavLink }  from "react-router-dom";




function Resume(){

    return (
        <div className="Resume" id="resume">
            <h1><u>Resume</u></h1>
            <div className="Resume__container">
                <div className="Resume__left">
                    <div className="Resume__icon">
                        <NavLink to="/">
                            <CastForEducationIcon className="icons"/>
                        </NavLink>

                        <NavLink
                        to="skills">
                           <ComputerIcon className="icons"/>
                        </NavLink>

                        <NavLink to="coding">
                            <CodeIcon className="icons"/>
                        </NavLink>

                        <NavLink to="achivements">
                            <RestoreIcon className="icons"/>
                        </NavLink>

                        <NavLink to="projects">
                            <BarChartIcon className="icons"/>
                        </NavLink>
                    </div>


                    <div className="Resume__menus">
                        <NavLink 
                        to="/" 
                        activeclassName="active"
                        className="Resume_menus_heading">
                            <h4>Education</h4>
                        </NavLink>

                        <NavLink
                        to="skills"
                        activeclassName="active" 
                        className="Resume_menus_heading"> 
                            <h4>Programmning Skills</h4>
                        </NavLink>

                        <NavLink 
                        to="coding" 
                        activeclassName="active"
                        className="Resume_menus_heading">
                            <h4>Coding Profiles</h4>
                        </NavLink>

                        <NavLink 
                        to="achivements"
                        activeclassName="active" 
                        className="Resume_menus_heading">
                            <h4>Achievments</h4>
                        </NavLink>

                        <NavLink 
                        to="projects" 
                        activeclassName="active"
                        className="Resume_menus_heading">
                            <h4>Projects</h4>
                        </NavLink>
                    </div>
                </div>
                <div className="Resume__right">
                    <Routes>
                        <Route exact={true} path="/" element={<ResEducation />} />
                        <Route exact={true} path="/skills" element={<ResSkills />} />
                            
                  
                        <Route exact={true} path="/coding" element={<ResCoding />} />
                           
                        <Route exact={true} path="/achivements" element={<ResAchivements />} />
                            
            
                        <Route exact path="/projects" element={<ResProjects />} />
                            
                    </Routes>
                </div>
                
            </div>
        </div>
    );
}

export default Resume;