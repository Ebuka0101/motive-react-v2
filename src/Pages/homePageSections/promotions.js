import React from "react";
import "../../StyleFile/globalStyles.css"
import "../../StyleFile/home.css"
import CustomRouteButton from "../../Components/CustomRouteButton";

export default function Promotions(props){
    return(
        <>
        <div className="bg-light py-3">
            <div className="container bg-light">
                <div className="text-center headerHighlight display-3 pt-2 pt-lg-3">
                    <h2>Promotions</h2>
                </div>

                <div className="row my-5 g-0 align-items-center justify-content-center ">
                    <div className="col-11 col-lg-4 col-xl-3 mx-3">
                        <div className="card border-1">
                            <div className="card-body py-4 text-center">
                                <h4 className="card-title">Promoter Package</h4>
                                <div className="customListWrapper text-start mx-5 my-4">
                                    <ul className="card-text lead text-muted d-none d-lg-block">
                                        {/* replace bullets with check marks */}
                                        <li>Quick Access</li>
                                        <li>Priority</li>
                                        <li>Specialist</li>
                                        <li>Rentals</li>
                                        <li>exposure</li>
                                    </ul> 
                                </div>
                                <p className="display-5 my-4 headerHighlight fw-bold">$12.99</p>
                                <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle" animate={true} databstoggle="modal" databstarget="#promoterPackage">Learn More</CustomRouteButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 bg-danger">
                        <div className="card border-2 borderHighlight">
                            <div className="card-body py-5 text-center">
                                <h4 className="card-title fs-3">Host Package</h4>
                                <div className="my-4 d-none d-lg-block">
                                    <div className="customListWrapper text-start">
                                        <ul className="card-text lead text-muted">
                                            {/* replace bullets with check marks */}
                                            <li>Quick Access</li>
                                            <li>Priority</li>
                                            <li>Specialist</li>
                                            <li>Rentals</li>
                                            <li>exposure</li>
                                        </ul> 
                                    </div>
                                </div>
                                <p className="display-5 my-4 headerHighlight fw-bold">$12.99</p>
                                <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle" animate={true} databstoggle="modal" databstarget="#hostPackage">Learn More</CustomRouteButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-lg-4 col-xl-3 mx-3">
                        <div className="card border-1">
                            <div className="card-body py-4 text-center">
                                <h4 className="card-title fs-3">DJ Package</h4>
                                <div className="customListWrapper text-start mx-5 my-4">
                                    <ul className="card-text lead text-muted d-none d-lg-block">
                                        {/* replace bullets with check marks */}
                                        <li>Quick Access</li>
                                        <li>Priority</li>
                                        <li>Specialist</li>
                                        <li>Rentals</li>
                                        <li>exposure</li>
                                    </ul> 
                                </div>
                                <p className="display-5 my-4 headerHighlight fw-bold">$12.99</p>
                                <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle" animate={true} databstoggle="modal" databstarget="#djPackage">Learn More</CustomRouteButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <div className="modal fade" id="hostPackage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="hostPackageLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="hostPackageLabel">Host Package</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    This is promotion is mostly beneficial for new host looking to level up their exposure. To access this promotion click on the contact button and the call the number provided. An agent will be availbe to assist you with making the best use of our promotions package.
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>props.navigate('/motive-react-v2/contactus')}>Contact Us</button>
                </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="djPackage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="djPackageLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="djPackageLabel">DJ Package</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    This is promotion is mostly beneficial for new dj's looking to level up their exposure. To access this promotion click on the contact button and the call the number provided. An agent will be availbe to assist you with making the best use of our promotions package.
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>props.navigate('/motive-react-v2/contactus')}>Contact Us</button>
                </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="promoterPackage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="promoterPackageLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="promoterPackageLabel">Promoter Package</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    This is promotion is mostly beneficial for promoters looking to level up their exposure. To access this promotion click on the contact button and the call the number provided. An agent will be availbe to assist you with making the best use of our promotions package.
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>props.navigate('/motive-react-v2/contactus')}>Contact Us</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

