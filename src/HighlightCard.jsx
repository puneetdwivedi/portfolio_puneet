import React from "react";
import "./css/HighlightCard.css";


function HighLightCard({heading, imgsrc, info, explorelink}){

    return (
        <div className="HighLightCard">
            <h4>{heading}</h4>
            <div className="highlightcard__imgcontainer">
                <img src={imgsrc} />
            </div>
            <div className="highlightcard_info">
                <p>{info}</p>
            </div>
            <button><a href={explorelink} target="_blank">Explore</a></button>
        </div>
    );
}


export default HighLightCard;