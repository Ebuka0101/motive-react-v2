import React from "react";
import "../StyleFile/eventType.css";
import "../StyleFile/globalStyles.css";
import FeaturesController from "./homePageSections/featuredEvents";
import {useNavigate} from "react-router-dom";
import fourth from "../Images/Festive-Event.png"
import fifth from "../Images/vector-illustration-dance-party-poster-background-template-with-splash-M68Y5J.jpg"
import sixth from "../Images/fleur-sciortino-summer-book-fest-poster.jpg"
import seventh from "../Images/lt16412134_quantized.png"
import eighth from "../Images/media_101c1fe466fb3eaa4e8f9939d1d88e234506ec8a0.jpeg"
import nineth from "../Images/night-club-flyer-template-design-406a7947f953883a9659f89683a16430_screen.jpg"
import tenth from "../Images/1143w-rDvlh6vcVWs.webp"

import tempPic from "../Images/free-flyer-poster-templates-13.jpg";

export default function EventType(){
    const heading = {
        img: tempPic, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Staduim", 
        eventType: "Sports",
        eventTitle: "Amped", 
        username: "Max", 
        spotlights: 910};
    const fourthData = {
        img: fourth, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party",
        eventTitle: "Amped", 
        username: "Pete", 
        spotlights: 910};
    const fifthData = {
        img: fifth, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party",
        eventTitle: "Hyper", 
        username: "Louis", 
        spotlights: 700};
    const sixthData = {
        img: sixth, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party",
        eventTitle: "Emotional", 
        username: "Dorty", 
        spotlights: 810};
    const seventhData = {
        img: seventh, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party",
        eventTitle: "Damage", 
        username: "SkyWalker", 
        spotlights: 620};
    const eighthData = {
        img: eighth, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party",
        eventTitle: "OkayOkay", 
        username: "Aniken", 
        spotlights: 570};       
    const ninethData = {
        img: nineth, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party",
        eventTitle: "LuLu", 
        username: "Vader", 
        spotlights: 400};
    const tenthData = {
        img: tenth, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party",
        eventTitle: "Dank", 
        username: "Bruce", 
        spotlights: 370};
    let navigate = useNavigate();
    return(
        <div>
            <div className="text-start container">
                <div className="row py-lg-3">
                        <h2 className="fw-light headerHighlight display-3">Events</h2>
                </div>
            </div>
            <div className="bg-dark py-5 px-3">
            <div className=""  style={{height:  "655px"}}>
                <div className="text-start container">
                    <div className="row py-lg-3 ms-3">
                            <h3 className="fw-light headerHighlight display-6">Featured</h3>
                    </div>
                </div>
                <FeaturesController desktopPosterContainerStyle="featuredEventPoster" mobilePosterContainerStyle="featuredEventPoster" customBg="bgHeaderHeight" infoContainerStyle="featuredEventInfo" image={tempPic} alt="Main" imgStyle="imgStyles" startTime={heading.startt} endTime={heading.endt} locationType={heading.locationType} eventType={heading.eventType} onClick={()=>{navigate("/motive-react-v2/event", {state: heading})}}/>
            </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row align-items-center justify-content-center">
                    {/* turn into component */}
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                        <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: fourthData})}}>
                            <img src={fourth} className="img-fluid" alt="tempPoster" style={{maxHeight:"500px", maxWidth: "100%"}}/>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                        <button className="imgButton"  onClick={()=>{navigate("/motive-react-v2/event", {state: fifthData})}}>
                            <img src={fifth} className="img-fluid" alt="tempPoster" style={{maxHeight:"500px", maxWidth: "100%"}}/>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                        <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: sixthData})}} >
                            <img src={sixth} className="img-fluid" alt="tempPoster" style={{maxHeight:"500px", maxWidth: "100%"}}/>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                        <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: seventhData})}}>
                            <img src={seventh} className="img-fluid" alt="tempPoster" style={{maxHeight:"500px", maxWidth: "100%"}}/>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                        <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: eighthData})}}>
                            <img src={eighth} className="img-fluid" alt="tempPoster" style={{maxHeight:"500px", maxWidth: "100%"}}/>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                        <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: ninethData})}}>
                            <img src={nineth} className="img-fluid" alt="tempPoster" style={{maxHeight:"500px", maxWidth: "100%"}}/>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                        <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: tenthData})}}>
                            <img src={tenth} className="img-fluid" alt="tempPoster" style={{maxHeight:"500px", maxWidth: "100%"}}/>
                        </button>
                    </div>
                </div>
            </div>        
        </div>



    )
}