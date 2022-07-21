import React from "react";
import "../../StyleFile/globalStyles.css"
import "../../StyleFile/home.css"
import CustomRouteButton from "../../Components/CustomRouteButton";

function FeaturesMobile(props){
    return(
        <div className={`backGround mobile ${props.bgCustomContainer}`}>
            
                {props.image !== null ? <img src={props.image} alt={props.alt} className={`${props.imgStyle}`}/>:<div className={`mainEvent mobile card motivvCard ${props.mainEventContainerStyles}`}> <h1>Event Poster</h1></div>}
            

            {/* <div className="quickInfo card motivvCard mobile ">
                <h3>Quick Info</h3>
            </div>  */}
            {props.disableQuickInfo === true? "" :<CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle" animate={true} onClick={props.onClick}>More Info</CustomRouteButton> }
        </div>    
    );
}

function FeaturesDesktop(props){
    return(
        <div className={`backGround desktop ${props.bgCustomContainer}`}>
            {props.image !== null? <img src={props.image} alt={props.alt} className={`${props.imgStyle}`}/>: <div className={`mainEvent card motivvCard ${props.mainEventContainerStyles}`}><h1>Event Poster</h1></div>}
            {/* <div className={`mainEvent card motivvCard ${props.mainEventContainerStyles}`}>
                {props.image !== null ? <img src={props.image} alt={props.alt} style={props.imgStyle} className={'imgStyle'}/>: <h1>Event Poster</h1>}
            </div> */}
            {props.disableQuickInfo === true? "" : (<div className="quickInfoContainer">
                <div className={`quickInfo card motivvCard ${props.quickInfoContainerStyles}`}>
                    <div className="row">
                        <h3>Quick Info</h3>
                    </div>
                    <div className="col-8">
                        <dl className="row mt-3 p-3 px-5">
                            <dt className="col-7">Start Time: </dt><dd className="col-5">{props.startTime}</dd>
                            <dt className="col-7">End Time: </dt><dd className="col-5">{props.endTime}</dd>
                            <dt className="col-7">Event Type: </dt><dd className="col-5">{props.eventType}</dd>
                            <dt className="col-7">Location Type: </dt><dd className="col-5">{props.locationType}</dd>
                        </dl>
                    </div>
                    
                </div><CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle" animate={true} onClick={props.onClick}>More Info</CustomRouteButton></div>)}
           
                
                    
                
                                   
            
        </div>

    );
}

class FeaturesController extends React.Component {
    constructor(props){
        super(props);
        this.handleWindowWidth = this.handleWindowWidth.bind(this);
        this.state = {
            width: window.innerWidth,
        };
    }

    handleWindowWidth(){
        this.setState({width: window.innerWidth});
    }
    componentDidMount(){
        window.addEventListener('resize',this.handleWindowWidth);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.handleWindowWidth);
    }

    render(){
        const width= this.state.width;
        const isMobile = width <= 875; 
        let display;
        if(isMobile){
            display = <FeaturesMobile mainEventContainerStyles={this.props.mobilePosterContainerStyle} bgCustomContainer={this.props.customBg} image={this.props.image} alt={this.props.alt} imgStyle={this.props.imgStyle} {...this.props}/>
        }else{
            display = <FeaturesDesktop mainEventContainerStyles={this.props.desktopPosterContainerStyle} quickInfoContainerStyles={this.props.infoContainerStyle} bgCustomContainer={this.props.customBg} image={this.props.image} alt={this.props.alt} imgStyle={this.props.imgStyle} {...this.props}/>
        }
        return (
            <>
                {display}
            </>
        )
    }
}

export default FeaturesController;