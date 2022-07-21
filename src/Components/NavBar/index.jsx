import React from "react";
import { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import "./navBar.css";

function SideBar(props){
    const opVal = () =>{

        return{ opacity: props.isActive ? '100%' : '0',top: props.isActive ? '0' : '-100',display: props.isActive ? 'grid' : 'none' }
    }
    return(
        <aside className="customSidebar" style={opVal()}>
            <div className="customIcon">
                <button className="customCloseIcon" onClick={props.toggle} style={{border: "none", backgroundColor: "transparent", color: "white"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" style={{border: "none"}}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
            </div>
            <div className="customSideBarWrapper">
                <ul className="customSideBarMenu">
                    <Link to='/plan' className="customSidebarLink" onClick={props.toggle}>Plan </Link>
                    <Link to='/help' className="customSidebarLink" onClick={props.toggle}>FAQ </Link>
                    <Link to="/eventType" className="customSidebarLink" onClick={props.toggle}>Events</Link>
                    {/* <Link to="/event" className="customSidebarLink" onClick={props.toggle}>Event</Link> */}
                    
                </ul>
            </div>
            <div className="customSideBtnWrapper">
                <Link to="/contactus" className="customSidebarRoute">Contact Us</Link>
            </div>
        </aside>
    )
}


export default function NavBar(props){
    const [isActive, setActive] =  useState(false)

    const toggle = () => {
        setActive(!isActive);
    }
    return(
        <>
        <SideBar isActive={isActive} toggle={toggle}/>
        <nav className="customNavbar fixed-top">
            <Link className="customNavLink" to='/'>
                <h1 style={{fontFamily: "Special Elite", marginTop: "15px"}}>Motivv</h1>
            </Link>
            <div className="customBars">
                <button onClick={toggle} style={{border: "none", backgroundColor: "transparent", color: "white"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" style={{border: "none"}}>
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
            </div>
            
            <div className="customNavBtnManu">
                <div className="customNavMenu">
                    <NavLink to='/plan' activeClassName="active" className="customNavLink">Plan </NavLink>
                    <NavLink to='/help' activeClassName="active" className="customNavLink">Faq </NavLink>
                    <NavLink to="/eventType" activeClassName="active" className="customNavLink">Events</NavLink>
                    {/* <NavLink to="/event" activeClassName="active" className="customNavLink">Event</NavLink> */}
                </div>
                <nav className="customNavBtn">
                    <Link to="/contactus" className="customNavBtnLink">Contact Us</Link>
                </nav>
            </div>

            
        </nav>
        </>
    )
}