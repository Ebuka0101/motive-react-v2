import React from "react";
import Promotions from "./homePageSections/promotions";
import Ranking from "./homePageSections/ranking";
import FeaturesController from "./homePageSections/featuredEvents"
import WhatWeAre from "./homePageSections/whatWeAre"
import "../StyleFile/globalStyles.css"
import "../StyleFile/eventType.css"
import featured from "../Images/55f0079c49cb2eda8270208e902fbc48.jpg"
import {useNavigate} from "react-router-dom";

// change Home.css to home features and move need styles from EventType.css to global 

export default function Home(props){
    let navigate = useNavigate();
    return(
        <div>
            <div className="bg-dark py-5 px-lg-3 fireWorks" style={{height:  "655px"}}>
            {/* <div className="bg-dark borderHighlight fireWorks"  style={{maxHeight:  "555px"}}> */}
                <FeaturesController 
                    desktopPosterContainerStyle="featuredEventPoster" 
                    mobilePosterContainerStyle="featuredEventPoster" 
                    customBg="bgHeaderHeight" 
                    infoContainerStyle="featuredEventInfo" 
                    image={featured} alt="Main" 
                    imgStyle="imgStyles" 
                    startTime="11:22 AM" 
                    endTime="9:00 PM" 
                    locationType="Beach" 
                    eventType="Party" 
                    onClick={()=>{
                        navigate("/event", {state: {img: featured, startt: "11:24 AM", endt: "9:00 PM", startd: "22 APR 2022", endd: "23 APR 2022", locationType: "Beach", eventType: "Party", username: "Marked", spotlights: 200}})}}/>
            {/* </div> */}
            </div>

            <Ranking />
            <WhatWeAre navigate={navigate}/>
            <Promotions navigate={navigate}/>
        </div>

    );
}