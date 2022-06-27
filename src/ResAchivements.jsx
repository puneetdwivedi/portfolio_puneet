import React from "react";
import "./css/ResAchivements.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ResAchivements(){

    return(
        <div className="ResAchivements" id="achivements">
            <div className="ResAchivements__achieve">
                <h3><span><FiberManualRecordIcon /></span>4*(max-rating 1807) on codechef</h3>
            </div>
            <div className="ResAchivements__achieve">
                <h3><span><FiberManualRecordIcon /></span>Google Kickstart best global rank 597 </h3>
            </div>
            
            <div className="ResAchivements__achieve">
                <h3><span><FiberManualRecordIcon /></span>Solved around 200 question on LeetCode</h3>
            </div>

            <div className="ResAchivements__achieve">
                <h3><span><FiberManualRecordIcon /></span>Qualified for google code jam round1 in 2021 and 2022 </h3>
            </div>

            <div className="ResAchivements__achieve">
                <h3><span><FiberManualRecordIcon /></span>Hash Code 3152 global rank </h3>
            </div>

            <div className="ResAchivements__achieve">
                <h3><span><FiberManualRecordIcon /></span>Solved around 300 question on Codeforces</h3>
            </div>

        </div>
    );
}

export default ResAchivements;