import React from "react";
import { VictoryPie, VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryLegend } from "victory";
import FeaturesController from "./homePageSections/featuredEvents"
import { useLocation } from "react-router-dom";
// import featured from "../Images/55f0079c49cb2eda8270208e902fbc48.jpg"


class Event extends React.Component {
    constructor(props){
        super(props);
        this.checkComplete = this.handleComplete.bind(this);
        this.addAttendance = this.addAttendance.bind(this);
        this.state = {
            payed: false,
            complete: false,
            maxAttendance: 5000,
            attendance: 2500,
            attendancePercent: 50,
            men: 600,
            women: 800,
            other: 1100
        };
    }

    handleComplete(){
        this.setState({complete: true});
    }

    addAttendance(){
        var attendance = this.state.attendance;
        var maxAttendance = this.state.maxAttendance;
        var newAttendance = attendance + 1;
        var newPercentage = Math.floor(newAttendance/maxAttendance * 100);
        this.setState({...this.state.props, attendance: newAttendance, attendancePercent: newPercentage});
    }

    render(){
        const payed = this.state.payed;
        const men = this.state.men;
        const women = this.state.women;
        const other = this.state.other;
        const attendancePercent = this.state.attendancePercent;
        const attendance = this.state.attendance;
        const maxAttendance = this.state.maxAttendance;
        const eventStatus = (payed === true)? "Ticket Status": "Attendace Status";
        const data = [
            {gender: "Men", amount: this.state.men},
            {gender: "Women", amount: this.state.women},
            {gender: "Other", amount: this.state.other},
          ];
        const colors = ['#64b5f6', '#ffb2ff', '#7c4dff'];
        const Labelcolors = ['#00701a', '#76d275'];
        return(
            <div className="bg-light">
                <div className="bg-dark py-5 px-lg-3 fireWorks" style={{maxHeight:  "700px"}}>
                    <div className="row align-items-center ">
                        <div className="col-lg col-12 justify-content-center justify-content-lg-end d-flex mx-lg-5">
                            <FeaturesController desktopPosterContainerStyle="featuredEventPoster" mobilePosterContainerStyle="featuredEventPoster" customBg="bgHeaderHeight" infoContainerStyle="featuredEventInfo" image={this.props.location.state.img} alt="Main" imgStyle="imgStyles" disableQuickInfo={true}/>
                        </div>
                        <div className="col-lg col-12 text-light text-center text-lg-start">
                            <h2 className="fw-bold display-5 headerHighlight">{this.props.location.state.username}</h2>
                            <p>{this.props.location.state.eventType}</p>
                        </div>
                    </div>
                    {/* using the normal image tag may be easier */}
                    
                </div>


                <div className="row my-1 my-xxl-5 align-items-center justify-content-start px-3 mt-5" style={{position: "relative"}}>
                    <div className="col-xxl-1 col-12 d-flex justify-content-xxl-center my-3 my-xxl-0" style={{minWidth: "fit-content"}}>
                        {/* <div className="col-lg-2 d-flex flex-column align-items-stretch" > */}
                            <div className="card my-xxl-0" style={{width: "180px"}}>
                                <div className="card-body py-4 fs-3 px-3">
                                    <strong className="display-6">{this.props.location.state.spotlights}</strong> <br/><h3 className="headerHighlight fw-bold">Spotlights</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-12">
                            <div className="card p-3  my-3">
                                <div className="card-title fs-4 headerHighlight fw-bold">
                                     {eventStatus}
                                </div>
                                <div className="card-body">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${attendancePercent}%`}} aria-valuenow={attendancePercent} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> 
                                    <div className="d-flex justify-content-end">
                                        {maxAttendance}
                                    </div>    
                                </div>
                                   
                            </div>
                            
                        </div>
                        <div className="col-xxl-4 col-12" style={{maxWidth: "fit-content"}}>
                            <div className="card my-3 my-xxl-0" style={{maxWidth: "100%", width: "800px"}}>
                                <div className="card-body fs-3">
                                    <div className="row pt-2">
                                        <div className="col-6">
                                            <div className="row">
                                                <p><strong className="headerHighlight">Start Time</strong>:&nbsp; {this.props.location.state.startt} </p>                                          
                                            </div>
                                            <div className="row">
                                                <p><strong className="headerHighlight">Start Date</strong>:&nbsp; {this.props.location.state.startd} </p>                                          
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="row">
                                                <p><strong className="headerHighlight">End Time</strong>:&nbsp; {this.props.location.state.endt} </p>                                          
                                            </div>
                                            <div className="row">
                                                <p><strong className="headerHighlight">End Date</strong>:&nbsp; {this.props.location.state.endd} </p>                                          
                                            </div>
                                        </div>                                    
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                </div>

                <div className="row my-1 my-lg-5 align-items-center justify-content-center px-3" style={{position: "relative"}}>
                    <div className="col-xxl-6 col-12 my-xxl-0 my-3">
                        <div className="card justify-content-center align-items-center p-3 bg-dark" style={{maxWidth: "100%", height: "632px"}}>
                            <div className="card-title fs-3 headerHighlight fw-bold justify-content-start ms-lg-5" style={{width: "100%"}}>
                                Gender Ratio's
                            </div>
                            <div className="card-body mb-lg-5">
                                <div className="row" style={{height: "100%"}}>
                                    <VictoryPie
                                    data={data}
                                    x="gender"
                                    y="amount"
                                    colorScale={colors}
                                    width={455}
                                    style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" }}}
                                />
                                </div>
                                <div className="row text-center fs-4 headerHighlight">
                                    <p><strong style={{color: "#64b5f6"}}>{Math.round(men/attendance * 10)}</strong> : <strong style={{color: "#ffb2ff"}}>{Math.round(women/attendance * 10)}</strong> : <strong style={{color: "#7c4dff"}}>{Math.round(other/attendance * 10)}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-12 my-xxl-0 my-3">
                    <div className="card bg-dark text-light" style={{minHeight: "632px"}}>
                            <div className="card-title fs-3 headerHighlight fw-bold text-center mt-lg-5 ms-lg-5">
                                {this.props.complete === true ? "Completed Turnover" : "Expected Turnover"}
                            </div>
                            <div className="card-body">
                                <div className="row align-items-center justify-content-center" style={{minHeight: "500px"}}>
                                    <div className="col-xxl-7 col-12 d-flex justify-content-center">
                                        <div style={{width: "720px"}}>
                                            <VictoryChart
                                        >
                                            <VictoryLegend x={130} y={10}
                                                orientation="horizontal"
                                                centerTitle
                                                gutter={20}
                                                style={{ border: { stroke: "white" }, labels: {fill: "white"} }}
                                                colorScale={Labelcolors}
                                                data={[
                                                    { name: "Accepted" }, { name: "Anticipated" }
                                                ]}
                                                />
                                            <VictoryAxis 
                                                tickValues={[1,2,3]}
                                                tickFormat={["Men", "Women", "Other"]}
                                                style={{axis: {stroke: "white"}, tickLabels: {fill: "white", fontSize: 15, fontWeight: "bold"}}}
                                            />
                                            <VictoryAxis 
                                                dependentAxis
                                                tickFormat={(x) => ("")}
                                                style={{axis: {stroke: "white"}, tickLabels: {fill: "white"}}}
                                            />
                                            <VictoryGroup 
                                                offset={30}
                                            
                                                colorScale={Labelcolors}
                                            >
                                                <VictoryBar
                                                data={[{ x: "Men", y: men }, { x: "Women", y: women }, { x: "Other", y: other }]}
                                                />
                                                <VictoryBar
                                                data={[{ x: "Men", y: men * (23/100) }, { x: "Women", y: (women * (50/100)) }, { x: "Other", y: other * (22/100)}]}
                                                />
                                            </VictoryGroup>
                                        </VictoryChart>
                                        </div>
                                        
                                    </div>
                                    <div className="col-xxl-5 col-12">
                                        <h2 className="fs-4 headerHighlight"><u>Turnover Percent</u></h2>
                                        <dl className="row fs-5">
                                            <dt className="px-3 col-sm-5 col-5"><strong>Men:  </strong></dt><dd className="col-sm-7 col-7">23%</dd>
                                            <dt className="px-3 col-sm-5 col-5"><strong>Women:</strong></dt><dd className="col-sm-7 col-7">53%</dd>
                                            <dt className="px-3 col-sm-5 col-5"><strong>Other:</strong></dt><dd className="col-sm-7 col-7">22%</dd>
                                        </dl>
                                        <div className="row justify-content-end fs-5 pe-5">
                                            Average turnover: {Math.ceil((23+50+22)/3)}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="row align-items-center p-3 pb-0 my-3 my-lg-5">
                    <div className="col-xl-12 col-12">
                        <div className="card" style={{maxWidth: "100%"}}>
                            <div className="card-body fs-3">
                                <div className="row pt-2">
                                    <p><strong className="headerHighlight">Location</strong>:&nbsp; 345 Street Ave State, Country </p>  
                                </div>
                                <div className="row pt-2">
                                    <div className="col-6">
                                        <p><strong className="headerHighlight">Location-Type</strong>:&nbsp; Town House </p> 
                                    </div>
                                    <div className="col-6">
                                        <p><strong className="headerHighlight">Location Dimention</strong>:&nbsp; 4m High, 9 X 9 m Wide</p> 
                                    </div>                                 
                                </div>
                                <dl className="row pt-2">
                                    <dt className="col-sm-12"><strong className="headerHighlight">Parking Description</strong>: </dt><dd className="col-sm-12 ps-4">There is a lot of free and payed parking aroung the bulding. Most parking will be on the streets and is free after 6. Payed parking can be found on when driving along metcafe</dd> 
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="container">
                    <div className="row my-3 my-lg-5 align-items-center" style={{position: "relative"}}>
                        <div className="col-xl-2 col-12 d-flex justify-content-xl-start my-3 my-lg-0" >
                        <div className="col-lg-2 d-flex flex-column align-items-stretch" >  comment here out
                            <div className="card bg-dark">
                                <div className="card-body py-4 fs-3 px-3">
                                    <strong className="display-6 text-light">XX</strong> <br/><h3 className="headerHighlight fw-bold">Spotlights</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-10 col-12">
                            <div className="card p-3 bg-dark">
                                <div className="card-title fs-4 headerHighlight fw-bold">
                                     {eventStatus}
                                </div>
                                <div className="card-body">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${attendancePercent}%`}} aria-valuenow={attendancePercent} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> 
                                    <div className="d-flex justify-content-end text-light">
                                        {maxAttendance}
                                    </div>    
                                </div>
                                   
                            </div>
                            
                        </div>
                    </div>
                    <div className="row align-items-center p-3">
                        <div className="card" style={{maxWidth: "70%"}}>
                            <div className="card-body fs-3">
                                <div className="row pt-2">
                                    <div className="col-6">
                                        <div className="row">
                                            <p><strong className="headerHighlight">Start Time</strong>:&nbsp; XX:XX AM </p>                                          
                                        </div>
                                        <div className="row">
                                            <p><strong className="headerHighlight">Start Date</strong>:&nbsp; XX MMM YYYY </p>                                          
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <p><strong className="headerHighlight">End Time</strong>:&nbsp; XX:XX AM </p>                                          
                                        </div>
                                        <div className="row">
                                            <p><strong className="headerHighlight">End Date</strong>:&nbsp; XX MMM YYYY </p>                                          
                                        </div>
                                    </div>                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row my-3 my-lg-5 p-3 justify-content-center">
                        <div className="card justify-content-center align-items-center p-3 bg-dark" style={{maxWidth: "100%", maxHeight: "632px"}}>
                            <div className="card-title fs-3 headerHighlight fw-bold justify-content-start ms-lg-5" style={{width: "100%"}}>
                                Gender Ratio's
                            </div>
                            <div className="card-body mb-lg-5">
                                <div className="row" style={{height: "100%"}}>
                                    <VictoryPie
                                    data={data}
                                    x="gender"
                                    y="amount"
                                    colorScale={colors}
                                    width={455}
                                    style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" }}}
                                />
                                </div>
                                <div className="row text-center fs-4 headerHighlight">
                                    <p><strong style={{color: "#64b5f6"}}>{Math.round(men/attendance * 10)}</strong> : <strong style={{color: "#ffb2ff"}}>{Math.round(women/attendance * 10)}</strong> : <strong style={{color: "#7c4dff"}}>{Math.round(other/attendance * 10)}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center p-3">
                        <div className="card">
                            <div className="card-title fs-3 headerHighlight fw-bold text-center mt-lg-5 ms-lg-5">
                                {this.props.complete === true ? "Completed Turnover" : "Expected Turnover"}
                            </div>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-12"  style={{maxWidth: "60%"}}>
                                        <VictoryChart
                                        >
                                            <VictoryAxis 
                                                tickValues={[1,2,3]}
                                                tickFormat={["Men", "Women", "Other"]}
                                            />
                                            <VictoryAxis 
                                                dependentAxis
                                                tickFormat={(x) => ("")}
                                            />
                                            <VictoryGroup 
                                                offset={30}
                                            
                                                colorScale={"qualitative"}
                                            >
                                                <VictoryBar
                                                data={[{ x: "Men", y: men }, { x: "Women", y: women }, { x: "Other", y: other }]}
                                                />
                                                <VictoryBar
                                                data={[{ x: "Men", y: men * (23/100) }, { x: "Women", y: (women * (50/100)) }, { x: "Other", y: other * (22/100)}]}
                                                />
                                            </VictoryGroup>
                                        </VictoryChart>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <h2 className="fs-4 headerHighlight"><u>Turnover Percent</u></h2>
                                        <dl className="row fs-5">
                                            <dt className="px-3 col-sm-5"><strong>Men:  </strong></dt><dd className="col-sm-7">23%</dd>
                                            <dt className="px-3 col-sm-5"><strong>Women:</strong></dt><dd className="col-sm-7">53%</dd>
                                            <dt className="px-3 col-sm-5"><strong>Other:</strong></dt><dd className="col-sm-7">22%</dd>
                                        </dl>
                                        <div className="row justify-content-end fs-5">
                                            Average turnover: {Math.ceil((23+50+22)/3)}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center p-3  my-3 my-lg-5">
                        <div className="card bg-dark text-light" style={{maxWidth: "100%"}}>
                            <div className="card-body fs-3">
                                <div className="row pt-2">
                                    <p><strong className="headerHighlight">Location</strong>:&nbsp; 345 Street Ave State, Country </p>  
                                </div>
                                <div className="row pt-2">
                                    <div className="col-6">
                                        <p><strong className="headerHighlight">Location-Type</strong>:&nbsp; Town House </p> 
                                    </div>
                                    <div className="col-6">
                                        <p><strong className="headerHighlight">Location Dimention</strong>:&nbsp; 4m High, 9 X 9 m Wide</p> 
                                    </div>                                 
                                </div>
                                <dl className="row pt-2">
                                    <dt className="col-sm-12"><strong className="headerHighlight">Parking Description</strong>: </dt><dd className="col-sm-12 ps-4">There is a lot of free and payed parking aroung the bulding. Most parking will be on the streets and is free after 6. Payed parking can be found on when driving along metcafe</dd> 
                                </dl>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        
        )
    }
}


export default function EventWrapper(props){
    const location = useLocation();
    return(<Event {...props} {...{location}}/>)
}