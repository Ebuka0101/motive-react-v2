import React from "react";
import "../../StyleFile/globalStyles.css"
import "../../StyleFile/home.css"
import firstPlaceBadge from "../../Images/goldMedal.png"
import secondPlaceBadge from "../../Images/silverMedal.png"
import thirdPlaceBadge from "../../Images/bronzeMedal.png"
import first from "../../Images/55f0079c49cb2eda8270208e902fbc48.jpg"
import second from "../../Images/music-event-poster-template-with-colorful-shapes_1361-1591.jpg"
import third from "../../Images/pIkbEsT8vpIkbEsTp2G.jpg-1.jpg"
import fourth from "../../Images/Festive-Event.png"
import fifth from "../../Images/vector-illustration-dance-party-poster-background-template-with-splash-M68Y5J.jpg"
import sixth from "../../Images/fleur-sciortino-summer-book-fest-poster.jpg"
import seventh from "../../Images/lt16412134_quantized.png"
import eighth from "../../Images/media_101c1fe466fb3eaa4e8f9939d1d88e234506ec8a0.jpeg"
import nineth from "../../Images/night-club-flyer-template-design-406a7947f953883a9659f89683a16430_screen.jpg"
import tenth from "../../Images/images.jpeg"
import CustomRouteButton from "../../Components/CustomRouteButton";
import { useNavigate } from "react-router-dom";



export default function Ranking(){
    let navigate = useNavigate();
    const firstData = {
        img: first, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party", 
        username: "Marked", 
        spotlights: 980};
    const secondData = {
        img: second, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party", 
        username: "Paul", 
        spotlights: 780};
    const thirdData = {
        img: third, 
        startt: "11:24 AM", 
        endt: "9:00 PM", 
        startd: "22 APR 2022", 
        endd: "23 APR 2022", 
        locationType: "Beach", 
        eventType: "Party", 
        username: "FunnyMan", 
        spotlights: 870};
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
    return(
        <div className="my-3 border-bottom border-1">
            <div className="container mb-5">
                <div className="text-center headerHighlight pt-2 pt-lg-3">
                    <h2>Rankings (Top 10 across all categories)</h2>
                </div>

                <div className="row my-5 g-0 align-items-end justify-content-center">

                    <div className="col-12 col-lg-4 col-xl-3 d-none d-xl-flex mx-lg-2">
                        <div className="card border-0" >
                            <div className="card-body py-4 text-center px-0">
                                {/* <h4 className="card-title fs-3">Second place poster</h4> */}
                                <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: secondData})}}>
                                    <img src={second} className="rankImg rankImgsecond" alt="second"/>
                                    <p className="display-5 my-4 headerHighlight fw-bold">{secondData.username}</p>
                                    <img src={secondPlaceBadge} className="customBadge secondPlaceBdg" alt="secondPlaceBadge"/>
                                </button>
                                
                                {/* <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">View Info</CustomRouteButton>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mx-lg-2" >
                        <div className="card border-0 borderHighlight">
                            <div className="card-body py-5 text-center align-items-center px-0">
                                {/* <h4 className="card-title fs-2">First Place</h4> */}
                                <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: firstData})}}>
                                    <div style={{display: "flex",justifyContent: "center"}}>
                                        <img src={first} className="rankImg rankImgfirst d-lg-block d-none" alt="first"/>
                                        <img src={first} className="rankImg rankImgfirst d-lg-none d-block" alt="first" style={{height: 400}}/>
                                    </div>
                                    <p className="display-4 my-4 headerHighlight fw-bold">{fifthData.username}</p>
                                    <img src={firstPlaceBadge} className="customBadge firstPlaceBdg" alt="firstPlaceBadge"/>
                                </button>
                                
                                {/* <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">View Info</CustomRouteButton>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-xl-3 d-xl-none d-flex," >
                        <div className="card border-0">
                            <div className="card-body py-4 text-center align-items-center px-0">
                                {/* <h4 className="card-title fs-3">Second place poster</h4> */}
                                <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: secondData})}}>
                                    <div style={{display:"flex",justifyContent: "center"}}>
                                    <img src={second} className="rankImg rankImgsecond" alt="second" style={{height: 350}}/>
                                </div>
                                <p className="display-5 my-4 headerHighlight fw-bold">{secondData.username}</p>
                                <img src={secondPlaceBadge} className="customBadge secondPlaceBdg" alt="secondPlaceBadge"/>
                                </button>
                                
                                {/* <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">View Info</CustomRouteButton>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-xl-3 mx-lg-2 mt-3" >
                        <div className="card border-0">
                            <div className="card-body py-3 text-center px-0">
                                {/* <h4 className="card-title fs-4">Third Place Poster</h4> */}
                                <button className="imgButton" onClick={()=>{navigate("/motive-react-v2/event", {state: thirdData})}}>
                                    <div style={{display: "flex",justifyContent: "center"}}>
                                    <img src={third} className="rankImg rankImgthird d-lg-block d-none" alt="third"/>
                                    <img src={third} className="rankImg rankImgthird d-lg-none d-block" alt="third" style={{height: 300}}/>
                                </div>
                                
                                <p className="display-6 my-4 headerHighlight fw-bold">{thirdData.username}</p>
                                <img src={thirdPlaceBadge} className="customBadge thirdPlaceBdg" alt="thirdPlaceBdg"/>
                                </button>
                                
                                {/* <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="viewInfoBtn">View Info</CustomRouteButton>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row align-items-end justify-content-center mb-3">

                    <div className="accordion" id="honorable-Mentions">
                        <div className="accordion-item">
                            <h2 className="accrodaian-header" id="heading-1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fourth-place" aria-expanded="true" aria-controls="fourth-place">
                                    <div className="row d-lg-none d-flex" style={{width:'100%'}}><div className="col">4.&nbsp;<strong>Event Name</strong></div><div className="col"><strong>XX</strong>&nbsp; Spotlights</div></div>
                                    <div className="row d-none d-lg-flex" style={{width:'100%'}}>
                                        <div className="col-1">
                                            4.
                                        </div>
                                        <div className="col-2">
                                            <strong> {fourthData.eventTitle}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>{fourthData.username}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>455</strong> &nbsp;Attendants
                                        </div>
                                        <div className="col-2">
                                            <strong>{fourthData.spotlights}</strong> &nbsp;Spotlights
                                        </div>
                                        <div className="col-2">
                                            State, Country
                                        </div>
                                    </div>
                                    {/* 4. &nbsp;<strong> Event Name</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>xx</strong>attendants */}
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse" id="fourth-place" aria-labelledby="heading-1" data-bs-parent="#honorable-Mentions">
                                <div className="accordion-body px-lg-5">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3">
                                            <img src={fourth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                        </div>
                                        <div className="col-md-6 mt-5 mt-lg-2">
                                            <div className="row text-start mb-md-3 mb-2">
                                                <h2 className="fw-bold lh-1 headerHighlight">Event Dashboard Intro text</h2>
                                            </div>
                                            <div className="row mt-md-4">
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Event Type:  &nbsp;&nbsp; {fourthData.eventType}</p>
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Start Time: &nbsp;&nbsp; {fourthData.startt}</p> 
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">End Time: &nbsp;&nbsp; {fourthData.endt}</p> 
                                                </div>
                                            </div>
                                            <div className="row justify-content-end">
                                                <CustomRouteButton animate={true} onClick={()=>{navigate("/motive-react-v2/event", {state: fourthData})}}>More Info</CustomRouteButton>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accrodion-header" id="heading-2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fifth-place" aria-expanded="false" aria-controls="fifth-place">
                                    <div className="row d-lg-none d-flex" style={{width:'100%'}}><div className="col">5.&nbsp;<strong>Event Name</strong></div><div className="col"><strong>XX</strong>&nbsp; Spotlights</div></div>
                                    <div className="row d-none d-lg-flex" style={{width:'100%'}}>
                                        <div className="col-1">
                                            5.
                                        </div>
                                        <div className="col-2">
                                            <strong> {fifthData.eventTitle}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>{fifthData.username}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>455</strong> &nbsp;Attendants
                                        </div>
                                        <div className="col-2">
                                            <strong>{fifthData.spotlights}</strong> &nbsp;Spotlights
                                        </div>
                                        <div className="col-2">
                                            State, Country
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse" id="fifth-place" aria-labelledby="heading-2" data-bs-parent="#honorable-Mentions">
                                <div className="accordion-body">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3">
                                            <img src={fifth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                        </div>
                                        <div className="col-md-6 mt-5 mt-lg-2">
                                            <div className="row text-start mb-md-3 mb-2">
                                                <h2 className="fw-bold lh-1 headerHighlight">Event Dashboard Intro text</h2>
                                            </div>
                                            <div className="row mt-md-4">
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Event Type:  &nbsp;&nbsp; {fifthData.eventType}</p>
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Start Time: &nbsp;&nbsp; {fifthData.startt}</p> 
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">End Time: &nbsp;&nbsp; {fifthData.endt}</p> 
                                                </div>
                                            </div>
                                            <div className="row justify-content-end">
                                                <CustomRouteButton animate={true} onClick={()=>{navigate("/motive-react-v2/event", {state: fifthData})}}>More Info</CustomRouteButton>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accrodaian-header" id="heading-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sixth-place" aria-expanded="false" aria-controls="sixth-place">
                                    <div className="row d-lg-none d-flex" style={{width:'100%'}}><div className="col">6.&nbsp;<strong>Event Name</strong></div><div className="col"><strong>XX</strong>&nbsp; Spotlights</div></div>
                                    <div className="row d-none d-lg-flex" style={{width:'100%'}}>
                                        <div className="col-1">
                                            6.
                                        </div>
                                        <div className="col-2">
                                            <strong> {sixthData.eventTitle}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>{sixthData.username}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>455</strong> &nbsp;Attendants
                                        </div>
                                        <div className="col-2">
                                            <strong>{sixthData.spotlights}</strong> &nbsp;Spotlights
                                        </div>
                                        <div className="col-2">
                                            State, Country
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse" id="sixth-place" aria-labelledby="heading-3" data-bs-parent="#honorable-Mentions">
                                <div className="accordion-body">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3">
                                            <img src={sixth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                        </div>
                                        <div className="col-md-6 mt-5 mt-lg-2">
                                            <div className="row text-start mb-md-3 mb-2">
                                                <h2 className="fw-bold lh-1 headerHighlight">Event Dashboard Intro text</h2>
                                            </div>
                                            <div className="row mt-md-4">
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Event Type:  &nbsp;&nbsp; {sixthData.eventType}</p>
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Start Time: &nbsp;&nbsp; {sixthData.startt}</p> 
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">End Time: &nbsp;&nbsp; {sixthData.endt}</p> 
                                                </div>
                                            </div>
                                            <div className="row justify-content-end">
                                                <CustomRouteButton animate={true} onClick={()=>{navigate("/motive-react-v2/event", {state: sixthData})}}>More Info</CustomRouteButton>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accrodaian-header" id="heading-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#seventh-place" aria-expanded="false" aria-controls="seventh-place">
                                <div className="row d-lg-none d-flex" style={{width:'100%'}}><div className="col">7.&nbsp;<strong>Event Name</strong></div><div className="col"><strong>XX</strong>&nbsp; Spotlights</div></div>
                                    <div className="row d-none d-lg-flex" style={{width:'100%'}}>
                                        <div className="col-1">
                                            7.
                                        </div>
                                        <div className="col-2">
                                            <strong> {seventhData.eventTitle}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>{seventhData.username}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>455</strong> &nbsp;Attendants
                                        </div>
                                        <div className="col-2">
                                            <strong>{seventhData.spotlights}</strong> &nbsp;Spotlights
                                        </div>
                                        <div className="col-2">
                                            State, Country
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse" id="seventh-place" aria-labelledby="heading-1" data-bs-parent="#honorable-Mentions">
                                <div className="accordion-body">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3">
                                            <img src={seventh} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                        </div>
                                        <div className="col-md-6 mt-5 mt-lg-2">
                                            <div className="row text-start mb-md-3 mb-2">
                                                <h2 className="fw-bold lh-1 headerHighlight">Event Dashboard Intro text</h2>
                                            </div>
                                            <div className="row mt-md-4">
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Event Type:  &nbsp;&nbsp; {seventhData.eventType}</p>
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Start Time: &nbsp;&nbsp; {seventhData.startt}</p> 
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">End Time: &nbsp;&nbsp; {seventhData.endt}</p> 
                                                </div>
                                            </div>
                                            <div className="row justify-content-end">
                                                <CustomRouteButton animate={true} onClick={()=>{navigate("/motive-react-v2/event", {state: seventhData})}}>More Info</CustomRouteButton>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accrodaian-header" id="heading-8">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#eight-place" aria-expanded="false" aria-controls="eight-place">
                                    <div className="row d-lg-none d-flex" style={{width:'100%'}}><div className="col">8.&nbsp;<strong>Event Name</strong></div><div className="col"><strong>XX</strong>&nbsp; Spotlights</div></div>
                                    <div className="row d-none d-lg-flex" style={{width:'100%'}}>
                                        <div className="col-1">
                                            8.
                                        </div>
                                        <div className="col-2">
                                            <strong> {eighthData.eventTitle}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>{eighthData.username}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>455</strong> &nbsp;Attendants
                                        </div>
                                        <div className="col-2">
                                            <strong>{eighthData.spotlights}</strong> &nbsp;Spotlights
                                        </div>
                                        <div className="col-2">
                                            State, Country
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse" id="eight-place" aria-labelledby="heading-8" data-bs-parent="#honorable-Mentions">
                                <div className="accordion-body">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3">
                                            <img src={eighth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                        </div>
                                        <div className="col-md-6 mt-5 mt-lg-2">
                                            <div className="row text-start mb-md-3 mb-2">
                                                <h2 className="fw-bold lh-1 headerHighlight">Event Dashboard Intro text</h2>
                                            </div>
                                            <div className="row mt-md-4">
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Event Type:  &nbsp;&nbsp; {eighthData.eventType}</p>
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Start Time: &nbsp;&nbsp; {eighthData.startt}</p> 
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">End Time: &nbsp;&nbsp; {eighthData.endt}</p> 
                                                </div>
                                            </div>
                                            <div className="row justify-content-end">
                                                <CustomRouteButton animate={true} onClick={()=>{navigate("/motive-react-v2/event", {state: eighthData})}}>More Info</CustomRouteButton>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accrodaian-header" id="heading-9">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nineth-place" aria-expanded="false" aria-controls="nineth-place">
                                    <div className="row d-lg-none d-flex" style={{width:'100%'}}><div className="col">9.&nbsp;<strong>Event Name</strong></div><div className="col"><strong>XX</strong>&nbsp; Spotlights</div></div>
                                    <div className="row d-none d-lg-flex" style={{width:'100%'}}>
                                        <div className="col-1">
                                            9.
                                        </div>
                                        <div className="col-2">
                                            <strong> {ninethData.eventTitle}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>{ninethData.username}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>455</strong> &nbsp;Attendants
                                        </div>
                                        <div className="col-2">
                                            <strong>{ninethData.spotlights}</strong> &nbsp;Spotlights
                                        </div>
                                        <div className="col-2">
                                            State, Country
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse" id="nineth-place" aria-labelledby="heading-9" data-bs-parent="#honorable-Mentions">
                                <div className="accordion-body">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3">
                                            <img src={nineth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                        </div>
                                        <div className="col-md-6 mt-5 mt-lg-2">
                                            <div className="row text-start mb-md-3 mb-2">
                                                <h2 className="fw-bold lh-1 headerHighlight">Event Dashboard Intro text</h2>
                                            </div>
                                            <div className="row mt-md-4">
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Event Type:  &nbsp;&nbsp; {ninethData.eventType}</p>
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Start Time: &nbsp;&nbsp; {ninethData.startt}</p> 
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">End Time: &nbsp;&nbsp; {ninethData.endt}</p> 
                                                </div>
                                            </div>
                                            <div className="row justify-content-end">
                                                <CustomRouteButton animate={true} onClick={()=>{navigate("/motive-react-v2/event", {state: ninethData})}}>More Info</CustomRouteButton>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accrodion-header" id="heading-10">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tenth-place" aria-expanded="false" aria-controls="tenth-place">
                                    <div className="row d-lg-none d-flex" style={{width:'100%'}}><div className="col">10.&nbsp;<strong>Event Name</strong></div><div className="col"><strong>XX</strong>&nbsp; Spotlights</div></div>
                                    <div className="row d-none d-lg-flex" style={{width:'100%'}}>
                                        <div className="col-1">
                                            10.
                                        </div>
                                        <div className="col-2">
                                            <strong> {tenthData.eventTitle}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>{tenthData.username}</strong>
                                        </div>
                                        <div className="col-2">
                                            <strong>455</strong> &nbsp;Attendants
                                        </div>
                                        <div className="col-2">
                                            <strong>{tenthData.spotlights}</strong> &nbsp;Spotlights
                                        </div>
                                        <div className="col-2">
                                            State, Country
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse" id="tenth-place" aria-labelledby="heading-10" data-bs-parent="#honorable-Mentions">
                                <div className="accordion-body">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3">
                                            <img src={tenth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                        </div>
                                        <div className="col-md-6 mt-5 mt-lg-2">
                                            <div className="row text-start mb-md-3 mb-2">
                                                <h2 className="fw-bold lh-1 headerHighlight">Event Dashboard Intro text</h2>
                                            </div>
                                            <div className="row mt-md-4">
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Event Type:  &nbsp;&nbsp; {tenthData.eventType}</p>
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">Start Time: &nbsp;&nbsp; {tenthData.startt}</p> 
                                                </div>
                                                <div className="row text-start">
                                                    <p className="fw-normal fs-5">End Time: &nbsp;&nbsp; {tenthData.endt}</p> 
                                                </div>
                                            </div>
                                            <div className="row justify-content-end">
                                                <CustomRouteButton animate={true} onClick={()=>{navigate("/motive-react-v2/event", {state: tenthData})}}>More Info</CustomRouteButton>
                                            </div>

                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>            
        </div>
    
    )
}

