import React from "react";
import "./css/HighLights.css";
import HighLightCard from "./HighlightCard";
import cc4strimage from "./images/cc_4_star.png";
import kickstrtroundb from "./images/kickstrt_roundb.png";
import cfpupilimage from "./images/cf_pupil.png"; 


function HighLights(){

    return (
        <div className="App__HighLights" id="highlights">
            <h1><u>HighLights</u></h1>
            <div className="highlight__container">
                <HighLightCard key = {1} heading="Codechef : 4*" imgsrc = {cc4strimage} info="4* Competitive programmer at codechef. Participated in more than 60 contest and solved around 400 algorithmic problems on codechef." explorelink ="https://www.codechef.com/users/pdwivedi294"/>
                <HighLightCard key={2} heading="Google Kickstrt" imgsrc={kickstrtroundb} info="Participated in Google kickstrt 2022 and secured a best global rank of 592 in Round B." explorelink= "https://drive.google.com/file/d/1UlV_KXhCXG32dugWVi2SbQm70P4b0gVr/view" />
                <HighLightCard key={3} heading="Codeforces : Pupil" imgsrc={cfpupilimage} info="Pupil on codeforces with a maximum rating from 1374. Attended more than 60 contest and solved around 300 problems." explorelink="https://codeforces.com/profile/Puneet_04"/>
                {/* kickstart rank */}
                {/* pupil */}

                {/* <HighLightCard key = {2} heading="Codechef : 4*" imgsrc = {cc4strimage} info="4* Competitive programmer at codechef. Participated in more that 60 contest and solved around 400 problems on codechef." />
                <HighLightCard key = {3} heading="Codechef : 4*" imgsrc = {cc4strimage} info="4* Competitive programmer at codechef. Participated in more that 60 contest and solved around 400 problems on codechef." />
                <HighLightCard key = {4} heading="Codechef : 4*" imgsrc = {cc4strimage} info="4* Competitive programmer at codechef. Participated in more that 60 contest and solved around 400 problems on codechef." />
                <HighLightCard key = {5} heading="Codechef : 4*" imgsrc = {cc4strimage} info="4* Competitive programmer at codechef. Participated in more that 60 contest and solved around 400 problems on codechef." /> */}

            </div>
        </div>
    );
}

export default HighLights;
