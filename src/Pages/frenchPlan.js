import React from "react";
import {useNavigate} from "react-router-dom";
import "../StyleFile/globalStyles.css"


class FrenchPlan extends React.Component{
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
            isSubmit: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.errorColorControl = this.errorColorControl.bind(this)
    }

    componentDidUpdate(){
        console.log(this.state.formError);
        if(Object.keys(this.state.formError).length === 0 && this.state.isSubmit){
            console.log(this.state);
            console.log("in form");
            alert(`félicitations ${this.state.eventTitle} est en cours de vérification`)
            this.props.navigate('/')
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
        this.setState({isSubmit: true});
    }

    validate(){
        const errors = {};
        const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.eventTitle){
            errors.eventTitle = "Le titre est nécessaire!"
        }
        if(!this.state.startTime){
            errors.startTime = "l'heure de début est nécessaire!"
        }
        if(!this.state.endTime){
            errors.endTime = "l'heure de fin est nécessaire!"
        }
        if(!this.state.startDate){
            errors.startDate = "la date de début est nécessaire!"
        }
        if(!this.state.endDate){
            errors.endDate = "la date de fin est nécessaire!"
        }
        if(!this.state.eventType){
            errors.eventType = "le type d'événement est nécessaire!"
        }
        if(!this.state.address){
            errors.address = "l'adresse est nécessaire!"
        }
        if(!this.state.locationType){
            errors.locationType = "le type d'emplacement est nécessaire!"
        }
        if(!this.state.plotDimension){
            errors.plotDimension = "les dimensions de l'emplacement sont nécessaires!"
        }
        if(!this.state.parkingDescription){
            errors.parkingDescription = "la description du parking est nécessaire!"
        }

        return errors;
    }

    errorColorControl(val){
        return(val ? {borderColor: "red"} : null);
    }

    render(){
        return(
            // <form onSubmit={this.handleSubmit}>
                <>
                <div className="border border-1 bg-light" style={{display: "flex",justifyContent: "center"}}>
                    <div className="text-center container row py-lg-5 py-3">
                        <h2 className="fw-light headerHighlight display-3">Planifier</h2>
                    </div>
                </div>
                <div style={{flexDirection: "row", justifyContent: "flex-end", display: "flex", width: "100%", padding: "20px"}}>
                    <button className="langModif" onClick={this.props.makeEnglish}>
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
                            <input type="text" name="eventTitle" id="eventTitle" value={this.state.eventTitle} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.eventTitle)}/>
                            <p>{this.state.formError.eventTitle}</p>
                        </div>
                                                
                        <div className="col-12 mb-4">
                            <label htmlFor="startDate" className="form-label">Date de début:</label>
                            <input type="date" name="startDate" id="startDate" value={this.state.startDate} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.startDate)}/>
                            <p>{this.state.formError.startDate}</p>
                        </div>
                        
                        <div className="col-12 mb-4">
                            <label htmlFor="endDate" className="form-label">Date de fin:</label>
                            <input type="date" name="endDate" id="endDate" value={this.state.endDate} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.endDate)}/>
                            <p>{this.state.formError.endDate}</p>
                        </div>
                         
                        <div className="col-md-6 mb-4">
                            <label htmlFor="startTime" className="form-label">Heure de début:</label>
                            <input type="time" name="startTime" id="startTime" value={this.state.startTime} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.startTime)}/>
                            <p>{this.state.formError.startTime}</p> 
                        </div>
                        
                        <div className="col-md-6 mb-4">
                            <label htmlFor="endTime" className="form-label">Heure de fin:</label>
                            <input type="time" name="endTime" id="endTime" value={this.state.endTime} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.endTime)}/>
                            <p>{this.state.formError.endTime}</p>
                        </div>
                         
                        <div className="col-md-6 mb-4">
                            <label htmlFor="eventType" className="form-label">Type d'événement:</label>
                            <select name="eventType" id="eventType" value={this.state.eventType} onChange={this.handleInputChange} className="form-select" style={this.errorColorControl(this.state.formError.eventType)}>
                                <option value="TBD">TBD</option>
                                <option value="...">...</option>
                            </select>
                            <p>{this.state.formError.eventType}</p> 
                        </div>
                        
                        <div className="col-md-6 mb-4">
                            <label htmlFor="locationType" className="form-label">Type de lieu:</label>
                            <select name="locationType" id="locationType" value={this.state.locationType} onChange={this.handleInputChange} className="form-select" style={this.errorColorControl(this.state.formError.locationType)}>
                                <option value="TBD">TBD</option>
                                <option value="...">...</option>
                            </select>
                            <p>{this.state.formError.locationType}</p> 
                        </div>
                        <div className="col-9 mb-4">
                            <label htmlFor="address" className="form-label">Emplacement:</label>
                            <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.address)} placeholder="XX street, city, country"/>
                            <p>{this.state.formError.address}</p> 
                        </div>   
                        <div className="col-3 mb-4">
                            <label htmlFor="plotDimension" className="form-label">Dimension de l'emplacement:</label>
                            <input type="text" name="plotDimension" id="plotDimension" value={this.state.plotDimension} onChange={this.handleInputChange} className="form-control" style={this.errorColorControl(this.state.formError.plotDimension)} placeholder="X m Tall, X by Y m Wide"/>
                            <p>{this.state.formError.plotDimension}</p> 
                        </div> 
                        <div className="col-12 mb-4">
                            <label htmlFor="parkingDescription" className="form-label">Décrire le stationnement:</label>
                            <textarea type="text" name="parkingDescription" id="parkingDescription" value={this.state.parkingDescription} onChange={this.handleInputChange} className="form-control" style={{height: "160px", ...this.errorColorControl(this.state.formError.plotDimension)}}></textarea>
                            <p>{this.state.formError.parkingDescription}</p> 
                        </div> 
                        <div className="col-12 mb-4">
                            <div className="form-check">
                                <label htmlFor="requestHelper" className="form-check-label">demande d'aide</label>
                                <input type="checkbox" name="requestHelper" id="requestHelper" value={this.state.requestHelper} onChange={this.handleInputChange} className="form-check-input"/>
                            </div>
                        </div> 
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </form>  
                </div>

                </>
        )
    }

}

export default function FrenchPlanWrapper(props){
    let navigate = useNavigate();
    return(<FrenchPlan {...props} navigate={navigate}/>)
}