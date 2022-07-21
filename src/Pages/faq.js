import React from "react";
import "../StyleFile/contactUs.css"
import "../StyleFile/globalStyles.css"
// import CustomRouteButton from "../Components/CustomRouteButton";

export default function Faq(props){
    return(
        <>
            <div className="border border-1 bg-light" style={{display: "flex",justifyContent: "center"}}>
                <div className="text-center container row py-lg-5 py-3">
                    <h2 className="fw-light headerHighlight display-3">Frequently Asked questions(FAQ)</h2>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row justify-content-center align-items-center my-5" style={{height: "40rem"}}>
                        <div className="accordion" id="faqQuestions">
                            <div className="accordion-item" style={{borderLeft: "0", borderRight: "0", borderTop: "0", borderColor: "#d500f9"}}>
                                <h2 className="accrodaian-header" id="heading-1">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#h1" aria-expanded="true" aria-controls="h1" style={{height: "100%"}}>
                                        <div className="row align-items-center" style={{width:'100%', borderColor: "green"}}>
                                            <div className="col-1 fs-1">
                                                Q.
                                            </div>
                                            <div className="col fs-4">
                                                How to start a party
                                            </div>
                                        </div>
                                        {/* 4. &nbsp;<strong> Event Name</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>xx</strong>attendants */}
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="h1" aria-labelledby="heading-1" data-bs-parent="#faqQuestions">
                                    <div className="accordion-body px-lg-5">
                                        <dl className="row justify-content-center align-items-center">
                                            {/* <div className="col-md-3">
                                                <img src={fourth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                            </div> */}
                                            
                                                <dt className="col-1 text-start mb-md-3 mb-2">
                                                    <h2 className="fw-bold lh-1 headerHighlight">A:</h2>
                                                </dt>
                                                <dd className="col">
                                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                </dd>
                                       
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft: "0", borderRight: "0", borderTop: "0", borderColor: "#d500f9"}}>
                                <h2 className="accrodaian-header" id="heading-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#h2" aria-expanded="true" aria-controls="h2" style={{height: "100%"}}>
                                        <div className="row align-items-center" style={{width:'100%', borderColor: "green"}}>
                                            <div className="col-1 fs-1">
                                                Q.
                                            </div>
                                            <div className="col fs-4">
                                                How long does event validation take
                                            </div>
                                        </div>
                                        {/* 4. &nbsp;<strong> Event Name</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>xx</strong>attendants */}
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="h2" aria-labelledby="heading-2" data-bs-parent="#faqQuestions">
                                    <div className="accordion-body px-lg-5">
                                        <dl className="row justify-content-center align-items-center">
                                            {/* <div className="col-md-3">
                                                <img src={fourth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                            </div> */}
                                            
                                                <dt className="col-1 text-start mb-md-3 mb-2">
                                                    <h2 className="fw-bold lh-1 headerHighlight">A:</h2>
                                                </dt>
                                                <dd className="col">
                                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                </dd>
                                       
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft: "0", borderRight: "0", borderTop: "0", borderColor: "#d500f9"}}>
                                <h2 className="accrodaian-header" id="heading-3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#h3" aria-expanded="true" aria-controls="h3" style={{height: "100%"}}>
                                        <div className="row align-items-center" style={{width:'100%', borderColor: "green"}}>
                                            <div className="col-1 fs-1">
                                                Q.
                                            </div>
                                            <div className="col fs-4">
                                                How to start a party
                                            </div>
                                        </div>
                                        {/* 4. &nbsp;<strong> Event Name</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>xx</strong>attendants */}
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="h3" aria-labelledby="heading-3" data-bs-parent="#faqQuestions">
                                    <div className="accordion-body px-lg-5">
                                        <dl className="row justify-content-center align-items-center">
                                            {/* <div className="col-md-3">
                                                <img src={fourth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                            </div> */}
                                            
                                                <dt className="col-1 text-start mb-md-3 mb-2">
                                                    <h2 className="fw-bold lh-1 headerHighlight">A:</h2>
                                                </dt>
                                                <dd className="col">
                                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                </dd>
                                       
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft: "0", borderRight: "0", borderTop: "0", borderColor: "#d500f9"}}>
                                <h2 className="accrodaian-header" id="heading-4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#h4" aria-expanded="true" aria-controls="h4" style={{height: "100%"}}>
                                        <div className="row align-items-center" style={{width:'100%', borderColor: "green"}}>
                                            <div className="col-1 fs-1">
                                                Q.
                                            </div>
                                            <div className="col fs-4">
                                                How to get location dimentions
                                            </div>
                                        </div>
                                        {/* 4. &nbsp;<strong> Event Name</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>xx</strong>attendants */}
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="h4" aria-labelledby="heading-4" data-bs-parent="#faqQuestions">
                                    <div className="accordion-body px-lg-5">
                                        <dl className="row justify-content-center align-items-center">
                                            {/* <div className="col-md-3">
                                                <img src={fourth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                            </div> */}
                                            
                                                <dt className="col-1 text-start mb-md-3 mb-2">
                                                    <h2 className="fw-bold lh-1 headerHighlight">A:</h2>
                                                </dt>
                                                <dd className="col">
                                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                </dd>
                                       
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft: "0", borderRight: "0", borderTop: "0", borderColor: "#d500f9"}}>
                                <h2 className="accrodaian-header" id="heading-5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#h5" aria-expanded="true" aria-controls="h5" style={{height: "100%"}}>
                                        <div className="row align-items-center" style={{width:'100%', borderColor: "green"}}>
                                            <div className="col-1 fs-1">
                                                Q.
                                            </div>
                                            <div className="col fs-4">
                                                How to promote a party
                                            </div>
                                        </div>
                                        {/* 4. &nbsp;<strong> Event Name</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>xx</strong>attendants */}
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="h5" aria-labelledby="heading-5" data-bs-parent="#faqQuestions">
                                    <div className="accordion-body px-lg-5">
                                        <dl className="row justify-content-center align-items-center">
                                            {/* <div className="col-md-3">
                                                <img src={fourth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                            </div> */}
                                            
                                                <dt className="col-1 text-start mb-md-3 mb-2">
                                                    <h2 className="fw-bold lh-1 headerHighlight">A:</h2>
                                                </dt>
                                                <dd className="col">
                                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                </dd>
                                       
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft: "0", borderRight: "0", borderTop: "0", borderColor: "#d500f9"}}>
                                <h2 className="accrodaian-header" id="heading-6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#h6" aria-expanded="true" aria-controls="h6" style={{height: "100%"}}>
                                        <div className="row align-items-center" style={{width:'100%', borderColor: "green"}}>
                                            <div className="col-1 fs-1">
                                                Q.
                                            </div>
                                            <div className="col fs-4">
                                                How remove attendace from a party
                                            </div>
                                        </div>
                                        {/* 4. &nbsp;<strong> Event Name</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>xx</strong>attendants */}
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="h6" aria-labelledby="heading-6" data-bs-parent="#faqQuestions">
                                    <div className="accordion-body px-lg-5">
                                        <dl className="row justify-content-center align-items-center">
                                            {/* <div className="col-md-3">
                                                <img src={fourth} className="img-fluid" alt="fourth" style={{maxHeight: "300px", maxWidth: "100%"}}/>
                                            </div> */}
                                            
                                                <dt className="col-1 text-start mb-md-3 mb-2">
                                                    <h2 className="fw-bold lh-1 headerHighlight">A:</h2>
                                                </dt>
                                                <dd className="col">
                                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                                                </dd>
                                       
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            

        </>
    );
}