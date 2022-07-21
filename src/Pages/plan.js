import React from "react";
import {useNavigate} from "react-router-dom";
import "../StyleFile/globalStyles.css"


class Plan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eventTitle: "",
            startTime: "",
            endTime: "",
            startDate: "",
            endDate: "",
            eventType: "",
            address: "",
            locationType: "",
            plotDimension: "",           
            parkingDescription: "",
            requestHelper: false,
            formError: {},
            formErrorFrench: {},
            isSubmit: false,
            isFrench: false,
            isEnglish: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.validatef = this.validatef.bind(this);
        this.errorColorControl = this.errorColorControl.bind(this);
        this.temp = this.temp.bind(this);
        this.makeEnglish = this.makeEnglish.bind(this);
        this.makeFrench = this.makeFrench.bind(this);
    }

    temp(){
        this.makeFrench();
    }

    makeFrench(){
        this.setState({isFrench: true, isEnglish: false});
    }

    makeEnglish(){
        this.setState({isFrench: false, isEnglish: true});
    }

    componentDidUpdate(){
        console.log(this.state.formError);
        if(Object.keys(this.state.formError).length === 0 && this.state.isSubmit){
            console.log(this.state);
            console.log("in form");
            alert(`Congratulations ${this.state.eventTitle} is being validated`)
            this.props.navigate('/motive-react-v2/')
        } 
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        //console.log(this.state);
        e.preventDefault();
        this.setState({formError: this.validate()});
        this.setState({formErrorFrench: this.validatef()});
        this.setState({isSubmit: true});
    }

    validate(){
        const errors = {};
        // const errorsf = {};
        // const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.eventTitle){
            errors.eventTitle = "Title is needed!"
        }
        if(!this.state.startTime){
            errors.startTime = "Start time is needed!"
        }
        if(!this.state.endTime){
            errors.endTime = "End time is needed!"
        }
        if(!this.state.startDate){
            errors.startDate = "Start Date is needed!"
        }
        if(!this.state.endDate){
            errors.endDate = "End Date is needed!"
        }
        if(!this.state.eventType){
            errors.eventType = "Event type is needed!"
        }
        if(!this.state.address){
            errors.address = "Address is needed!"
        }
        if(!this.state.locationType){
            errors.locationType = "Location type is needed!"
        }
        if(!this.state.plotDimension){
            errors.plotDimension = "Plot dimenstion is needed!"
        }
        if(!this.state.parkingDescription){
            errors.parkingDescription = "Parking description is needed!"
        }

        return errors;
    }

    validatef(){
        const errorsf = {};

        if(!this.state.eventTitle){
            errorsf.eventTitle = "Le titre est nécessaire!"
        }
        if(!this.state.startTime){
            errorsf.startTime = "l'heure de début est nécessaire!"
        }
        if(!this.state.endTime){
            errorsf.endTime = "l'heure de fin est nécessaire!"
        }
        if(!this.state.startDate){
            errorsf.startDate = "la date de début est nécessaire!"
        }
        if(!this.state.endDate){
            errorsf.endDate = "la date de fin est nécessaire!"
        }
        if(!this.state.eventType){
            errorsf.eventType = "le type d'événement est nécessaire!"
        }
        if(!this.state.address){
            errorsf.address = "l'adresse est nécessaire!"
        }
        if(!this.state.locationType){
            errorsf.locationType = "le type d'emplacement est nécessaire!"
        }
        if(!this.state.plotDimension){
            errorsf.plotDimension = "les dimensions de l'emplacement sont nécessaires!"
        }
        if(!this.state.parkingDescription){
            errorsf.parkingDescription = "la description du parking est nécessaire!"
        }
        return errorsf;
    }

    errorColorControl(val){
        return(val ? {borderColor: "red"} : null);
    }

    render(){
        if(this.state.isFrench && !this.state.isEnglish){
            return(
                // <form onSubmit={this.handleSubmit}>
                    <>
                    <div className="border border-1 bg-light" style={{display: "flex",justifyContent: "center"}}>
                        <div className="text-center container row py-lg-5 py-3">
                            <h2 className="fw-light headerHighlight display-3">Planifier</h2>
                        </div>
                    </div>
                    <div style={{flexDirection: "row", justifyContent: "flex-end", display: "flex", width: "100%", padding: "20px"}}>
                        <button className="langModif" onClick={this.makeEnglish}>
                            <p>Anglais</p>
                        </button>
                        <vr/>
                        <button className="langModif">
                            <p>Français</p>
                        </button>
                    </div>
                    <div className="container py-5 align-items-end" style={{display: "flex", minHeight: "60rem"}}>
                        
                        <form className="row g-3 justify-content-center align-items-center" onSubmit={this.handleSubmit} action="/home">
                            <div className="col-12 mb-4">
                                <label htmlFor="eventTitle" className="form-label">Le titre:</label>
                                <input type="text" name="eventTitle" id="eventTitle" value={this.state.eventTitle} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formErrorFrench.eventTitle)}/>
                                <p>{this.state.formErrorFrench.eventTitle}</p>
                            </div>
                                                    
                            <div className="col-12 mb-4">
                                <label htmlFor="startDate" className="form-label">Date de début:</label>
                                <input type="date" name="startDate" id="startDate" value={this.state.startDate} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formErrorFrench.startDate)}/>
                                <p>{this.state.formErrorFrench.startDate}</p>
                            </div>
                            
                            <div className="col-12 mb-4">
                                <label htmlFor="endDate" className="form-label">Date de fin:</label>
                                <input type="date" name="endDate" id="endDate" value={this.state.endDate} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formErrorFrench.endDate)}/>
                                <p>{this.state.formErrorFrench.endDate}</p>
                            </div>
                             
                            <div className="col-md-6 mb-4">
                                <label htmlFor="startTime" className="form-label">Heure de début:</label>
                                <input type="time" name="startTime" id="startTime" value={this.state.startTime} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formErrorFrench.startTime)}/>
                                <p>{this.state.formErrorFrench.startTime}</p> 
                            </div>
                            
                            <div className="col-md-6 mb-4">
                                <label htmlFor="endTime" className="form-label">Heure de fin:</label>
                                <input type="time" name="endTime" id="endTime" value={this.state.endTime} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formErrorFrench.endTime)}/>
                                <p>{this.state.formErrorFrench.endTime}</p>
                            </div>
                             
                            <div className="col-md-6 mb-4">
                                <label htmlFor="eventType" className="form-label">Type d'événement:</label>
                                <select name="eventType" id="eventType" value={this.state.eventType} onChange={this.handleInputChange} className="form-select" style={this.errorColorControl(this.state.formErrorFrench.eventType)}>
                                    <option value="">...</option>
                                    <option value="Party">fête</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Collage">Collage</option>
                                    <option value="Work">Travailler</option>
                                </select>
                                <p>{this.state.formErrorFrench.eventType}</p> 
                            </div>
                            
                            <div className="col-md-6 mb-4">
                                <label htmlFor="locationType" className="form-label">Type de lieu:</label>
                                <select name="locationType" id="locationType" value={this.state.locationType} onChange={this.handleInputChange} className="form-select" style={this.errorColorControl(this.state.formErrorFrench.locationType)}>
                                    <option value="">...</option>
                                    <option value="House">Maison</option>
                                    <option value="Beach">Plage</option>
                                    <option value="Stadium">Stade</option>
                                    <option value="Club">Club</option>
                                </select>
                                <p>{this.state.formErrorFrench.locationType}</p> 
                            </div>
                            <div className="col-9 mb-4">
                                <label htmlFor="address" className="form-label">Emplacement:</label>
                                <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formErrorFrench.address)} placeholder="XX street, city, country"/>
                                <p>{this.state.formErrorFrench.address}</p> 
                            </div>   
                            <div className="col-3 mb-4">
                                <label htmlFor="plotDimension" className="form-label">Dimension de l'emplacement:</label>
                                <input type="text" name="plotDimension" id="plotDimension" value={this.state.plotDimension} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formErrorFrench.plotDimension)} placeholder="X m Tall, X by Y m Wide"/>
                                <p>{this.state.formErrorFrench.plotDimension}</p> 
                            </div> 
                            <div className="col-12 mb-4">
                                <label htmlFor="parkingDescription" className="form-label">Décrire le stationnement:</label>
                                <textarea type="text" name="parkingDescription" id="parkingDescription" value={this.state.parkingDescription} onChange={this.handleInputChange} className="form-control" style={{height: "160px", ...this.errorColorControl(this.state.formErrorFrench.plotDimension)}}></textarea>
                                <p>{this.state.formErrorFrench.parkingDescription}</p> 
                            </div> 
                            <div className="col-12 mb-4">
                                <div className="form-check">
                                    <label htmlFor="requestHelper" className="form-check-label">demande d'aide</label>
                                    <input type="checkbox" name="requestHelper" id="requestHelper" value={this.state.requestHelper} onChange={this.handleInputChange} className="form-check-input"/>
                                </div>
                            </div> 
                            <input type="submit" value="Submit" className="btn btn-primary themeCol"/>
                        </form>  
                    </div>
    
                    </>
            )
        }
        else if(this.state.isEnglish && !this.state.isFrench){
            return(
                // <form onSubmit={this.handleSubmit}>
                    <>
                    <div className="border border-1 bg-light" style={{display: "flex",justifyContent: "center"}}>
                        <div className="text-center container row py-lg-5 py-3">
                            <h2 className="fw-light headerHighlight display-3">Plan</h2>
                        </div>
                    </div>
                    <div style={{flexDirection: "row", justifyContent: "flex-end", display: "flex", width: "100%", padding: "20px"}}>
                        <button className="langModif">
                            <p>English</p>
                        </button>
                        <button className="langModif" onClick={this.temp}>
                            <p>French</p>
                        </button>
                    </div>
                    <div className="container py-5 align-items-end" style={{display: "flex", minHeight: "60rem"}}>
                        
                        <form className="row g-3 justify-content-center align-items-center" onSubmit={this.handleSubmit} action="/home">
                            <div className="col-12 mb-4">
                                <label htmlFor="eventTitle" className="form-label">Event Title:</label>
                                <input type="text" name="eventTitle" id="eventTitle" value={this.state.eventTitle} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.eventTitle)}/>
                                <p>{this.state.formError.eventTitle}</p>
                            </div>
                                                    
                            <div className="col-12 mb-4">
                                <label htmlFor="startDate" className="form-label">Start Date:</label>
                                <input type="date" name="startDate" id="startDate" value={this.state.startDate} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.startDate)}/>
                                <p>{this.state.formError.startDate}</p>
                            </div>
                            
                            <div className="col-12 mb-4">
                                <label htmlFor="endDate" className="form-label">End Date:</label>
                                <input type="date" name="endDate" id="endDate" value={this.state.endDate} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.endDate)}/>
                                <p>{this.state.formError.endDate}</p>
                            </div>
                             
                            <div className="col-md-6 mb-4">
                                <label htmlFor="startTime" className="form-label">Start Time:</label>
                                <input type="time" name="startTime" id="startTime" value={this.state.startTime} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.startTime)}/>
                                <p>{this.state.formError.startTime}</p> 
                            </div>
                            
                            <div className="col-md-6 mb-4">
                                <label htmlFor="endTime" className="form-label">End Time:</label>
                                <input type="time" name="endTime" id="endTime" value={this.state.endTime} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.endTime)}/>
                                <p>{this.state.formError.endTime}</p>
                            </div>
                             
                            <div className="col-md-6 mb-4">
                                <label htmlFor="eventType" className="form-label">Event Type:</label>
                                <select name="eventType" id="eventType" value={this.state.eventType} onChange={this.handleInputChange} className="form-select" style={this.errorColorControl(this.state.formError.eventType)}>
                                    <option value="">...</option>
                                    <option value="Party">Party</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Collage">Collage</option>
                                    <option value="Work">Work</option>
                                </select>
                                <p>{this.state.formError.eventType}</p> 
                            </div>
                            
                            <div className="col-md-6 mb-4">
                                <label htmlFor="locationType" className="form-label">Location Type:</label>
                                <select name="locationType" id="locationType" value={this.state.locationType} onChange={this.handleInputChange} className="form-select" style={this.errorColorControl(this.state.formError.locationType)}>
                                    <option value="">...</option>
                                    <option value="House">House</option>
                                    <option value="Beach">Beach</option>
                                    <option value="Stadium">Stadium</option>
                                    <option value="Club">Club</option>
                                </select>
                                <p>{this.state.formError.locationType}</p> 
                            </div>
                            <div className="col-9 mb-4">
                                <label htmlFor="address" className="form-label">Address:</label>
                                <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.address)} placeholder="XX street, city, country"/>
                                <p>{this.state.formError.address}</p> 
                            </div>   
                            <div className="col-3 mb-4">
                                <label htmlFor="plotDimension" className="form-label">Location Dimension:</label>
                                <input type="text" name="plotDimension" id="plotDimension" value={this.state.plotDimension} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.plotDimension)} placeholder="X m Tall, X by Y m Wide"/>
                                <p>{this.state.formError.plotDimension}</p> 
                            </div> 
                            <div className="col-12 mb-4">
                                <label htmlFor="parkingDescription" className="form-label">Describe Parking Situation:</label>
                                <textarea type="text" name="parkingDescription" id="parkingDescription" value={this.state.parkingDescription} onChange={this.handleInputChange} className="form-control" style={{height: "160px", ...this.errorColorControl(this.state.formError.plotDimension)}}></textarea>
                                <p>{this.state.formError.parkingDescription}</p> 
                            </div> 
                            <div className="col-12 mb-4">
                                <div className="form-check">
                                    <label htmlFor="requestHelper" className="form-check-label">request helper</label>
                                    <input type="checkbox" name="requestHelper" id="requestHelper" value={this.state.requestHelper} onChange={this.handleInputChange} className="form-check-input"/>
                                </div>
                            </div> 
                            <input type="submit" value="Submit" className="btn btn-primary themeCol"/>
                        </form>  
                    </div>
    
                    </>
            )
        }
        
        
    }

}

export default function PlanWrapper(props){
    let navigate = useNavigate();
    return(<Plan {...props} navigate={navigate}/>)
}