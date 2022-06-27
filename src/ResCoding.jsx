import React from "react";
import "./css/ResCoding.css";
import LaunchIcon from '@material-ui/icons/Launch';

function ResCoding(){

    return(
        <div className="ResCoding" id="coding">
            <div className="ResCoding__socialprofile">
                <div>
                    <h3>LeetCode : pdwivedi294 </h3>
                    <a href="https://leetcode.com/pdwivedi294/" target="_blank"><LaunchIcon /></a>
                    {/* <p>Solved 150+ DataStructure and Algorithm problems.</p> */}
                </div>
            </div>

            <div className="ResCoding__socialprofile">
                <div>
                    <h3>Codechef : pdwivedi294 </h3>
                    <a href="https://www.codechef.com/users/pdwivedi294" target="_blank"><LaunchIcon /></a>
                </div>
                {/* <p>3* rated (1691 max-rating).</p> */}
            </div>

            <div className="ResCoding__socialprofile">
                <div>
                    <h3>Codeforces : Puneet_04 </h3>
                    <a href="https://codeforces.com/profile/Puneet_04" target="_blank"><LaunchIcon /></a>
                </div>
                {/* <p>Newbie (max-rating 1021).</p> */}
            </div>

            <div className="ResCoding__socialprofile">
                <div>
                    <h3>Github : puneetdwivedi </h3>
                    <a href="http://github.com/puneetdwivedi" target="_blank"><LaunchIcon /></a>
                </div>
                {/* <p></p> */}
            </div>

            <div className="ResCoding__socialprofile">
                <div>
                    <h3>GeeksForGeek : pdwivedi294 </h3>
                    <a href="https://auth.geeksforgeeks.org/user/pdwivedi294/practice/" target="_blank"><LaunchIcon /></a>
                </div>
                {/* <p>Solved 150+ DataStructure and Algorithm problems.</p> */}
            </div>

            
            
        </div>
    );
}

export default ResCoding;