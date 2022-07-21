import React from "react";
import PlanWrapper from "./plan";
import FrenchPlanWrapper from "./frenchPlan";

export default class PlanController extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFrench: false,
            isEnglish: true
        };
        this.makeEnglish = this.makeEnglish.bind(this)
        this.makeFrench = this.makeFrench.bind(this)
    }

    makeFrench(){
        this.setState({isFrench: true, isEnglish: false});
    }

    makeEnglish(){
        this.setState({isFrench: false, isEnglish: true});
    }

    render(){
        let display;
        if(this.state.isFrench && !this.state.isEnglish){
            display = <FrenchPlanWrapper {...this.props} makeFrench={this.makeFrench}/>
        }
        else if(this.state.isEnglish && !this.state.isFrench){
            display = <PlanWrapper {...this.props} makeEnglish={this.makeEnglish}/>
        }
        return(
        <>
            {display}
        </>
    )
    }

}